export function getBrightness(colour: string): number {
	const r = parseInt(colour.substr(0, 2), 16)/255;
	const g = parseInt(colour.substr(2, 2), 16)/255;
	const b = parseInt(colour.substr(4, 2), 16)/255;
	// See http://stackoverflow.com/a/596243/242365
	return Math.sqrt(0.241*r*r + 0.691*g*g + 0.068*b*b);
}

export function clone<T>(obj: T): T {
    // See https://stackoverflow.com/a/44782052/242365
    return Object.assign(Object.create(Object.getPrototypeOf(obj)), obj);
}