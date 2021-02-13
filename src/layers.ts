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
    B extends new (...args: any[]) => Path,
    O extends PathOptions
> = InstanceType<B> & {
    options: O;
    realOptions: O;
    layers: Record<string, InstanceType<B>>;
    generateStyles(options: O): Record<string, O>;
    setStyle(style: Partial<HighlightableLayerOptions<O>>): HighlightableLayer<B, O>;
};

export function createHighlightableLayerClass<
    B extends new (...args: any[]) => Path,
    O extends PathOptions
>(
    BaseClass: B,
    cloneMethods: Array<keyof InstanceType<B>> = [],
    defaultOptions?: HighlightableLayerOptions<O>
): new (...args: ConstructorParameters<B>) => HighlightableLayer<B, O> {
    const result = class HighlightableLayer extends BaseClass {
        options!: HighlightableLayerOptions<O>;
        realOptions: HighlightableLayerOptions<O>;
        layers: Record<string, InstanceType<B>>;

        constructor(...args: any[]) {
            super(...args);

            this.realOptions = clone(this.options) as HighlightableLayerOptions<O>;

            if (defaultOptions) {
                Object.assign(this.realOptions, defaultOptions);
            }

            if (!this.realOptions.generateStyles) {
                this.realOptions.generateStyles = generatePolygonStyles as any;
            }

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

export const HighlightableCircle = createHighlightableLayerClass<typeof Circle, CircleMarkerOptions>(Circle, ['setRadius', 'setLatLng']);

export const HighlightableCircleMarker = createHighlightableLayerClass<typeof CircleMarker, CircleMarkerOptions>(CircleMarker, ['setRadius', 'setLatLng']);

export const HighlightablePolygon = createHighlightableLayerClass<typeof Polygon, PolylineOptions>(Polygon, ['setLatLngs']);

export const HighlightablePolyline = createHighlightableLayerClass<typeof Polyline, PolylineOptions>(Polyline, ['setLatLngs'], {
    generateStyles: generatePolylineStyles
});

export const HighlightableRectangle = createHighlightableLayerClass<typeof Rectangle, PolylineOptions>(Rectangle, ['setBounds']);