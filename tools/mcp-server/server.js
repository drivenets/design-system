import { createStorybookMcpHandler } from '@storybook/mcp';
import { serve } from 'srvx';
import { basename, resolve } from 'node:path';
import { readFile } from 'node:fs/promises';

const MANIFESTS_URL = process.env.MANIFESTS_URL
	?? 'https://drivenets.github.io/design-system';
const MANIFESTS_DIR = process.env.MANIFESTS_DIR;
const PORT = Number(process.env.PORT ?? '3000');

async function fetchManifest(path) {
	const fileName = basename(path);
	if (MANIFESTS_DIR) {
		return readFile(resolve(MANIFESTS_DIR, fileName), 'utf-8');
	}
	const url = `${MANIFESTS_URL}/manifests/${fileName}`;
	const res = await fetch(url);
	if (!res.ok) throw new Error(`Manifest fetch failed: ${res.status} from ${url}`);
	return res.text();
}

const handler = await createStorybookMcpHandler({
	manifestProvider: (_req, path) => fetchManifest(path),
});

serve({
	port: PORT,
	async fetch(req) {
		const { pathname } = new URL(req.url);
		if (pathname === '/mcp') return handler(req);
		if (pathname === '/health') return new Response('ok');
		return new Response('Not found', { status: 404 });
	},
});
