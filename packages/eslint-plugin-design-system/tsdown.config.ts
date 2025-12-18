import { defineConfig } from 'tsdown';

export default defineConfig({
	entry: ['src/index.ts'],
	format: ['cjs', 'esm'],
	dts: false,
	sourcemap: false,
	clean: true,
	outDir: 'dist',
	outExtensions: ({ format }) => (format === 'cjs' ? { js: '.js' } : { js: '.mjs' }),
});
