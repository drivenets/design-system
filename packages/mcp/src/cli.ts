#!/usr/bin/env node
import { parseArgs } from 'node:util';
import { createServer, type CreateServerOptions } from './server.js';
import pkgJson from '../package.json' with { type: 'json' };

interface ParsedFlags {
	help?: boolean;
	version?: boolean;
}

const HELP = `design-system-mcp — stdio MCP server for the DriveNets Design System

Usage:
  design-system-mcp [options]

Options:
  -h, --help              Show this help.
  -v, --version           Show the package version.

Environment variables:
  MANIFESTS_URL
  MANIFESTS_DIR
  MANIFESTS_TTL_MS

Example MCP client config (Cursor, Claude Code, Codex):
  {
    "mcpServers": {
      "drivenets-ds": {
        "type": "stdio",
        "command": "npx",
        "args": ["-y", "@drivenets/design-system-mcp"]
      }
    }
  }
`;

function exitWithError(message: string): never {
	process.stderr.write(`design-system-mcp: ${message}\n`);
	process.exit(1);
}

function parseTtl(raw: string | undefined): number | undefined {
	if (raw === undefined || raw === '') {
		return undefined;
	}

	const n = Number(raw);
	if (!Number.isFinite(n) || n < 0) {
		exitWithError(`invalid --ttl-ms value: ${raw}`);
	}

	return n === 0 ? undefined : n;
}

let parsed: { values: ParsedFlags };
try {
	parsed = parseArgs({
		args: process.argv.slice(2),
		options: {
			help: { type: 'boolean', short: 'h' },
			version: { type: 'boolean', short: 'v' },
		},
		strict: true,
	}) as { values: ParsedFlags };
} catch (err) {
	exitWithError((err as Error).message);
}

if (parsed.values.help) {
	process.stdout.write(HELP);
	process.exit(0);
}

if (parsed.values.version) {
	process.stdout.write(`${pkgJson.version}\n`);
	process.exit(0);
}

const options: CreateServerOptions = {
	name: pkgJson.name,
	version: pkgJson.version,
	description: pkgJson.description,
	manifestsUrl: process.env.MANIFESTS_URL,
	manifestsDir: process.env.MANIFESTS_DIR,
	ttlMs: parseTtl(process.env.MANIFESTS_TTL_MS),
};

const server = await createServer(options);

server.start();
