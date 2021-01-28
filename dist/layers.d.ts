import { Circle, CircleMarker, CircleMarkerOptions, LatLngExpression, Path, PathOptions, Polygon, Polyline, PolylineOptions, Rectangle } from "leaflet";
export declare type HighlightableLayerOptions<O extends PathOptions> = O & {
    raised?: boolean;
    outlineColor?: string;
    outlineWeight?: number;
    outlineFill?: boolean;
    generateStyles(options: HighlightableLayerOptions<O>): Record<string, O>;
};
export declare function createHighlightableLayerClass<B extends new (...args: any[]) => Path, T extends InstanceType<B> & {
    options: O;
}, O extends PathOptions>(BaseClass: B, cloneMethods?: Array<keyof T>, defaultOptions?: HighlightableLayerOptions<O>): new (...args: ConstructorParameters<B>) => T & {
    realOptions: O;
    layers: Record<string, T>;
    generateStyles(options: O): Record<string, O>;
};
export declare const Layers: {
    Circle: new (latlng: LatLngExpression, radius: number, options?: CircleMarkerOptions | undefined) => Circle<any> & {
        realOptions: CircleMarkerOptions;
        layers: Record<string, Circle<any>>;
        generateStyles(options: CircleMarkerOptions): Record<string, CircleMarkerOptions>;
    };
    CircleMarker: new (latlng: LatLngExpression, options?: CircleMarkerOptions | undefined) => CircleMarker<any> & {
        realOptions: CircleMarkerOptions;
        layers: Record<string, CircleMarker<any>>;
        generateStyles(options: CircleMarkerOptions): Record<string, CircleMarkerOptions>;
    };
    Polygon: new (latlngs: LatLngExpression[] | LatLngExpression[][] | LatLngExpression[][][], options?: PolylineOptions | undefined) => Polygon<any> & {
        realOptions: PolylineOptions;
        layers: Record<string, Polygon<any>>;
        generateStyles(options: PolylineOptions): Record<string, PolylineOptions>;
    };
    Polyline: new (latlngs: LatLngExpression[] | LatLngExpression[][], options?: PolylineOptions | undefined) => Polyline<import("geojson").LineString | import("geojson").MultiLineString, any> & {
        realOptions: PolylineOptions;
        layers: Record<string, Polyline<import("geojson").LineString | import("geojson").MultiLineString, any>>;
        generateStyles(options: PolylineOptions): Record<string, PolylineOptions>;
    };
    Rectangle: new (latLngBounds: import("leaflet").LatLngBoundsExpression, options?: PolylineOptions | undefined) => Rectangle<any> & {
        realOptions: PolylineOptions;
        layers: Record<string, Rectangle<any>>;
        generateStyles(options: PolylineOptions): Record<string, PolylineOptions>;
    };
};
