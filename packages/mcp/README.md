# @drivenets/design-system-mcp

Stdio-based [MCP](https://modelcontextprotocol.io) server that exposes the DriveNets Design System Storybook documentation to AI agents (Cursor, Claude Code, Codex, MCP Inspector, …).

Built on [`@storybook/mcp`](https://github.com/storybookjs/storybook/tree/next/code/addons/mcp), [`tmcp`](https://github.com/paoloricciuti/tmcp), and [`@tmcp/transport-stdio`](https://github.com/paoloricciuti/tmcp/tree/main/packages/transport-stdio).

## Install / Use

No install needed — just point your MCP client at `npx`:

```json
{
  "mcpServers": {
    "drivenets-ds": {
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

| Tool (MCP name)   | Description                                            |
| ----------------- | ------------------------------------------------------ |
| `docs-list`       | List every component and docs entry with IDs           |
| `docs-show`       | Full props, stories, and code snippets for a component |
| `docs-show-story` | Docs for a specific story variant                      |

## Manifest source

Manifests are fetched from `https://drivenets.github.io/design-system/manifests/*.json` (the published DS Storybook on GitHub Pages, built from `main`). They're cached in memory for 10 minutes. After that, calls get the cached copy while a refresh runs in the background, and a failed refresh keeps the last good copy.

If the first fetch fails (for example, the network is unreachable), tool calls return an error.

## Options

| Flag                     | Description                                                   |
| ------------------------ | ------------------------------------------------------------- |
| `--manifests-dir <path>` | Read `components.json` and `docs.json` from a local directory |
| `--manifests-url <url>`  | Fetch from `<url>/manifests/*.json` instead of GitHub Pages   |
| `--ttl-ms <ms>`          | How long a cached manifest stays fresh (default: 10 minutes)  |
