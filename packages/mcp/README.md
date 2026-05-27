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

| Tool (MCP name)               | Description                                            |
| ----------------------------- | ------------------------------------------------------ |
| `list-all-documentation`      | List every component and docs entry with IDs           |
| `get-documentation`           | Full props, stories, and code snippets for a component |
| `get-documentation-for-story` | Docs for a specific story variant                      |

## Manifest source

Manifests are fetched from `https://drivenets.github.io/design-system/manifests/*.json` (the published DS Storybook on GitHub Pages — always latest). They're cached in-memory for the lifetime of the process; concurrent requests for the same manifest share a single in-flight promise; rejected requests are evicted so the next call retries.

If the network is unreachable, tool calls return an error.
