import { ValibotJsonSchemaAdapter } from '@tmcp/adapter-valibot';
import { StdioTransport } from '@tmcp/transport-stdio';
import {
	addGetDocumentationTool,
	addGetStoryDocumentationTool,
	addListAllDocumentationTool,
	type StorybookContext,
} from '@storybook/mcp';
import { McpServer } from 'tmcp';

import { createManifestProvider, type ManifestProviderOptions } from './manifest-provider.js';

export interface CreateServerOptions extends ManifestProviderOptions {
	/**
	 * Server name advertised to MCP clients. Defaults to package name.
	 */
	name: string;
	/**
	 * Server version advertised to MCP clients. Defaults to the package version.
	 */
	version: string;

	/**
	 * Server description advertised to MCP clients. Defaults to the package description.
	 */
	description: string;

	instructions: string;

	/**
	 * Appended to the instructions to tell agents which design-system version the docs describe.
	 */
	note?: string | undefined;
}

export async function createServer(opts: CreateServerOptions) {
	const adapter = new ValibotJsonSchemaAdapter();

	const server = new McpServer(
		{
			name: opts.name,
			version: opts.version,
			description: opts.description,
		},
		{
			adapter,
			instructions: opts.note
				? `${opts.instructions.trimEnd()}\n\n## Docs Source\n\n${opts.note}\n`
				: opts.instructions,
			capabilities: {
				tools: { listChanged: true },
			},
		},
	).withContext<StorybookContext>();

	await addListAllDocumentationTool(server);
	await addGetDocumentationTool(server);
	await addGetStoryDocumentationTool(server);

	const manifestProvider = createManifestProvider(opts);

	return {
		/**
		 * Connects the server to a stdio transport. Stdin/stdout handlers are registered and
		 * the process stays alive for as long as the client keeps its end of the pipe open.
		 */
		start(): void {
			const transport = new StdioTransport<StorybookContext>(server);
			transport.listen({ manifestProvider });
		},

		/**
		 * Handles one JSON-RPC message without a transport.
		 */
		async receive(message: Parameters<McpServer['receive']>[0]): Promise<unknown> {
			return (await server.receive(message, { custom: { manifestProvider } })) as unknown;
		},
	};
}
