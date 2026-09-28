import { defineConfig } from 'vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import dtsPlugin from 'unplugin-dts/vite';
import { isAbsolute } from 'node:path';

export default defineConfig({
	plugins: [
		cssInjectedByJsPlugin(),
		dtsPlugin({ bundleTypes: true })
	],
	build: {
		sourcemap: true,
		minify: false,
		lib: {
			entry: './src/index.ts',
			name: 'L.HighlightableLayers',
			fileName: () => "L.HighlightableLayers.js",
			formats: ["es"]
		},
		rollupOptions: {
			external: (id) => !id.startsWith("./") && !id.startsWith("../") && /* resolved internal modules */ !isAbsolute(id)
		}
	},
	resolve: {
		alias: {
			'leaflet-highlightable-layers': './src/index.ts',
			...process.env.LEAFLET === "2" ? {
				'leaflet': 'leaflet2'
			} : {}
		}
	}
});
