---
'@drivenets/design-system': minor
---

Add `disabledReason` to `DsButtonV3` (and the `DsSplitButton` button slot): while disabled, the button stays focusable, is announced as disabled with the reason as its description, ignores clicks, Enter and Space, and shows the reason in a tooltip on hover and keyboard focus. A `DsTooltip` on an `aria-disabled` element now shows instead of a `DsTooltip` wrapping that same element, such as an icon button's label.
