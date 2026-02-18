import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';
import path from 'path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';

const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

const testsWithBuild = '**/*.requires-build.test.{ts,tsx}';

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
					include: ['**/*.test.{ts,tsx}'],
					exclude: [...configDefaults.exclude, testsWithBuild],
					environment: 'jsdom',
				},
			},
			{
				extends: true,
				test: {
					name: 'requires-build',
					include: [testsWithBuild],
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
