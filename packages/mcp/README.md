# @drivenets/design-system-mcp

Stdio-based [MCP](https://modelcontextprotocol.io) server that exposes the DriveNets Design System Storybook documentation to AI agents (Cursor, Claude Code, Codex, MCP Inspector, …).

Built on [`@storybook/mcp`](https://github.com/storybookjs/storybook/tree/next/code/addons/mcp), [`tmcp`](https://github.com/paoloricciuti/tmcp), and [`@tmcp/transport-stdio`](https://github.com/paoloricciuti/tmcp/tree/main/packages/transport-stdio).

## Install / Use

No install needed — just point your MCP client at `npx`:

```json
{
  "mcpServers": {
    "drivenets-ds": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@drivenets/design-system-mcp"]
    }
  }
}
```

Drop that snippet into:

| Client        | File                                                                      |
| ------------- | ------------------------------------------------------------------------- |
| Cursor        | `.cursor/mcp.json` (project) or `~/.cursor/mcp.json` (global)             |
| Claude Code   | `~/.config/claude/mcp.json` or via `claude mcp add` / `/mcp` UI           |
| Codex         | `~/.codex/config.toml` under `[mcp_servers.drivenets-ds]`                 |
| MCP Inspector | `npx @modelcontextprotocol/inspector npx -y @drivenets/design-system-mcp` |

Codex equivalent (TOML):

```toml
[mcp_servers.drivenets-ds]
command = "npx"
args = ["-y", "@drivenets/design-system-mcp"]
```

## Tools exposed

| Tool (MCP name)               | Description                                            |
| ----------------------------- | ------------------------------------------------------ |
| `list-all-documentation`      | List every component and docs entry with IDs           |
| `get-documentation`           | Full props, stories, and code snippets for a component |
| `get-documentation-for-story` | Docs for a specific story variant                      |

## Manifest source

Manifests are fetched from `https://drivenets.github.io/design-system/manifests/*.json` (the published DS Storybook on GitHub Pages — always latest). They're cached in-memory for the lifetime of the process; concurrent requests for the same manifest share a single in-flight promise; rejected requests are evicted so the next call retries.

If the network is unreachable, tool calls return an error.

## Local development against an unpublished build

```bash
pnpm --filter @drivenets/design-system-mcp build
```

Wire the local build into your client:

```json
{
  "mcpServers": {
    "drivenets-ds-local": {
      "type": "stdio",
      "command": "node",
      "args": ["/absolute/path/to/design-system/packages/mcp-server/dist/cli.js"]
    }
  }
}
```

Or run directly from source with hot-reload:

```bash
pnpm --filter @drivenets/design-system-mcp dev
```

### Smoke test the protocol

```bash
printf '%s\n' \
  '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2025-06-18","capabilities":{},"clientInfo":{"name":"smoke","version":"0"}}}' \
  '{"jsonrpc":"2.0","method":"notifications/initialized"}' \
  '{"jsonrpc":"2.0","id":2,"method":"tools/list"}' \
  | node packages/mcp-server/dist/cli.js
```

You should see a JSON-RPC `tools/list` response containing `list-all-documentation`, `get-documentation`, and `get-documentation-for-story`.

## Scripts

| Script            | Purpose                                             |
| ----------------- | --------------------------------------------------- |
| `pnpm build`      | Build with `tsdown` to `dist/`                      |
| `pnpm dev`        | Run `src/cli.ts` directly via `tsx` (no build step) |
| `pnpm start`      | Run the compiled `dist/cli.js`                      |
| `pnpm typecheck`  | `tsgo` typecheck                                    |
| `pnpm lint:build` | `publint` + `attw` against a `pnpm pack` tarball    |

## Publishing

This package participates in the monorepo's [Changesets](https://github.com/changesets/changesets) release flow.

1. `pnpm changeset` — pick `@drivenets/design-system-mcp`, choose semver bump, write a short summary.
2. Commit & merge to `main`. The release pipeline builds and runs `pnpm publish -r --access public`.

For a one-off publish from a local machine:

```bash
pnpm --filter @drivenets/design-system-mcp build
pnpm --filter @drivenets/design-system-mcp lint:build   # publint + attw sanity check
pnpm --filter @drivenets/design-system-mcp publish --access public
```
