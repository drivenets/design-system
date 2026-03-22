import * as fs from 'node:fs/promises';
import { defineConfig, type Rolldown } from 'tsdown';
import sass from 'rollup-plugin-sass';
import * as sassEmbedded from 'sass-embedded';
import postcss from 'postcss';
import postcssModules from 'postcss-modules';
import { reactCompilerRolldownPlugin } from './rolldown/react-compiler-rolldown-plugin.ts';

export default defineConfig({
	entry: ['./src/index.ts'],
	format: ['cjs', 'esm'],
	platform: 'browser',
	dts: true,
	sourcemap: false,
	clean: true,
	skipNodeModulesBundle: true,
	outDir: 'dist',
	outExtensions: ({ format }) => (format === 'cjs' ? { js: '.cjs' } : { js: '.js' }),
	plugins: [
		reactCompilerRolldownPlugin(), // Must be first.

		sass({
			api: 'modern',
			output: './dist/index.min.css',
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

		appendRootStyles(),
	],
});

function appendRootStyles(): Rolldown.Plugin {
	return {
		name: 'append-root-styles',
		async generateBundle({ format }) {
			// Ensure the root styles are compiled and appended only once.
			if (format !== 'es') {
				return;
			}

			const rootStyles = await sassEmbedded.compileAsync('./src/styles/styles.scss', {
				style: 'compressed',
			});

			const indexCssFile = await fs.readFile('./dist/index.min.css', 'utf-8');

			await fs.writeFile('./dist/index.min.css', rootStyles.css + indexCssFile);
		},
	};
}
