import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { ComponentManifestMap, DocsManifestMap } from '@storybook/mcp';
import * as v from 'valibot';
import { describe, expect, it } from 'vitest';

import { createServer, type CreateServerOptions } from '../server.js';

const FIXTURES_DIR = fileURLToPath(new URL('./fixtures', import.meta.url));

const createTestServer = (opts: Partial<CreateServerOptions> = {}) =>
	createServer({
		name: 'test',
		version: '0.0.0',
		description: 'test',
		instructions: '## Workflow\n',
		...opts,
	});

const callTool = async (
	server: Awaited<ReturnType<typeof createServer>>,
	name: string,
	args: Record<string, unknown>,
): Promise<string> => {
	const response = await server.receive({
		jsonrpc: '2.0',
		id: 1,
		method: 'tools/call',
		params: { name, arguments: args },
	});

	const { content } = (response as { result: { content: { text: string }[] } }).result;

	return content.map((part) => part.text).join('\n');
};

describe('createServer', () => {
	it('ends the instructions with the docs source note', async () => {
		// Arrange.
		const server = await createTestServer({ note: 'Docs match @drivenets/design-system 0.29.0.' });

		// Act.
		const response = await server.receive({
			jsonrpc: '2.0',
			id: 1,
			method: 'initialize',
			params: {
				protocolVersion: '2025-06-18',
				capabilities: {},
				clientInfo: { name: 'test', version: '0.0.0' },
			},
		});

		// Assert.
		expect((response as { result: { instructions: string } }).result.instructions).toBe(
			'## Workflow\n\n## Docs Source\n\nDocs match @drivenets/design-system 0.29.0.\n',
		);
	});
});

// Old tarballs keep their manifest format while `npx -y` runs the latest server, so keep one fixture per format.
describe('v0 manifests', () => {
	const manifestsDir = join(FIXTURES_DIR, 'v0');
	const readJson = (file: string): unknown => JSON.parse(readFileSync(join(manifestsDir, file), 'utf8'));

	it('match the Storybook manifest schemas', () => {
		// Act & Assert.
		expect(() => v.parse(ComponentManifestMap, readJson('components.json'))).not.toThrow();
		expect(() => v.parse(DocsManifestMap, readJson('docs.json'))).not.toThrow();
	});

	it('list components and guidelines through docs-list', async () => {
		// Arrange.
		const server = await createTestServer({ manifestsDir });

		// Act.
		const text = await callTool(server, 'docs-list', {});

		// Assert.
		expect(text).toContain('DsButtonNew');
		expect(text).toContain('DsGrid');
		expect(text).toContain('guidelines-z-index--docs');
	});

	it('show component props and stories through docs-show', async () => {
		// Arrange.
		const server = await createTestServer({ manifestsDir });

		// Act.
		const text = await callTool(server, 'docs-show', { id: 'components-button' });

		// Assert.
		expect(text).toContain('# DsButtonNew');
		expect(text).toContain('variant?:');
		expect(text).toContain('### Default Button');
	});
});
