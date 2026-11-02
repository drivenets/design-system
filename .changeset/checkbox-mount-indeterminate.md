---
'@drivenets/design-system': patch
---

Bump `@ark-ui/react` to 5.40.0 and `@zag-js/*` to 1.47.0.

- Fix `DsCheckbox` mounted with `checked="indeterminate"` being announced as unchecked by assistive technology: the native input's `indeterminate` property is now set on mount, not only on state changes.
- Keep `aria-current="step"` on the current `DsStep`, which zag 1.46+ no longer sets on the step item.
