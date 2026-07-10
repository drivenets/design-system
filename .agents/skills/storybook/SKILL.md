---
name: storybook
description: Write and update Storybook stories for design-system components. Use when editing `*.stories.tsx`, adding story variants, decorators, or removing Storybook play functions.
---

# Storybook Skill

Stories document UI and controls. **No `play` functions** — behavior lives in `__tests__/*.browser.test.tsx` ([browser-tests](../browser-tests/SKILL.md)).

## Story checklist

- Default + each variant + Disabled
- Controlled story (`useState` in `render`) when component supports it
- Localized story when component has `locale` prop
- Combined states (e.g. checked + disabled)
- Args flow to a component — don't hardcode in `render` what belongs in `args`
- Prefer args-driven one-concept stories over `render` — args-only stories produce clean, copy-paste snippets via dynamic source. Exception: **compound components** with multiple sub-components (`DsX.Title`, `DsX.Body`, …) — put sub-components in `render`, not `args.children` with a Fragment;
- Keep `args` self-contained — inline object/array literals per story rather than referencing shared module-level consts; consts appear unexpanded in MCP/Docs snippets and break copy-paste. Duplication across stories is the accepted tradeoff.
- Don't set `children: undefined` (or other `undefined` args) — it emits `>{undefined}` in the snippet; omit the prop instead
- Hide internal args: `className`, `style`, `ref` → `table: { disable: true }`
- Import variant arrays from `*.types.ts` for `argTypes.options`

## Meta template

```tsx
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ds{Name}Variants } from './ds-{name}.types';
import { Ds{Name} } from './index'; // public export — use ./index when a barrel/HOC exists

const meta: Meta<typeof Ds{Name}> = {
  title: 'Components/{Name}',
  component: Ds{Name},
  parameters: { layout: 'centered' },
  argTypes: {
    variant: { control: 'select', options: ds{Name}Variants },
    className: { table: { disable: true } },
    style: { table: { disable: true } },
    ref: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof Ds{Name}>;
```

When no `index.ts` barrel exists, import the default export from `./ds-{name}` instead. **Never** point `meta.component` at a base file when a `withResponsiveProps` wrapper in `index.ts` is the public API — Show code uses `meta.component` for args-only stories and needs the wrapped export's `displayName`.

## Component displayName (mandatory)

Every public `Ds*` React export used in stories must set `displayName` to its consumer-facing name. Required for correct **Show code** in production Storybook (React Compiler mangles runtime names → `<P` instead of `<DsX`), HOC-wrapped exports, and compound sub-members in `render`.

```ts
// Single export — end of ds-{name}.tsx
DsSelect.displayName = 'DsSelect';

// default export
DsFormControl.displayName = 'DsFormControl';

// HOC / withResponsiveProps — index.ts on wrapped export
DsStack.displayName = 'DsStack';

// Compound API — each member
DsTabs.Root.displayName = 'DsTabs.Root';
DsAlertBanner.Title.displayName = 'DsAlertBanner.Title';
```

Keep `meta.component` pointed at the wrapped export (what consumers import). Precedents: `ds-stack/index.ts`, `ds-split-button/index.ts`, `ds-status-badge-v2/index.ts`, `ds-alert-banner/ds-alert-banner.tsx`.

**Import rule:** stories import the same symbol as `meta.component`. HOC-wrapped components (`withResponsiveProps`) → `import { DsX } from './index'`. Do not import the base file for `meta.component` while consumers use the barrel.

Do **not** set `displayName` on hooks (`useToaster`), types, or internal HOC helpers (`controlify` wrappers).

## Styling

No inline styles — use `ds-{name}.stories.module.scss` with design tokens (`--color-*`, `--spacing-*`).

```tsx
import styles from './ds-card.stories.module.scss';

export const Default: Story = {
  decorators: [
    (Story) => (
      <div className={styles.wrapper}>
        <Story />
      </div>
    ),
  ],
};
```

## Docs source snippets

Storybook's default `source.type` is `auto`. Args-only stories (no `render`) always use **dynamic** serialization — there is no story JSX to lift. They need `displayName` on `meta.component` (React Compiler mangles runtime names otherwise → `<N>` instead of `<DsX>`).

- **Args-driven stories** (default): rely on `auto`/`dynamic`; require `displayName` + correct `meta.component` import (see above).
- **Compound components**: put `DsX.SubComponent` children in `render`, not `args.children` with `<>...</>`. Fragment-wrapped args produce `React.Fragment` and wrong sub-component names in Show code. Set `displayName` on sub-components as defense-in-depth.
- **`render` with logic before `return`** (`useState`, `useEffect`, custom handlers, etc.): add per-story `parameters: { docs: { source: { type: 'code' } } }`. Inline `<DsX … />` in the `render` return — do **not** extract a story-only wrapper component; wrappers leak into Show code and MCP snippets. Inline complex `args` (e.g. `items` arrays) in `render` too when agents need that structure in snippets — not only in `args`. Duplicate the render body across stories when needed. Do **not** use `parameters.docs.source.code` string snippets. Default `auto`/`dynamic` strips everything before `return` and only emits resolved JSX — fine for a bare `render: (args) => (<DsX {...args}>…</DsX>)`, wrong for async/controlled patterns.
- **`render` that goes straight to `return`** (compound sub-components, no hooks/handlers): rely on `auto`/`dynamic`; do **not** add `type: 'code'`.
- **Showcase matrices**: hide the panel with `docs.canvas.sourceState: 'none'` (see below).

## Showcase / matrix stories

For visual-only grids (size/variant matrices) that aren't real usage examples:

- Exclude from the manifest: `tags: ['!manifest']`.
- Hide the noisy code panel: `parameters: { docs: { canvas: { sourceState: 'none' } } }`.

## AI / MCP manifests

Stories and MDX feed the DS MCP server (`packages/mcp`). Follow [Storybook AI best practices](https://storybook.js.org/docs/ai/best-practices):

- **One concept per story** — not a kitchen-sink `SizesAndVariants` story.
- **Component JSDoc** — summary/description on the export; use `@summary` here (react-docgen extracts it as a tag, so it stays out of the rendered description). Prop descriptions on non-obvious props ([component-api](../component-api/SKILL.md)).
- **Story JSDoc** — plain prose explaining _why_ to use the variant, not only what it renders. Do NOT add `@summary` to a story: Autodocs renders a story's leading JSDoc verbatim under the title, so the tag shows as literal text. The manifest falls back to the description.
- **MDX guidelines** — put token values and rules in the file body, not only in runtime `{map}` loops agents cannot see.
- **Exclude noise** — `tags: ['!manifest']` on anti-pattern or human-only stories/docs.
- **Exclude performance panel** — opt a component out of the ⚡ performance panel with `parameters: { performancePanel: { disable: true } }`.
- **Verify locally** — with Storybook running (`pnpm start`), the dev server exposes a built-in MCP at `http://localhost:6006/mcp`. Use whichever configured MCP server points at that URL (the alias is per-developer) to check your changes: `list-all-documentation` (confirm `!manifest` stories are absent) and `get-documentation` / `get-documentation-for-story` (confirm snippets render `<DsX>` not the HOC name, descriptions have no `@summary`, props look right). This is not `packages/mcp`, which serves published docs to DS _consumers_.

## Related

- New component: [component-scaffold](../component-scaffold/SKILL.md)
- Behavioral tests: [browser-tests](../browser-tests/SKILL.md)
- React in stories: [react-patterns](../react-patterns/SKILL.md)
