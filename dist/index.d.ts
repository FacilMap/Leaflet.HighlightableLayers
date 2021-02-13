import L from 'leaflet';
import * as layers from './layers';
export * from './panes';
export * from './utils';
export * from './layers';
declare const HighlightableLayers: {
    Circle: new (latlng: L.LatLngExpression, radius: number, options?: L.CircleMarkerOptions | undefined) => layers.HighlightableLayer<L.Circle<any>, L.CircleMarkerOptions>;
    CircleMarker: new (latlng: L.LatLngExpression, options?: L.CircleMarkerOptions | undefined) => layers.HighlightableLayer<L.CircleMarker<any>, L.CircleMarkerOptions>;
    Polygon: new (latlngs: L.LatLngExpression[] | L.LatLngExpression[][] | L.LatLngExpression[][][], options?: L.PolylineOptions | undefined) => layers.HighlightableLayer<L.Polygon<any>, L.PolylineOptions>;
    Polyline: new (latlngs: L.LatLngExpression[] | L.LatLngExpression[][], options?: L.PolylineOptions | undefined) => layers.HighlightableLayer<L.Polyline<import("geojson").LineString | import("geojson").MultiLineString, any>, L.PolylineOptions>;
    Rectangle: new (latLngBounds: L.LatLngBoundsExpression, options?: L.PolylineOptions | undefined) => layers.HighlightableLayer<L.Rectangle<any>, L.PolylineOptions>;
    createHighlightableLayerClass<B extends new (...args: any[]) => L.Path, T extends InstanceType<B>, O extends L.PathOptions>(BaseClass: B, cloneMethods?: (keyof T)[], defaultOptions?: layers.HighlightableLayerOptions<O> | undefined): new (...args: ConstructorParameters<B>) => layers.HighlightableLayer<T, O>;
    getBrightness(colour: string): number;
    clone<T_1>(obj: T_1): T_1;
    setLayerPane(layer: L.Layer, pane: string): void;
};
export default HighlightableLayers;
declare type HighlightableLayersType = typeof HighlightableLayers;
declare module "leaflet" {
    let HighlightableLayers: HighlightableLayersType;
}
