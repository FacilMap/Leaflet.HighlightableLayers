import L from 'leaflet';
import * as panes from './panes';
import * as utils from './utils';
import HighlightablePolyline from './polyline';

export * from './panes';
export * from './utils';
export { HighlightablePolyline };

const HighlightableLayers = {
    ...panes,
    ...utils,
    Polyline: HighlightablePolyline
};

export default HighlightableLayers;

type HighlightableLayersType = typeof HighlightableLayers;

declare module "leaflet" {
    let HighlightableLayers: HighlightableLayersType;
}

L.HighlightableLayers = HighlightableLayers;