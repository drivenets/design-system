# MCP Server Architecture — Maintainer Guide

How the Storybook MCP pipeline works end-to-end: from component source code to
AI agent tool calls.

## Why MCP Instead of `.ai` Files

Every DAP service has a `.ai/` folder with hand-written markdown docs
(ARCHITECTURE.md, IMPLEMENTATION.md, etc.) that AI agents read via the filesystem.
This works well for backend services where the API surface is small and changes
infrequently. The Design System is fundamentally different — 57 components, each
with dozens of typed props, where the source of truth already lives in TypeScript
types, JSDoc comments, and Storybook stories.

| Concern                | Static `.ai/CATALOG.md`                  | Storybook MCP                                      |
| ---------------------- | ---------------------------------------- | -------------------------------------------------- |
| **Accuracy**           | Can drift from code                      | Always generated from source                       |
| **Maintenance**        | Manual updates on every component change | Zero — manifests regenerate on build               |
| **Depth**              | Summary-level                            | Full props, types, defaults, JSDoc, usage snippets |
| **Stories/examples**   | Would need to duplicate                  | Serves actual story code                           |
| **Prop hallucination** | Agent might still guess                  | Agent verified against docs toolset                |
| **Test validation**    | None                                     | Agent can run `run-story-tests` locally            |

### The thin `.ai/` layer that is still needed

The MCP covers **what components exist and how to use them**. But it doesn't
cover:

- Why the DS is structured the way it is (architecture)
- How to contribute to the DS (PR process, changesets, conventions)
- Design philosophy and decision patterns
- Monorepo package relationships
- Build/release pipeline
- Styling system architecture (tokens, SCSS modules, CSS custom properties)

So a minimal `.ai/` is still valuable — just much lighter than what backend
services need:

```
drivenets-design-system/
  AGENTS.md                        # entry point — tells agents to USE THE MCP FIRST,
                                   # then fall back to .ai/ for architectural context
  .ai/
    OVERVIEW.md                    # what the DS is, design philosophy, target audience
    ARCHITECTURE.md                # monorepo structure, package map, build pipeline
    IMPLEMENTATION.md              # tech stack, component anatomy, key patterns
    CONTRIBUTING.md                # PR process, changesets, Ark UI conventions
    operations.md                  # build, test, release, CI/CD
    testing.md                     # Vitest, browser mode, play tests
    features/
      01-styling-system.md         # tokens, SCSS modules, CSS custom properties
      02-ark-ui-integration.md     # which components use Ark UI, wrapping patterns
```

No `CATALOG.md` needed — the MCP provides that dynamically and it's always
accurate.

### When `.ai` files remain the right choice

Static `.ai/` docs are the right choice for backend services, infrastructure,
and tooling where the API surface is smaller and changes less frequently. The
MCP approach is specifically valuable for **component libraries** where the prop
API surface is large and tightly coupled to TypeScript source code.

## Why a Self-Hosted MCP Server

The official `@storybook/addon-mcp` mounts an `/mcp` endpoint directly on the
Storybook dev server (port 6006). We chose a standalone server instead:

| Concern                  | Addon `/mcp` on Storybook          | Standalone `tools/mcp-server`               |
| ------------------------ | ---------------------------------- | ------------------------------------------- |
| **Requires Storybook**   | Yes — must have a running instance | No — fetches pre-built manifests            |
| **Startup time**         | Full Storybook build (~30s+)       | < 1s                                        |
| **Lifecycle coupling**   | Tied to Storybook's process        | Independent — can restart without Storybook |
| **Shared deployment**    | One user per instance              | Can run as a shared team service            |
| **Containerizable**      | Possible but heavy                 | 15 MB Docker image                          |
| **Manifest source**      | Generated live from source         | GitHub Pages or local directory             |
| **Cross-repo consumers** | Only accessible within DS repo     | Any repo can connect (DAP, platform, etc.)  |

