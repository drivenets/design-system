import { defineConfig } from 'tsdown';
import sass from 'rollup-plugin-sass';
import * as sassEmbedded from 'sass-embedded';
import postcss from 'postcss';
import postcssModules from 'postcss-modules';

export default defineConfig({
	entry: ['./src/index.ts', './src/styles/styles.scss'],
	format: ['cjs', 'esm'],
	platform: 'browser',
	dts: true,
	sourcemap: false,
	clean: true,
	unbundle: true,
	skipNodeModulesBundle: true,
	outDir: 'dist',
	loader: {
		'.scss': 'css',
	},
	outExtensions: ({ format }) => (format === 'cjs' ? { js: '.cjs' } : { js: '.js' }),
	plugins: [
		sass({
			api: 'modern',
			output: './dist/index.min.css',
			options: {
				style: 'compressed',
			},

			runtime: sassEmbedded,

			// https://github.com/elycruz/rollup-plugin-sass#create-css-modules-using-processor-cssmodules-output
			async processor(css, id) {
				if (!id.endsWith('.module.scss')) {
					return { css };
				}

				let cssModules = {};

				const postcssProcessResult = await postcss([
					postcssModules({
						getJSON: (_, json) => {
							cssModules = json;
						},
					}),
				]).process(css, { from: id });

				return { css: postcssProcessResult.css, cssModules };
			},
		}),
	],
});
