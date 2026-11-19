import { defineConfig } from 'tsdown';

export default defineConfig({
	tsconfig: './tsconfig.build.json',
	entry: ['src/cli.ts'],
	format: 'esm',
	dts: { generator: 'tsc' },
	sourcemap: false,
	clean: true,
	deps: {
		neverBundle: true,
	},
	loader: {
		'.md': 'text',
	},
	outDir: 'dist',
	outExtensions: () => ({ js: '.js' }),
});