The key advantage: **any developer in any repo** can point their
`.cursor/mcp.json` at the server and get DS component knowledge without cloning
the design-system repo or running Storybook. The manifests are published to
GitHub Pages on every merge to `main`, so the MCP server always serves
up-to-date component data.

```
Official approach:    Storybook Dev Server → /mcp endpoint (same process)
Our approach:         Standalone server.js → fetches manifests from GitHub Pages
```

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
│  ┌──────────────────────┐   ┌──────────────────────────────┐       │
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
                           │  Published to GitHub Pages or read from disk
                           ▼
┌─────────────────────────────────────────────────────────────────────┐
│  MCP Server (tools/mcp-server)                                      │
│                                                                     │
│  server.js                                                          │
│    fetchManifest(path)                                              │
│      ├─ MANIFESTS_DIR set? → read from local filesystem             │
│      └─ otherwise → fetch from MANIFESTS_URL/manifests/<file>       │
│         (default: https://drivenets.github.io/design-system)        │
│                                                                     │
│  createStorybookMcpHandler({ manifestProvider })                    │
│    └─ @storybook/mcp parses the JSON, implements MCP tools          │
│                                                                     │
│  srvx HTTP server                                                   │
│    POST /mcp → MCP tool handler                                     │
│    GET  /health → health check                                      │
└──────────────────────────┬──────────────────────────────────────────┘
                           │
                           │  MCP protocol over HTTP
                           ▼
┌─────────────────────────────────────────────────────────────────────┐
│  AI Agent (Cursor, Claude, etc.)                                    │
│                                                                     │
│  .cursor/mcp.json:                                                  │
│    "ds-storybook-mcp": { "type": "http", "url": "localhost:3000/mcp"}│
│                                                                     │
│  Calls MCP tools:                                                   │
│    list-all-documentation → component/doc catalog                   │
│    get-documentation      → full props, stories, code snippets      │
│    get-documentation-for-story → specific story variant docs        │
└─────────────────────────────────────────────────────────────────────┘
```

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

## How Manifests Reach This Server

```
Developer pushes to main
  → CI builds Storybook: pnpm build-storybook
  → storybook-static/ (including manifests/) published to GitHub Pages
  → MCP server fetches from https://drivenets.github.io/design-system/manifests/
```

For local development or testing, set `MANIFESTS_DIR` to skip the network:

```bash
MANIFESTS_DIR=$(pwd)/test-manifests node server.js
```

## What Controls Manifest Quality

| Factor                       | Affects                                  | Where to change                      |
| ---------------------------- | ---------------------------------------- | ------------------------------------ |
| JSDoc on prop interfaces     | `description` field in `components.json` | `src/components/*/ds-*.types.ts`     |
| `@default` JSDoc tags        | `defaultValue` in `components.json`      | Same `.types.ts` files               |
| MDX files with `<Meta>` tags | Entries in `docs.json`                   | `src/stories/*.mdx`                  |
| Stories glob in `main.ts`    | Which files Storybook scans              | `.storybook/main.ts` `stories` array |
| `@storybook/addon-docs`      | Powers `react-docgen` extraction         | Must be in `addons` array            |

## Verifying Manifests

After a Storybook build, inspect the raw JSON:

```bash
# Check component props have descriptions
cat storybook-static/manifests/components.json | jq '.[] | select(.name == "DsTextInput") | .props | to_entries[] | {name: .key, description: .value.description}'

# Check docs entries exist
cat storybook-static/manifests/docs.json | jq '.[].title'
```

## Dependencies

```
@storybook/addon-mcp    (addon — preset that enables manifests + dev /mcp route)
  └─ @storybook/mcp     (protocol handler — parses manifests, implements MCP tools)

server.js
  ├─ @storybook/mcp     (protocol handler — we use createStorybookMcpHandler)
  └─ srvx               (HTTP server)
```

Note: `@storybook/addon-mcp` is a dependency of the **Storybook project**
(`packages/design-system`), not of this MCP server. This server only depends on
`@storybook/mcp` (the protocol package) and `srvx`.
