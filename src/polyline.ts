import { LatLngExpression, Map, PathOptions, polyline, Polyline, PolylineOptions } from "leaflet";
import { setLayerPane } from "./panes";
import { clone, getBrightness } from "./utils";

export interface HighlightablePolylineStyles {
    lineLayer: PolylineOptions;
    borderLayer: PolylineOptions;
    mainLayer: PolylineOptions;
}

type LayerName = keyof HighlightablePolylineStyles;
type LayerName2 = Exclude<LayerName, 'mainLayer'>;

export interface HighlightablePolylineOptions extends PolylineOptions {
    raised?: boolean;
}

export default class HighlightablePolyline extends Polyline {

    realOptions: HighlightablePolylineOptions;

    layers: Record<LayerName2, Polyline>;

    constructor(latlngs: LatLngExpression[] | LatLngExpression[][], options?: PolylineOptions) {
        super(latlngs, {
            raised: false,
            ...options
        } as any);

        this.realOptions = clone(this.options);

        this.layers = {} as any;
        for (const layerName of Object.keys(this.generateStyles(this.options)) as LayerName[]) {
            if (layerName !== "mainLayer") {
                this.layers[layerName] = polyline(latlngs, options);
            }
        }

        this.setStyle({});
    }

    onAdd(map: Map): this {
        super.onAdd(map);

        for (const layerName of Object.keys(this.layers) as LayerName2[]) {
            map.addLayer(this.layers[layerName]);
        }

        return this;
    }

    onRemove(map: Map): this {
        for (const layerName of Object.keys(this.layers) as LayerName2[]) {
            map.removeLayer(this.layers[layerName]);
        }

        super.onRemove(map);

        return this;
    }

    redraw() {
        super.redraw();

        for (const layerName of Object.keys(this.layers) as LayerName2[]) {
            this.layers[layerName].redraw();
        }

        return this;
    }

    setStyle(style: PathOptions) {
        Object.assign(this.realOptions, style);

        const styles = this.generateStyles(this.realOptions);

        if (styles.mainLayer.pane)
            setLayerPane(this, styles.mainLayer.pane);

        super.setStyle(styles.mainLayer);

        for (const layerName of Object.keys(this.layers) as LayerName2[]) {
            if (styles[layerName].pane)
                setLayerPane(this.layers[layerName], styles[layerName].pane!);

            this.layers[layerName].setStyle(styles[layerName]);
        }

        return this;
    }

    setLatLngs(latLngs: LatLngExpression[] | LatLngExpression[][] | LatLngExpression[][][]) {
        super.setLatLngs(latLngs);

        for (const layerName of Object.keys(this.layers) as LayerName2[]) {
            this.layers[layerName].setLatLngs(latLngs);
        }

        return this;
    }

    generateStyles(options: HighlightablePolylineOptions): HighlightablePolylineStyles {
        const isBright = getBrightness(options.color!.replace(/^#/, "")) > 0.7;
    
        // A black border makes the lines look thicker, thus we decrease the thickness to make them look the original size again
        const lineLayerWeight = isBright ? Math.round(options.weight! / 1.6) : options.weight!;
    
        return {
            lineLayer: {
                ...options,
                weight: lineLayerWeight,
                pane: options.raised ? "lhl-raised" : "overlayPane",
                interactive: false
            },
    
            borderLayer: {
                ...options,
                color: isBright ? "#000000" : "#ffffff",
                fillColor: isBright ? "#000000" : "#ffffff",
                weight: lineLayerWeight * 2,
                pane: options.raised ? "lhl-raised-shadow" : "lhl-shadow",
                interactive: false
            },
    
            mainLayer: {
                opacity: 0,
                weight: Math.max(20, lineLayerWeight * 2),
                pane: "lhl-almost-over"
            }
        };
    }

}