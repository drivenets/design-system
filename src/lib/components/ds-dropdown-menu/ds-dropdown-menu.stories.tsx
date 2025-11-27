import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DsDropdownMenu } from './ds-dropdown-menu';
import { DsButton, DsCheckbox, DsIcon, DsRadioGroup, DsTextInput, DsTypography } from '@design-system/ui';
import './ds-dropdown-menu.stories.scss';

const meta: Meta = {
	title: 'Design System/DropdownMenu',
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		// Root component props
		open: {
			control: 'boolean',
			description: 'Controlled open state of the dropdown',
			table: { category: 'Root' },
		},
		onOpenChange: {
			action: 'onOpenChange',
			description: 'Callback when open state changes',
			table: { category: 'Root' },
		},
		// Content component props
		sideOffset: {
			control: 'number',
			description: 'The distance in pixels from the trigger',
			table: {
				category: 'Content',
				defaultValue: {
					summary: '0',
				},
			},
		},
		align: {
			control: 'select',
			options: ['start', 'center', 'end'],
			description: 'The preferred alignment against the trigger',
			table: {
				category: 'Content',
				defaultValue: {
					summary: 'center',
				},
			},
		},
		side: {
			control: 'select',
			options: ['top', 'right', 'bottom', 'left'],
			description: 'The preferred side of the trigger to render against',
			table: {
				category: 'Content',
				defaultValue: {
					summary: 'bottom',
				},
			},
		},
		disablePortal: {
			control: 'boolean',
			description: 'Whether to disable rendering in a portal',
			table: {
				category: 'Content',
				defaultValue: {
					summary: 'false',
				},
			},
		},
		// Item component props
		disabled: {
			control: 'boolean',
			description: 'Whether the item is disabled',
			table: { category: 'Item' },
		},
		selected: {
			control: 'boolean',
			description: 'Whether the item is selected (for visual styling)',
			table: { category: 'Item' },
		},
		onClick: {
			action: 'onClick',
			description: 'Click handler for the item',
			table: { category: 'Item' },
		},
		// Group component props
		collapsed: {
			control: 'boolean',
			description: 'Controlled collapsed state of the group',
			table: { category: 'Group' },
		},
		onCollapsedChange: {
			action: 'onCollapsedChange',
			description: 'Callback when collapsed state changes',
			table: { category: 'Group' },
		},
	},
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
	parameters: {
		docs: {
			description: {
				story:
					'A basic dropdown menu with action items. Each item can have an icon and onClick handler. Items can be disabled.',
			},
		},
	},
	render: () => {
		const handleEdit = () => console.log('Edit clicked');
		const handleDelete = () => console.log('Delete clicked');
		const handleShare = () => console.log('Share clicked');

		return (
			<DsDropdownMenu.Root>
				<DsDropdownMenu.Trigger>
					<button className="trigger">
						<span>Actions</span>
						<DsIcon icon="more_vert" />
					</button>
				</DsDropdownMenu.Trigger>
				<DsDropdownMenu.Content sideOffset={4}>
					<DsDropdownMenu.Item onClick={handleEdit}>
						<DsIcon icon="edit" />
						<span>Edit</span>
					</DsDropdownMenu.Item>
					<DsDropdownMenu.Item onClick={handleDelete}>
						<DsIcon icon="delete" />
						<span>Delete</span>
					</DsDropdownMenu.Item>
					<DsDropdownMenu.Item onClick={handleShare}>
						<DsIcon icon="share" />
						<span>Share</span>
					</DsDropdownMenu.Item>
					<DsDropdownMenu.Item disabled>
						<DsIcon icon="block" />
						<span>Disabled Option</span>
					</DsDropdownMenu.Item>
				</DsDropdownMenu.Content>
			</DsDropdownMenu.Root>
		);
	},
};

export const WithSeparator: Story = {
	parameters: {
		docs: {
			description: {
				story: 'Dropdown menu with a separator to divide different action groups.',
			},
		},
	},
	render: function Render() {
		return (
			<DsDropdownMenu.Root>
				<DsDropdownMenu.Trigger>
					<button className="trigger">
						<span>Actions</span>
						<DsIcon icon="more_vert" />
					</button>
				</DsDropdownMenu.Trigger>
				<DsDropdownMenu.Content sideOffset={4}>
					<DsDropdownMenu.Item onClick={() => console.log('Edit')}>
						<DsIcon icon="edit" />
						<span>Edit</span>
					</DsDropdownMenu.Item>
					<DsDropdownMenu.Item onClick={() => console.log('Duplicate')}>
						<DsIcon icon="content_copy" />
						<span>Duplicate</span>
					</DsDropdownMenu.Item>
					<DsDropdownMenu.Separator />
					<DsDropdownMenu.Item onClick={() => console.log('Delete')} className="danger">
						<DsIcon icon="delete" />
						<span>Delete</span>
					</DsDropdownMenu.Item>
				</DsDropdownMenu.Content>
			</DsDropdownMenu.Root>
		);
	},
};

