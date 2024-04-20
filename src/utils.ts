export const BRIGHT_OUTLINE_COLOR = "#000000";
export const DARK_OUTLINE_COLOR = "#ffffff";
export const BRIGHT_OUTLINE_WEIGHT_REDUCTION_FACTOR = 1.6;
export const OUTLINE_WEIGHT_FACTOR = 2;
export const POLYLINE_MIN_INTERACTION_WIDTH = 20;

export function getBrightness(colour: string): number {
	const c = colour.replace(/^#/, "");
	const r = parseInt(c.substr(0, 2), 16)/255;
	const g = parseInt(c.substr(2, 2), 16)/255;
	const b = parseInt(c.substr(4, 2), 16)/255;
	// See http://stackoverflow.com/a/596243/242365
	return Math.sqrt(0.241*r*r + 0.691*g*g + 0.068*b*b);
}

export function isBright(color: string): boolean {
	return getBrightness(color) > 0.7;
}

export function clone<T>(obj: T): T {
	// See https://stackoverflow.com/a/44782052/242365
	return Object.assign(Object.create(Object.getPrototypeOf(obj)), obj);
}