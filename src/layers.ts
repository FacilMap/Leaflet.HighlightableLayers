import { Circle, CircleMarker, CircleMarkerOptions, Map as LeafletMap, Path, PathOptions, Polygon, Polyline, PolylineOptions, Rectangle, Renderer, SVG } from "leaflet";
import { setLayerRenderer } from "./panes";
import { generatePolygonStyles, generatePolylineStyles } from "./styles";
import { clone } from "./utils";

declare module "leaflet" {
	interface Map {
		_lhlRenderers?: Record<string, Renderer>;
	}

	interface PathOptions {
		/** The z-index of the layer (only works with SVGRendererWithZIndex) */
		lhlZIndex?: number;
	}
}

export type HighlightableLayerOptions<O extends PathOptions> = O & {
	raised?: boolean;
	outlineColor?: string;
	outlineWeight?: number;
	generateStyles?: (options: HighlightableLayerOptions<O>) => Record<string, O>;
};

export type HighlightableLayer<
	T extends Path,
	O extends PathOptions
> = T & {
	realOptions: HighlightableLayerOptions<O>;
	layers: Record<string, T>;
	generateStyles(options: HighlightableLayerOptions<O>): Record<string, O>;
	setStyle(style: Partial<HighlightableLayerOptions<O>>): HighlightableLayer<T, O>;
	_getLhlRenderer(map: LeafletMap, pane: string, opacity: number | undefined): Renderer
};

export function createHighlightableLayerClass<
	B extends new (...args: any[]) => Path,
	T extends InstanceType<B>,
	O extends PathOptions
>(
	BaseClass: B,
	createLayer: (mainLayer: HighlightableLayer<T, O>) => InstanceType<B>,
	cloneMethods: Array<keyof T> = [],
	defaultOptions?: HighlightableLayerOptions<O>
): new (arg1: ConstructorParameters<B>[0], options?: HighlightableLayerOptions<O>) => HighlightableLayer<T, O> {
	const result = class HighlightableLayer extends BaseClass {
		declare options: O;
		realOptions: HighlightableLayerOptions<O>;
		layers: Record<string, InstanceType<B>> = {};
		_isAdding = false;

		constructor(...args: any[]) {
			super(...args);

			this.realOptions = Object.assign(Object.create(Object.getPrototypeOf(this.options)), {
				generateStyles: generatePolygonStyles,
				...defaultOptions,
				...this.options
			});
		}

		_getLhlRenderer(map: LeafletMap, pane: string, opacity: number = 1): Renderer {
			// Use a custom renderer for each opacity+pane combination so that it creates an additional element that we can set an opacity on

			if (!map._lhlRenderers) {
				map._lhlRenderers = {};
			}
			const key = `${opacity}\n${pane}`;
			if (!map._lhlRenderers[key]) {
				const renderer = map._lhlRenderers[key] = new SVGRendererWithZIndex({ pane });
				renderer.once("add", () => {
					renderer._container.style.opacity = `${opacity}`;
				});
				map.addLayer(renderer);
			}
			return map._lhlRenderers[key];
		}

		beforeAdd(map: LeafletMap) {
			this._updateStyle(map);
			return this;
		}

		onAdd(map: LeafletMap) {
			super.onAdd(map);

			for (const layerName of Object.keys(this.layers)) {
				map.addLayer(this.layers[layerName]);
			}

			return this as any;
		}

		onRemove(map: LeafletMap) {
			for (const layerName of Object.keys(this.layers)) {
				map.removeLayer(this.layers[layerName]);
			}

			super.onRemove(map);

			delete this._renderer;

			return this as any;
		}

		_updateStyle(map: LeafletMap) {
			const styles = this.realOptions.generateStyles?.(Object.assign(clone(this.realOptions), { opacity: 1 })) ?? { main: clone(this.realOptions) }

			for (const layerName of Object.keys(this.layers)) {
				if (!Object.prototype.hasOwnProperty.call(styles, layerName)) {
					if (this._map) {
						this._map.removeLayer(this.layers[layerName]);
					}
					delete this.layers[layerName];
				}
			}

			for (const layerName of Object.keys(styles)) {
				if (layerName !== "main") {
					if (!this.layers[layerName]) {
						this.layers[layerName] = createLayer(this as any);
						this.layers[layerName].options.interactive = false;

						// Workaround to avoid error when calling setStyle() on Polyline without points
						if (BaseClass === Polyline as any || BaseClass.prototype instanceof Polyline) {
							this.layers[layerName]._updateBounds = function(this: Polyline) {
								if (this._rawPxBounds)
									BaseClass.prototype._updateBounds.call(this);
							};
						}
					}
				}
			}

			const fallbackPane = this.realOptions.raised ? "lhl-raised" : (this.realOptions.pane ?? "overlayPane");

			const renderer = styles.main.renderer ?? this._getLhlRenderer(map, styles.main.pane ?? fallbackPane, this.realOptions.opacity);
			setLayerRenderer(this, renderer);
			super.setStyle(styles.main);
			this._renderer = renderer;

			for (const layerName of Object.keys(this.layers)) {
				const renderer = styles[layerName].renderer ?? this._getLhlRenderer(map, styles[layerName].pane ?? fallbackPane, this.realOptions.opacity);
				setLayerRenderer(this.layers[layerName], renderer);
				this.layers[layerName].setStyle(styles[layerName]);
				this.layers[layerName]._renderer = renderer;
			}

			if (this._map) {
				for (const layer of Object.values(this.layers)) {
					if (!layer["_map"]) {
						this._map.addLayer(layer);
					}
				}
			}
		}

		setStyle(style: Partial<HighlightableLayerOptions<O>>) {
			Object.assign(this.realOptions, style);
			if (this._map) {
				this._updateStyle(this._map);
			}
			return this as any;
		}

		_updateBounds(): void {
			// Workaround to avoid error when calling setStyle() on Polyline without points
			if (!(this instanceof Polyline) || this._rawPxBounds)
				super._updateBounds();
		}
	} as any;

	for (const method of ['redraw', ...cloneMethods]) {
		result.prototype[method] = function(...args: any[]): any {
			const r = Object.getPrototypeOf(result.prototype)[method].apply(this, args);
			for (const layerName of Object.keys(this.layers)) {
				this.layers[layerName][method].apply(this.layers[layerName], args);
			}
			return r;
		}
	}

	return result;
}

