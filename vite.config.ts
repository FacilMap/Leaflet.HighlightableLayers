import { defineConfig } from 'vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import dtsPlugin from 'vite-plugin-dts';

export default defineConfig({
	plugins: [
		cssInjectedByJsPlugin(),
		dtsPlugin()
	],
	build: {
		sourcemap: true,
		minify: false,
		lib: {
			entry: './src/index.ts',
			name: 'L.HighlightableLayers',
			fileName: (format) => `L.HighlightableLayers.${format === 'umd' ? 'js' : 'mjs'}`
		},
		rollupOptions: {
			output: {
				globals: {
					'leaflet': 'L'
				}
			},
			external: ['leaflet']
		}
	},
	resolve: {
		alias: {
			'leaflet-highlightable-layers': './src/index.ts'
		}
	}
});
