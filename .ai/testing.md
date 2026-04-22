# Testing

## Test Framework

Vitest 4 with four test projects configured in `packages/design-system/vitest.config.ts`.

## Test Projects

| Project          | File pattern                     | Runner              | Purpose                                          |
| ---------------- | -------------------------------- | ------------------- | ------------------------------------------------ |
| `unit`           | `*.unit.test.{ts,tsx}`           | Node (CSS enabled)  | Pure logic, utilities, hooks                     |
| `browser`        | `*.browser.test.{ts,tsx}`        | Playwright Chromium | Component rendering, interaction, visual         |
| `storybook`      | Via `@storybook/addon-vitest`    | Playwright Chromium | Storybook play function tests + a11y             |
| `requires-build` | `*.requires-build.test.{ts,tsx}` | Node                | Tests that depend on built output (exports, CSS) |

## Running Tests

```bash
pnpm test                          # all except requires-build
pnpm test:coverage                 # with coverage report (90% line threshold)
pnpm test:requires-build           # only requires-build (runs after pnpm build)
pnpm vitest --project=browser      # only browser tests
pnpm vitest --project=storybook    # only Storybook play tests
```

## Browser Tests

Browser tests use **Playwright via Vitest browser mode** (`@vitest/browser-playwright`).
The setup file (`vitest/setup.browser.ts`) loads global styles so components
render with real CSS tokens.

Test files live alongside components:

```
src/components/ds-button/__tests__/ds-button.browser.test.tsx
```

Typical pattern:

```typescript
import { render } from 'vitest-browser-react';
import { DsButton } from '../ds-button';

it('renders with primary variant', async () => {
  const { getByRole } = render(<DsButton variant="primary">Click</DsButton>);
  await expect.element(getByRole('button')).toBeVisible();
});
```

## Storybook Play Tests

Stories with `play` functions are executed as tests via `@storybook/addon-vitest`.
The `.storybook/vitest.setup.ts` file configures portable stories with a11y
annotations, so accessibility checks run automatically.

## Coverage

- Threshold: **90% lines**
- Provider: `@vitest/coverage-v8`
- Excludes: stories, SCSS files, deprecated component paths, type files

## File Naming Conventions

| Suffix                     | Test type                              |
| -------------------------- | -------------------------------------- |
| `*.unit.test.ts`           | Unit test (Node)                       |
| `*.browser.test.tsx`       | Browser test (Playwright)              |
| `*.test.ts`                | Ambiguous — treated as unit by default |
| `*.requires-build.test.ts` | Post-build integration test            |
