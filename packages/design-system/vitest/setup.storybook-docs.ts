import { createServer, type Server } from 'node:http';
import { existsSync, statSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirname = path.dirname(fileURLToPath(import.meta.url));
const STORYBOOK_STATIC_DIR = path.join(dirname, '../storybook-static');

const MIME_TYPES: Record<string, string> = {
	'.html': 'text/html',
	'.js': 'text/javascript',
	'.mjs': 'text/javascript',
	'.css': 'text/css',
	'.json': 'application/json',
	'.svg': 'image/svg+xml',
	'.png': 'image/png',
	'.woff2': 'font/woff2',
};

function createStaticServer(root: string): Server {
	return createServer(async (request, response) => {
		const url = new URL(request.url ?? '/', 'http://localhost');
		let filePath = path.join(root, decodeURIComponent(url.pathname));

		if (url.pathname.endsWith('/')) {
			filePath = path.join(filePath, 'index.html');
		}

		if (!existsSync(filePath) || statSync(filePath).isDirectory()) {
			filePath = path.join(root, 'index.html');
		}

		try {
			const content = await readFile(filePath);
			const extension = path.extname(filePath);
			response.writeHead(200, {
				'Content-Type': MIME_TYPES[extension] ?? 'application/octet-stream',
			});
			response.end(content);
		} catch {
			response.writeHead(404);
			response.end('Not found');
		}
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

// Vitest runs project globalSetup even when that project is excluded via
// `--project="!storybook-docs"`. Parse argv so we can no-op when docs tests
// are not part of the current run (e.g. default `pnpm test` / `test:coverage`).
function parseProjectCliArgs(): string[] {
	const projects: string[] = [];

	for (let index = 0; index < process.argv.length; index += 1) {
		const arg = process.argv[index];
		if (!arg) {
			continue;
		}

		if (arg === '--project') {
			const value = process.argv[index + 1];
			if (value) {
				projects.push(...value.split(',').map((project) => project.trim()));
			}
			continue;
		}

		if (arg.startsWith('--project=')) {
			projects.push(
				...arg
					.slice('--project='.length)
					.split(',')
					.map((project) => project.trim()),
			);
		}
	}

	return projects;
}

function isStorybookDocsProjectSelected(): boolean {
	const projects = parseProjectCliArgs();

	if (projects.length === 0) {
		// No --project filter: all projects run, including storybook-docs.
		return true;
	}

	const included = new Set<string>();
	const excluded = new Set<string>();

	for (const project of projects) {
		if (project.startsWith('!')) {
			excluded.add(project.slice(1));
			continue;
		}

		included.add(project);
	}

	if (excluded.has('storybook-docs')) {
		return false;
	}

	if (included.size > 0) {
		// Positive selection (e.g. `--project=browser`): only run when storybook-docs is listed.
		return included.has('storybook-docs');
	}

	// Exclusion-only filters (e.g. `--project=!requires-build`): storybook-docs still runs.
	return true;
}

export default async function globalSetup() {
	// Skip serving storybook-static when docs tests are excluded. CI runs
	// `test:coverage` before `build:storybook`, so storybook-static/ may not exist yet.
	if (!isStorybookDocsProjectSelected()) {
		return;
	}

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
