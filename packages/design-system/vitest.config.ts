import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
import { vitePluginDesignSystem } from '@drivenets/vite-plugin-design-system';

const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	test: {
		coverage: {
			exclude: [
				'**/stories/**',
				'**/*.stories.*{ts,tsx}',
				'**/.storybook/**',
				'**/*.scss',
				'dist/**',

				// deprecated components
				'**/ds-chip/**',
				'**/ds-chip-group/**',
				'**/ds-confirmation/**',
				'**/ds-system-status/**',
			],
			thresholds: {
				lines: 90,
				branches: 85,
			},
			watermarks: {
				lines: [80, 90],
				branches: [75, 85],
				functions: [80, 90],
				statements: [80, 90],
			},
		},
		projects: [
			{
				extends: true,
				test: {
					name: 'unit',
					include: [testPattern('unit')],
				},
			},
			{
				extends: true,
				test: {
					name: 'requires-build',
					include: [testPattern('requires-build')],
				},
			},
			{
				extends: true,
				plugins: [react(), vitePluginDesignSystem()],
				test: {
					name: 'browser',
					include: [testPattern('browser')],
					setupFiles: ['./vitest/setup.browser.ts'],
					browser: {
						enabled: true,
						provider: playwright(),
						instances: [{ browser: 'chromium' }],
					},
					deps: {
						web: {
							transformCss: true,
						},
					},
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

function testPattern(type: 'unit' | 'requires-build' | 'browser') {
	return `**/*.${type}.test.{ts,tsx}`;
}
