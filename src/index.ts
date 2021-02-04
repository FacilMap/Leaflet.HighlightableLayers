import L from 'leaflet';
import * as panes from './panes';
import * as utils from './utils';
import * as layers from './layers';

export * from './panes';
export * from './utils';
export * from './layers';

const { HighlightableCircle, HighlightableCircleMarker, HighlightablePolygon, HighlightablePolyline, HighlightableRectangle, ...layerUtils } = layers;

const HighlightableLayers = {
    ...panes,
    ...utils,
    ...layerUtils,
    Circle: HighlightableCircle,
    CircleMarker: HighlightableCircleMarker,
    Polygon: HighlightablePolygon,
    Polyline: HighlightablePolyline,
    Rectangle: HighlightableRectangle
};

export default HighlightableLayers;

type HighlightableLayersType = typeof HighlightableLayers;

declare module "leaflet" {
    let HighlightableLayers: HighlightableLayersType;
}

L.HighlightableLayers = HighlightableLayers;