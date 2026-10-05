import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
import { vitePluginDesignSystem } from '@drivenets/vite-plugin-design-system';
import { reactCompilerRolldownPlugin } from './rolldown/react-compiler-rolldown-plugin';

const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

const DEFAULT_PLAYWRIGHT_WS_ENDPOINT = 'ws://127.0.0.1:3000/';
const VISUAL_TEST_ALLOWED_MISMATCHED_PIXELS = 200;

export default defineConfig({
	test: {
		coverage: {
			include: ['src/**/*.{ts,tsx}'],
			exclude: [
				'**/stories/**',
				'**/*.stories.*{ts,tsx}',
				'**/.storybook/**',
				'**/*.scss',
				'dist/**',

				// figma code connect templates
				'**/*.figma.{ts,tsx}',
				'**/*.figma.batch.{ts,tsx}',

				// deprecated components
				'**/ds-chip/**',
				'**/ds-chip-group/**',
				'**/ds-confirmation/**',
				'**/ds-date-input/**',
				'**/ds-system-status/**',
			],
			thresholds: {
				lines: 90,
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
					css: true,
					isolate: false,
				},
			},
			{
				extends: true,
				test: {
					name: 'requires-build',
					include: [testPattern('requires-build')],
					isolate: false,
				},
			},
			{
				extends: true,
				plugins: [
					reactCompilerRolldownPlugin(), // Must be first.
					react(),
					vitePluginDesignSystem(),
				],
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
					isolate: false,
					testTimeout: 30000, // sample-form.stories.ts takes ~26s to run
					browser: {
						enabled: true,
						headless: true,
						provider: playwright(),
						instances: [{ browser: 'chromium' }],
					},
					setupFiles: ['.storybook/vitest.setup.ts'],
				},
			},
			{
				extends: true,
				plugins: [
					storybookTest({
						configDir: path.join(dirname, '.storybook'),
						tags: { include: ['visual'] },
					}),
				],
				test: {
					name: 'storybook-visual',
					isolate: false,
					testTimeout: 30000,
					browser: {
						enabled: true,
						headless: true,
						// The browser runs in the pinned Playwright container (`pnpm test:visual:server`)
						// so screenshots render the same on every machine, up to the pixel budget below.
						provider: playwright({
							connectOptions: {
								wsEndpoint: process.env.PW_WS_ENDPOINT ?? DEFAULT_PLAYWRIGHT_WS_ENDPOINT,
								exposeNetwork: '<loopback>',
							},
						}),
						instances: [{ browser: 'chromium' }],
						expect: {
							toMatchScreenshot: {
								comparatorName: 'pixelmatch',
								comparatorOptions: {
									// GitHub runners vary in CPU model, which shifts anti-aliased half-pixel edges
									// (e.g. checkbox borders) by up to ~150px per screenshot. Real changes move far more.
									allowedMismatchedPixels: VISUAL_TEST_ALLOWED_MISMATCHED_PIXELS,
								},
								// A single rendering environment, so no browser/platform suffix.
								resolveScreenshotPath: ({
									arg,
									ext,
									root,
									testFileDirectory,
									testFileName,
									screenshotDirectory,
								}) =>
									path.resolve(root, testFileDirectory, screenshotDirectory, testFileName, `${arg}${ext}`),
								// `arg` already ends in `-actual` / `-diff`; `scripts/visual-test-report.ts` relies on this layout.
								resolveDiffPath: ({ arg, ext, root, attachmentsDir, testFileDirectory, testFileName }) =>
									path.resolve(root, attachmentsDir, testFileDirectory, testFileName, `${arg}${ext}`),
							},
						},
					},
					setupFiles: ['.storybook/vitest.visual.setup.ts'],
				},
			},
			{
				extends: true,
				test: {
					name: 'storybook-docs',
					include: [testPattern('docs')],
					globalSetup: ['./vitest/setup.storybook-docs.ts'],
					testTimeout: 60_000,
				},
			},
		],
	},
});

function testPattern(type: 'unit' | 'requires-build' | 'browser' | 'docs') {
	return `**/*.${type}.test.{ts,tsx}`;
}
