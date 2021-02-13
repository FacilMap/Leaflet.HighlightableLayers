import L from 'leaflet';
import * as layers from './layers';
export * from './panes';
export * from './utils';
export * from './layers';
declare const HighlightableLayers: {
    Circle: new (latlng: L.LatLngExpression, radius: number, options?: L.CircleMarkerOptions | undefined) => layers.HighlightableLayer<typeof L.Circle, L.CircleMarkerOptions>;
    CircleMarker: new (latlng: L.LatLngExpression, options?: L.CircleMarkerOptions | undefined) => layers.HighlightableLayer<typeof L.CircleMarker, L.CircleMarkerOptions>;
    Polygon: new (latlngs: L.LatLngExpression[] | L.LatLngExpression[][] | L.LatLngExpression[][][], options?: L.PolylineOptions | undefined) => layers.HighlightableLayer<typeof L.Polygon, L.PolylineOptions>;
    Polyline: new (latlngs: L.LatLngExpression[] | L.LatLngExpression[][], options?: L.PolylineOptions | undefined) => layers.HighlightableLayer<typeof L.Polyline, L.PolylineOptions>;
    Rectangle: new (latLngBounds: L.LatLngBoundsExpression, options?: L.PolylineOptions | undefined) => layers.HighlightableLayer<typeof L.Rectangle, L.PolylineOptions>;
    createHighlightableLayerClass<B extends new (...args: any[]) => L.Path, O extends L.PathOptions>(BaseClass: B, cloneMethods?: (keyof InstanceType<B>)[], defaultOptions?: layers.HighlightableLayerOptions<O> | undefined): new (...args: ConstructorParameters<B>) => layers.HighlightableLayer<B, O>;
    getBrightness(colour: string): number;
    clone<T>(obj: T): T;
    setLayerPane(layer: L.Layer, pane: string): void;
};
export default HighlightableLayers;
declare type HighlightableLayersType = typeof HighlightableLayers;
declare module "leaflet" {
    let HighlightableLayers: HighlightableLayersType;
}
