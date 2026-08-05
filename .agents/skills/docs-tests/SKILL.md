---
name: docs-tests
description: Write and run Storybook docs snippet tests (`*.docs.test.ts`) for Show code and MCP manifest verification against production storybook-static. Use when adding or editing docs tests or verifying Autodocs snippets after story changes.
user-invocable: false
---

# Docs Tests Skill

Verify Autodocs **Show code** panel text and MCP manifest snippets via the global [`docs-snippets.docs.test.ts`](../../../packages/design-system/tests/storybook/docs-snippets.docs.test.ts) — not in `*.browser.test.tsx` ([browser-tests](../browser-tests/SKILL.md)).

Story authoring rules: [storybook](../storybook/SKILL.md) "Docs source snippets" + "Snippet verification".

## What docs tests verify

| Output           | Mechanism                                                         | Data source                                                                                        |
| ---------------- | ----------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| **Show code**    | Playwright opens Autodocs, clicks **Show code**, reads `pre` text | [`read-show-code.ts`](../../../packages/design-system/tests/storybook/read-show-code.ts)           |
| **MCP manifest** | HTTP `fetch` of `components.json`                                 | [`components-manifest.ts`](../../../packages/design-system/tests/storybook/components-manifest.ts) |

Both use the same `STORYBOOK_URL` from global setup — not filesystem reads, not the Storybook `/mcp` JSON-RPC endpoint.

## Production target

- `pnpm test:storybook-docs` runs turbo `test:storybook-docs` (depends on cached `build:storybook` + `install:playwright`), then vitest `--project=storybook-docs`.
- Global setup ([`setup.storybook-docs.ts`](../../../packages/design-system/vitest/setup.storybook-docs.ts)) serves `storybook-static/` on an ephemeral port (same artifact as GitHub Pages).
- Do **not** run docs tests against `pnpm start` (dev server). Show code snippets differ there because React Compiler is not applied the same way as in the production Storybook build.

## File layout

```
packages/design-system/tests/storybook/
└── docs-snippets.docs.test.ts

ds-{name}/__tests__/__snapshots__/
└── ds-{name}.docs.snap
```

Coverage is centralized in the global test runner; each component gets one aggregated golden snapshot file colocated in its `__tests__/__snapshots__/` folder.

## Opt in a component

Add one kebab folder suffix (the `ds-` prefix is implied) to the `COMPONENTS` allowlist in [`docs-snippets.docs.test.ts`](../../../packages/design-system/tests/storybook/docs-snippets.docs.test.ts):

```ts
const COMPONENTS = ['button-v3', 'breadcrumb', 'your-component'];
```

The runner builds the folder as `ds-${name}`, fetches `storybook-static/manifests/components.json` once (cached in [`components-manifest.ts`](../../../packages/design-system/tests/storybook/components-manifest.ts)), resolves each entry by matching `path` (`path.includes('/ds-${name}/')`), and snapshots every manifest story (stories tagged `!manifest` are already excluded from the manifest). Path matching is used because the manifest id derives from the story title via Storybook's `toId` (`Components/ButtonV3` → `components-buttonv3`) and is not recoverable from the folder name.

No per-component test file, no manual story enumeration, no `DOCS_STORY_ID` / `COMPONENT_ID` constants.

## How it works

1. Top-level `await` fetches `components.json` from the served `storybook-static/`.
2. Allowlisted components are resolved by folder name against each entry's `path`.
3. For each component, one test collects Show code + MCP manifest snippets for every manifest story and writes a single aggregated golden document via `toMatchFileSnapshot`.
4. Golden files are colocated at `src/components/<folder>/__tests__/__snapshots__/<folder>.docs.snap`.

If a story has no Autodocs **Show code** button, the test fails loudly. Non-Show-code stories must be tagged `!manifest` so they are excluded from the manifest.

## Assertions

- **Snapshot only** — one aggregated golden file per component via `expect(document).toMatchFileSnapshot(path)`. Each file contains every story's Show code and MCP manifest snippets. No per-story `toContain` guards.

## Skip

Stories with `docs.canvas.sourceState: 'none'` or showcase matrices must be tagged `!manifest` so they are excluded from `components.json` and therefore from docs test coverage.

## Commands

```bash
pnpm test:storybook-docs -- tests/storybook/docs-snippets.docs.test.ts --run
```

Update snapshots after verifying output: add `--run -u`.

## Stage 2 (future)

Once every component is in the allowlist, delete `COMPONENTS` and iterate `Object.values(manifest.components)`, deriving each folder from its `path`, for zero-maintenance full coverage.

## Related

- Story authoring: [storybook](../storybook/SKILL.md)
- Behavioral tests: [browser-tests](../browser-tests/SKILL.md)
- PR snippet check: [pr-prep](../pr-prep/SKILL.md)
