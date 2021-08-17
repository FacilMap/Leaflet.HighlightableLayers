import { Circle, CircleMarker, CircleMarkerOptions, Map, Path, PathOptions, Polygon, Polyline, PolylineOptions, Rectangle } from "leaflet";
import { setLayerPane } from "./panes";
import { generatePolygonStyles, generatePolylineStyles } from "./styles";
import { clone } from "./utils";

export type HighlightableLayerOptions<O extends PathOptions> = O & {
    raised?: boolean;
    outlineColor?: string;
    outlineWeight?: number;
    outlineFill?: boolean;
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
};

export function createHighlightableLayerClass<
    B extends new (...args: any[]) => Path,
    T extends InstanceType<B>,
    O extends PathOptions
>(
    BaseClass: B,
    cloneMethods: Array<keyof T> = [],
    defaultOptions?: HighlightableLayerOptions<O>
): new (arg1: ConstructorParameters<B>[0], options?: HighlightableLayerOptions<O>) => HighlightableLayer<T, O> {
    const result = class HighlightableLayer extends BaseClass {
        options!: O;
        realOptions: HighlightableLayerOptions<O>;
        layers: Record<string, InstanceType<B>>;

        constructor(...args: any[]) {
            super(...args);

            this.realOptions = Object.assign(Object.create(Object.getPrototypeOf(this.options)), {
                generateStyles: generatePolygonStyles,
                ...defaultOptions,
                ...this.options
            });

            this.layers = {} as any;
            for (const layerName of Object.keys(this.realOptions.generateStyles!(this.realOptions) ?? {})) {
                if (layerName !== "main") {
                    this.layers[layerName] = new BaseClass(...args) as InstanceType<B>;
                }
            }

            this.setStyle({});
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
    
            return this as any;
        }
    
        setStyle(style: Partial<HighlightableLayerOptions<O>>) {
            Object.assign(this.realOptions, style);
    
            const styles = this.realOptions.generateStyles?.(this.realOptions) ?? { main: { ...this.realOptions } };
    
            if (styles.main.pane)
                setLayerPane(this, styles.main.pane);
    
            super.setStyle(styles.main);
    
            for (const layerName of Object.keys(this.layers)) {
                if (styles[layerName].pane)
                    setLayerPane(this.layers[layerName], styles[layerName].pane!);
    
                this.layers[layerName].setStyle(styles[layerName]);
            }
    
            return this as any;
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

export const HighlightableCircle = createHighlightableLayerClass<typeof Circle, Circle, CircleMarkerOptions>(Circle, ['setRadius', 'setLatLng']);

export const HighlightableCircleMarker = createHighlightableLayerClass<typeof CircleMarker, CircleMarker, CircleMarkerOptions>(CircleMarker, ['setRadius', 'setLatLng']);

export const HighlightablePolygon = createHighlightableLayerClass<typeof Polygon, Polygon, PolylineOptions>(Polygon, ['setLatLngs']);

export const HighlightablePolyline = createHighlightableLayerClass<typeof Polyline, Polyline, PolylineOptions>(Polyline, ['setLatLngs'], {
    generateStyles: generatePolylineStyles
});

export const HighlightableRectangle = createHighlightableLayerClass<typeof Rectangle, Rectangle, PolylineOptions>(Rectangle, ['setBounds']);