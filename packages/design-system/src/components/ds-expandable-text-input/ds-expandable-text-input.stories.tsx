import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent, within } from 'storybook/test';
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
		onExpandChange: { action: 'expand change' },
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
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const iconButton = canvas.getByRole('button', { name: 'Open text input' });
		await expect(iconButton).toBeInTheDocument();
		await expect(iconButton).toHaveAttribute('aria-hidden', 'false');

		const input = canvas.getByRole('textbox');
		await expect(input).toBeInTheDocument();
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
		onExpandChange: fn(),
		onClear: fn(),
	},
	play: async ({ args, canvasElement, step }) => {
		const canvas = within(canvasElement);

		await step('Expand flow', async () => {
			const iconButton = canvas.getByRole('button', { name: 'Open text input' });
			await userEvent.click(iconButton);

			const input = canvas.getByRole('textbox');
			await expect(input).toHaveFocus();
			await expect(args.onExpandChange).toHaveBeenLastCalledWith(true);
		});

		await step('Clear flow - with button', async () => {
			const input = canvas.getByRole('textbox');
			await userEvent.type(input, 'test text');

			const clearButton = canvas.getByRole('button', { name: 'Clear' });
			await userEvent.click(clearButton);

			await expect(args.onClear).toHaveBeenCalled();
			await expect(args.onExpandChange).toHaveBeenLastCalledWith(false);
			await expect(input).toHaveValue('');
		});

		// TODO: Fails due to the component bug https://drivenets.atlassian.net/browse/AR-47261.
		// Uncomment when the bug is fixed.
		// await step('Clear flow - by deleting all text', async () => {
		// 	const iconButton = canvas.getByRole('button', { name: 'Open text input' });
		// 	await userEvent.click(iconButton);

		// 	const input = canvas.getByRole('textbox');
		// 	await userEvent.type(input, 'test');
		// 	await userEvent.clear(input);

		// 	await userEvent.click(canvasElement);
		// 	await expect(args.onExpandChange).toHaveBeenLastCalledWith(false);
		// });

		await step('Blur without typing', async () => {
			const iconButton = canvas.getByRole('button', { name: 'Open text input' });
			await userEvent.click(iconButton);

			await userEvent.click(canvasElement);

			await expect(args.onExpandChange).toHaveBeenLastCalledWith(false);
		});

		await step('Blur with value - stays expanded', async () => {
			const iconButton = canvas.getByRole('button', { name: 'Open text input' });
			await userEvent.click(iconButton);

			const input = canvas.getByRole('textbox');
			await userEvent.type(input, 'test text');

			await userEvent.click(canvasElement);

			await expect(args.onExpandChange).toHaveBeenLastCalledWith(true);
		});
	},
};

export const Controlled: Story = {
	argTypes: {
		value: {
			control: 'text',
			description: 'The current value',
		},
		onChange: { action: 'changed' },
		onClear: { action: 'clear' },
	},
	args: {
		value: 'query',
	},
	render: function Render(args) {
		const [value, setValue] = useState(args.value);

		return (
			<DsExpandableTextInput
				icon="search"
				value={value}
				onChange={(e) => setValue(e.target.value)}
				onClear={() => setValue('')}
			/>
		);
	},
	// TODO: Fails due to the component bug https://drivenets.atlassian.net/browse/AR-47261.
	// Uncomment when the bug is fixed.
	// play: async ({ canvasElement }) => {
	// 	const canvas = within(canvasElement);

	// 	const input = canvas.getByRole('textbox');
	// 	await expect(input).toHaveValue('search');

	// 	const clearButton = canvas.getByRole('button', { name: 'Clear' });
	// 	await expect(clearButton).toBeVisible();
	// },
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
		lastName: 'Fine',
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
