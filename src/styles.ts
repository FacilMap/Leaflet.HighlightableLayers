import { PathOptions } from "leaflet";
import { HighlightableLayerOptions } from "./layers";
import { getBrightness } from "./utils";

export function generatePolygonStyles(options: HighlightableLayerOptions<PathOptions>): Record<string, PathOptions> {
    const isBright = getBrightness(options.color!.replace(/^#/, "")) > 0.7
    const outlineColor = options.outlineColor ?? (
        isBright ? "#000000" : "#ffffff"
    );

    // A black border makes the lines look thicker, thus we decrease the thickness to make them look the original size again.
    // If the user has specified a custom look for the outline, let's not do any magic.
    const lineWeight = (options.outlineColor == null && options.outlineWeight == null && isBright) ? Math.round(options.weight! / 1.6) : options.weight!;

    const borderWeight = options.outlineWeight ?? (lineWeight * 2);

    return {
        border: {
            ...options,
            color: outlineColor,
            fillColor: outlineColor,
            weight: borderWeight,
            pane: options.raised ? "lhl-raised-shadow" : "lhl-shadow",
            fill: options.outlineFill,
            interactive: false
        },

        main: {
            ...options,
            weight: lineWeight,
            pane: options.raised ? "lhl-raised" : "overlayPane"
        }
    };
}

export function generatePolylineStyles(options: HighlightableLayerOptions<PathOptions>): Record<string, PathOptions> {
    const isBright = getBrightness(options.color!.replace(/^#/, "")) > 0.7
    const outlineColor = options.outlineColor ?? (
        isBright ? "#000000" : "#ffffff"
    );

    // A black border makes the lines look thicker, thus we decrease the thickness to make them look the original size again.
    // If the user has specified a custom look for the outline, let's not do any magic.
    const lineWeight = (options.outlineColor == null && options.outlineWeight == null && isBright) ? Math.round(options.weight! / 1.6) : options.weight!;

    const borderWeight = options.outlineWeight ?? (lineWeight * 2);

    return {
        line: {
            ...options,
            weight: lineWeight,
            pane: options.raised ? "lhl-raised" : "overlayPane",
            interactive: false
        },

        border: {
            ...options,
            color: outlineColor,
            fillColor: outlineColor,
            weight: borderWeight,
            pane: options.raised ? "lhl-raised-shadow" : "lhl-shadow",
            interactive: false
        },

        main: {
            opacity: 0,
            weight: Math.max(20, borderWeight, lineWeight),
            pane: "lhl-almost-over"
        }
    };
}