import { Layer, Map, Path, Renderer, Util } from "leaflet";
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

	if (layer._renderer) {
		// Like layer.onRemove() and layer.onAdd(), but we don't want to really remove and add the layer (to avoid an infinite loop)
		if (renderer["_map"] && layer["_path"]) {
			layer._renderer._removePath(layer);
		}

		layer._renderer = renderer;
		layer._renderer._layers[Util.stamp(layer)] = layer;
		layer._renderer._updateStyle(layer);
		if (renderer["_map"] && layer["_path"]) {
			layer._renderer._addPath(layer);
		}
	}
}