import * as fs from 'node:fs/promises';
import { defineConfig, type Rolldown } from 'tsdown';
import * as sassEmbedded from 'sass-embedded';
import { reactCompilerRolldownPlugin } from './rolldown/react-compiler-rolldown-plugin.ts';

export default defineConfig({
	entry: ['./src/index.ts'],
	format: ['cjs', 'esm'],
	platform: 'browser',
	dts: true,
	sourcemap: false,
	clean: true,
	outDir: 'dist',
	outExtensions: ({ format }) => (format === 'cjs' ? { js: '.cjs' } : { js: '.js' }),
	css: {
		fileName: 'index.min.css',
		minify: true,
	},
	deps: {
		skipNodeModulesBundle: true,
	},
	plugins: [
		reactCompilerRolldownPlugin(), // Must be first.
		prependRootStyles(),
	],
});

function prependRootStyles(): Rolldown.Plugin {
	return {
		name: 'prepend-root-styles',
		async writeBundle({ format }) {
			// Ensure the root styles are compiled and prepended only once.
			if (format !== 'es') {
				return;
			}

			const [indexCssFile, rootStyles] = await Promise.all([
				fs.readFile('./dist/index.min.css', 'utf-8'),

				sassEmbedded.compileAsync('./src/styles/styles.scss', { style: 'compressed' }),
			]);

			await fs.writeFile('./dist/index.min.css', rootStyles.css + indexCssFile);
		},
	};
}
