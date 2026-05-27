## Local development against an unpublished build

From the monorepo root, build the server:

```bash
pnpm --filter @drivenets/design-system-mcp build
```

This writes `packages/mcp/dist/cli.js`. Re-run after code changes.

Wire the local build into your client:

```json
{
  "mcpServers": {
    "drivenets-ds-local": {
      "command": "node",
      "args": ["/absolute/path/to/design-system/packages/mcp/dist/cli.js"]
    }
  }
}
```

| Client      | Config file                                                     |
| ----------- | --------------------------------------------------------------- |
| Cursor      | `.cursor/mcp.json` (project) or `~/.cursor/mcp.json` (global)   |
| Claude Code | `~/.config/claude/mcp.json` or via `claude mcp add` / `/mcp` UI |
| Codex       | `~/.codex/config.toml` under `[mcp_servers.drivenets-ds-local]` |

Restart or reload MCP servers after updating the config.

By default the server fetches manifests from `https://drivenets.github.io/design-system/manifests/*.json`. Network access is required unless you point at a local manifest directory (see below).

### Smoke test the protocol

From the monorepo root:

```bash
printf '%s\n' \
  '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2025-06-18","capabilities":{},"clientInfo":{"name":"smoke","version":"0"}}}' \
  '{"jsonrpc":"2.0","method":"notifications/initialized"}' \
  '{"jsonrpc":"2.0","id":2,"method":"tools/list"}' \
  | node packages/mcp/dist/cli.js
```

You should see a JSON-RPC `tools/list` response containing `list-all-documentation`, `get-documentation`, and `get-documentation-for-story`.

### Optional extras

**Unit tests**

```bash
pnpm --filter @drivenets/design-system-mcp test src/__tests__/ --run
```

**Local manifests**

Use a local Storybook build or dev output instead of GitHub Pages:

```bash
node packages/mcp/dist/cli.js --manifests-dir /path/to/storybook-static/manifests
```

Or pass the flag in your MCP config:

```json
"args": [
  "/absolute/path/to/design-system/packages/mcp/dist/cli.js",
  "--manifests-dir",
  "/path/to/storybook-static/manifests"
]
```

Manifest paths:

| Context      | Path                                                                        |
| ------------ | --------------------------------------------------------------------------- |
| Dev server   | `http://localhost:6006/manifests/*.json` (copy or symlink into a local dir) |
| Static build | `packages/design-system/storybook-static/manifests/`                        |

**Custom manifest URL**

```bash
node packages/mcp/dist/cli.js --manifests-url https://example.com/manifests
```

**MCP Inspector**

Interactive UI for calling tools:

```bash
npx @modelcontextprotocol/inspector node /absolute/path/to/design-system/packages/mcp/dist/cli.js
```

**Cache TTL**

Override the in-memory manifest cache duration (milliseconds; `0` disables TTL):

```bash
node packages/mcp/dist/cli.js --ttl-ms 60000
```
