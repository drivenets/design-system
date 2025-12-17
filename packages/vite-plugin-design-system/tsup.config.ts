import { defineConfig } from 'tsup';

export default defineConfig({
	entry: ['src/index.ts'],
	format: ['cjs', 'esm'],
	dts: true,
	sourcemap: false,
	clean: true,
	outDir: 'dist',
	outExtension: ({ format }) => (format === 'cjs' ? { js: '.js' } : { js: '.mjs' }),
});
