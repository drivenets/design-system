# DriveNets DS Storybook MCP Server

Dockerized Storybook instance that serves DS component knowledge to AI agents
via the [MCP protocol](https://modelcontextprotocol.io/).

Built on [@storybook/addon-mcp](https://storybook.js.org/docs/sharing/mcp) —
Storybook natively serves the `/mcp` endpoint when the addon is enabled.

## How it works

```
Dockerfile clones drivenets/design-system repo
        |
        v
pnpm install (all workspace dependencies)
        |
        v
storybook dev --ci --port 6006 --host 0.0.0.0
        |
        v
Storybook serves UI on / and MCP on /mcp
        |
        v
AI agents query components via MCP protocol
```

No custom server code — Storybook IS the MCP server.

## Tools exposed

| Tool                          | Description                                            |
| ----------------------------- | ------------------------------------------------------ |
| `list-all-documentation`      | List all components and docs entries with IDs          |
| `get-documentation`           | Get full props, stories, code snippets for a component |
| `get-documentation-for-story` | Get docs for a specific story variant                  |

## Local testing

Build and run:

```bash
cd tools/mcp-server
docker compose up -d
```

Verify:

```bash
# Health check (Storybook UI)
curl -s http://localhost:6006/ | head -5

# MCP tool discovery
curl -s -X POST http://localhost:6006/mcp \
  -H "Content-Type: application/json" \
  -H "Accept: application/json, text/event-stream" \
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/list"}'
```

## Cursor integration

Add to `.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "ds-storybook-mcp": {
      "url": "http://localhost:6006/mcp"
    }
  }
}
```

## Updating

To pick up DS changes, rebuild the image:

```bash
docker compose build --no-cache
docker compose up -d
```
