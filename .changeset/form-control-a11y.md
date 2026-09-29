---
'@drivenets/design-system': patch
---

Fix "DsFormControl" so `hideLabel` keeps the accessible name, and so its message is announced and linked to `DsFormControl.CodeInput`. `DsCodeInput` accepts `aria-describedby` for that link.
