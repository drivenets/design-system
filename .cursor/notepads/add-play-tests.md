## Add Play Tests to Stories

Look at the current file (or the file I specify). Find all exported stories that are missing a `play` function.

For each story without `play`, generate an interaction test following these rules:

1. Import `{ expect, fn, userEvent, within }` from `'storybook/test'`
2. Use `fn()` for all callback args in the story's `args`
3. Use a11y queries only: `getByRole`, `getByLabelText`, `getByText` -- never `getByTestId`
4. Use semantic assertions: `toBeChecked()`, `toBeDisabled()`, `toBeVisible()`, `toBeInTheDocument()`
5. Await all interactions: `await userEvent.click(...)`, `await expect(...)`
6. Don't test implementation details (no data attributes, no CSS selectors), unless it's a required part of the story
7. Test user-visible behavior: render check, click interactions, callback assertions

For stories with callback args, verify the callback was called:

```tsx
await userEvent.click(button);
await expect(args.onClick).toHaveBeenCalledOnce();
```

For stories showing disabled state, verify interactions are blocked:

```tsx
await userEvent.click(element, { pointerEventsCheck: 0 });
await expect(args.onClick).not.toHaveBeenCalled();
```
