# DriveNets DS Storybook MCP Server

MCP server that provides AI agents with DriveNets Design System component knowledge.

Built on [@storybook/mcp](https://github.com/storybookjs/storybook/tree/next/code/addons/mcp) and [srvx](https://srvx.unjs.io/).

## Quick Start

```bash
npm install
npm run dev
```

The server starts on port 9200 by default. The MCP endpoint is at `/mcp`.

## Configuration

| Variable        | Default                                     | Description                                   |
| --------------- | ------------------------------------------- | --------------------------------------------- |
| `PORT`          | `9200`                                      | Server port                                   |
| `MANIFESTS_URL` | `https://drivenets.github.io/design-system` | URL to fetch manifests from                   |
| `MANIFESTS_DIR` | —                                           | Local directory for manifests (overrides URL) |

## Tools Exposed

| Tool                          | Description                                                |
| ----------------------------- | ---------------------------------------------------------- |
| `list-all-documentation`      | List all components and docs entries with IDs              |
| `get-documentation`           | Get full props, stories, and code snippets for a component |
| `get-documentation-for-story` | Get docs for a specific story variant                      |

## Development

```bash
npm install          # install dependencies
npm run dev          # start with hot-reload (tsx --watch)
npm run build        # compile TypeScript to dist/
npm start            # run compiled output
```

## Testing

Run with local test manifests:

```bash
MANIFESTS_DIR=$(pwd)/test-manifests PORT=3456 npm run dev
```

Then verify:

```bash
curl -s http://localhost:3456/health
```

## Docker

```bash
docker compose up -d
curl -s http://localhost:9200/health
```

## DN MCP Gateway Integration

This server is designed to be deployed behind the DN MCP Gateway. The gateway
handles tool prefixing, user identity injection, circuit breaking, and access
control. See `ARCHITECTURE.md` for the full architecture.

Gateway config entry:

```json
{
  "ds_storybook": {
    "state": "enabled",
    "url": "http://ds-mcp-server:9200/mcp",
    "proxy": {
      "prefix": "storybook",
      "use_all_tools": true,
      "header_enabler": "X-STORYBOOK-TOOLS"
    }
  }
}
```

## Local Cursor Integration

For local development (without the gateway), add to `.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "ds-storybook-mcp": {
      "type": "http",
      "url": "http://localhost:9200/mcp"
    }
  }
}
```
