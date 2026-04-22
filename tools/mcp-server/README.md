# DriveNets DS Storybook MCP Server

MCP server that provides AI agents with DriveNets Design System component knowledge.

Built on [@storybook/mcp](https://github.com/storybookjs/storybook/tree/next/code/addons/mcp) and [srvx](https://srvx.unjs.io/).

## Quick Start

```bash
npm install
node server.js
```

The server starts on port 3000 by default. The MCP endpoint is at `/mcp`.

## Configuration

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `3000` | Server port |
| `MANIFESTS_URL` | `https://drivenets.github.io/design-system` | URL to fetch manifests from |
| `MANIFESTS_DIR` | — | Local directory for manifests (overrides URL) |

## Tools Exposed

| Tool | Description |
|------|-------------|
| `list-all-documentation` | List all components and docs entries with IDs |
| `get-documentation` | Get full props, stories, and code snippets for a component |
| `get-documentation-for-story` | Get docs for a specific story variant |

## Testing

Run with local test manifests:

```bash
MANIFESTS_DIR=$(pwd)/test-manifests PORT=3456 node server.js
```

Then verify via curl:
```bash
curl -s http://localhost:3456/health
```

## Docker

```bash
docker build -t ds-mcp-server .
docker run -p 3000:3000 ds-mcp-server
```

## Integration with DAP

Add to your MCP client config (e.g., `~/.claude/mcp.json` or `.cursor/mcp.json`):

```json
{
  "mcpServers": {
    "ds-storybook-mcp": {
      "type": "http",
      "url": "http://localhost:3000/mcp"
    }
  }
}
```
