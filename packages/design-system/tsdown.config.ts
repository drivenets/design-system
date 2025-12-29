import { defineConfig } from 'tsdown';
import sass from 'rollup-plugin-sass';
import sassEmbedded from 'sass-embedded';
import postcss from 'postcss';
import postcssModules from 'postcss-modules';

export default defineConfig({
	entry: ['src/index.ts'],
	format: ['cjs', 'esm'],
	dts: true,
	sourcemap: false,
	clean: true,
	outDir: 'dist',
	outExtensions: ({ format }) => (format === 'cjs' ? { js: '.cjs' } : { js: '.js' }),
	plugins: [
		sass({
			api: 'modern',
			output: './dist/index.css',
			options: {
				style: 'compressed',
			},

			runtime: sassEmbedded,

			// https://github.com/elycruz/rollup-plugin-sass#create-css-modules-using-processor-cssmodules-output
			async processor(css, id) {
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
