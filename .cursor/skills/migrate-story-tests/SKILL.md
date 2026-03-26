---
name: migrate-story-tests
description: Migrate Storybook play functions to Vitest browser tests. Use when the user says "migrate tests for ds-X", "move play to browser tests", or "convert story tests".
---

# Migrate Story Tests Skill

Converts Storybook `play` functions into `*.browser.test.tsx` files using Vitest browser mode, then cleans up the story file.

## API Translation

| Storybook (`storybook/test`)                     | Vitest browser (`vitest`, `vitest/browser`)                 |
| ------------------------------------------------ | ----------------------------------------------------------- |
| `within(canvasElement)`                          | `page` (top-level, no scoping needed)                       |
| `canvas.getByRole('button', { name })`           | `page.getByRole('button', { name })`                        |
| `canvas.getByText('...')`                        | `page.getByText('...')`                                     |
| `userEvent.click(el)`                            | `await locator.click()`                                     |
| `userEvent.click(el, { pointerEventsCheck: 0 })` | `await locator.click({ force: true })`                      |
| `userEvent.type(el, 'text')`                     | `await locator.fill('text')`                                |
| `userEvent.clear(el)`                            | `await locator.clear()`                                     |
| `userEvent.hover(el)`                            | `await locator.hover()`                                     |
| `userEvent.unhover(el)`                          | `await locator.unhover()`                                   |
| `userEvent.keyboard('{Enter}')`                  | `await locator.press('Enter')`                              |
| `expect(el).toBeChecked()`                       | `await expect.element(locator).toBeChecked()`               |
| `expect(el).toBeDisabled()`                      | `await expect.element(locator).toBeDisabled()`              |
| `expect(el).toBeInTheDocument()`                 | `await expect.element(locator).toBeInTheDocument()`         |
| `expect(el).toBeVisible()`                       | `await expect.element(locator).toBeVisible()`               |
| `expect(el).toHaveAttribute(k, v)`               | `await expect.element(locator).toHaveAttribute(k, v)`       |
| `expect(el).toHaveTextContent('...')`            | `await expect.element(locator).toHaveTextContent('...')`    |
| `waitFor(() => expect(...))`                     | Direct `await` (Vitest locators auto-retry)                 |
| `fn()` (in story args for Actions tab)           | `vi.fn()` in test; keep `fn()` in stories for Actions tab   |
| `{ args }` from play context                     | Props passed directly to `page.render(<Comp {...props} />)` |

## Steps

### Step 1: Identify play functions

Find all `play:` entries in the target story file:

```bash
rg 'play\s*:' packages/design-system/src/components/ds-{name}/ds-{name}.stories.tsx
```

For each story with a `play` function, note:

- The story name (e.g. `Default`, `Controlled`, `Disabled`)
- The `args` and `render` function if present
- What the play function asserts

### Step 2: Create or extend browser test file

Target: `packages/design-system/src/components/ds-{name}/__tests__/ds-{name}.browser.test.tsx`

If the file already exists, merge new tests without duplicating existing coverage.

Structure:

```tsx
import { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';
import DsName from '../ds-name';

describe('DsName', () => {
  it('should ...', async () => {
    await page.render(<DsName ... />);
    // assertions
  });
});
```

Translation rules:

1. Each `play` function becomes one or more `it()` blocks grouped by behavior.
2. Replace `within(canvasElement)` scoping with `page` -- locators are global.
3. Replace `userEvent.click(el)` with `await locator.click()`.
4. Replace `expect(el).toBeX()` with `await expect.element(locator).toBeX()`.
5. Remove `waitFor` wrappers -- Vitest locators auto-retry.
6. For controlled stories with `render`, inline a wrapper component using `useState` inside the test.
7. For disabled interactions, use `{ force: true }` instead of `{ pointerEventsCheck: 0 }`.
8. For disabled element queries, add `{ disabled: true }` to role options.
9. Replace `fn()` with `vi.fn()` for callback spies.

### Step 3: Clean up story file

After migrating all play functions:

1. **Remove all `play` properties** from every story object.
2. **Remove stale imports** -- if no `play` functions remain, remove `expect`, `userEvent`, `waitFor`, `within` from the `storybook/test` import. Keep `fn` if it's used in `args` for the Actions panel.
3. **Keep stories intact** -- do not remove stories themselves; they still serve as visual documentation.
4. **Preserve render functions** -- `render` in stories is for Storybook UI, not tests.

### Step 4: Verify

```bash
# Run the new browser tests
pnpm --filter @drivenets/design-system test packages/design-system/src/components/ds-{name}/__tests__/ds-{name}.browser.test.tsx --run

# Lint the changed files
pnpm eslint packages/design-system/src/components/ds-{name}/

# Typecheck
pnpm --filter @drivenets/design-system typecheck
```

All three must pass before the migration is complete.

### Step 5: Report

List what was migrated:

```
Migrated ds-{name}:
- ✓ Default: toggle checked state → should toggle checked state when clicked
- ✓ Controlled: controlled toggle → should support controlled checked state
- ✓ Disabled: disabled interaction → should not toggle when disabled
- Removed play from: Default, Controlled, Disabled, CustomLabel
- Cleaned imports: removed expect, userEvent, waitFor, within from storybook/test
```
