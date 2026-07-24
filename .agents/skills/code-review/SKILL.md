---
name: code-review
description: Apply when preparing a PR, reviewing code changes, running git diff, or generating a changeset. Use when user says "review", "PR prep", "code review", or "changeset".
---

# PR Workflow & Code Review

## Git & PR Workflow

| Requirement                            | Details                                                                     |
| -------------------------------------- | --------------------------------------------------------------------------- |
| **No force-push after review**         | GitHub loses review history; use merge commits instead                      |
| **Changelog required**                 | Run `pnpm changelog` before merge                                           |
| **Conventional commits**               | PR title must follow conventional commit format                             |
| **Separate concerns**                  | Unrelated changes go in separate PRs; easier revert and isolation           |
| **Changeset messages are user-facing** | Write "Add X to Y" or "Fix X in Y", not implementation details              |
| **`skip changelog` label**             | Use only for non-user-facing changes (CI, tests, docs); never for bug fixes |
| **Use `--frozen-lockfile`**            | Run `pnpm install --frozen-lockfile` to avoid unnecessary lockfile changes  |
| **Deprecation rules**                  | Add to `@drivenets/eslint-plugin-design-system` when deprecating            |

```markdown
<!-- Good changeset message -->

Add DsCard component

<!-- Bad changeset message - implementation details -->

Refactor card to use CSS modules and fix hover state selector specificity
```

---

## Code Review Process

1. Get diff: `git diff origin/main`
2. Review every changed file — read the matching skill(s) **fully** for paths in the diff:

| Changed paths                    | Skills                                                                               |
| -------------------------------- | ------------------------------------------------------------------------------------ |
| `ds-*.types.ts`                  | [component-api](../component-api/SKILL.md), [ts-standards](../ts-standards/SKILL.md) |
| `ds-*.tsx` (not stories/tests)   | [react-patterns](../react-patterns/SKILL.md); [ark-ui](../ark-ui/SKILL.md) if Ark    |
| `*.stories.tsx`                  | [storybook](../storybook/SKILL.md), [react-patterns](../react-patterns/SKILL.md)     |
| `*.browser.test.tsx`             | [browser-tests](../browser-tests/SKILL.md)                                           |
| `*.docs.test.ts` / `*.docs.snap` | [docs-tests](../docs-tests/SKILL.md)                                                 |
| `*.module.scss`                  | [scss](../scss/SKILL.md)                                                             |
| `*.figma.ts` (Code Connect)      | [figma-to-component](../figma-to-component/SKILL.md); validate parse (see step 3)    |

3. When any `*.figma.ts` (Figma Code Connect) file is in the diff, validate that all Code Connect files still parse: `pnpm --filter @drivenets/design-system figma:lint` (see [AGENTS.md#figma-code-connect-parse](../../../AGENTS.md#figma-code-connect-parse)). Flag any file that fails to parse.
4. Flag only clear, high-severity issues (max 10 inline comments)

### Inline comment format

```typescript
/**
 * REVIEW-[SEVERITY]: [ISSUE DESCRIPTION]
 */
```

- One issue per comment; place on the exact changed line
- Natural tone, specific and actionable; do not mention automated or high-confidence
- Severity: 🚨 Critical 🔒 Security ⚡ Performance ⚠️ Logic ✨ Improvement

---

## PR Checklist

Before submitting a PR:

- [ ] Changelog added (`pnpm changelog`) with user-facing message
- [ ] Behavioral coverage in `*.browser.test.tsx` where interactions matter
- [ ] Browser tests use a11y queries (no test-ids unless unavoidable)
- [ ] CSS uses design tokens, no `!important`
- [ ] No inline styles in stories
- [ ] Props layer doesn't expose library internals
- [ ] Types exported from `.types.ts` with variant arrays
- [ ] Code is well-spaced and readable
- [ ] Matches Figma design
- [ ] Figma Code Connect parses (`pnpm --filter @drivenets/design-system figma:lint`) when `*.figma.ts` changed
- [ ] Sibling `*.figma.ts` mapping still matches the component API when props/variants/defaults changed (parse alone won't catch drift)
- [ ] Storybook examples show all states (controlled + localized)
- [ ] No cross-component internal imports
- [ ] No unnecessary `useMemo`/`useCallback` (except under `ds-table/` — excluded from React Compiler; see [react-patterns](../react-patterns/SKILL.md))
- [ ] Check Ark UI for existing primitives before custom implementation
- [ ] No `overflow: hidden` as a band-aid for layout bugs
- [ ] No raw `<img>` — use DS components (e.g., `DsAvatar`) with fallback
- [ ] No leftover code from abandoned implementation approaches
- [ ] No `-webkit-*` without cross-browser fallback or `@supports` guard
- [ ] AI-generated tests actually assert meaningful behavior (not duplicate/trivial)
