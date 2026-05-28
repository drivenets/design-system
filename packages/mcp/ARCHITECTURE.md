# MCP Server Architecture — Maintainer Guide

## High-Level Flow

```
┌─────────────────────────────────────────────────────────────────────┐
│  Storybook Build Pipeline (packages/design-system)                  │
│                                                                     │
│  .storybook/main.ts                                                 │
│    addons: ['@storybook/addon-mcp']                                 │
│         │                                                           │
│         ▼                                                           │
│  addon-mcp preset.ts sets features.componentsManifest = true        │
│         │                                                           │
│         ▼                                                           │
│  Storybook core activates two generators:                           │
│                                                                     │
│  ┌──────────────────────┐   ┌──────────────────────────────┐        │
│  │ react-docgen          │   │ MDX indexer                   │       │
│  │ Parses *.types.ts     │   │ Parses *.mdx files            │       │
│  │ interfaces, extracts  │   │ Extracts <Meta title="..."/>  │       │
│  │ prop names, types,    │   │ tags and rendered content      │       │
│  │ JSDoc descriptions,   │   │                                │       │
│  │ default values        │   │                                │       │
│  └──────────┬───────────┘   └──────────────┬─────────────────┘       │
│             │                               │                        │
│             ▼                               ▼                        │
│     manifests/components.json       manifests/docs.json              │
│                                                                     │
│  Written to storybook-static/manifests/ during build,               │
│  or served at /manifests/ during dev                                │
└──────────────────────────┬──────────────────────────────────────────┘
                           │
                           │  deploy-storybook.yml → gh-pages
                           ▼
┌─────────────────────────────────────────────────────────────────────┐
│  https://drivenets.github.io/design-system/manifests/*.json         │
│  (source of truth, always reflects the latest commit on main)       │
└──────────────────────────┬──────────────────────────────────────────┘
                           │
                           │  fetch (per process, in-memory cache + dedupe)
                           ▼
┌─────────────────────────────────────────────────────────────────────┐
│  MCP Server (packages/mcp) — stdio                           │
│                                                                     │
│  bin/mcp  →  dist/cli.js                               │
│    │                                                                │
│    │  parseArgs / env vars                                          │
│    ▼                                                                │
│  src/server.ts → createServer({ name, version, description,         │
|    manifestsUrl, manifestsDir, ttlMs })                             │
│    │                                                                │
│    │  McpServer (tmcp) + ValibotJsonSchemaAdapter                   │
│    │  registers:                                                    │
│    │    list-all-documentation                                      │
│    │    get-documentation                                           │
│    │    get-documentation-for-story                                 │
│    │                                                                │
│    ▼                                                                │
│  StdioTransport(server).listen({ manifestProvider })                │
│    │                                                                │
│    │  per-request manifestProvider(request, path, source):          │
│    │    cache hit (within TTL)? → return shared in-flight Promise   │
│    │    miss:                                                       │
│    │      - manifestsDir set?  → readFile(manifestsDir/<file>)      │
│    │      - otherwise          → fetch(<baseUrl>/manifests/<file>)  │
│    │      on rejection → evict so next call retries                 │
│    │                                                                │
│    ▼                                                                │
│  process.stdin / process.stdout  (JSON-RPC line-delimited)          │
└──────────────────────────┬──────────────────────────────────────────┘
                           │
                           │  stdio JSON-RPC
                           ▼
┌─────────────────────────────────────────────────────────────────────┐
│  AI Agent (Cursor / Claude Code / Codex / MCP Inspector)            │
│                                                                     │
│  .cursor/mcp.json:                                                  │
│    "drivenets-ds": {                                                │
│      "type": "stdio",                                               │
│      "command": "npx",                                              │
│      "args": ["-y", "@drivenets/design-system-mcp"]                  │
│    }                                                                │
└─────────────────────────────────────────────────────────────────────┘
```

## File map

