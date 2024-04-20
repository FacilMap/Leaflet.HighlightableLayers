import "leaflet";

declare module "leaflet" {
	interface Map {
		_createRenderer: (options?: RendererOptions) => Renderer;
	}

	interface Layer {
		options: LayerOptions;
	}

	interface Path {
		_renderer?: Renderer;
		_reset(): void;
		_path: SVGElement;
		_updateBounds(): void;
	}

	interface Renderer extends Layer {
		_container: HTMLElement;
		_initPath(layer: Path): void;
		_addPath(layer: Path): void;
		_removePath(layer: Path): void;
		_updateStyle(layer: Path): void;
		_layers: Record<number, Path>;
	}

	interface Polyline {
		_rawPxBounds?: Bounds;
	}
}