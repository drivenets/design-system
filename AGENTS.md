# Code Quality Checkers

Run from the workspace root before you report work as done:

```bash
pnpm agent:check
```

It checks what the branch changed (commits plus uncommitted and untracked files) against the [diff base](#git--prs), and runs:

- eslint on changed JS/TS files
- stylelint on changed SCSS files
- typecheck for each changed package, and root `tsc` when root scripts changed
- tests: the changed component folders in design-system (all of its tests when shared code like hooks, utils or styles changed), `vitest --changed` in other packages
- `figma:lint` when a `*.figma.ts` changed
- changeset check: fails when a published package's `src/` (not stories, tests, Code Connect or docs) or `package.json` changed and no `.changeset/*.md` names that package. Fix with `pnpm changelog`, or pass `--no-changeset` when the change isn't user-facing (refactor, internal tooling); the PR then needs the `skip changelog` label.

It runs a package's full lint, typecheck and tests when shared config changed (root `package.json`, lockfile, `pnpm-workspace.yaml`, `tsconfig.base.json`, `eslint.config.base.ts`, `turbo.json`), when the package's own `package.json`, eslint, stylelint, tsconfig or vitest config changed, or when it depends on a changed workspace package.

It prints one PASS / FAIL / SKIP / HINT line per step, shows a step's output only when it fails, and exits non-zero on any failure. A HINT is a slower check that applies to this diff; the line gives the command. `pnpm agent:check --full` runs them too:

- docs snippet tests when stories changed (see [`docs-tests`](.agents/skills/docs-tests/SKILL.md))
- visual tests when design-system source changed. They need the Playwright server running (see [Visual tests](#visual-tests-screenshots)).

While iterating, run a single check directly:

```bash
pnpm eslint --fix packages/design-system/src/components/ds-button/
pnpm --filter @drivenets/design-system test src/components/ds-button/ --run
```

Test paths are **package-relative**: `--filter` runs vitest with the package as its cwd.

## Figma Code Connect (parse)

`pnpm --filter @drivenets/design-system figma:lint` runs `figma connect parse --exit-on-unreadable-files` (no Figma token required). `agent:check` runs it when a `*.figma.ts` changed; CI enforces it in the `figma-code-connect-lint` job.

## Visual tests (screenshots)

Stories tagged `visual` (DsTable today) get a screenshot compared to committed baselines in `stories/__screenshots__/`. The browser runs in a pinned Playwright Docker container, so start it first:

```bash
pnpm --filter @drivenets/design-system test:visual:server
pnpm --filter @drivenets/design-system test:visual src/components/ds-table/ --run
pnpm --filter @drivenets/design-system test:visual src/components/ds-table/ --run -u
```

Use `-u` only for intended visual changes, and review every changed PNG. Enforced in CI by the `visual-tests` job; on failure it uploads `visual-test-report.html` (baseline / actual / diff per story) as a run artifact. See [`storybook`](.agents/skills/storybook/SKILL.md#visual-tests).

---

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
- `docs-snippets.docs.test.ts` — [`docs-tests`](.agents/skills/docs-tests/SKILL.md)
- Storybook `play` → tests — [`migrate-story-tests`](.agents/skills/migrate-story-tests/SKILL.md)
- PR / review — [`code-review`](.agents/skills/code-review/SKILL.md), [`pr-prep`](.agents/skills/pr-prep/SKILL.md), [`create-pr`](.agents/skills/create-pr/SKILL.md)
- Ticket / bug workflow — [`implement`](.agents/skills/implement/SKILL.md) (`.md` ticket → tested), [`fix`](.agents/skills/fix/SKILL.md) (small bug / adjustment)
- Plan / debug / TDD — [`grill-me`](.agents/skills/grill-me/SKILL.md), [`to-plan`](.agents/skills/to-plan/SKILL.md), [`diagnose`](.agents/skills/diagnose/SKILL.md), [`tdd`](.agents/skills/tdd/SKILL.md)
- Subagents — `ds-component-builder`, `ds-browser-test-writer`, `ds-review`, `ds-verifier` (see [Subagents](#subagents))

**Primitives:** Ark UI first → TanStack for data-heavy → custom last. Radix: existing only.

## Other packages

The commands below are for iterating on one package; `pnpm agent:check` is the check before you report done.

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

## Comments & changesets

Applies to every package. Comments drift from the code and every future reader pays for them; the diff and PR already say what changed. When in doubt, write less.

**Code comments** (`.ts`, `.tsx`, `.scss`)

- Default: none. Names, types, and tests carry the meaning.
- Allowed only for a _why_ the code can't show — browser quirk, spec or a11y constraint, workaround (link the issue). One line.
- Never: restate what the code does, narrate the change (`now`, `previously`, `fixed`, `changed to`), ticket IDs, multi-line walkthroughs.
- `TODO` only with a linked issue.
- Public JSDoc (props, components, stories) is consumer docs — follow [`component-api`](.agents/skills/component-api/SKILL.md) and [`storybook`](.agents/skills/storybook/SKILL.md). Describe behavior, not internals.
- Before finishing, run the [`code-review` comment check](.agents/skills/code-review/SKILL.md#code-review-process) and delete each added comment that fails this bar.

| Bad                                                                | Good                                                                    |
| ------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| `// Now uses pointer-events: none instead of visibility (AR-1234)` | `// Stays mounted for the exit animation, so it must not catch clicks.` |
| `// Loop over rows and collect the selected ids`                   | No comment.                                                             |
| `/* Scrollbar: 10px at rest, 12px on hover, darker thumb … */`     | No comment; the values are in the code.                                 |
| No comment on a workaround                                         | `// Zag leaves this wrapper clickable; see <issue link>`                |

**Changesets** (`pnpm changelog`)

- One sentence: what a consumer can now do, or no longer hits. Name the component or prop in backticks.
- No cause, mechanism, CSS values, internals, or test notes — those go in the PR description.
- Breaking change: add one line per migration step, `before` → `after`.

| Bad                                                                                                                                            | Good                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| Fix `DsDrawer` intercepting pointer events while closed. A closed (or closing) drawer stays mounted and transformed; for inset/offset drawers… | Fix a closed `DsDrawer` blocking clicks on content beneath it. |
| Scrollbars now auto-hide and only show on hover. At rest the thumb is subtle (10px); on hover it widens (12px) and darkens…                    | Auto-hide scrollbars until hover.                              |
| Refactor card to use CSS modules and fix hover state selector specificity                                                                      | Fix `DsCard` hover state.                                      |

## Git & PRs

- **Branch:** include the Jira key and 2–4 lowercase kebab-case words, e.g. `fix/AR-1234-tooltip-overflow`. Cloud sessions and Routines keep their `claude/` prefix: `claude/AR-1234-tooltip-overflow`. A personal prefix such as `drivenets/<your-name>/` is fine.
- **Commits:** `type(scope): description [AR-XXXX]` — Conventional Commits with the Jira key, enforced by [commitlint](commitlint.config.ts). Use `!` only for breaking changes.
- **Forks:** push to your fork; open PRs against `drivenets/design-system` `main` (hotfix PRs: `release/**`). Start cloud sessions on your fork. Never push to a `dependabot/*` branch — take it over in your own branch and close the original.
- **Diff base:** your fork's `main` is usually stale, so diff against the merge base with upstream (`pnpm agent:check` finds it for you):

  ```bash
  upstream=$(git remote -v | awk '/[:\/]drivenets\/design-system(\.git)? \(fetch\)/ {print $1; exit}')
  git fetch -q "$upstream" main && base=$(git merge-base HEAD "$upstream/main")
  ```

- **After review:** no force-push, squash, or amend — add commits.
- **Scope:** one concern per PR; unrelated changes go in separate PRs.
- **Opening a PR:** [`create-pr`](.agents/skills/create-pr/SKILL.md).

## Additional rules

- **Domain glossary:** [CONTEXT.md](CONTEXT.md) · **ADRs:** [docs/adr/](docs/adr/)
- **DS MCP:** [packages/mcp/README.md](packages/mcp/README.md) — Storybook docs for agents (`list-all-documentation`, `get-documentation`); local dev uses `pnpm start` + `--manifests-url http://localhost:6006`. Story edits: verify snippets via [`docs-tests`](.agents/skills/docs-tests/SKILL.md) and [storybook Snippet verification](.agents/skills/storybook/SKILL.md#snippet-verification-mandatory).
- **Claude Code cloud environment:** [docs/agents/cloud-environment.md](docs/agents/cloud-environment.md)
- **Routines (scheduled Claude sessions):** [docs/agents/routines/](docs/agents/routines/README.md)

## Subagents

`ds-verifier` (readonly; checkers on changed files after work is claimed done), `ds-component-builder`, `ds-browser-test-writer`, `ds-review` (readonly; PR review). They live in `.cursor/agents/`; `.claude/agents` links there. Invoke `/ds-verifier` etc. — see [docs/agents/subagents.md](docs/agents/subagents.md).

## Project skills

All skills live in `.agents/skills/` (edit in PRs). Both tools list them by their `description`; read each `SKILL.md` fully when invoked. File → skill routing: [Design-system package](#design-system-package). Flows: [docs/agents/skills.md](docs/agents/skills.md).
