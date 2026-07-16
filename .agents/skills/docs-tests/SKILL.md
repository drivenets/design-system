---
name: docs-tests
description: Write and run Storybook docs snippet tests (`*.docs.test.ts`) for Show code and MCP manifest verification against production storybook-static. Use when adding or editing docs tests or verifying Autodocs snippets after story changes.
---

# Docs Tests Skill

Verify Autodocs **Show code** panel text and MCP manifest snippets in `ds-{name}/__tests__/ds-{name}.docs.test.ts` — not in `*.browser.test.tsx` ([browser-tests](../browser-tests/SKILL.md)).

Story authoring rules: [storybook](../storybook/SKILL.md) "Docs source snippets" + "Snippet verification".

## What docs tests verify

| Output           | Mechanism                                                         | Data source                                                                                            |
| ---------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| **Show code**    | Playwright opens Autodocs, clicks **Show code**, reads `pre` text | [`read-show-code.ts`](../../../packages/design-system/tests/storybook/read-show-code.ts)               |
| **MCP manifest** | HTTP `fetch` of `components.json`                                 | [`read-manifest-snippet.ts`](../../../packages/design-system/tests/storybook/read-manifest-snippet.ts) |

Both use the same `STORYBOOK_URL` from global setup — not filesystem reads, not the Storybook `/mcp` JSON-RPC endpoint.

## Production target

- `pnpm test:storybook-docs` runs `build:storybook` then vitest `--project=storybook-docs`.
- Global setup ([`setup.storybook-docs.ts`](../../../packages/design-system/vitest/setup.storybook-docs.ts)) serves `storybook-static/` on an ephemeral port (same artifact as GitHub Pages).
- Do **not** run docs tests against `pnpm start` (dev server). Show code snippets differ there because React Compiler is not applied the same way as in the production Storybook build.

## File layout

```
ds-{name}/__tests__/
├── ds-{name}.docs.test.ts
└── __snapshots__/ds-{name}.docs.test.ts.snap
```

## Quick start

```tsx
import { chromium, type Browser, type Page } from 'playwright';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { readManifestSnippet } from '../../../../tests/storybook/read-manifest-snippet';
import { readShowCodeSnippet } from '../../../../tests/storybook/read-show-code';

const DOCS_STORY_ID = 'components-breadcrumb--docs';
const COMPONENT_ID = 'components-breadcrumb';

describe('DsBreadcrumb docs snippets', () => {
  let browser: Browser;
  let page: Page;

  beforeAll(async () => {
    browser = await chromium.launch({ headless: true });
    page = await browser.newPage({ viewport: { width: 1400, height: 900 } });
  });

  afterAll(async () => {
    await browser.close();
  });

  describe('Default', () => {
    it('Show code panel matches staged authoring rules', async () => {
      const snippet = await readShowCodeSnippet(page, {
        docsStoryId: DOCS_STORY_ID,
        storyName: 'Default',
      });

      expect(snippet).toMatchSnapshot();
    });

    it('MCP manifest snippet matches staged authoring rules', async () => {
      const snippet = await readManifestSnippet(COMPONENT_ID, 'Default');

      expect(snippet).toMatchSnapshot();
    });
  });
});
```

Examples: [`ds-breadcrumb.docs.test.ts`](../../../packages/design-system/src/components/ds-breadcrumb/__tests__/ds-breadcrumb.docs.test.ts), [`ds-button-v3.docs.test.ts`](../../../packages/design-system/src/components/ds-button-v3/__tests__/ds-button-v3.docs.test.ts).

## IDs

| Constant        | Derivation                           | Example                                                   |
| --------------- | ------------------------------------ | --------------------------------------------------------- |
| `DOCS_STORY_ID` | Story `title` kebab-cased + `--docs` | `Components/ButtonV3` → `components-buttonv3--docs`       |
| `COMPONENT_ID`  | Key in built `components.json`       | `components-buttonv3` (not always `components-button-v3`) |

Confirm `COMPONENT_ID` after `pnpm build:storybook`:

```bash
node -e "const m=require('./packages/design-system/storybook-static/manifests/components.json'); console.log(Object.keys(m.components).filter(k=>k.includes('your-component')))"
```

Story names in tests match Autodocs `h3` titles (`IconOnly` → `"Icon Only"`).

## Assertions

- **Snapshots** — `expect(snippet).toMatchSnapshot()` for full-text regression.
- **Story-specific `toContain`** — when a variant has a distinguishing prop or pattern (e.g. `loading`, `type: 'code'`). No shared assertion helper; no generic `<DsX>` tag check.

| Rule                                   | Show code test                            | MCP test             |
| -------------------------------------- | ----------------------------------------- | -------------------- |
| Story-specific props or patterns       | `toContain` for the distinguishing detail | same when applicable |
| `decorators` visible in Show code only | `toContain('decorator')` when applicable  | do not assert in MCP |

## Skip

Do not add `*.docs.test.ts` coverage for stories with `docs.canvas.sourceState: 'none'` or showcase matrices tagged `!manifest`.

## Commands

```bash
pnpm --filter @drivenets/design-system test:storybook-docs packages/design-system/src/components/ds-{name}/__tests__/ds-{name}.docs.test.ts --run
```

Update snapshots after verifying output: add `--run -u`.

## Related

- Story authoring: [storybook](../storybook/SKILL.md)
- Behavioral tests: [browser-tests](../browser-tests/SKILL.md)
- PR snippet check: [pr-prep](../pr-prep/SKILL.md)
