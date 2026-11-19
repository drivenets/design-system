import { defineConfig } from 'tsdown';

export default defineConfig({
	tsconfig: './tsconfig.build.json',
	entry: ['src/index.ts'],
	format: ['cjs', 'esm'],
	dts: { generator: 'tsc' },
	sourcemap: false,
	clean: true,
	deps: {
		neverBundle: true,
	},
	outDir: 'dist',
	outExtensions: ({ format }) => (format === 'cjs' ? { js: '.cjs' } : { js: '.js' }),
});
