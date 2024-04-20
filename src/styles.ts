import { PathOptions, Renderer } from "leaflet";
import { HighlightableLayerOptions } from "./layers";
import { BRIGHT_OUTLINE_COLOR, BRIGHT_OUTLINE_WEIGHT_REDUCTION_FACTOR, DARK_OUTLINE_COLOR, OUTLINE_WEIGHT_FACTOR, POLYLINE_MIN_INTERACTION_WIDTH, getBrightness, isBright } from "./utils";

export function generatePolygonStyles(options: HighlightableLayerOptions<PathOptions>, renderer: Renderer): Record<string, PathOptions> {
	const bright = isBright(options.color!);
	const outlineColor = options.outlineColor ?? (
		bright ? BRIGHT_OUTLINE_COLOR : DARK_OUTLINE_COLOR
	);

	// A black outline makes the lines look thicker, thus we decrease the thickness to make them look the original size again.
	// If the user has specified a custom look for the outline, let's not do any magic.
	const lineWeight = (options.outlineColor == null && options.outlineWeight == null && bright) ? Math.round(options.weight! / BRIGHT_OUTLINE_WEIGHT_REDUCTION_FACTOR) : options.weight!;

	const outlineWeight = options.outlineWeight ?? (lineWeight * OUTLINE_WEIGHT_FACTOR);

	return {
		main: {
			...options,
			renderer,
			weight: outlineWeight,
			opacity: 0,
			dashArray: undefined,
			dashOffset: undefined
		},

		fill: {
			...options,
			renderer,
			stroke: false
		},

		outline: {
			...options,
			color: outlineColor,
			weight: outlineWeight,
			renderer,
			fill: false
		},

		border: {
			...options,
			weight: lineWeight,
			renderer,
			fill: false
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
			renderer
		},

		line: {
			...options,
			weight: lineWeight,
			renderer
		},

		main: {
			opacity: 0,
			weight: Math.max(POLYLINE_MIN_INTERACTION_WIDTH, outlineWeight, lineWeight),
			pane: "lhl-almost-over",
			dashArray: undefined,
			dashOffset: undefined
		}
	};
}