export const SelectableList: Story = {
	name: 'Selectable List with Search',
	parameters: {
		docs: {
			description: {
				story:
					'Dropdown with search functionality and selection tracking. Users can filter items and see which item is selected with a check indicator.',
			},
		},
	},
	render: function Render() {
		const [search, setSearch] = useState('');
		const [selected, setSelected] = useState<string | undefined>('option1');

		const options = [
			{ value: 'option1', label: 'Option 1' },
			{ value: 'option2', label: 'Option 2' },
			{ value: 'option3', label: 'Option 3' },
			{ value: 'option4', label: 'Option 4' },
		];

		const filteredOptions = options.filter((opt) => opt.label.toLowerCase().includes(search.toLowerCase()));

		return (
			<DsDropdownMenu.Root>
				<DsDropdownMenu.Trigger>
					<button className="trigger">
						<span>{selected || 'Select an option'}</span>
						<DsIcon icon="arrow_drop_down" />
					</button>
				</DsDropdownMenu.Trigger>
				<DsDropdownMenu.Content sideOffset={4}>
					<DsDropdownMenu.Search>
						<DsTextInput
							placeholder="Search"
							value={search}
							onValueChange={setSearch}
							onKeyDown={(e) => e.stopPropagation()}
							startAdornment={<DsIcon icon="search" size="tiny" />}
						/>
					</DsDropdownMenu.Search>
					{filteredOptions.map((option) => (
						<DsDropdownMenu.Item
							key={option.value}
							selected={selected === option.value}
							onClick={() => setSelected(option.value)}
						>
							{option.label}
						</DsDropdownMenu.Item>
					))}
				</DsDropdownMenu.Content>
			</DsDropdownMenu.Root>
		);
	},
};

export const CheckboxList: Story = {
	name: 'Checkbox List with Groups',
	parameters: {
		docs: {
			description: {
				story:
					'Dropdown with checkbox items in collapsible groups. Uses DsCheckbox component for each item. Includes search and action buttons.',
			},
		},
	},
	render: function Render() {
		const [open, setOpen] = useState(false);
		const [search, setSearch] = useState('');
		const [selected, setSelected] = useState(new Set(['item1']));

		const items = [
			{ id: 'item1', label: 'Menu text 1', description: 'Info Text' },
			{ id: 'item2', label: 'Menu text 2', description: 'Info Text' },
		];

		const groupedItems = [
			{ id: 'item3', label: 'Menu text 3', description: 'Info Text' },
			{ id: 'item4', label: 'Menu text 4', description: 'Info Text' },
			{ id: 'item5', label: 'Menu text 5', description: 'Info Text' },
			{ id: 'item6', label: 'Menu text 6', description: 'Info Text' },
			{ id: 'item7', label: 'Menu text 7', description: 'Info Text' },
		];

		const filteredItems = items.filter((item) => item.label.toLowerCase().includes(search.toLowerCase()));
		const filteredGroupedItems = groupedItems.filter((item) =>
			item.label.toLowerCase().includes(search.toLowerCase()),
		);

		const toggleSelection = (id: string) => {
			const newSelected = new Set(selected);
			if (newSelected.has(id)) {
				newSelected.delete(id);
			} else {
				newSelected.add(id);
			}
			setSelected(newSelected);
		};

		const handleApply = () => {
			console.log('Applied selections:', Array.from(selected));
		};

		const handleCancel = () => {
			console.log('Cancelled');
			setOpen(false);
			setSearch('');
		};

		return (
			<DsDropdownMenu.Root open={open} onOpenChange={setOpen}>
				<DsDropdownMenu.Trigger>
					<button className="trigger">
						<span>Multi Select ({selected.size})</span>
						<DsIcon icon="arrow_drop_down" />
					</button>
				</DsDropdownMenu.Trigger>
				<DsDropdownMenu.Content sideOffset={4}>
					<DsDropdownMenu.Search>
						<DsTextInput
							placeholder="Search"
							value={search}
							onValueChange={setSearch}
							onKeyDown={(e) => e.stopPropagation()}
							startAdornment={<DsIcon icon="search" size="tiny" />}
						/>
					</DsDropdownMenu.Search>
					{filteredItems.map((item) => (
						<DsDropdownMenu.Item
							key={item.id}
							onClick={(e) => {
								e.preventDefault();
								toggleSelection(item.id);
							}}
						>
							<DsCheckbox checked={selected.has(item.id)} onCheckedChange={() => toggleSelection(item.id)} />
							<div className="item-content">
								<DsTypography className="item-label" variant="body-sm-reg">
									{item.label}
								</DsTypography>
								<DsTypography className="item-description" variant="body-xs-reg">
									{item.description}
								</DsTypography>
							</div>
						</DsDropdownMenu.Item>
					))}
					<DsDropdownMenu.Group>
						{!!filteredGroupedItems.length && (
							<DsDropdownMenu.GroupLabel>Group Name</DsDropdownMenu.GroupLabel>
						)}
						<DsDropdownMenu.GroupContent>
							{filteredGroupedItems.map((item) => (
								<DsDropdownMenu.Item
									key={item.id}
									onClick={(e) => {
										e.preventDefault();
										toggleSelection(item.id);
									}}
								>
									<DsCheckbox
										checked={selected.has(item.id)}
										onCheckedChange={() => toggleSelection(item.id)}
									/>
									<div className="item-content">
										<DsTypography className="item-label" variant="body-sm-reg">
											{item.label}
										</DsTypography>
										<DsTypography className="item-description" variant="body-xs-reg">
											{item.description}
										</DsTypography>
									</div>
								</DsDropdownMenu.Item>
							))}
						</DsDropdownMenu.GroupContent>
					</DsDropdownMenu.Group>
					<DsDropdownMenu.Actions>
						<DsButton design="v1.2" buttonType="secondary" size="small" onClick={handleCancel}>
							Cancel
						</DsButton>
						<DsButton design="v1.2" buttonType="primary" size="small" onClick={handleApply}>
							Apply
						</DsButton>
					</DsDropdownMenu.Actions>
				</DsDropdownMenu.Content>
			</DsDropdownMenu.Root>
		);
	},
};

