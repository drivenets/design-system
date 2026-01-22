/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import path from 'path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';

const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	test: {
		coverage: {
			provider: 'istanbul',
			reporter: ['text', 'html', 'lcov', 'json-summary'],
			reportsDirectory: './coverage',
			include: ['src/components/**/*.{ts,tsx}'],
			exclude: [
				'**/*.stories.tsx',
				'**/*.stories.ts',
				'**/*.test.ts',
				'**/*.test.tsx',
				'**/stories/**',
				'**/*.types.ts',
				'**/index.ts',
			],
			thresholds: {
				statements: 70,
				branches: 70,
				functions: 70,
				lines: 70,
			},
		},
		projects: [
			{
				extends: true,
				test: {
					name: 'unit',
					include: ['**/*.test.{ts,tsx}'],
					environment: 'jsdom',
				},
			},
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
