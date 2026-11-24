import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { ColumnDef } from '@tanstack/react-table';
import { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import {
	DsAutocomplete,
	DsButton,
	DsCheckbox,
	DsDrawer,
	DsDropdownMenu,
	DsModal,
	DsPopover,
	DsRadioGroup,
	DsSelect,
	DsTable,
	DsTabs,
	DsTextInput,
	DsTimePicker,
	DsToggle,
	DsTooltip,
} from '../../src';

type Device = { id: string; name: string; status: string };

const deviceColumns: ColumnDef<Device>[] = [
	{ accessorKey: 'name', header: 'Name' },
	{ accessorKey: 'status', header: 'Status' },
];

const devices: Device[] = [
	{ id: '1', name: 'edge-1', status: 'Online' },
	{ id: '2', name: 'edge-2', status: 'Offline' },
	{ id: '3', name: 'core-1', status: 'Online' },
];

const ModalExample = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<DsButton onClick={() => setOpen(true)}>Open modal</DsButton>
			<DsModal open={open} columns={4} onOpenChange={setOpen}>
				<DsModal.Header>
					<DsModal.Title>Delete device</DsModal.Title>
					<DsModal.CloseTrigger />
				</DsModal.Header>
				<DsModal.Body>Modal body</DsModal.Body>
			</DsModal>
		</>
	);
};

const DrawerExample = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<DsButton onClick={() => setOpen(true)}>Open drawer</DsButton>
			<DsDrawer open={open} onOpenChange={setOpen}>
				<DsDrawer.Header>
					<DsDrawer.Title>Device details</DsDrawer.Title>
					<DsDrawer.CloseTrigger />
				</DsDrawer.Header>
				<DsDrawer.Body>Drawer body</DsDrawer.Body>
			</DsDrawer>
		</>
	);
};

const SelectExample = ({ onValueChange }: { onValueChange: (value: string) => void }) => {
	const [value, setValue] = useState('');

	return (
		<DsSelect
			placeholder="Pick a fruit"
			options={[
				{ value: 'apple', label: 'Apple' },
				{ value: 'banana', label: 'Banana' },
			]}
			value={value}
			onValueChange={(next) => {
				setValue(next);
				onValueChange(next);
			}}
		/>
	);
};

