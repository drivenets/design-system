---
name: storybook
description: Write and update Storybook stories for design-system components. Use when editing `*.stories.tsx`, adding story variants, mockdate decorators, or removing Storybook play functions.
---

# Storybook Skill

Stories document UI and controls. **No `play` functions** — behavior lives in `__tests__/*.browser.test.tsx` ([browser-tests](../browser-tests/SKILL.md)).

## Story checklist

- Default + each variant + Disabled
- Controlled story (`useState` in `render`) when component supports it
- Localized story when component has `locale` prop
- Combined states (e.g. checked + disabled)
- Args flow to component — don't hardcode in `render` what belongs in `args`
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

## Date mocking

Use `mockdate` in a **decorator**, not `vi.useFakeTimers` (breaks Ark UI timers).

```tsx
import { useEffect } from 'react';
import MockDate from 'mockdate';
import type { Decorator } from '@storybook/react-vite';

// mockdate instead of vi.useFakeTimers — Ark uses setTimeout/setInterval
const withFixedDate: Decorator = (Story) => {
  useEffect(() => {
    MockDate.set('2026-01-15');
    return () => MockDate.reset();
  }, []);
  return <Story />;
};
```

Date **assertions** → browser tests with same `mockdate` approach if needed.

## Controlled & localized examples

Controlled `render` with `useState` — see [react-patterns](../react-patterns/SKILL.md).

```tsx
export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState('initial');
    return <DsInput {...args} value={value} onChange={setValue} />;
  },
};

export const Localized: Story = {
  args: { locale: { clearAll: 'Clear', showMore: 'More' } },
};
```

## No play / migrate to browser tests

Remove existing `play` functions; convert via [migrate-story-tests](../migrate-story-tests/SKILL.md).

**AI slop in stories** — `play` that only checks `toBeInTheDocument()` for something Default already proves. Delete or migrate meaningful behavior to browser tests.

## Related

- New component: [component-scaffold](../component-scaffold/SKILL.md)
- Behavioral tests: [browser-tests](../browser-tests/SKILL.md)
- React in stories: [react-patterns](../react-patterns/SKILL.md)
