import fs from 'node:fs';
import path from 'node:path';
import { vitePluginDesignSystem } from '../index';
import { build, defineConfig } from 'vite';
import { afterEach, describe, expect, it } from 'vitest';

const root = path.resolve(__dirname, './fixtures');
const outDir = path.resolve(root, 'dist');

describe('vite-plugin-design-system', () => {
	afterEach(() => {
		fs.rmSync(outDir, { recursive: true, force: true });
	});

	it('should inject fonts into index.html', async () => {
		// Arrange.
		const config = defineConfig({
			logLevel: 'error',
			root,
			plugins: [vitePluginDesignSystem()],
			build: {
				outDir,
			},
		});

		// Act.
		await build(config);

		const outFile = path.resolve(outDir, 'index.html');
		const indexHtml = fs.readFileSync(outFile, 'utf-8');

		// Assert.
		expect(indexHtml).toMatchSnapshot();
	});
});
