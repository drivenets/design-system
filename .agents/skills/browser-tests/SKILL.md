---
name: browser-tests
description: Write and extend Vitest browser tests for design-system components. Use when adding or editing `*.browser.test.tsx`, writing behavioral coverage, or moving assertions out of Storybook.
---

# Browser Tests Skill

Behavioral coverage lives next to the component: `ds-{name}/__tests__/ds-{name}.browser.test.tsx`. Stories document UI and controls only.

## Quick start

```tsx
import { describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';
import DsWidget from '../ds-widget';

describe('DsWidget', () => {
  it('calls onSave when submitted', async () => {
    const onSave = vi.fn();
    await page.render(<DsWidget onSave={onSave} />);

    await page.getByRole('button', { name: /save/i }).click();
    expect(onSave).toHaveBeenCalledOnce();
  });
});
```

## Principles

1. **Stories document UI**; assert behavior in `*.browser.test.tsx`.
2. **Spy callbacks with `vi.fn()`** in tests (not Storybook `fn()`).
3. **Prefer a11y queries**: `page.getByRole`, `getByLabelText`, `getByText` — avoid `getByTestId` unless unavoidable.
4. **Use Vitest browser matchers**: `await expect.element(locator).toBeChecked()`, `toBeDisabled()`, `toBeVisible()`, etc.
5. **Await async UI**: `await locator.click()`, `await expect.element(...)`.
6. **Test user-visible behavior**, not implementation details; use `data-*` only when it is an explicit contract (e.g. indeterminate state).
7. **Disabled / blocked interaction**: `await locator.click({ force: true })` when asserting a disabled control does not change state.
8. **Controlled components**: inline wrapper with `useState` inside the test.
9. **Prop changes**: `const { rerender } = await page.render(...)` then `await rerender(<Comp ... />)`.
10. **Hover**: `await locator.hover()` / `await locator.unhover()` for tooltip-style UI.
11. **Nested locators**: scope within parent — `parentLocator.getByText(...)`.
12. **`toBeInTheDocument` vs `toBeVisible`**: `not.toBeInTheDocument()` for removed DOM; `not.toBeVisible()` for hidden.
13. **Disabled queries**: `page.getByRole('checkbox', { disabled: true })`.

## Common patterns

### Callback spy

```tsx
const onCheckedChange = vi.fn();
await page.render(<DsCheckbox onCheckedChange={onCheckedChange} />);
await page.getByRole('checkbox').click();
expect(onCheckedChange).toHaveBeenCalledWith(true);
```

### Controlled state

Inline wrapper with `useState` — same pattern as [react-patterns](../react-patterns/SKILL.md) controlled stories.

### Disabled — no state change

```tsx
const checkbox = page.getByRole('checkbox', { disabled: true });
await expect.element(checkbox).toBeDisabled();
await checkbox.click({ force: true });
await expect.element(checkbox).not.toBeChecked();
```

### Rerender

```tsx
const { rerender } = await page.render(<DsTooltip content={undefined}>...</DsTooltip>);
await rerender(<DsTooltip content="Now visible">...</DsTooltip>);
```

### Ark UI parts (last resort)

Use when a11y queries cannot express the contract (e.g. `data-state="indeterminate"`, row checkbox label hit target in tables):

```tsx
const CHECKBOX_ROOT = '[data-scope="checkbox"][data-part="root"]';

const checkboxRoot = (idx = 0) =>
  page.elementLocator(document.querySelectorAll<HTMLElement>(CHECKBOX_ROOT)[idx] as HTMLElement);

await expect.element(checkboxRoot()).toHaveAttribute('data-state', 'indeterminate');
await page.elementLocator(selectAllRoot).click();
```

- Prefer `getByRole` / `getByLabelText` / `getByText` first.
- Use `data-scope` + `data-part` from Ark styling guide — not arbitrary selectors.
- Hoist repeated selectors to a file-level helper; one-line comment if non-obvious.
- `page.elementLocator(domNode)` wraps raw DOM when Vitest needs a locator API.

## Anti-patterns

Reject or rewrite tests that only prove something mounted:

| Smell                                                                                                 | Fix                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `expect(x).toBeTruthy()` with no interaction                                                          | Action + asserted outcome                                                                         |
| `toBeInTheDocument()` / `toBeVisible()` alone for a scenario named "toggles", "calls onX", "disabled" | Assert checked/disabled state, spy calls, text change, or `not.toBeInTheDocument()` after unmount |
| Duplicate "renders" `it` blocks                                                                       | Merge or delete — one smoke test max per component                                                |
| `getByTestId` when role/label works                                                                   | Use a11y queries                                                                                  |

**Good:** click → `toBeChecked()` + `vi.fn()` called with expected arg.

**Bad:** render → `toBeVisible()` only (says nothing about the scenario name).

## Verify

```bash
pnpm --filter @drivenets/design-system test packages/design-system/src/components/ds-{name}/__tests__/ds-{name}.browser.test.tsx --run
pnpm eslint packages/design-system/src/components/ds-{name}/
```

## Related

- **Migrate from Storybook play**: [migrate-story-tests](../migrate-story-tests/SKILL.md)
- **New component**: [component-scaffold](../component-scaffold/SKILL.md)
- **React state in tests**: [react-patterns](../react-patterns/SKILL.md)
- **Examples**: `packages/design-system/src/components/*/__tests__/*.browser.test.tsx`
