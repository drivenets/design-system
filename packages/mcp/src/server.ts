import { ValibotJsonSchemaAdapter } from '@tmcp/adapter-valibot';
import { StdioTransport } from '@tmcp/transport-stdio';
import {
	addGetDocumentationTool,
	addGetStoryDocumentationTool,
	addListAllDocumentationTool,
	type StorybookContext,
} from '@storybook/mcp';
import { McpServer } from 'tmcp';
import serverInstructions from './instructions.md';

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
			instructions: serverInstructions,
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
	};
}