| File                       | Responsibility                                                                                                                                  |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/cli.ts`               | Entrypoint. Parses flags / env, builds options, calls `createServer().start()`.                                                                 |
| `src/server.ts`            | Reusable `createServer()`. Builds the `McpServer`, registers the three Storybook tools, wires `StdioTransport`.                                 |
| `src/manifest-provider.ts` | Fetch remote (default) or read local dir (`--manifests-dir`); in-memory cache with optional TTL; dedupes concurrent loads; evicts on rejection. |
| `tsdown.config.ts`         | Builds ESM `dist/cli.js` + `dist/server.js` with type declarations.                                                                             |

There is intentionally no manifest snapshot baked into the npm tarball. The published gh-pages URL is the single source of truth and is updated by `deploy-storybook.yml` on every push to `main`, so the published MCP server is always one fetch away from the latest manifests.

## Manifest Generation — What Happens Inside Storybook

The addon itself (`@storybook/addon-mcp`) does **not** parse TypeScript or MDX.
Its `preset.ts` does two things:

1. **Enables the feature flag** — `features.componentsManifest = true` tells
   Storybook core to activate its built-in manifest generators.
2. **Mounts the `/mcp` endpoint** (dev only) — attaches HTTP routes on the
   Storybook dev server via `experimental_devServer` so agents can query
   manifests directly from a running Storybook instance.

The actual analysis is performed by Storybook core:

### `components.json`

Generated by Storybook's `react-docgen` integration (part of `@storybook/addon-docs`):

- Scans every component file referenced by stories
- Parses TypeScript interfaces/types from `*.types.ts` files
- Extracts: prop names, TypeScript types, `@default` tags, required flags
- Extracts: **JSDoc `/** ... \*/`comments on props** → becomes the`description`
  field in the manifest
- Associates: story argTypes, controls, code snippets

**Key insight**: The `description` for each prop comes exclusively from JSDoc
comments on the **props interface**, not from comments on the component function.
If a prop has no JSDoc, its `description` in the manifest will be empty.

### `docs.json`

Generated by Storybook's MDX indexer:

- Scans all `.mdx` files matched by the stories glob in `main.ts`:
  `'../src/**/!(*.docs).mdx'`
- Extracts the `<Meta title="..." />` tag for categorization
- Renders the full MDX content for search/retrieval
- Files matching `*.docs.mdx` are component-attached docs (paired with a story)
- Files matching plain `*.mdx` (without `.docs`) become standalone doc pages

### Output Location

| Context      | Path                                                         |
| ------------ | ------------------------------------------------------------ |
| Dev server   | `http://localhost:6006/manifests/*.json`                     |
| Static build | `storybook-static/manifests/*.json`                          |
| GitHub Pages | `https://drivenets.github.io/design-system/manifests/*.json` |

## How Manifests Reach This Server at Runtime

```
Developer pushes to main
  → deploy-storybook.yml runs `pnpm build:storybook`
  → storybook-static/ (including manifests/) published to GitHub Pages
  → end users running `npx @drivenets/design-system-mcp` fetch from that URL on demand
```

The `release.yml` pipeline that publishes this package to npm is fully independent of the storybook deploy. The npm tarball contains only `dist/{cli,server}.js` and their `.d.ts` files; it never embeds a frozen copy of the manifests. Consumers always see the latest manifests from gh-pages.

If gh-pages is unreachable and the consumer didn't set `--manifests-dir`, tool calls return an error.

## What Controls Manifest Quality

| Factor                       | Affects                                  | Where to change                      |
| ---------------------------- | ---------------------------------------- | ------------------------------------ |
| JSDoc on prop interfaces     | `description` field in `components.json` | `src/components/*/ds-*.types.ts`     |
| `@default` JSDoc tags        | `defaultValue` in `components.json`      | Same `.types.ts` files               |
| MDX files with `<Meta>` tags | Entries in `docs.json`                   | `src/stories/*.mdx`                  |
| Stories glob in `main.ts`    | Which files Storybook scans              | `.storybook/main.ts` `stories` array |
| `@storybook/addon-docs`      | Powers `react-docgen` extraction         | Must be in `addons` array            |

## Dependencies

```
@storybook/addon-mcp    (addon — preset that enables manifests + dev /mcp route)
  └─ @storybook/mcp     (protocol handler — exposes addList/addGet/addGetStoryDocumentationTool)

packages/mcp-server
  ├─ @storybook/mcp       (registers three Storybook tools on a tmcp server)
  ├─ tmcp                 (MCP server core)
  ├─ @tmcp/adapter-valibot (JSON-schema generation for tool input schemas)
  └─ @tmcp/transport-stdio (process.stdin / process.stdout JSON-RPC transport)
```

Note: `@storybook/addon-mcp` is a dependency of the **Storybook project**
(`packages/design-system`), not of this MCP server. This server only depends on
`@storybook/mcp` and the `tmcp` stack.

Tools are exposed to clients as `list-all-documentation`,
`get-documentation`, and `get-documentation-for-story` (the `storybook_` group
prefix used by `createStorybookMcpHandler` is intentionally not applied here —
this server only exposes Storybook tools, so no namespacing is needed).
