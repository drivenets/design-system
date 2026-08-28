import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import type { ColumnDef } from '@tanstack/react-table';
import { DsExpandableTextInput } from './ds-expandable-text-input';
import { textInputSizes } from '../ds-text-input';
import { DsTable } from '../ds-table';
import { DsButtonV3 } from '../ds-button-v3';
import { DsStack } from '../ds-stack';

const meta: Meta<typeof DsExpandableTextInput> = {
	title: 'Components/ExpandableTextInput',
	component: DsExpandableTextInput,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component:
					'A compact icon button that animates open into a text input on focus. Use it to save horizontal space in toolbars and headers, such as an inline search.',
			},
		},
	},
	argTypes: {
		size: {
			control: 'select',
			options: textInputSizes,
			description: 'The size of the input field',
		},
		disabled: {
			control: 'boolean',
			description: 'Whether the input is disabled',
		},
		placeholder: {
			control: 'text',
			description: 'The placeholder text',
		},
		onExpandChange: { table: { disable: true } },
		className: { table: { disable: true } },
		style: { table: { disable: true } },
		ref: { table: { disable: true } },
	},
};

export default meta;
type Story = StoryObj<typeof DsExpandableTextInput>;

/**
 * The default collapsed state: a single icon that expands into an input when
 * activated. `icon` sets the glyph shown while collapsed.
 */
export const Default: Story = {
	args: {
		icon: 'search',
	},
};

/**
 * Compact size for dense toolbars where the trigger must stay small.
 */
export const SmallSize: Story = {
	args: {
		icon: 'search',
		size: 'small',
	},
};

/**
 * Swap the trigger glyph with any icon to match the field's purpose.
 */
export const CustomIcon: Story = {
	args: {
		icon: 'search_insights',
	},
};

/**
 * Provide a `placeholder` shown once the field expands.
 */
export const Placeholder: Story = {
	args: {
		icon: 'search',
		placeholder: 'Type to search',
	},
};

/**
 * Controlled usage where the parent owns the value. Pair `value`/`onChange`
 * with `onClear` so the built-in clear button resets your state.
 */
export const Controlled: Story = {
	parameters: {
		docs: {
			source: { type: 'code' },
		},
	},
	render: function Render() {
		const [value, setValue] = useState('query');

		return (
			<DsExpandableTextInput
				icon="search"
				value={value}
				onChange={(e) => setValue(e.target.value)}
				onClear={() => setValue('')}
			/>
		);
	},
};

/**
 * Seed an uncontrolled field with `defaultValue`; the component starts expanded
 * to reveal the initial text.
 */
export const DefaultValue: Story = {
	args: {
		icon: 'search',
		defaultValue: 'initial search',
	},
};

type Person = {
	id: string;
	firstName: string;
	lastName: string;
	age: number;
};

const columns: ColumnDef<Person>[] = [
	{ accessorKey: 'firstName', header: 'First Name', cell: (info) => info.getValue() },
	{ accessorKey: 'lastName', header: 'Last Name', cell: (info) => info.getValue() },
	{ accessorKey: 'age', header: 'Age', cell: (info) => info.getValue() },
];

const people: Person[] = [
	{ id: '1', firstName: 'Tanner', lastName: 'Linsley', age: 33 },
	{ id: '2', firstName: 'Kevin', lastName: 'Fine', age: 28 },
	{ id: '3', firstName: 'John', lastName: 'Doe', age: 45 },
	{ id: '4', firstName: 'Jane', lastName: 'Smith', age: 30 },
	{ id: '5', firstName: 'Peter', lastName: 'Jones', age: 22 },
];

/**
 * A real-world pattern: an expandable search that filters a `DsTable` without
 * taking up toolbar space until the user needs it.
 */
export const WithTable: Story = {
	parameters: {
		docs: {
			source: { type: 'code' },
		},
	},
	render: function Render() {
		const [search, setSearch] = useState('');

		return (
			<DsStack direction="column" gap="var(--md)" width="31.25rem">
				<DsStack gap="var(--2xs)" justifyContent="end">
					<DsExpandableTextInput
						icon="search"
						placeholder="Type to search..."
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						onClear={() => setSearch('')}
					/>
					<DsButtonV3 size="small">Click</DsButtonV3>
				</DsStack>
				<DsTable columns={columns} data={people} columnFilters={[{ id: 'firstName', value: search }]} />
			</DsStack>
		);
	},
};
