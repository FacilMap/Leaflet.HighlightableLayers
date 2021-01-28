import { LayerOptions } from "leaflet";

declare module "leaflet" {
    interface Layer {
        options: LayerOptions;
    }
}