export const RadioList: Story = {
	name: 'Radio List with Actions',
	parameters: {
		docs: {
			description: {
				story:
					'Dropdown with radio items using DsRadioGroup. Single selection with search and action buttons. Blue background for selected items.',
			},
		},
	},
	render: function Render() {
		const [open, setOpen] = useState(false);
		const [search, setSearch] = useState('');
		const [tempSelected, setTempSelected] = useState<string>('');

		const options = [
			{ value: 'option1', label: 'Menu text 1', description: 'Info Text' },
			{ value: 'option2', label: 'Menu text 2', description: 'Info Text' },
			{ value: 'option3', label: 'Menu text 3', description: 'Info Text' },
			{ value: 'option4', label: 'Menu text 4', description: 'Info Text' },
		];

		const filteredOptions = options.filter((opt) => opt.label.toLowerCase().includes(search.toLowerCase()));

		const handleApply = () => {
			setOpen(false);
			console.log(`Applied: ${JSON.stringify(tempSelected)}`);
		};

		const handleCancel = () => {
			console.log('Cancelled');
			setOpen(false);
			setSearch('');
		};

		const handleReset = () => {
			console.log('Reset');
			setTempSelected('');
			setOpen(false);
			setSearch('');
		};

		return (
			<DsDropdownMenu.Root open={open} onOpenChange={setOpen}>
				<DsDropdownMenu.Trigger>
					<button className="trigger">
						<span>{options.find((o) => o.value === tempSelected)?.label || 'Select an option'}</span>
						<DsIcon icon="arrow_drop_down" />
					</button>
				</DsDropdownMenu.Trigger>
				<DsDropdownMenu.Content sideOffset={4}>
					<DsDropdownMenu.Search>
						<DsTextInput
							placeholder="Search"
							value={search}
							onValueChange={setSearch}
							onKeyDown={(e) => e.stopPropagation()}
							startAdornment={<DsIcon icon="search" size="tiny" />}
						/>
					</DsDropdownMenu.Search>
					<DsRadioGroup.Root className="radio-group" value={tempSelected} onValueChange={setTempSelected}>
						{filteredOptions.map((option) => (
							<DsDropdownMenu.Item
								key={option.value}
								onClick={() => setTempSelected(option.value)}
								className={tempSelected === option.value ? 'radio-selected' : ''}
							>
								<DsRadioGroup.Item value={option.value} id={option.value} />
								<div className="item-content">
									<DsTypography className="item-label" variant="body-sm-reg">
										{option.label}
									</DsTypography>
									<DsTypography className="item-description" variant="body-xs-reg">
										{option.description}
									</DsTypography>
								</div>
							</DsDropdownMenu.Item>
						))}
					</DsRadioGroup.Root>
					<DsDropdownMenu.Actions>
						<DsButton design="v1.2" variant="danger" size="small" onClick={handleReset}>
							Reset
						</DsButton>
						<DsButton design="v1.2" buttonType="secondary" size="small" onClick={handleCancel}>
							Cancel
						</DsButton>
						<DsButton design="v1.2" buttonType="primary" size="small" onClick={handleApply}>
							Apply
						</DsButton>
					</DsDropdownMenu.Actions>
				</DsDropdownMenu.Content>
			</DsDropdownMenu.Root>
		);
	},
};
