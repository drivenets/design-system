/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import path from 'path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
import dts from 'vite-plugin-dts';

const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	plugins: [
		dts({
			include: ['src/**/*'],
			exclude: ['src/**/*.test.ts', 'src/**/stories/**/*', 'src/**/*.stories.*', 'src/plugins'],
		}),
	],
	build: {
		outDir: 'dist',
		sourcemap: true,
		lib: {
			fileName: (format) => (format === 'es' ? 'index.mjs' : 'index.js'),
			cssFileName: 'index',
			formats: ['es', 'cjs'],
			entry: path.resolve(dirname, 'src/index.ts'),
		},
	},
	test: {
		projects: [
			{
				extends: true,
				plugins: [
					storybookTest({
						configDir: path.join(dirname, '.storybook'),
					}),
				],
				test: {
					name: 'storybook',
					browser: {
						enabled: true,
						headless: true,
						provider: playwright(),
						instances: [{ browser: 'chromium' }],
					},
					setupFiles: ['.storybook/vitest.setup.ts'],
				},
			},
		],
	},
});