describe('Components in JSDOM', () => {
	it('clicks a button', async () => {
		const onClick = vi.fn();
		render(<DsButton onClick={onClick}>Save</DsButton>);

		await userEvent.click(screen.getByRole('button', { name: 'Save' }));

		expect(onClick).toHaveBeenCalledOnce();
	});

	it('types into a text input', async () => {
		const onValueChange = vi.fn();
		render(<DsTextInput placeholder="Device name" onValueChange={onValueChange} />);

		await userEvent.type(screen.getByPlaceholderText('Device name'), 'edge-1');

		expect(screen.getByPlaceholderText('Device name')).toHaveProperty('value', 'edge-1');
		expect(onValueChange).toHaveBeenLastCalledWith('edge-1');
	});

	it('checks a checkbox', async () => {
		const onCheckedChange = vi.fn();
		render(<DsCheckbox label="Accept terms" onCheckedChange={onCheckedChange} />);

		await userEvent.click(screen.getByRole('checkbox', { name: 'Accept terms' }));

		expect(onCheckedChange).toHaveBeenCalledWith(true);
		expect(screen.getByRole('checkbox', { name: 'Accept terms' })).toHaveProperty('checked', true);
	});

	it('switches a toggle', async () => {
		const onValueChange = vi.fn();
		render(<DsToggle label="Notifications" onValueChange={onValueChange} />);

		await userEvent.click(screen.getByRole('checkbox', { name: 'Notifications' }));

		expect(onValueChange).toHaveBeenCalledWith(true);
	});

	it('selects a radio option', async () => {
		const onValueChange = vi.fn();
		render(
			<DsRadioGroup.Root onValueChange={onValueChange}>
				<DsRadioGroup.Item value="daily" label="Daily" />
				<DsRadioGroup.Item value="weekly" label="Weekly" />
			</DsRadioGroup.Root>,
		);

		await userEvent.click(screen.getByRole('radio', { name: 'Weekly' }));

		expect(onValueChange).toHaveBeenCalledWith('weekly');
	});

	it('selects an option from a select', async () => {
		const onValueChange = vi.fn();
		render(<SelectExample onValueChange={onValueChange} />);

		await userEvent.click(screen.getByRole('combobox'));
		await userEvent.click(await screen.findByRole('option', { name: 'Banana' }));

		expect(onValueChange).toHaveBeenCalledWith('banana');
		expect(screen.getByRole('combobox').textContent).toContain('Banana');
	});

	it('filters and selects an option from an autocomplete', async () => {
		const onValueChange = vi.fn();
		render(
			<DsAutocomplete
				options={[
					{ value: 'apple', label: 'Apple' },
					{ value: 'banana', label: 'Banana' },
				]}
				onValueChange={onValueChange}
			/>,
		);

		await userEvent.type(screen.getByRole('combobox'), 'b');

		expect(screen.queryByRole('option', { name: /Apple/ })).toBeNull();

		await userEvent.click(await screen.findByRole('option', { name: /Banana/ }));

		expect(onValueChange).toHaveBeenCalledWith('banana');
	});

	it('picks an hour in a time picker', async () => {
		render(<DsTimePicker defaultValue={new Date(2026, 0, 1, 10, 30)} />);

		await userEvent.click(screen.getByRole('button', { name: 'Open time picker' }));
		const hours = await screen.findByRole('listbox', { name: 'Hour' });
		await userEvent.click(within(hours).getByRole('option', { name: '11' }));

		expect(screen.getByPlaceholderText('hh:mm AM/PM')).toHaveProperty('value', '11:30 AM');
	});

	it('renders table rows and handles a row click', async () => {
		const onRowClick = vi.fn();
		render(<DsTable columns={deviceColumns} data={devices} onRowClick={onRowClick} />);

		expect(screen.getByRole('columnheader', { name: /Name/ })).toBeTruthy();
		expect(screen.getAllByRole('row')).toHaveLength(devices.length + 1);

		await userEvent.click(screen.getByRole('cell', { name: 'edge-2' }));

		expect(onRowClick).toHaveBeenCalledWith(devices[1]);
	});

	it('switches tabs', async () => {
		render(
			<DsTabs.Root defaultValue="overview">
				<DsTabs.List>
					<DsTabs.Tab value="overview" label="Overview" />
					<DsTabs.Tab value="alerts" label="Alerts" />
				</DsTabs.List>
				<DsTabs.Content value="overview">Overview panel</DsTabs.Content>
				<DsTabs.Content value="alerts">Alerts panel</DsTabs.Content>
			</DsTabs.Root>,
		);

		await userEvent.click(screen.getByRole('tab', { name: /Alerts/ }));

		expect(screen.getByRole('tab', { name: /Alerts/ }).getAttribute('aria-selected')).toBe('true');
		expect(screen.getByText('Alerts panel')).toBeTruthy();
	});

	it('opens a dropdown menu and selects an item', async () => {
		const onSelect = vi.fn();
		render(
			<DsDropdownMenu.Root onSelect={onSelect}>
				<DsDropdownMenu.Trigger>
					<span>Actions</span>
				</DsDropdownMenu.Trigger>
				<DsDropdownMenu.Content>
					<DsDropdownMenu.Item value="edit">Edit</DsDropdownMenu.Item>
					<DsDropdownMenu.Item value="delete">Delete</DsDropdownMenu.Item>
				</DsDropdownMenu.Content>
			</DsDropdownMenu.Root>,
		);

		await userEvent.click(screen.getByRole('button', { name: 'Actions' }));
		await userEvent.click(await screen.findByRole('menuitem', { name: 'Delete' }));

		expect(onSelect).toHaveBeenCalledWith('delete');
	});

	it('opens and closes a modal', async () => {
		render(<ModalExample />);

		await userEvent.click(screen.getByRole('button', { name: 'Open modal' }));
		expect(await screen.findByRole('dialog', { name: 'Delete device' })).toBeTruthy();

		await userEvent.click(screen.getByRole('button', { name: /close/i }));
		await waitFor(() => expect(screen.queryByRole('dialog')).toBeNull());
	});

	it('opens and closes a drawer', async () => {
		render(<DrawerExample />);

		await userEvent.click(screen.getByRole('button', { name: 'Open drawer' }));
		expect(await screen.findByRole('dialog', { name: 'Device details' })).toBeTruthy();

		await userEvent.keyboard('{Escape}');
		await waitFor(() => expect(screen.queryByRole('dialog')).toBeNull());
	});

	it('opens a popover', async () => {
		render(
			<DsPopover.Root>
				<DsPopover.Trigger>
					<button type="button">Open details</button>
				</DsPopover.Trigger>
				<DsPopover.Panel>
					<DsPopover.Header>Device details</DsPopover.Header>
					<DsPopover.Content>
						<DsPopover.ContentItem headline="Status">Online</DsPopover.ContentItem>
					</DsPopover.Content>
				</DsPopover.Panel>
			</DsPopover.Root>,
		);

		await userEvent.click(screen.getByRole('button', { name: 'Open details' }));

		expect(await screen.findByRole('dialog', { name: /Device details/ })).toBeTruthy();
		expect(screen.getByText('Online')).toBeTruthy();
	});

	it('shows a tooltip on hover', async () => {
		render(
			<DsTooltip content="Restart the device">
				<button type="button">Restart</button>
			</DsTooltip>,
		);

		await userEvent.hover(screen.getByRole('button', { name: 'Restart' }));

		expect((await screen.findByRole('tooltip')).textContent).toContain('Restart the device');
	});
});
