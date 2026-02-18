import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, screen, userEvent, within } from 'storybook/test';
import { DsDropdownMenu } from './ds-dropdown-menu';
import { DsIcon } from '../ds-icon';
import { DsTextInput } from '../ds-text-input';
import { DsCheckbox } from '../ds-checkbox';
import { DsTypography } from '../ds-typography';
import { DsButton } from '../ds-button';
import { DsRadioGroup } from '../ds-radio-group';
import './ds-dropdown-menu.stories.scss';

const meta: Meta<typeof DsDropdownMenu> = {
	title: 'Design System/DropdownMenu',
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof DsDropdownMenu>;

export const Default: Story = {
	parameters: {
		docs: {
			description: {
				story:
					'A basic dropdown menu with action items. Each item can have an icon and onSelect handler. Items can be disabled. Use separators to divide different action groups.',
			},
		},
	},
	render: () => {
		const handleEdit = () => console.log('Edit clicked');
		const handleDuplicate = () => console.log('Duplicate clicked');
		const handleShare = () => console.log('Share clicked');
		const handleDelete = () => console.log('Delete clicked');

		return (
			<DsDropdownMenu.Root>
				<DsDropdownMenu.Trigger className="trigger">
					<span>Actions</span>
					<DsIcon icon="more_vert" />
				</DsDropdownMenu.Trigger>
				<DsDropdownMenu.Content>
					<DsDropdownMenu.Item value="edit" onSelect={handleEdit}>
						<DsIcon icon="edit" />
						<span>Edit</span>
					</DsDropdownMenu.Item>
					<DsDropdownMenu.Item value="duplicate" onSelect={handleDuplicate}>
						<DsIcon icon="content_copy" />
						<span>Duplicate</span>
					</DsDropdownMenu.Item>
					<DsDropdownMenu.Item value="share" onSelect={handleShare}>
						<DsIcon icon="share" />
						<span>Share</span>
					</DsDropdownMenu.Item>
					<DsDropdownMenu.Separator />
					<DsDropdownMenu.Item value="delete" onSelect={handleDelete} className="danger">
						<DsIcon icon="delete" />
						<span>Delete</span>
					</DsDropdownMenu.Item>
					<DsDropdownMenu.Item value="disabled" disabled>
						<DsIcon icon="block" />
						<span>Disabled Option</span>
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

		const selectedOption = options.find((opt) => opt.value === selected)?.label;
		const filteredOptions = options.filter((opt) => opt.label.toLowerCase().includes(search.toLowerCase()));

		return (
			<DsDropdownMenu.Root onSelect={setSelected} positioning={{ sameWidth: true }}>
				<DsDropdownMenu.Trigger className="trigger fixedWidth">
					<span>{selectedOption || 'Select an option'}</span>
					<DsIcon icon="arrow_drop_down" />
				</DsDropdownMenu.Trigger>
				<DsDropdownMenu.Content>
					<DsDropdownMenu.Header>
						<DsTextInput
							placeholder="Search"
							value={search}
							onValueChange={setSearch}
							onKeyDown={(e) => e.stopPropagation()}
							slots={{
								startAdornment: <DsIcon icon="search" size="tiny" />,
							}}
						/>
					</DsDropdownMenu.Header>
					{filteredOptions.map((option) => (
						<DsDropdownMenu.Item key={option.value} value={option.value} selected={selected === option.value}>
							{option.label}
							{selected === option.value && <DsDropdownMenu.ItemIndicator />}
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
			<DsDropdownMenu.Root
				open={open}
				onOpenChange={setOpen}
				onSelect={toggleSelection}
				positioning={{ sameWidth: true }}
				preventCloseOnSelect
			>
				<DsDropdownMenu.Trigger className="trigger fixedWidth">
					<span>Multi Select ({selected.size})</span>
					<DsIcon icon="arrow_drop_down" />
				</DsDropdownMenu.Trigger>
				<DsDropdownMenu.Content>
					<DsDropdownMenu.Header>
						<DsTextInput
							placeholder="Search"
							value={search}
							onValueChange={setSearch}
							onKeyDown={(e) => e.stopPropagation()}
							slots={{
								startAdornment: <DsIcon icon="search" size="tiny" />,
							}}
						/>
					</DsDropdownMenu.Header>
					{filteredItems.map((item) => (
						<DsDropdownMenu.Item key={item.id} value={item.id}>
							<DsCheckbox
								tabIndex={-1}
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
					{!!filteredGroupedItems.length && (
						<DsDropdownMenu.ItemGroup>
							<DsDropdownMenu.ItemGroupLabel>Group Name</DsDropdownMenu.ItemGroupLabel>
							<DsDropdownMenu.ItemGroupContent>
								{filteredGroupedItems.map((item) => (
									<DsDropdownMenu.Item key={item.id} value={item.id}>
										<DsCheckbox
											tabIndex={-1}
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
							</DsDropdownMenu.ItemGroupContent>
						</DsDropdownMenu.ItemGroup>
					)}
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
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const trigger = canvas.getByRole('button', { name: /Multi Select/i });

		await userEvent.click(trigger);

		const groupLabelText = await screen.findByText('Group Name');
		await expect(groupLabelText).toBeInTheDocument();

		const groupLabel = groupLabelText.closest('button') as HTMLElement;
		await expect(groupLabel).toBeInTheDocument();

		const collapseIcon = await screen.findByText('keyboard_arrow_down');
		await expect(collapseIcon).toBeInTheDocument();

		const groupItem = screen.getByText('Menu text 3');
		await expect(groupItem).toBeVisible();

		await userEvent.click(groupLabel);

		await expect(screen.queryByText('Menu text 3')).not.toBeInTheDocument();
		await expect(screen.queryByText('Menu text 4')).not.toBeInTheDocument();

		await userEvent.click(groupLabel);

		await expect(screen.getByText('Menu text 3')).toBeVisible();
		await expect(screen.getByText('Menu text 4')).toBeVisible();
	},
};

type CollapsibleGroupControlledArgs = {
	onCollapsedChange?: (collapsed: boolean) => void;
};

export const CollapsibleGroupControlled: StoryObj<CollapsibleGroupControlledArgs> = {
	name: 'Collapsible Group (Controlled)',
	parameters: {
		docs: {
			description: {
				story:
					'The collapsed state is controlled externally via props, and the onCollapsedChange callback is triggered when the user clicks the group label.',
			},
		},
	},
	render: function Render(args) {
		const [collapsed, setCollapsed] = useState(false);

		const handleCollapsedChange = (newCollapsed: boolean) => {
			setCollapsed(newCollapsed);
			args.onCollapsedChange?.(newCollapsed);
		};

		return (
			<DsDropdownMenu.Root positioning={{ sameWidth: true }}>
				<DsDropdownMenu.Trigger className="trigger fixedWidth">
					<span>Controlled Group</span>
					<DsIcon icon="arrow_drop_down" />
				</DsDropdownMenu.Trigger>
				<DsDropdownMenu.Content>
					<DsDropdownMenu.ItemGroup collapsed={collapsed} onCollapsedChange={handleCollapsedChange}>
						<DsDropdownMenu.ItemGroupLabel>Settings</DsDropdownMenu.ItemGroupLabel>
						<DsDropdownMenu.ItemGroupContent>
							<DsDropdownMenu.Item value="profile">
								<DsIcon icon="person" />
								<span>Profile</span>
							</DsDropdownMenu.Item>
							<DsDropdownMenu.Item value="preferences">
								<DsIcon icon="settings" />
								<span>Preferences</span>
							</DsDropdownMenu.Item>
							<DsDropdownMenu.Item value="notifications">
								<DsIcon icon="notifications" />
								<span>Notifications</span>
							</DsDropdownMenu.Item>
						</DsDropdownMenu.ItemGroupContent>
					</DsDropdownMenu.ItemGroup>
				</DsDropdownMenu.Content>
			</DsDropdownMenu.Root>
		);
	},
	args: {
		onCollapsedChange: fn(),
	},
	play: async ({ canvasElement, args }) => {
		const canvas = within(canvasElement);

		const trigger = canvas.getByRole('button', { name: /Controlled Group/i });
		await userEvent.click(trigger);

		const groupLabelText = await screen.findByText('Settings');
		await expect(groupLabelText).toBeInTheDocument();

		const groupLabel = groupLabelText.closest('button') as HTMLElement;
		await expect(groupLabel).toBeInTheDocument();

		const profileItem = await screen.findByText('Profile');
		await expect(profileItem).toBeInTheDocument();

		await userEvent.click(groupLabel);

		await expect(args.onCollapsedChange).toHaveBeenCalledWith(true);
		await expect(args.onCollapsedChange).toHaveBeenCalledTimes(1);

		await expect(screen.queryByText('Profile')).not.toBeInTheDocument();

		await userEvent.click(groupLabel);

		await expect(args.onCollapsedChange).toHaveBeenCalledWith(false);
		await expect(args.onCollapsedChange).toHaveBeenCalledTimes(2);

		await expect(await screen.findByText('Profile')).toBeVisible();
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
		const [tempSelected, setTempSelected] = useState<string | null>(null);

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
			<DsDropdownMenu.Root
				open={open}
				onOpenChange={setOpen}
				onSelect={setTempSelected}
				positioning={{ sameWidth: true }}
				preventCloseOnSelect
			>
				<DsDropdownMenu.Trigger className="trigger fixedWidth">
					<span>{tempSelected || 'Select an option'}</span>
					<DsIcon icon="arrow_drop_down" />
				</DsDropdownMenu.Trigger>
				<DsDropdownMenu.Content>
					<DsDropdownMenu.Header>
						<DsTextInput
							placeholder="Search"
							value={search}
							onValueChange={setSearch}
							onKeyDown={(e) => e.stopPropagation()}
							slots={{
								startAdornment: <DsIcon icon="search" size="tiny" />,
							}}
						/>
					</DsDropdownMenu.Header>
					<DsRadioGroup.Root className="radio-group" value={tempSelected} onValueChange={setTempSelected}>
						{filteredOptions.map((option) => (
							<DsDropdownMenu.Item
								key={option.value}
								value={option.value}
								className={tempSelected === option.value ? 'radio-selected' : ''}
							>
								<DsRadioGroup.Item value={option.value} />
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

export const ActionMenu: Story = {
	parameters: {
		docs: {
			description: {
				story:
					'Action Menu pattern from Figma design system demonstrating nested submenus. Features both full-size button and icon button variants. Menu items can trigger submenus using TriggerItem with right arrow indicators. Includes separators and danger-styled items for risky actions.',
			},
		},
	},
	render: () => {
		const handleEdit = () => console.log('Edit clicked');
		const handleDuplicate = () => console.log('Duplicate clicked');
		const handleShareEmail = () => console.log('Share via Email clicked');
		const handleShareLink = () => console.log('Copy Link clicked');
		const handleShareSocial = () => console.log('Share to Social Media clicked');
		const handleDelete = () => console.log('Delete item clicked');

		return (
			<DsDropdownMenu.Root>
				<DsDropdownMenu.Trigger asChild>
					<DsButton design="v1.2" buttonType="secondary">
						<DsIcon icon="more_vert" />
					</DsButton>
				</DsDropdownMenu.Trigger>
				<DsDropdownMenu.Content>
					<DsDropdownMenu.Item value="edit" onSelect={handleEdit}>
						<DsIcon icon="edit" />
						<span>Edit</span>
					</DsDropdownMenu.Item>
					<DsDropdownMenu.Item value="duplicate" onSelect={handleDuplicate}>
						<DsIcon icon="content_copy" />
						<span>Duplicate</span>
					</DsDropdownMenu.Item>
					<DsDropdownMenu.Root positioning={{ placement: 'right-start' }}>
						<DsDropdownMenu.TriggerItem className="action-menu-item">
							<DsIcon icon="share" />
							<span>Share</span>
						</DsDropdownMenu.TriggerItem>
						<DsDropdownMenu.Content>
							<DsDropdownMenu.Item value="share-email" onSelect={handleShareEmail}>
								<DsIcon icon="mail" />
								<span>Email</span>
							</DsDropdownMenu.Item>
							<DsDropdownMenu.Item value="share-link" onSelect={handleShareLink}>
								<DsIcon icon="link" />
								<span>Copy Link</span>
							</DsDropdownMenu.Item>
							<DsDropdownMenu.Item value="share-social" onSelect={handleShareSocial}>
								<DsIcon icon="public" />
								<span>Social Media</span>
							</DsDropdownMenu.Item>
						</DsDropdownMenu.Content>
					</DsDropdownMenu.Root>
					<DsDropdownMenu.Separator />
					<DsDropdownMenu.Item value="delete" onSelect={handleDelete} className="danger">
						<DsIcon icon="delete" />
						<span>Delete item</span>
					</DsDropdownMenu.Item>
				</DsDropdownMenu.Content>
			</DsDropdownMenu.Root>
		);
	},
};
