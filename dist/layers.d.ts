import { Circle, CircleMarker, CircleMarkerOptions, Path, PathOptions, Polygon, Polyline, PolylineOptions, Rectangle } from "leaflet";
export declare type HighlightableLayerOptions<O extends PathOptions> = O & {
    raised?: boolean;
    outlineColor?: string;
    outlineWeight?: number;
    outlineFill?: boolean;
    generateStyles?: (options: HighlightableLayerOptions<O>) => Record<string, O>;
};
export declare type HighlightableLayer<T extends Path, O extends PathOptions> = T & {
    realOptions: HighlightableLayerOptions<O>;
    layers: Record<string, T>;
    generateStyles(options: HighlightableLayerOptions<O>): Record<string, O>;
    setStyle(style: Partial<HighlightableLayerOptions<O>>): HighlightableLayer<T, O>;
};
export declare function createHighlightableLayerClass<B extends new (...args: any[]) => Path, T extends InstanceType<B>, O extends PathOptions>(BaseClass: B, cloneMethods?: Array<keyof T>, defaultOptions?: HighlightableLayerOptions<O>): new (arg1: ConstructorParameters<B>[0], options?: HighlightableLayerOptions<O>) => HighlightableLayer<T, O>;
export declare const HighlightableCircle: new (arg1: import("leaflet").LatLngExpression, options?: HighlightableLayerOptions<CircleMarkerOptions> | undefined) => HighlightableLayer<Circle<any>, CircleMarkerOptions>;
export declare const HighlightableCircleMarker: new (arg1: import("leaflet").LatLngExpression, options?: HighlightableLayerOptions<CircleMarkerOptions> | undefined) => HighlightableLayer<CircleMarker<any>, CircleMarkerOptions>;
export declare const HighlightablePolygon: new (arg1: import("leaflet").LatLngExpression[] | import("leaflet").LatLngExpression[][] | import("leaflet").LatLngExpression[][][], options?: HighlightableLayerOptions<PolylineOptions> | undefined) => HighlightableLayer<Polygon<any>, PolylineOptions>;
export declare const HighlightablePolyline: new (arg1: import("leaflet").LatLngExpression[] | import("leaflet").LatLngExpression[][], options?: HighlightableLayerOptions<PolylineOptions> | undefined) => HighlightableLayer<Polyline<import("geojson").LineString | import("geojson").MultiLineString, any>, PolylineOptions>;
export declare const HighlightableRectangle: new (arg1: import("leaflet").LatLngBoundsExpression, options?: HighlightableLayerOptions<PolylineOptions> | undefined) => HighlightableLayer<Rectangle<any>, PolylineOptions>;
