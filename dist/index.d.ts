import L from 'leaflet';
import * as layers from './layers';
export * from './panes';
export * from './utils';
export * from './layers';
declare const HighlightableLayers: {
    Circle: new (arg1: L.LatLngExpression, options?: layers.HighlightableLayerOptions<L.CircleMarkerOptions> | undefined) => layers.HighlightableLayer<L.Circle<any>, L.CircleMarkerOptions>;
    CircleMarker: new (arg1: L.LatLngExpression, options?: layers.HighlightableLayerOptions<L.CircleMarkerOptions> | undefined) => layers.HighlightableLayer<L.CircleMarker<any>, L.CircleMarkerOptions>;
    Polygon: new (arg1: L.LatLngExpression[] | L.LatLngExpression[][] | L.LatLngExpression[][][], options?: layers.HighlightableLayerOptions<L.PolylineOptions> | undefined) => layers.HighlightableLayer<L.Polygon<any>, L.PolylineOptions>;
    Polyline: new (arg1: L.LatLngExpression[] | L.LatLngExpression[][], options?: layers.HighlightableLayerOptions<L.PolylineOptions> | undefined) => layers.HighlightableLayer<L.Polyline<import("geojson").LineString | import("geojson").MultiLineString, any>, L.PolylineOptions>;
    Rectangle: new (arg1: L.LatLngBoundsExpression, options?: layers.HighlightableLayerOptions<L.PolylineOptions> | undefined) => layers.HighlightableLayer<L.Rectangle<any>, L.PolylineOptions>;
    createHighlightableLayerClass<B extends new (...args: any[]) => L.Path, T extends InstanceType<B>, O extends L.PathOptions>(BaseClass: B, cloneMethods?: (keyof T)[], defaultOptions?: layers.HighlightableLayerOptions<O> | undefined): new (arg1: ConstructorParameters<B>[0], options?: layers.HighlightableLayerOptions<O> | undefined) => layers.HighlightableLayer<T, O>;
    getBrightness(colour: string): number;
    clone<T_1>(obj: T_1): T_1;
    setLayerPane(layer: L.Layer, pane: string): void;
};
export default HighlightableLayers;
declare type HighlightableLayersType = typeof HighlightableLayers;
declare module "leaflet" {
    let HighlightableLayers: HighlightableLayersType;
}
