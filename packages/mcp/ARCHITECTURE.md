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
│    │  parseArgs                                                     │
│    ▼                                                                │
│  src/manifests-source.ts → resolveManifestsSource():                │
│    --manifests-dir, else --manifests-url, else the installed        │
│    @drivenets/design-system manifests/ (walk up node_modules from   │
│    --project-dir or cwd), else GitHub Pages; plus a source note     │
│    │                                                                │
│    ▼                                                                │
│  src/server.ts → createServer({ name, version, description,         │
|    instructions, note, manifestsUrl, manifestsDir, ttlMs })         │
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
| `src/cli.ts`               | Entrypoint. Parses flags, resolves the manifest source, calls `createServer().start()`.                                                         |
| `src/server.ts`            | Reusable `createServer()`. Builds the `McpServer`, registers the three Storybook tools, wires `StdioTransport`.                                 |
| `src/manifests-source.ts`  | Picks the manifest source at startup and writes the docs source note appended to the server instructions.                                       |
| `src/manifest-provider.ts` | Fetch remote (default) or read local dir (`--manifests-dir`); in-memory cache with optional TTL; dedupes concurrent loads; evicts on rejection. |
| `tsdown.config.ts`         | Builds ESM `dist/cli.js` + `dist/server.js` with type declarations.                                                                             |

This package ships no manifests. Each `@drivenets/design-system` release ships its own in `manifests/`, and the server prefers those, so agents get the docs for the version the project installed. GitHub Pages, rebuilt from `main` on every push, is the fallback.

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
Release (release.yml, build job)
  → `pnpm build:agent-docs`: `storybook build`, then `scripts/build-agent-docs.ts`
    slims storybook-static/manifests/ (minified, no absolute paths, short docgen errors),
    validates it with @storybook/mcp's schemas and writes packages/design-system/manifests/
  → published in the @drivenets/design-system tarball
  → the server finds node_modules/@drivenets/design-system/manifests/ from --project-dir or cwd

Push to main (deploy-storybook.yml)
  → storybook-static/ (including manifests/) published to GitHub Pages
  → used when the project's design system has no manifests (0.28.x and older) or isn't found
```

At startup the server logs the chosen source to stderr and, unless a flag chose it, appends a "Docs Source" note to its instructions: either the installed version the docs match, or a warning that the Pages docs come from unreleased `main`.

Old tarballs keep the manifest format they were built with, while `npx -y` always runs the latest server. `src/__tests__/fixtures/<format>/` holds a slimmed manifest per format, and `server.test.ts` runs the tools against each. When Storybook changes the format, add a folder and keep the old ones. The v1 (`$ref`) format, written when `experimentalDocgenServer` is on, can't be packaged: `build:agent-docs` rejects it.

If the source is GitHub Pages and it is unreachable, tool calls return an error.

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

packages/mcp
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
