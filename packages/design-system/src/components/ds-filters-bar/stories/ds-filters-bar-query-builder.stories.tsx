import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { DsFiltersBar } from '../index';

const meta: Meta<typeof DsFiltersBar.Root> = {
	title: 'Components/FiltersBar/Query Builder',
	component: DsFiltersBar.Root,
	subcomponents: { 'DsFiltersBar.Builder': DsFiltersBar.Builder },
	parameters: {
		layout: 'padded',
		docs: {
			description: {
				component: `
\`DsFiltersBar.Builder\` is the builder view. It shows the same add button and **Filter condition**
chips as the filters view; only the dialog differs. The add button opens the query builder dialog
empty, and it guides the user through one condition — a field, then, depending on the field, a
subfield, an operator and a value. Clicking a field chip opens the dialog filled from that condition,
and **Save query** replaces it. A condition the dialog cannot hold, such as several enum values or a
range, opens at its value step with the value empty. Place it inside
\`<DsFiltersBar.View value="builder">\`. It writes ordinary conditions, so it never locks the other
views, and saving or closing the dialog keeps the builder view.
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
 * The add button opens the dialog with suggested fields first, then the rest; **Save query** adds
 * one condition as a chip and closes. Click a chip to edit its condition in the same dialog.
 */
export const Default: Story = {
	args: {
		defaultExpanded: true,
		defaultView: 'builder',
		fields: [
			{
				type: 'compound',
				id: 'input',
				label: 'Input',
				subfields: [
					{
						type: 'text',
						id: 'name',
						label: 'Name',
						operators: [
							{ value: '~', label: 'Contains' },
							{ value: '=', label: 'Equal' },
							{ value: '!=', label: 'Not equal' },
						],
					},
					{ type: 'text', id: 'vendor', label: 'Vendor', operators: [{ value: '=', label: 'Equal' }] },
					{ type: 'text', id: 'type', label: 'Type', operators: [{ value: '=', label: 'Equal' }] },
					{ type: 'text', id: 'version', label: 'Version', operators: [{ value: '=', label: 'Equal' }] },
				],
			},
			{ type: 'text', id: 'output', label: 'Output', operators: [{ value: '=', label: 'Equal' }] },
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
			{
				type: 'enum',
				id: 'tag',
				label: 'Tag',
				operators: [{ value: '=', label: 'equals' }],
				options: [
					{ value: 'core', label: 'Core' },
					{ value: 'edge', label: 'Edge' },
				],
			},
		],
		defaultConditions: [
			{ kind: 'field', id: 'c1', field: 'input', subfield: 'name', operator: '~', value: 'WF456' },
			{ kind: 'field', id: 'c2', field: 'status', operator: '=', value: ['active', 'pending'] },
		],
	},
	render: (args) => (
		<DsFiltersBar.Root {...args}>
			<DsFiltersBar.Disclosure />
			<DsFiltersBar.Summary count={12} />
			<DsFiltersBar.Toolbar>
				<DsFiltersBar.Search />
				<DsFiltersBar.ViewSwitch />
				<DsFiltersBar.View value="filters">
					<DsFiltersBar.Conditions />
				</DsFiltersBar.View>
				<DsFiltersBar.View value="builder">
					<DsFiltersBar.Builder suggestedFields={['input', 'output', 'status', 'tag']} />
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
 * The add button and every built-in string of the dialog replaced through `locale`. The chip
 * strings (`removeCondition`, `operator`, `operatorOption`) are functions of the condition, as in
 * `Conditions`.
 */
export const Localized: Story = {
	args: {
		defaultExpanded: true,
		defaultView: 'builder',
		fields: [
			{
				type: 'compound',
				id: 'input',
				label: 'Input',
				subfields: [
					{
						type: 'text',
						id: 'name',
						label: 'Name',
						operators: [
							{ value: '~', label: 'Contains' },
							{ value: '=', label: 'Equal' },
							{ value: '!=', label: 'Not equal' },
						],
					},
					{ type: 'text', id: 'vendor', label: 'Vendor', operators: [{ value: '=', label: 'Equal' }] },
					{ type: 'text', id: 'type', label: 'Type', operators: [{ value: '=', label: 'Equal' }] },
					{ type: 'text', id: 'version', label: 'Version', operators: [{ value: '=', label: 'Equal' }] },
				],
			},
			{ type: 'text', id: 'output', label: 'Output', operators: [{ value: '=', label: 'Equal' }] },
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
			{
				type: 'enum',
				id: 'tag',
				label: 'Tag',
				operators: [{ value: '=', label: 'equals' }],
				options: [
					{ value: 'core', label: 'Core' },
					{ value: 'edge', label: 'Edge' },
				],
			},
		],
		defaultConditions: [
			{ kind: 'field', id: 'c1', field: 'input', subfield: 'name', operator: '~', value: 'WF456' },
			{ kind: 'field', id: 'c2', field: 'status', operator: '=', value: ['active', 'pending'] },
		],
	},
	render: (args) => (
		<DsFiltersBar.Root {...args}>
			<DsFiltersBar.Disclosure />
			<DsFiltersBar.Summary count={12} />
			<DsFiltersBar.Toolbar>
				<DsFiltersBar.Search />
				<DsFiltersBar.ViewSwitch />
				<DsFiltersBar.View value="filters">
					<DsFiltersBar.Conditions />
				</DsFiltersBar.View>
				<DsFiltersBar.View value="builder">
					<DsFiltersBar.Builder
						suggestedFields={['input', 'output', 'status', 'tag']}
						locale={{
							title: 'Build a condition',
							close: 'Dismiss',
							clear: 'Start over',
							searchField: 'Find a field',
							selectField: 'Pick a field',
							searchSubfield: 'Find a part',
							selectSubfield: 'Pick a part',
							searchOperator: 'Find an operator',
							selectOperator: 'Pick an operator',
							searchValue: 'Find a value',
							selectValue: 'Pick a value',
							valuePlaceholder: 'Enter a value',
							save: 'Add condition',
							addFilter: 'New condition',
						}}
					/>
				</DsFiltersBar.View>
				<DsFiltersBar.View value="advanced">
					<DsFiltersBar.Query />
				</DsFiltersBar.View>
				<DsFiltersBar.ClearAll />
			</DsFiltersBar.Toolbar>
		</DsFiltersBar.Root>
	),
};
