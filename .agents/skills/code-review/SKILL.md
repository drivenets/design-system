---
name: code-review
description: Apply when preparing a PR, reviewing code changes, running git diff, or generating a changeset. Use when user says "review", "PR prep", "code review", or "changeset".
---

# PR Workflow & Code Review

This skill holds the review checks that need judgement. Lint, typecheck, tests, Figma Code Connect parsing and changeset presence run in `pnpm agent:check` ([AGENTS.md#code-quality-checkers](../../../AGENTS.md#code-quality-checkers)); don't repeat them by hand.

## Git & PR Workflow

Branch, commit, fork and force-push rules: [AGENTS.md#git--prs](../../../AGENTS.md#git--prs). PR title, body, screenshots and labels: [create-pr](../create-pr/SKILL.md). Changeset wording: [AGENTS.md#comments--changesets](../../../AGENTS.md#comments--changesets).

| Requirement                 | Details                                                                    |
| --------------------------- | -------------------------------------------------------------------------- |
| **Use `--frozen-lockfile`** | Run `pnpm install --frozen-lockfile` to avoid unnecessary lockfile changes |
| **Deprecation rules**       | Add to `@drivenets/eslint-plugin-design-system` when deprecating           |

---

## Code Review Process

1. Get diff: `git diff "$base"` — [`$base`](../../../AGENTS.md#git--prs)
2. Review every changed file — read the matching skill(s) **fully** for paths in the diff:

| Changed paths                    | Skills                                                                               |
| -------------------------------- | ------------------------------------------------------------------------------------ |
| `ds-*.types.ts`                  | [component-api](../component-api/SKILL.md), [ts-standards](../ts-standards/SKILL.md) |
| `ds-*.tsx` (not stories/tests)   | [react-patterns](../react-patterns/SKILL.md); [ark-ui](../ark-ui/SKILL.md) if Ark    |
| `*.stories.tsx`                  | [storybook](../storybook/SKILL.md), [react-patterns](../react-patterns/SKILL.md)     |
| `*.browser.test.tsx`             | [browser-tests](../browser-tests/SKILL.md)                                           |
| `*.docs.test.ts` / `*.docs.snap` | [docs-tests](../docs-tests/SKILL.md)                                                 |
| `*.module.scss`                  | [scss](../scss/SKILL.md)                                                             |
| `*.figma.ts` (Code Connect)      | [figma-to-component](../figma-to-component/SKILL.md)                                 |

3. Check the diff against the [checklist](#checklist).
4. Flag only clear, high-severity issues (max 10 inline comments). Separately, list every added comment that fails [Comments & changesets](../../../AGENTS.md#comments--changesets) as one grouped finding; it doesn't count toward the cap. To list the added comments:

   ```bash
   git diff "$base" -U0 -- '*.ts' '*.tsx' '*.scss' \
     | grep -E '^\+(.*[^:])?//|^\+.*/\*|^\+\s*\*'
   ```

   Keep a comment only if it states a _why_ the code can't show. Public JSDoc on props, components, and stories is exempt from "default none", but not from "no internals".

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

## Checklist

Checks no tool or linked skill covers:

- [ ] Matches the Figma design
- [ ] New or changed interactions have behavioral coverage in `*.browser.test.tsx` ([browser-tests](../browser-tests/SKILL.md))
- [ ] Sibling `*.figma.ts` mapping (`getEnum(...)`, `example` JSX) still matches the component API when props, variants or defaults changed; `agent:check` only checks that it parses
- [ ] No cross-component internal imports: import another component's main export, not its utilities or subcomponents
- [ ] Ark UI checked for an existing primitive before a custom implementation
- [ ] No `overflow: hidden` as a band-aid for a layout bug
- [ ] No leftover code from abandoned implementation approaches
