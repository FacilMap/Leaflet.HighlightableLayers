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
    }

    interface Renderer {
        _container: HTMLElement;
    }
}