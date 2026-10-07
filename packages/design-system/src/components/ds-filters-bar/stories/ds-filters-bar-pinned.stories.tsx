import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { fn } from 'storybook/test';
import { DsFiltersBar } from '../index';

const meta: Meta<typeof DsFiltersBar.Root> = {
	title: 'Components/FiltersBar/Pinned',
	component: DsFiltersBar.Root,
	subcomponents: {
		'DsFiltersBar.Pinned': DsFiltersBar.Pinned,
		'DsFiltersBar.PinnedGroup': DsFiltersBar.PinnedGroup,
		'DsFiltersBar.PinnedToggle': DsFiltersBar.PinnedToggle,
	},
	parameters: {
		layout: 'padded',
		docs: {
			description: {
				component: `
\`DsFiltersBar.Pinned\` is the row of quick toggles below the bar, shown while it is collapsed and
while it is expanded. The user pins field options in the filters dialog; the bar keeps them in
\`pins\`, a user preference outside the **Filter document**, so loading a **Saved filter** or clearing
leaves them alone.

The consumer renders the row from \`pins\` and \`fields\`: one \`PinnedGroup\` per field and one
\`PinnedToggle\` per pinned option, with its own \`count\` and controlled \`active\` state. An active
toggle narrows the results the document already produced; it never widens them. A toggle with a
\`count\` of 0 is disabled.
				`,
			},
		},
	},
	argTypes: {
		children: { table: { disable: true } },
		className: { table: { disable: true } },
		style: { table: { disable: true } },
		ref: { table: { disable: true } },
		onConditionsChange: { table: { disable: true } },
		onQueryChange: { table: { disable: true } },
		onPinsChange: { table: { disable: true } },
		onExpandedChange: { table: { disable: true } },
		onViewChange: { table: { disable: true } },
	},
	args: {
		onConditionsChange: fn(),
		onQueryChange: fn(),
		onPinsChange: fn(),
		onExpandedChange: fn(),
		onViewChange: fn(),
	},
};

export default meta;
type Story = StoryObj<typeof DsFiltersBar.Root>;

/**
 * The row under the collapsed summary. Each toggle reports its next state through
 * `onActiveChange`; the story keeps it. **Deprecated** has no matches, so it is disabled.
 */
export const Default: Story = {
	parameters: {
		docs: { source: { type: 'code' } },
	},
	render: function Render(args) {
		const [active, setActive] = useState({ active: true, pending: false, deprecated: false, today: false });

		return (
			<DsFiltersBar.Root {...args}>
				<DsFiltersBar.Disclosure />
				<DsFiltersBar.Summary count={10} />
				<DsFiltersBar.Pinned>
					<DsFiltersBar.PinnedGroup label="Status">
						<DsFiltersBar.PinnedToggle
							label="Active"
							count={10}
							active={active.active}
							onActiveChange={(next) => setActive((current) => ({ ...current, active: next }))}
						/>
						<DsFiltersBar.PinnedToggle
							label="Pending"
							count={4}
							active={active.pending}
							onActiveChange={(next) => setActive((current) => ({ ...current, pending: next }))}
						/>
						<DsFiltersBar.PinnedToggle
							label="Deprecated"
							count={0}
							active={active.deprecated}
							onActiveChange={(next) => setActive((current) => ({ ...current, deprecated: next }))}
						/>
					</DsFiltersBar.PinnedGroup>
					<DsFiltersBar.PinnedGroup label="Last seen">
						<DsFiltersBar.PinnedToggle
							label="Today"
							count={2}
							active={active.today}
							onActiveChange={(next) => setActive((current) => ({ ...current, today: next }))}
						/>
					</DsFiltersBar.PinnedGroup>
				</DsFiltersBar.Pinned>
			</DsFiltersBar.Root>
		);
	},
};

/**
 * The same row stays below the toolbar while the bar is expanded.
 */
export const Expanded: Story = {
	args: {
		defaultExpanded: true,
	},
	parameters: {
		docs: { source: { type: 'code' } },
	},
	render: function Render(args) {
		const [active, setActive] = useState({ active: false, pending: false, today: true, week: false });

		return (
			<DsFiltersBar.Root {...args}>
				<DsFiltersBar.Disclosure />
				<DsFiltersBar.Toolbar>
					<DsFiltersBar.Search />
				</DsFiltersBar.Toolbar>
				<DsFiltersBar.Pinned>
					<DsFiltersBar.PinnedGroup label="Status">
						<DsFiltersBar.PinnedToggle
							label="Active"
							count={10}
							active={active.active}
							onActiveChange={(next) => setActive((current) => ({ ...current, active: next }))}
						/>
						<DsFiltersBar.PinnedToggle
							label="Pending"
							count={4}
							active={active.pending}
							onActiveChange={(next) => setActive((current) => ({ ...current, pending: next }))}
						/>
					</DsFiltersBar.PinnedGroup>
					<DsFiltersBar.PinnedGroup label="Last seen">
						<DsFiltersBar.PinnedToggle
							label="Today"
							count={2}
							active={active.today}
							onActiveChange={(next) => setActive((current) => ({ ...current, today: next }))}
						/>
						<DsFiltersBar.PinnedToggle
							label="Last 7 days"
							count={12}
							active={active.week}
							onActiveChange={(next) => setActive((current) => ({ ...current, week: next }))}
						/>
					</DsFiltersBar.PinnedGroup>
				</DsFiltersBar.Pinned>
			</DsFiltersBar.Root>
		);
	},
};

/**
 * The row label, replaced through `locale`.
 */
export const Localized: Story = {
	render: (args) => (
		<DsFiltersBar.Root {...args}>
			<DsFiltersBar.Disclosure />
			<DsFiltersBar.Summary count={10} />
			<DsFiltersBar.Pinned locale={{ label: 'Shortcuts' }}>
				<DsFiltersBar.PinnedGroup label="Status">
					<DsFiltersBar.PinnedToggle label="Active" count={10} active />
				</DsFiltersBar.PinnedGroup>
			</DsFiltersBar.Pinned>
		</DsFiltersBar.Root>
	),
};
