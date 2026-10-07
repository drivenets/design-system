import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { fn } from 'storybook/test';
import { DsFiltersBar } from '../index';
import type { DsFiltersBarView } from '../ds-filters-bar.types';

const meta: Meta<typeof DsFiltersBar.Root> = {
	title: 'Components/FiltersBar/View Switch',
	component: DsFiltersBar.Root,
	subcomponents: {
		'DsFiltersBar.ViewSwitch': DsFiltersBar.ViewSwitch,
		'DsFiltersBar.View': DsFiltersBar.View,
	},
	parameters: {
		layout: 'padded',
		docs: {
			description: {
				component: `
\`DsFiltersBar.ViewSwitch\` switches between the three **Filter views** of the same **Filter
document**: \`filters\` (chips edited in the filters dialog), \`builder\` (the same chips, edited
in the guided query builder dialog) and \`advanced\` (query text). It renders
one icon-only item per view, named by \`locale.views\`. Each \`DsFiltersBar.View\` renders its
children only while its \`value\` is the active view. Switching changes the presentation only.

While an **Advanced query** is the source, the filters and builder items are disabled with the
\`lockedView\` tooltip, and the bar shows the advanced view whatever \`view\` asks for; the asked-for
view comes back when the query is cleared. The view is uncontrolled by default; pair \`view\` with
\`onViewChange\` to control it.
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
 * One item per view, each with its own `View`. The same conditions show as chips in the filters
 * and builder views, and read as query text in the advanced view.
 */
export const Default: Story = {
	args: {
		defaultExpanded: true,
		fields: [
			{
				type: 'enum',
				id: 'status',
				label: 'Status',
				operators: [
					{ value: '=', label: 'equals' },
					{ value: '!=', label: 'not equals', symbol: '≠' },
				],
				options: [
					{ value: 'active', label: 'Active' },
					{ value: 'pending', label: 'Pending' },
				],
			},
			{
				type: 'enum',
				id: 'trigger',
				label: 'Trigger',
				operators: [{ value: '=', label: 'equals' }],
				options: [
					{ value: 'manual', label: 'Manual' },
					{ value: 'scheduled', label: 'Scheduled' },
				],
			},
		],
		defaultConditions: [
			{ kind: 'field', id: 'c1', field: 'status', operator: '=', value: ['active'] },
			{ kind: 'field', id: 'c2', field: 'trigger', operator: '=', value: ['scheduled'] },
		],
	},
	render: (args) => (
		<DsFiltersBar.Root {...args}>
			<DsFiltersBar.Disclosure />
			<DsFiltersBar.Summary count={12} />
			<DsFiltersBar.Toolbar>
				<DsFiltersBar.ViewSwitch />
				<DsFiltersBar.View value="filters">
					<DsFiltersBar.Conditions />
				</DsFiltersBar.View>
				<DsFiltersBar.View value="builder">
					<DsFiltersBar.Builder />
				</DsFiltersBar.View>
				<DsFiltersBar.View value="advanced">
					<DsFiltersBar.Query />
				</DsFiltersBar.View>
			</DsFiltersBar.Toolbar>
		</DsFiltersBar.Root>
	),
};

/**
 * An **Advanced query** with `OR` is the source, so the filters and builder items are disabled and
 * explain why in a tooltip. Clear the query to unlock them.
 */
export const Locked: Story = {
	args: {
		defaultExpanded: true,
		fields: [
			{
				type: 'enum',
				id: 'status',
				label: 'Status',
				operators: [{ value: '=', label: 'equals' }],
				options: [{ value: 'active', label: 'Active' }],
			},
			{
				type: 'enum',
				id: 'trigger',
				label: 'Trigger',
				operators: [{ value: '=', label: 'equals' }],
				options: [{ value: 'scheduled', label: 'Scheduled' }],
			},
		],
		defaultQuery: 'status = "active" OR trigger = "scheduled"',
	},
	render: (args) => (
		<DsFiltersBar.Root {...args}>
			<DsFiltersBar.Disclosure />
			<DsFiltersBar.Summary count={5} />
			<DsFiltersBar.Toolbar>
				<DsFiltersBar.ViewSwitch />
				<DsFiltersBar.View value="filters">
					<DsFiltersBar.Conditions />
				</DsFiltersBar.View>
				<DsFiltersBar.View value="builder">
					<DsFiltersBar.Builder />
				</DsFiltersBar.View>
				<DsFiltersBar.View value="advanced">
					<DsFiltersBar.Query />
				</DsFiltersBar.View>
				<DsFiltersBar.ClearAll />
			</DsFiltersBar.Toolbar>
		</DsFiltersBar.Root>
	),
};

/**
 * `view` and `onViewChange` let the app own the active view, for example to remember it per page.
 */
export const Controlled: Story = {
	args: {
		defaultExpanded: true,
		fields: [
			{
				type: 'enum',
				id: 'status',
				label: 'Status',
				operators: [{ value: '=', label: 'equals' }],
				options: [
					{ value: 'active', label: 'Active' },
					{ value: 'pending', label: 'Pending' },
				],
			},
		],
		defaultConditions: [{ kind: 'field', id: 'c1', field: 'status', operator: '=', value: ['active'] }],
	},
	parameters: {
		docs: { source: { type: 'code' } },
	},
	render: function Render(args) {
		const [view, setView] = useState<DsFiltersBarView>('advanced');

		return (
			<DsFiltersBar.Root
				{...args}
				view={view}
				onViewChange={(next) => {
					setView(next);
					args.onViewChange?.(next);
				}}
			>
				<DsFiltersBar.Disclosure />
				<DsFiltersBar.Summary count={12} />
				<DsFiltersBar.Toolbar>
					<DsFiltersBar.ViewSwitch />
					<DsFiltersBar.View value="filters">
						<DsFiltersBar.Conditions />
					</DsFiltersBar.View>
					<DsFiltersBar.View value="builder">
						<DsFiltersBar.Builder />
					</DsFiltersBar.View>
					<DsFiltersBar.View value="advanced">
						<DsFiltersBar.Query />
					</DsFiltersBar.View>
				</DsFiltersBar.Toolbar>
			</DsFiltersBar.Root>
		);
	},
};

/**
 * The group label, each item's accessible name and the locked tooltip, replaced through `locale`.
 */
export const Localized: Story = {
	args: {
		defaultExpanded: true,
		fields: [
			{
				type: 'enum',
				id: 'status',
				label: 'Status',
				operators: [{ value: '=', label: 'equals' }],
				options: [
					{ value: 'active', label: 'Active' },
					{ value: 'pending', label: 'Pending' },
				],
			},
		],
		defaultQuery: 'status = "active" OR status = "pending"',
	},
	render: (args) => (
		<DsFiltersBar.Root {...args}>
			<DsFiltersBar.Disclosure />
			<DsFiltersBar.Toolbar>
				<DsFiltersBar.ViewSwitch
					locale={{
						label: 'Presentation',
						views: { filters: 'Quick filters', builder: 'Guided query', advanced: 'Query editor' },
						lockedView: 'Remove the custom query to switch',
					}}
				/>
				<DsFiltersBar.View value="advanced">
					<DsFiltersBar.Query />
				</DsFiltersBar.View>
			</DsFiltersBar.Toolbar>
		</DsFiltersBar.Root>
	),
};
