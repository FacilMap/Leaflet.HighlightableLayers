import { Layer, Map, Path, Renderer } from "leaflet";
import "./panes.css";

Map.addInitHook(function (this: Map) {
    this.createPane("lhl-raised");
    this.createPane("lhl-almost-over");
});

export function setLayerPane(layer: Layer, pane: string) {
    if(layer.options.pane == pane)
        return;

    layer.options.pane = pane;

    if(layer["_map"])
        layer["_map"].removeLayer(layer).addLayer(layer);
}

export function setLayerRenderer(layer: Path, renderer: Renderer) {
    if(layer.options.renderer == renderer)
        return;

    layer.options.renderer = renderer;

    if(layer["_map"])
        layer["_map"].removeLayer(layer).addLayer(layer);
}