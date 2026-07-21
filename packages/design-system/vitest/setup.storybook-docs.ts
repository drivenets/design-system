import { createServer, type Server } from 'node:http';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import serveHandler from 'serve-handler';

const dirname = path.dirname(fileURLToPath(import.meta.url));
const STORYBOOK_STATIC_DIR = path.join(dirname, '../storybook-static');

function createStaticServer(root: string): Server {
	return createServer((request, response) => {
		// Existing files (assets, iframe.html, manifests) are served directly; any other path
		// falls back to index.html so Storybook boots from `/?path=...` (SPA-style routing).
		void serveHandler(request, response, {
			public: root,
			cleanUrls: false,
			rewrites: [{ source: '**', destination: '/index.html' }],
		});
	});
}

async function isStorybookReachable(url: string): Promise<boolean> {
	try {
		const response = await fetch(`${url}/index.html`, { signal: AbortSignal.timeout(2_000) });
		return response.ok;
	} catch {
		return false;
	}
}

export default async function globalSetup() {
	const configuredUrl = process.env.STORYBOOK_URL;

	if (configuredUrl) {
		const reachable = await isStorybookReachable(configuredUrl);
		if (!reachable) {
			throw new Error(`Storybook at ${configuredUrl} is not reachable`);
		}

		process.env.STORYBOOK_URL = configuredUrl;
		return;
	}

	if (!existsSync(STORYBOOK_STATIC_DIR)) {
		throw new Error('storybook-static/ not found. Run `pnpm build:storybook` or `pnpm test:storybook-docs`.');
	}

	const server = createStaticServer(STORYBOOK_STATIC_DIR);

	await new Promise<void>((resolve, reject) => {
		server.once('error', reject);
		server.listen(0, '127.0.0.1', () => resolve());
	});

	const address = server.address();
	if (!address || typeof address === 'string') {
		throw new Error('Failed to start storybook-static server');
	}

	process.env.STORYBOOK_URL = `http://127.0.0.1:${String(address.port)}`;

	return async () => {
		await new Promise<void>((resolve, reject) => {
			server.close((error) => {
				if (error) {
					reject(error);
					return;
				}

				resolve();
			});
		});
	};
}
