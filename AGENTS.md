# Code Quality Checkers

Run checkers **only on changed files/directories** to keep feedback fast. Run from **workspace root**.

## Linting (eslint)

```bash
pnpm eslint packages/design-system/src/components/ds-button/ds-button.tsx
pnpm eslint packages/eslint-plugin/src/
pnpm eslint --fix packages/design-system/src/components/ds-button/
```

## Type Checking (tsgo)

```bash
pnpm --filter @drivenets/design-system typecheck
pnpm --filter @drivenets/eslint-plugin-design-system typecheck
pnpm --filter @drivenets/vite-plugin-design-system typecheck
```

## Tests (vitest)

```bash
pnpm --filter @drivenets/design-system test packages/design-system/tests/exports.test.ts --run
pnpm --filter @drivenets/eslint-plugin-design-system test src/__tests__/ --run
pnpm --filter @drivenets/vite-plugin-design-system test --run -t "snapshot"
```

## When to Run What

| Changed                    | Run                                     |
| -------------------------- | --------------------------------------- |
| `*.test.ts` file           | `pnpm --filter <pkg> test <path> --run` |
| Source file with tests     | Lint the file + run related tests       |
| Source file, no tests      | Lint the file + typecheck the package   |
| SCSS file in design-system | Lint the file                           |

## Notes

- `--run` flag prevents vitest watch mode
- design-system typecheck auto-generates SCSS type defs
- Prefer file-level lint, package-level typecheck, file-level test

---

## Monorepo Structure

```
packages/
├── design-system/              # @drivenets/design-system
├── eslint-plugin/              # @drivenets/eslint-plugin-design-system
├── vite-plugin/                # @drivenets/vite-plugin-design-system
├── eslint-plugin-internal/     # @drivenets/eslint-plugin-internal
├── commitlint-plugin-internal/ # @drivenets/commitlint-plugin-internal
```

## Design-system package

`packages/design-system/src/components/ds-{name}/`

### Component layout

```
ds-{name}/
├── index.ts
├── ds-{name}.tsx
├── ds-{name}.types.ts
├── ds-{name}.module.scss
├── ds-{name}.stories.tsx
└── __tests__/ds-{name}.browser.test.tsx   # optional, recommended
```

### Skills by file type (read fully)

