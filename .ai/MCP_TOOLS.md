# DS MCP Tools Reference

The DriveNets Design System MCP server exposes component knowledge via the Model Context Protocol.

## Server Info

- **Name**: `@storybook/mcp`
- **Transport**: HTTP Streamable (SSE)
- **Default endpoint**: `http://localhost:3000/mcp`

## Tools

### list-all-documentation

Discover all available components and documentation entries.

**Parameters**:
| Name | Type | Default | Description |
|------|------|---------|-------------|
| `withStoryIds` | boolean | false | Include story IDs under each component |

**Returns**: Markdown list of all components and docs entries with IDs.

### get-documentation

Get full documentation for a component or docs entry.

**Parameters**:
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | string | yes | Component or docs entry ID from `list-all-documentation` |

**Returns**: Component description, import statement, stories with code snippets, and typed props definition.

### get-documentation-for-story

Get documentation for a specific story variant.

**Parameters**:
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `componentId` | string | yes | Component ID |
| `storyName` | string | yes | Story name (e.g., "Primary", "Default") |

**Returns**: Story-specific code snippet with import.

## Workflow

```
1. list-all-documentation(withStoryIds: true)  → discover IDs
2. get-documentation(id: "components-ds-button")  → full docs + props
3. get-documentation-for-story(componentId, storyName)  → specific variant
```

## Running Locally

```bash
cd tools/mcp-server
npm install
PORT=3000 node server.js
```

Environment variables:

- `PORT`: Server port (default: 3000)
- `MANIFESTS_URL`: Base URL for manifest files (default: GitHub Pages)
- `MANIFESTS_DIR`: Local directory path for manifests (overrides URL fetch)
