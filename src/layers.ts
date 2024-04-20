import { Circle, CircleMarker, CircleMarkerOptions, Map, Path, PathOptions, Polygon, Polyline, PolylineOptions, Rectangle, Renderer } from "leaflet";
import { setLayerPane, setLayerRenderer } from "./panes";
import { generatePolygonStyles, generatePolylineStyles } from "./styles";
import { clone } from "./utils";

export type HighlightableLayerOptions<O extends PathOptions> = O & {
	raised?: boolean;
	outlineColor?: string;
	outlineWeight?: number;
	generateStyles?: (options: HighlightableLayerOptions<O>, renderer: Renderer) => Record<string, O>;
};

export type HighlightableLayer<
	T extends Path,
	O extends PathOptions
> = T & {
	realOptions: HighlightableLayerOptions<O>;
	layers: Record<string, T>;
	generateStyles(options: HighlightableLayerOptions<O>, renderer: Renderer): Record<string, O>;
	setStyle(style: Partial<HighlightableLayerOptions<O>>): HighlightableLayer<T, O>;
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

		beforeAdd(map: Map) {
			// Use a custom renderer for each layer so that it creates an additional element that we can set an opacity on
			const renderer = map._createRenderer();

			this._updateStyle(renderer);

			this._renderer = renderer;
			renderer.once("add", () => {
				renderer._container.style.opacity = `${this.realOptions.opacity ?? 1}`;
			});
			map.addLayer(renderer);

			return this;
		}

		onAdd(map: Map) {
			super.onAdd(map);

			for (const layerName of Object.keys(this.layers)) {
				map.addLayer(this.layers[layerName]);
			}

			return this as any;
		}

		onRemove(map: Map) {
			for (const layerName of Object.keys(this.layers)) {
				map.removeLayer(this.layers[layerName]);
			}

			super.onRemove(map);

			map.removeLayer(this._renderer!);
			delete this._renderer;

			return this as any;
		}

		_updateStyle(renderer: Renderer) {
			renderer.options.pane = this.realOptions.raised ? "lhl-raised" : this.realOptions.pane;
			if (renderer._container)
				renderer.getPane()!.appendChild(renderer._container); // Move renderer to right pane

			const styles = this.realOptions.generateStyles?.(Object.assign(clone(this.realOptions), { opacity: 1 }), renderer) ?? { main: clone(this.realOptions) }

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

			if (styles.main.pane)
				setLayerPane(this, styles.main.pane);
			if (styles.main.renderer)
				setLayerRenderer(this, styles.main.renderer);

			super.setStyle(styles.main);

			for (const layerName of Object.keys(this.layers)) {
				if (styles[layerName].pane)
					setLayerPane(this.layers[layerName], styles[layerName].pane!);
				if (styles[layerName].renderer)
					setLayerRenderer(this.layers[layerName], styles[layerName].renderer!);

				this.layers[layerName].setStyle(styles[layerName]);
			}

			if (renderer._container)
				renderer._container.style.opacity = `${this.realOptions.opacity ?? 1}`;

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
			if (this._renderer) {
				this._updateStyle(this._renderer);
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