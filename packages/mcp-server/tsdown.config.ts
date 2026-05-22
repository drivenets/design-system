import { defineConfig } from 'tsdown';

export default defineConfig({
	tsconfig: './tsconfig.build.json',
	entry: ['src/cli.ts', 'src/server.ts'],
	format: 'esm',
	dts: { tsgo: true },
	sourcemap: false,
	clean: true,
	shims: true,
	deps: {
		skipNodeModulesBundle: true,
	},
	loader: {
		'.md': 'text',
	},
	outDir: 'dist',
	outExtensions: () => ({ js: '.js' }),
});
