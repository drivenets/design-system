# Interaction testing in Vitest browser mode

User-visible behavior (clicks, keyboard, open/close, callbacks) is asserted in **Browser tests** (`*.browser.test.tsx`). **Stories** document appearance and Storybook controls only — no `play` functions.

Storybook `play` duplicated test logic, was flaky with Ark timers, and mixed documentation with CI assertions. Browser tests run in real DOM with a11y queries and align with Vitest in this monorepo. Presentational-only **Components** may omit **Browser tests**; anything with interaction worth regressing should have them.
