import { PathOptions } from "leaflet";
import { HighlightableLayerOptions } from "./layers";
export declare function generatePolygonStyles(options: HighlightableLayerOptions<PathOptions>): Record<string, PathOptions>;
export declare function generatePolylineStyles(options: HighlightableLayerOptions<PathOptions>): Record<string, PathOptions>;
