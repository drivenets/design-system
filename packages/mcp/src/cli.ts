#!/usr/bin/env node
import { parseArgs } from 'node:util';
import { createServer } from './server.js';
import { DEFAULT_MANIFESTS_URL } from './manifest-provider.js';
import { resolveManifestsSource } from './manifests-source.js';
import serverInstructions from './instructions.md';
import pkgJson from '../package.json' with { type: 'json' };

let values: Record<string, string | boolean | undefined>;
try {
	({ values } = parseArgs({
		args: process.argv.slice(2),
		options: {
			'manifests-url': { type: 'string' },
			'manifests-dir': { type: 'string' },
			'project-dir': { type: 'string' },
			'ttl-ms': { type: 'string' },
		},
		strict: true,
	}));
} catch (err) {
	process.stderr.write(`design-system-mcp: ${(err as Error).message}\n`);
	process.exit(1);
}

let ttlMs: number | undefined;
const rawTtl = values['ttl-ms'];
if (typeof rawTtl === 'string' && rawTtl !== '') {
	const n = Number(rawTtl);
	if (!Number.isFinite(n) || n < 0) {
		process.stderr.write(`design-system-mcp: invalid --ttl-ms value: ${rawTtl}\n`);
		process.exit(1);
	}
	ttlMs = n === 0 ? undefined : n;
}

const source = resolveManifestsSource({
	manifestsUrl: values['manifests-url'] as string | undefined,
	manifestsDir: values['manifests-dir'] as string | undefined,
	projectDir: (values['project-dir'] as string | undefined) ?? process.cwd(),
});

process.stderr.write(
	`design-system-mcp: reading docs from ${source.manifestsDir ?? source.manifestsUrl ?? DEFAULT_MANIFESTS_URL}\n`,
);

const server = await createServer({
	name: pkgJson.name,
	version: pkgJson.version,
	description: pkgJson.description,
	instructions: serverInstructions,
	...source,
	ttlMs,
});

server.start();
