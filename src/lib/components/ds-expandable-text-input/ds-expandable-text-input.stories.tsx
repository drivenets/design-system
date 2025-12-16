import type { Meta, StoryObj } from '@storybook/react-vite';
import { DsExpandableTextInput } from './ds-expandable-text-input';
import { textInputSizes } from '../ds-text-input';
import { useState } from 'react';
import type { ColumnDef } from '@tanstack/react-table';
import DsTable from '../ds-table/ds-table';
import DsButton from '../ds-button/ds-button';

const meta: Meta<typeof DsExpandableTextInput> = {
	title: 'Design System/ExpandableTextInput',
	component: DsExpandableTextInput,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: 'An expandable animated text input',
			},
		},
	},
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: { type: 'select' },
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
	},
};

export default meta;
type Story = StoryObj<typeof DsExpandableTextInput>;

export const Default: Story = {
	args: {
		icon: 'search',
	},
};

export const CustomIcon: Story = {
	args: {
		icon: 'search_insights',
	},
};

export const Placeholder: Story = {
	args: {
		icon: 'search',
		placeholder: 'Type to search',
	},
};

export const ExpandChange: Story = {
	args: {
		icon: 'search',
		placeholder: 'Look at the console',
		onExpandChange: (expanded) => {
			console.log('Expanded:', expanded);
		},
	},
};

export const Controlled: Story = {
	render: function Render() {
		const [value, setValue] = useState('');

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

type Person = {
	id: string;
	firstName: string;
	lastName: string;
	age: number;
};

const columns: ColumnDef<Person>[] = [
	{
		accessorKey: 'firstName',
		header: 'First Name',
		cell: (info) => info.getValue(),
	},
	{
		accessorKey: 'lastName',
		header: 'Last Name',
		cell: (info) => info.getValue(),
	},
	{
		accessorKey: 'age',
		header: 'Age',
		cell: (info) => info.getValue(),
	},
];

const people: Person[] = [
	{
		id: '1',
		firstName: 'Tanner',
		lastName: 'Linsley',
		age: 33,
	},
	{
		id: '2',
		firstName: 'Kevin',
		lastName: 'Vonderheide',
		age: 28,
	},
	{
		id: '3',
		firstName: 'John',
		lastName: 'Doe',
		age: 45,
	},
	{
		id: '4',
		firstName: 'Jane',
		lastName: 'Smith',
		age: 30,
	},
	{
		id: '5',
		firstName: 'Peter',
		lastName: 'Jones',
		age: 22,
	},
];

export const WithTable: Story = {
	render: function Render() {
		const [search, setSearch] = useState('');

		return (
			<div style={{ width: '500px' }}>
				<div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'end', gap: '8px' }}>
					<DsExpandableTextInput
						icon="search"
						placeholder="Type to search..."
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						onClear={() => setSearch('')}
					/>

					<DsButton size="small">Click</DsButton>
				</div>
				<DsTable columns={columns} data={people} columnFilters={[{ id: 'firstName', value: search }]} />
			</div>
		);
	},
};
