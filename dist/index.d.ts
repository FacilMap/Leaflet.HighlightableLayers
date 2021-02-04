import L from 'leaflet';
import * as layers from './layers';
export * from './panes';
export * from './utils';
export * from './layers';
declare const HighlightableLayers: {
    Circle: new (latlng: L.LatLngExpression, radius: number, options?: L.CircleMarkerOptions | undefined) => L.Circle<any> & {
        realOptions: L.CircleMarkerOptions;
        layers: Record<string, L.Circle<any>>;
        generateStyles(options: L.CircleMarkerOptions): Record<string, L.CircleMarkerOptions>;
    };
    CircleMarker: new (latlng: L.LatLngExpression, options?: L.CircleMarkerOptions | undefined) => L.CircleMarker<any> & {
        realOptions: L.CircleMarkerOptions;
        layers: Record<string, L.CircleMarker<any>>;
        generateStyles(options: L.CircleMarkerOptions): Record<string, L.CircleMarkerOptions>;
    };
    Polygon: new (latlngs: L.LatLngExpression[] | L.LatLngExpression[][] | L.LatLngExpression[][][], options?: L.PolylineOptions | undefined) => L.Polygon<any> & {
        realOptions: L.PolylineOptions;
        layers: Record<string, L.Polygon<any>>;
        generateStyles(options: L.PolylineOptions): Record<string, L.PolylineOptions>;
    };
    Polyline: new (latlngs: L.LatLngExpression[] | L.LatLngExpression[][], options?: L.PolylineOptions | undefined) => L.Polyline<import("geojson").LineString | import("geojson").MultiLineString, any> & {
        realOptions: L.PolylineOptions;
        layers: Record<string, L.Polyline<import("geojson").LineString | import("geojson").MultiLineString, any>>;
        generateStyles(options: L.PolylineOptions): Record<string, L.PolylineOptions>;
    };
    Rectangle: new (latLngBounds: L.LatLngBoundsExpression, options?: L.PolylineOptions | undefined) => L.Rectangle<any> & {
        realOptions: L.PolylineOptions;
        layers: Record<string, L.Rectangle<any>>;
        generateStyles(options: L.PolylineOptions): Record<string, L.PolylineOptions>;
    };
    createHighlightableLayerClass<B extends new (...args: any[]) => L.Path, T extends InstanceType<B> & {
        options: O;
    }, O extends L.PathOptions>(BaseClass: B, cloneMethods?: (keyof T)[], defaultOptions?: layers.HighlightableLayerOptions<O> | undefined): new (...args: ConstructorParameters<B>) => T & {
        realOptions: O;
        layers: Record<string, T>;
        generateStyles(options: O): Record<string, O>;
    };
    getBrightness(colour: string): number;
    clone<T_1>(obj: T_1): T_1;
    setLayerPane(layer: L.Layer, pane: string): void;
};
export default HighlightableLayers;
declare type HighlightableLayersType = typeof HighlightableLayers;
declare module "leaflet" {
    let HighlightableLayers: HighlightableLayersType;
}