- Checkers — [Code Quality Checkers](#code-quality-checkers) above
- New component — [`component-scaffold`](.agents/skills/component-scaffold/SKILL.md)
- Figma URL — [`figma-to-component`](.agents/skills/figma-to-component/SKILL.md)
- `ds-*.types.ts` — [`component-api`](.agents/skills/component-api/SKILL.md), [`ts-standards`](.agents/skills/ts-standards/SKILL.md)
- `ds-*.tsx` — [`react-patterns`](.agents/skills/react-patterns/SKILL.md); [`ark-ui`](.agents/skills/ark-ui/SKILL.md) if Ark primitive
- `*.module.scss` — [`scss`](.agents/skills/scss/SKILL.md)
- `*.stories.tsx` — [`storybook`](.agents/skills/storybook/SKILL.md)
- `*.browser.test.tsx` — [`browser-tests`](.agents/skills/browser-tests/SKILL.md)
- Storybook `play` → tests — [`migrate-story-tests`](.agents/skills/migrate-story-tests/SKILL.md)
- PR / review — [`code-review`](.agents/skills/code-review/SKILL.md), [`pr-prep`](.agents/skills/pr-prep/SKILL.md)
- Plan / debug / TDD — [`grill-me`](.agents/skills/grill-me/SKILL.md), [`to-plan`](.agents/skills/to-plan/SKILL.md), [`diagnose`](.agents/skills/diagnose/SKILL.md), [`tdd`](.agents/skills/tdd/SKILL.md)
- Subagents — `ds-component-builder`, `ds-browser-test-writer`, `ds-review`, `ds-verifier` (see [Cursor subagents](#cursor-subagents-cursoragents))

**Primitives:** Ark UI first → TanStack for data-heavy → custom last. Radix: existing only.

## Other packages

### `@drivenets/eslint-plugin-design-system`

- **Import:** ESLint APIs, TypeScript only — no React, no design-system
- **Lint:** `pnpm eslint packages/eslint-plugin/src/`
- **Typecheck:** `pnpm --filter @drivenets/eslint-plugin-design-system typecheck`
- **Test:** `pnpm --filter @drivenets/eslint-plugin-design-system test src/__tests__/ --run`

### `@drivenets/vite-plugin-design-system`

- **Import:** Vite APIs only — no React, no design-system
- **Lint:** `pnpm eslint packages/vite-plugin/src/`
- **Typecheck:** `pnpm --filter @drivenets/vite-plugin-design-system typecheck`
- **Test:** `pnpm --filter @drivenets/vite-plugin-design-system test --run -t "snapshot"`

### Shared conventions (eslint-plugin, vite-plugin, internal plugins)

Use skill [`ts-standards`](.agents/skills/ts-standards/SKILL.md) for full rules. Summary:

- No redundant JSDoc — don't restate prop name or type
- Export variant arrays as `as const`; `Object.freeze` exported config/mapping objects
- Whitespace between logical chunks; early returns; name magic numbers
- kebab-case files; barrel exports use `index.ts` not `index.tsx`

## Additional rules

- **Domain glossary:** [CONTEXT.md](CONTEXT.md) · **ADRs:** [docs/adr/](docs/adr/)
- **Flows:** [docs/agents/skills.md](docs/agents/skills.md)
- **Subagents:** [docs/agents/subagents.md](docs/agents/subagents.md)

## Cursor subagents (`.cursor/agents/`)

- `ds-verifier` — readonly; after work claimed done — run checkers on changed files only
- `ds-component-builder` — new or extended `ds-*` component end-to-end
- `ds-browser-test-writer` — `*.browser.test.tsx` or Storybook `play` → browser tests
- `ds-review` — readonly; PR review on design-system diff

Invoke: `/ds-verifier`, `/ds-component-builder`, etc. See [docs/agents/subagents.md](docs/agents/subagents.md) for vs-skills and Claude Code setup.

## Project skills

All skills live in `.agents/skills/` (edit in PRs). Read each `SKILL.md` fully when invoked.

### Design-system

File → skill routing: [Design-system package](#design-system-package). Skill bodies:

- [`ark-ui`](.agents/skills/ark-ui/SKILL.md) — before custom ds-\* component; Ark MCP and primitive integration
- [`component-api`](.agents/skills/component-api/SKILL.md) — edit `*.types.ts`; public props API, variants, locale
- [`react-patterns`](.agents/skills/react-patterns/SKILL.md) — edit design-system `*.tsx`; hooks, ref, memoization, state
- [`scss`](.agents/skills/scss/SKILL.md) — edit `*.scss`; tokens, focus/disabled, CSS modules
- [`ts-standards`](.agents/skills/ts-standards/SKILL.md) — edit `.ts` / `.tsx`; JSDoc, exports, Object.freeze
- [`browser-tests`](.agents/skills/browser-tests/SKILL.md) — add/edit `*.browser.test.tsx`; Vitest browser patterns, a11y queries, Ark locators
- [`storybook`](.agents/skills/storybook/SKILL.md) — edit `*.stories.tsx`; story variants, mockdate, args, no play functions
- [`component-scaffold`](.agents/skills/component-scaffold/SKILL.md) — "scaffold a new component"; orchestrator for files, exports, skill read order
- [`figma-to-component`](.agents/skills/figma-to-component/SKILL.md) — Figma URL; tokens and scaffold from design
- [`migrate-story-tests`](.agents/skills/migrate-story-tests/SKILL.md) — "migrate tests for ds-X"; Storybook `play` → browser tests
- [`code-review`](.agents/skills/code-review/SKILL.md) — "review my changes"; PR checklist and inline review
- [`pr-prep`](.agents/skills/pr-prep/SKILL.md) — "prepare my PR"; lint, typecheck, test on diff, changeset
- [`deslop`](.agents/skills/deslop/SKILL.md) — "clean up this code"; remove AI slop, fix style
- [`get-pr-comments`](.agents/skills/get-pr-comments/SKILL.md) — "get PR comments"; summarize active PR review comments

### Engineering

- [`diagnose`](.agents/skills/diagnose/SKILL.md) — hard bugs or perf regressions; reproduce → minimize → hypothesize → instrument → fix
- [`tdd`](.agents/skills/tdd/SKILL.md) — test-first implementation; red-green-refactor
- [`grill-me`](.agents/skills/grill-me/SKILL.md) — stress-test a plan; one question at a time until decisions locked (default before implementation)
- [`grill-with-docs`](.agents/skills/grill-with-docs/SKILL.md) — like grill-me plus CONTEXT.md / ADR updates; cross-cutting domain or irreversible architecture
- [`to-plan`](.agents/skills/to-plan/SKILL.md) — after grill-me; package locked decisions into a concise execution plan (no new planning)
- [`improve-codebase-architecture`](.agents/skills/improve-codebase-architecture/SKILL.md) — on demand; find deepening/refactor opportunities against CONTEXT.md and ADRs
- [`handoff`](.agents/skills/handoff/SKILL.md) — mid-session; compact conversation for another agent (reference `/to-plan` output, do not duplicate)
- [`write-a-skill`](.agents/skills/write-a-skill/SKILL.md) — author a new skill in `.agents/skills/`
