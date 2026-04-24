import { createStorybookMcpHandler } from '@storybook/mcp';
import { serve } from 'srvx';
import { basename, resolve } from 'node:path';
import { readFile } from 'node:fs/promises';

const MANIFESTS_URL = process.env.MANIFESTS_URL ?? 'https://drivenets.github.io/design-system';
const MANIFESTS_DIR = process.env.MANIFESTS_DIR;
const PORT = Number(process.env.PORT ?? '9200');
const SERVER_NAME = 'ds-storybook-mcp';

async function fetchManifest(_request: Request | undefined, path: string): Promise<string> {
	const fileName = basename(path);

	if (MANIFESTS_DIR) {
		return readFile(resolve(MANIFESTS_DIR, fileName), 'utf-8');
	}

	const url = `${MANIFESTS_URL}/manifests/${fileName}`;
	const res = await fetch(url);
	if (!res.ok) {
		throw new Error(`Manifest fetch failed: ${res.status} from ${url}`);
	}
	return res.text();
}

const mcpHandler = await createStorybookMcpHandler({
	manifestProvider: fetchManifest,
});

function healthResponse(): Response {
	return Response.json({ status: 'healthy', server: SERVER_NAME });
}

function logRequest(req: Request, pathname: string): void {
	const user = req.headers.get('X-Email-User') ?? '-';
	const correlationId = req.headers.get('X-Correlation-ID') ?? '-';
	console.log(`[${new Date().toISOString()}] ${req.method} ${pathname} user=${user} cid=${correlationId}`);
}

serve({
	port: PORT,
	async fetch(req: Request): Promise<Response> {
		const { pathname } = new URL(req.url);

		if (pathname === '/mcp') {
			logRequest(req, pathname);
			return mcpHandler(req);
		}

		if (pathname === '/health') {
			return healthResponse();
		}

		return new Response('Not found', { status: 404 });
	},
});

console.log(`${SERVER_NAME} listening on port ${PORT}`);
