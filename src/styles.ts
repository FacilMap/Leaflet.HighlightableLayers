import { PathOptions, Renderer } from "leaflet";
import { HighlightableLayerOptions } from "./layers";
import { getBrightness } from "./utils";

export function generatePolygonStyles(options: HighlightableLayerOptions<PathOptions>, renderer: Renderer): Record<string, PathOptions> {
    const isBright = getBrightness(options.color!.replace(/^#/, "")) > 0.7
    const outlineColor = options.outlineColor ?? (
        isBright ? "#000000" : "#ffffff"
    );

    // A black outline makes the lines look thicker, thus we decrease the thickness to make them look the original size again.
    // If the user has specified a custom look for the outline, let's not do any magic.
    const lineWeight = (options.outlineColor == null && options.outlineWeight == null && isBright) ? Math.round(options.weight! / 1.6) : options.weight!;

    const outlineWeight = options.outlineWeight ?? (lineWeight * 2);

    return {
        main: {
            ...options,
            renderer,
            weight: outlineWeight,
            opacity: 0
        },

        fill: {
            ...options,
            renderer,
            stroke: false,
            interactive: false
        },

        outline: {
            ...options,
            color: outlineColor,
            weight: outlineWeight,
            renderer,
            fill: false,
            interactive: false
        },

        border: {
            ...options,
            weight: lineWeight,
            renderer,
            fill: false,
            interactive: false
        }
    };
}

export function generatePolylineStyles(options: HighlightableLayerOptions<PathOptions>, renderer: Renderer): Record<string, PathOptions> {
    const isBright = getBrightness(options.color!.replace(/^#/, "")) > 0.7
    const outlineColor = options.outlineColor ?? (
        isBright ? "#000000" : "#ffffff"
    );

    // A black outline makes the lines look thicker, thus we decrease the thickness to make them look the original size again.
    // If the user has specified a custom look for the outline, let's not do any magic.
    const lineWeight = (options.outlineColor == null && options.outlineWeight == null && isBright) ? Math.round(options.weight! / 1.6) : options.weight!;

    const outlineWeight = options.outlineWeight ?? (lineWeight * 2);

    return {
        outline: {
            ...options,
            color: outlineColor,
            weight: outlineWeight,
            renderer,
            interactive: false
        },

        line: {
            ...options,
            weight: lineWeight,
            renderer,
            interactive: false
        },

        main: {
            opacity: 0,
            weight: Math.max(20, outlineWeight, lineWeight),
            pane: "lhl-almost-over"
        }
    };
}