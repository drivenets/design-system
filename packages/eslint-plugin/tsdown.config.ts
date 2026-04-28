import { defineConfig } from 'tsdown';

export default defineConfig({
	tsconfig: './tsconfig.build.json',
	entry: ['src/index.ts'],
	format: ['cjs', 'esm'],
	dts: { tsgo: true },
	sourcemap: false,
	clean: true,
	deps: {
		skipNodeModulesBundle: true,
	},
	outDir: 'dist',
	outExtensions: ({ format }) => (format === 'cjs' ? { js: '.cjs' } : { js: '.js' }),
});
