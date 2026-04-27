import * as fs from 'node:fs/promises';
import { defineConfig, type Rolldown } from 'tsdown';
import * as sassEmbedded from 'sass-embedded';

// @ts-expect-error - We're running this using Node directly, which requires an extension,
// but we don't want to set `allowImportingTsExtensions` for the whole project.
import { reactCompilerRolldownPlugin } from './rolldown/react-compiler-rolldown-plugin.ts';

// Fail build for any SCSS deprecations.
const SCSS_DEPRECATIONS = Object.values(sassEmbedded.deprecations).filter(
	(deprecation: sassEmbedded.Deprecation) => deprecation.status !== 'obsolete',
);

export default defineConfig({
	tsconfig: './tsconfig.build.json',
	entry: ['./src/index.ts'],
	format: ['cjs', 'esm'],
	platform: 'browser',
	dts: { tsgo: true },
	sourcemap: false,
	clean: true,
	outDir: 'dist',
	outExtensions: ({ format }) => (format === 'cjs' ? { js: '.cjs' } : { js: '.js' }),
	css: {
		fileName: 'index.min.css',
		minify: true,
		preprocessorOptions: {
			scss: {
				fatalDeprecations: SCSS_DEPRECATIONS,
			},
		},
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

				sassEmbedded.compileAsync('./src/styles/styles.scss', {
					style: 'compressed',
					fatalDeprecations: SCSS_DEPRECATIONS,
				}),
			]);

			await fs.writeFile('./dist/index.min.css', rootStyles.css + indexCssFile);
		},
	};
}
