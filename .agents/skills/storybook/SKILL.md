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
- Hide internal args: `className`, `style`, `ref` → `table: { disable: true }`
- Import variant arrays from `*.types.ts` for `argTypes.options`

## Meta template

```tsx
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ds{Name}Variants } from './ds-{name}.types';
import Ds{Name} from './ds-{name}';

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

## AI / MCP manifests

Stories and MDX feed the DS MCP server (`packages/mcp`). Follow [Storybook AI best practices](https://storybook.js.org/docs/ai/best-practices):

- **One concept per story** — not a kitchen-sink `SizesAndVariants` story.
- **Component JSDoc** — summary/description on the export; prop descriptions on non-obvious props ([component-api](../component-api/SKILL.md)).
- **Story JSDoc** — explain _why_ to use the variant, not only what it renders.
- **MDX guidelines** — put token values and rules in the file body, not only in runtime `{map}` loops agents cannot see.
- **Exclude noise** — `tags: ['!manifest']` on anti-pattern or human-only stories/docs.

## Related

- New component: [component-scaffold](../component-scaffold/SKILL.md)
- Behavioral tests: [browser-tests](../browser-tests/SKILL.md)
- React in stories: [react-patterns](../react-patterns/SKILL.md)
