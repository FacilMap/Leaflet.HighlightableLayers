import { Circle, CircleMarker, CircleMarkerOptions, Path, PathOptions, Polygon, Polyline, PolylineOptions, Rectangle } from "leaflet";
export declare type HighlightableLayerOptions<O extends PathOptions> = O & {
    raised?: boolean;
    outlineColor?: string;
    outlineWeight?: number;
    outlineFill?: boolean;
    generateStyles?: (options: HighlightableLayerOptions<O>) => Record<string, O>;
};
export declare type HighlightableLayer<B extends new (...args: any[]) => Path, O extends PathOptions> = InstanceType<B> & {
    options: O;
    realOptions: O;
    layers: Record<string, InstanceType<B>>;
    generateStyles(options: O): Record<string, O>;
    setStyle(style: Partial<HighlightableLayerOptions<O>>): HighlightableLayer<B, O>;
};
export declare function createHighlightableLayerClass<B extends new (...args: any[]) => Path, O extends PathOptions>(BaseClass: B, cloneMethods?: Array<keyof InstanceType<B>>, defaultOptions?: HighlightableLayerOptions<O>): new (...args: ConstructorParameters<B>) => HighlightableLayer<B, O>;
export declare const HighlightableCircle: new (latlng: import("leaflet").LatLngExpression, radius: number, options?: CircleMarkerOptions | undefined) => HighlightableLayer<typeof Circle, CircleMarkerOptions>;
export declare const HighlightableCircleMarker: new (latlng: import("leaflet").LatLngExpression, options?: CircleMarkerOptions | undefined) => HighlightableLayer<typeof CircleMarker, CircleMarkerOptions>;
export declare const HighlightablePolygon: new (latlngs: import("leaflet").LatLngExpression[] | import("leaflet").LatLngExpression[][] | import("leaflet").LatLngExpression[][][], options?: PolylineOptions | undefined) => HighlightableLayer<typeof Polygon, PolylineOptions>;
export declare const HighlightablePolyline: new (latlngs: import("leaflet").LatLngExpression[] | import("leaflet").LatLngExpression[][], options?: PolylineOptions | undefined) => HighlightableLayer<typeof Polyline, PolylineOptions>;
export declare const HighlightableRectangle: new (latLngBounds: import("leaflet").LatLngBoundsExpression, options?: PolylineOptions | undefined) => HighlightableLayer<typeof Rectangle, PolylineOptions>;
