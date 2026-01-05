import { Volume } from 'memfs';
import { vitePluginDesignSystem } from '../index';
import { build, defineConfig, type Plugin } from 'vite';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

describe('vite-plugin-design-system', () => {
	const volume = new Volume();

	beforeEach(() => {
		volume.fromJSON({
			'/src/index.html': String.raw`
                <!DOCTYPE html>
                <html lang="en">
                    <head></head>
                    <body>
                        <div id="app"></div>
                    </body>
                </html>
            `,
		});
	});

	afterEach(() => {
		volume.reset();
	});

	it('should inject fonts into index.html', async () => {
		// Arrange.
		const config = defineConfig({
			logLevel: 'error',
			root: '/src',
			plugins: [vitePluginLoadFromMemfs(volume), vitePluginDesignSystem()],
			build: {
				outDir: '/dist',
				rollupOptions: {
					fs: volume.promises as never,
				},
			},
		});

		// Act.
		await build(config);

		const indexHtml = volume.readFileSync('/dist/index.html', 'utf-8');

		// Assert.
		expect(indexHtml).toMatchSnapshot();
	});
});

// Vite plugin to load files from a memfs volume instead of the real file system for testing purposes.
function vitePluginLoadFromMemfs(memfsVolume: Volume): Plugin {
	return {
		name: 'load-from-memfs',
		load: {
			handler(id) {
				if (memfsVolume.existsSync(id)) {
					return memfsVolume.readFileSync(id, 'utf-8').toString();
				}

				return null;
			},
		},
	};
}
