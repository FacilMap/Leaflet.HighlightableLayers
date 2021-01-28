import { Layer, Map } from "leaflet";
import "./panes.css";

Map.addInitHook(function (this: Map) {
    this.createPane("lhl-shadow");
    this.createPane("lhl-raised");
    this.createPane("lhl-raised-shadow");
    this.createPane("lhl-almost-over");
});

export function setLayerPane(layer: Layer, pane: string) {
    if(layer.options.pane == pane)
        return;

    layer.options.pane = pane;

    if(layer["_map"])
        layer["_map"].removeLayer(layer).addLayer(layer);
}