## Setup

No provider or wrapper component is required. Import the stylesheet once at
your app root (already bound for you here — reachable via `styles.css`'s
`@import` closure) and use components directly:

```tsx
import { DsButton } from '@drivenets/design-system';

export const App = () => <DsButton onClick={() => {}}>Click Me</DsButton>;
```

Fonts (Roboto, Fira Mono, Material Symbols) load via `styles.css`'s own
`@font-face`/remote-font `@import`s — nothing else to wire up.

## Styling idiom

No utility classes, no `className` string-building. Every component takes
**named props** for its own appearance — enums like `variant`, `size`,
`color`, `disabled`, never raw CSS. Example real prop values: `DsButton`
takes `variant="filled" | "ghost" | "dashed" | "danger" | "dark"` and
`size="large" | "medium" | "small" | "tiny"`; `DsTypography` takes a
semantic `color` string (`"main"`, `"secondary"`, `"action"`, `"error"`,
`"success"`, …) and a `variant` string (`"heading1"`…`"heading4"`,
`"body-md-reg"`, `"body-sm-md"`, `"code-xs-reg"`, …) — always pass the
component's own documented prop values, never invent new ones.

For **your own layout glue** (spacing/arrangement between DS components,
not component appearance), use the design tokens as `var(--*)` CSS custom
properties — real spacing scale: `--3xs --2xs --xs --sm --md --lg --xl
--2xl --3xl --4xl --5xl`. Compose layout with the DS's own primitives
(`DsStack`, `DsGrid`) rather than raw flex/grid CSS:

```tsx
<DsStack direction="column" gap="var(--md)">
  <DsTypography variant="heading3">Title</DsTypography>
  <DsTypography variant="body-md-reg" color="secondary">
    Supporting text
  </DsTypography>
</DsStack>
```

Semantic color tokens also exist as `var(--*)` for anything a prop doesn't
cover (e.g. `--color-dap-blue-600`, `--font-main`, `--background-action`) —
prefer a component prop over a raw token whenever one exists.

## Where the truth lives

- `styles.css` and its `@import` closure (includes `_ds_bundle.css`, the
  real compiled component styles) — the full set of CSS custom properties
  and component class rules actually shipped.
- `components/<group>/<Name>/<Name>.d.ts` — each component's real prop
  types; read before using a prop you haven't seen in an example.
- `components/<group>/<Name>/<Name>.prompt.md` — per-component usage notes
  and composition examples.
