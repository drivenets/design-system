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

The server serves the docs of the `@drivenets/design-system` version your project has installed. At startup it looks for `node_modules/@drivenets/design-system/manifests/` in the project directory and each parent directory, so hoisted and pnpm installs both work.

If the installed version has no manifests (0.28.x and older) or the package isn't found, it falls back to `https://drivenets.github.io/design-system/manifests/*.json`, the Storybook on GitHub Pages built from unreleased `main`. That may document components or props your version doesn't have.

The server appends a "Docs Source" note to its instructions saying which of the two the agent gets, and logs the source to stderr.

Manifests are cached in memory for 10 minutes. After that, calls get the cached copy while a refresh runs in the background, and a failed refresh keeps the last good copy. If the first load fails (for example, Pages is unreachable), tool calls return an error.

## Options

| Flag                     | Default               | Description                                                                                                                                                         |
| ------------------------ | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--project-dir <path>`   | the working directory | Where to look for the installed design system. Set it when your client doesn't start the server in the project, or the design system is installed in a sub-package. |
| `--manifests-dir <path>` |                       | Read `components.json` and `docs.json` from this directory only.                                                                                                    |
| `--manifests-url <url>`  |                       | Fetch `<url>/manifests/*.json` instead, e.g. `http://localhost:6006` for a local Storybook.                                                                         |
| `--ttl-ms <ms>`          | `600000`              | How long a loaded manifest stays fresh before a background refresh.                                                                                                 |

`--manifests-dir` and `--manifests-url` take precedence over the installed design system. To always use the hosted docs, pass `--manifests-url https://drivenets.github.io/design-system`.
