## Goal

Make existing MCP `get-documentation` output ready to paste and complete without changing the consumer contract (`npx @drivenets/design-system-mcp`, the three current tools, Storybook, or component imports).

## Acceptance criteria

- `components.json` story snippets never contain `fn()` or `action('…')`; those calls are `() => {}`.
- Every component record in `components.json` includes the public import `{ DsX } from '@drivenets/design-system'`.
- The MCP prop table for a component lists only keys declared on that component's `Ds*Props` (not inherited HTML-attribute soup).
- Each component record has a canonical example taken from the Default story snippet when that snippet still has children; icon-only stories stay icon-only.
- `@deprecated` and successor on types JSDoc appear on the component record.
- Snippets that serialize as `React.Fragment` or HOC internals are dropped from the manifest.
- MCP server instructions no longer require reading every `Guidelines/*` doc first; they tell the agent to list, then `get-documentation` for the component. Token, spacing, and layout rules are inlined in `instructions.md`; fetch a specific Guidelines page only when that is not enough.
- Instructions tell agents not to invent props missing from the prop list, and include the known traps (`highEmphasis` is radius not priority, `locale`, `slotProps`).
- Optional colocated `ds-{name}/ds-{name}.mcp.ts` overlays merge into the same `components.json` records (extra keys; missing file is sanitizer-only).
- Overlays exist for compound / successor / hook-driven components that still fail after sanitizer: toaster, table, tabs, layout.
- `pnpm test:storybook-docs` snapshots match the sanitized MCP snippets.
- Consumers still call only `list-all-documentation`, `get-documentation`, and `get-documentation-for-story`.

## Decisions

- Consumer workflow is frozen: no CLI `init --features agents`, no generated consumer `AGENTS.md`, no new MCP tools, no hosted-MCP URL change, no `{Name}.doc.mjs` human docs system, no `parameters.docs.source.code` hand-written strings, no extra story-authoring ritual for agents.
- Improve the payload the current tools already return. Seam: post-process `storybook-static/manifests/components.json` after `storybook build`, then publish as today.
- Phase order: sanitizer + instructions first, then optional overlay, then overlays on toaster / table / tabs / layout.
- Overlay is optional per component; merge into the same `components.json` keys `get-documentation` already returns.
- Overlay shape: `import`, `related`, `avoid`, `example`.
- Guidelines stay for humans; agents get token/spacing/layout rules inlined in MCP `instructions.md` instead of a mandatory full-guidelines dump.

## Out of scope

- Consumer CLI, generated agent docs, new MCP tools (`search` / `get` / a fourth tool).
- `{Name}.doc.mjs` / a second ComponentDoc docs system.
- Changing Storybook Show code / human story authoring beyond existing `displayName` / inline-args / `!manifest` rules.
- Night Watch, vibe tests, hosted MCP URL, LLM index files.

## Touch

- `packages/design-system/package.json` (`build:storybook`)
- `packages/design-system/scripts/enrich-mcp-manifest.ts` (new; runs after `storybook build`)
- `packages/design-system/storybook-static/manifests/components.json` (generated)
- `packages/design-system/src/components/ds-toaster/` (or current toaster folder) `*.mcp.ts`
- `packages/design-system/src/components/ds-table/` (or current table folder) `*.mcp.ts`
- `packages/design-system/src/components/ds-tabs/` `*.mcp.ts`
- layout component folder `*.mcp.ts` (the DS layout/shell component the sanitizer still fails on)
- `packages/design-system/src/components/**/__tests__/__snapshots__/*.docs.snap`
- `packages/mcp/src/instructions.md`
- `packages/mcp/ARCHITECTURE.md`
- `packages/mcp/src/__tests__/` if the provider/docs contract needs a fixture for enriched fields

## Steps

- [ ] Add `packages/design-system/scripts/enrich-mcp-manifest.ts` and wire it as `storybook build && <enrich>` in `packages/design-system/package.json` `build:storybook`.
- [ ] Implement sanitizer: `fn()` / `action()` rewrite, public import field, `Ds*Props`-only prop table, Default canonical example (children vs icon-only), `@deprecated` + successor, drop Fragment/HOC snippets.
- [ ] Rewrite `packages/mcp/src/instructions.md` (component-first retrieval, no mandatory full Guidelines crawl, inlined tokens/spacing/layout, trap one-liners).
- [ ] Support optional `ds-{name}/ds-{name}.mcp.ts` merge into the same component records.
- [ ] Add overlays for toaster, table, tabs, and layout.
- [ ] Update `packages/mcp/ARCHITECTURE.md` to document the post-process step.
- [ ] Refresh `*.docs.snap` snapshots and MCP tests against the enriched manifest.

## Skills per step

- Enricher + overlay type: `ts-standards`
- Prop-table filter (declared `Ds*Props` keys only): `component-api`
- Golden refresh: `docs-tests`

## Verify

- `pnpm eslint` on the enricher script, overlay files, MDX-adjacent TS, and `packages/mcp/src/`
- `pnpm --filter @drivenets/design-system typecheck`
- `pnpm --filter @drivenets/design-system-mcp typecheck`
- `pnpm --filter @drivenets/design-system-mcp test src/__tests__/ --run`
- `pnpm test:storybook-docs -- tests/storybook/docs-snippets.docs.test.ts --run`