export const HighlightableCircle = createHighlightableLayerClass<typeof Circle, Circle, CircleMarkerOptions>(
	Circle,
	(mainLayer) => new Circle(mainLayer.getLatLng(), mainLayer.getRadius()),
	['setRadius', 'setLatLng']
);

export const HighlightableCircleMarker = createHighlightableLayerClass<typeof CircleMarker, CircleMarker, CircleMarkerOptions>(
	CircleMarker,
	(mainLayer) => new CircleMarker(mainLayer.getLatLng(), { radius: mainLayer.getRadius() }),
	['setRadius', 'setLatLng']
);

export const HighlightablePolygon = createHighlightableLayerClass<typeof Polygon, Polygon, PolylineOptions>(
	Polygon,
	(mainLayer) => new Polygon(mainLayer.getLatLngs()),
	['setLatLngs']
);

export const HighlightablePolyline = createHighlightableLayerClass<typeof Polyline, Polyline, PolylineOptions>(
	Polyline,
	(mainLayer) => new Polyline(mainLayer.getLatLngs() as any),
	['setLatLngs'],
	{
		generateStyles: generatePolylineStyles
	}
);

export const HighlightableRectangle = createHighlightableLayerClass<typeof Rectangle, Rectangle, PolylineOptions>(
	Rectangle,
	(mainLayer) => new Rectangle(mainLayer.getBounds()),
	['setBounds']
);

/**
 * An extension of the Leaflet SVG renderer that allows specifying a z-index for each layer through the lhlZIndex option.
 */
export class SVGRendererWithZIndex extends SVG {
	_getZIndexes(): Array<[SVGElement, number | undefined]> {
		const result: Array<[SVGElement, number | undefined]> = [];
		for (const el of this._rootGroup!.childNodes) {
			if (el.nodeType !== Node.ELEMENT_NODE) {
				continue;
			}

			const zIndex = (el as SVGElement).getAttribute("data-lhl-z-index");
			result.push([el as SVGElement, zIndex ? Number(zIndex) : undefined]);
		}
		return result;
	}

	_addPath(layer: Path) {
		// A modified version of SVG._addPath() that does not simply call appendChild(), but inserts the child at a certain position
		if (!this._rootGroup) {
			this._initContainer();
		}

		layer._path.setAttribute("data-lhl-z-index", `${layer.options.lhlZIndex ?? ""}`);

		const zIndexes = this._getZIndexes();
		const nextSibling = zIndexes.find(([el, zIndex]) => (zIndex ?? 0) > (layer.options.lhlZIndex ?? 0));
		if (nextSibling) {
			this._rootGroup!.insertBefore(layer._path, nextSibling[0]);
		} else {
			this._rootGroup!.appendChild(layer._path);
		}
		layer.addInteractiveTarget(layer._path);
	}

	_updateStyle(layer: Path) {
		super._updateStyle(layer);

		if (layer._path) {
			layer._path.setAttribute("data-lhl-z-index", `${layer.options.lhlZIndex ?? ""}`);

			if (this._rootGroup) {
				const zIndexes = this._getZIndexes();
				const prevSibling = [...zIndexes].reverse().find(([el, zIndex]) => (zIndex ?? 0) > (layer.options.lhlZIndex ?? 0));
				const nextSibling = zIndexes.find(([el, zIndex]) => (zIndex ?? 0) > (layer.options.lhlZIndex ?? 0));
				if (prevSibling && layer._path.compareDocumentPosition(prevSibling[0]) & 0x2) {
					this._rootGroup.insertBefore(layer._path, prevSibling[0].nextSibling);
				} else if (nextSibling && layer._path.compareDocumentPosition(nextSibling[0]) & 0x4) {
					this._rootGroup.insertBefore(layer._path, nextSibling[0]);
				}
			}
		}
	}
}