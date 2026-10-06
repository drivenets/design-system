import * as React from 'react';
import { useState } from 'react';
import {
	DsAvatar,
	DsButton,
	DsCheckbox,
	DsDropdownMenu,
	DsIcon,
	DsRadioGroup,
	DsStack,
	DsTextInput,
	DsTypography,
	DsUserCard,
} from '@drivenets/design-system';

// Owned preview: the story file does `import './ds-dropdown-menu.stories.scss'` (a
// plain, non-module side-effect stylesheet) and references its classes by bare string
// (`className="trigger"`, `"trigger fixedWidth"`, `"danger"`, `"item-label"`, etc.).
// Side-effect .scss imports compile as empty in the lightweight story-preview pass (no
// Sass preprocessor there - component styles ship via the bundle CSS instead), so every
// one of those classNames resolves to a no-op and the custom trigger (a plain
// `<DsDropdownMenu.Trigger className="trigger">`, not an `asChild` `DsButton`) renders
// with no border/padding/background at all. The `asChild`-wrapped triggers (UserMenu,
// ActionMenu, which pass a real `DsButton`) are unaffected - only the 6 stories that
// style the trigger directly needed this. Reimplemented here with the same values
// inlined as plain style objects.

const triggerStyle: React.CSSProperties = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	gap: 'var(--xs)',
	padding: 'var(--xs) var(--sm)',
	border: '1px solid var(--color-dap-gray-500)',
	borderRadius: 'var(--3xs)',
	background: 'var(--color-dap-gray-050)',
	cursor: 'pointer',
	font: 'inherit',
	color: 'var(--color-dap-gray-700)',
	fontSize: 'var(--body-font-size-sm)',
};

const triggerFixedWidthStyle: React.CSSProperties = { ...triggerStyle, width: 250 };

const dangerStyle: React.CSSProperties = { color: 'var(--background-error-hover)' };

const itemLabelStyle: React.CSSProperties = {
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	whiteSpace: 'nowrap',
	color: 'var(--font-main)',
};

const itemDescriptionStyle: React.CSSProperties = {
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	whiteSpace: 'nowrap',
	color: 'var(--font-secondary)',
};

const radioGroupStyle: React.CSSProperties = { gap: 0 };

const radioSelectedStyle: React.CSSProperties = { backgroundColor: 'var(--background-secondary-hover)' };

const noop = () => {};

export const Default = () => (
	<DsDropdownMenu.Root>
		<DsDropdownMenu.Trigger style={triggerStyle}>
			<span>Actions</span>
			<DsIcon icon="more_vert" />
		</DsDropdownMenu.Trigger>
		<DsDropdownMenu.Content>
			<DsDropdownMenu.Item value="edit" onSelect={noop}>
				<DsIcon icon="edit" />
				<span>Edit</span>
			</DsDropdownMenu.Item>
			<DsDropdownMenu.Item value="duplicate" onSelect={noop}>
				<DsIcon icon="content_copy" />
				<span>Duplicate</span>
			</DsDropdownMenu.Item>
			<DsDropdownMenu.Item value="share" onSelect={noop}>
				<DsIcon icon="share" />
				<span>Share</span>
			</DsDropdownMenu.Item>
			<DsDropdownMenu.Separator />
			<DsDropdownMenu.Item value="delete" onSelect={noop} style={dangerStyle}>
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

export const SelectableList = () => {
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
			<DsDropdownMenu.Trigger style={triggerFixedWidthStyle}>
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
						slots={{ startAdornment: <DsIcon icon="search" size="tiny" /> }}
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
};

export const CheckboxList = () => {
	const [open, setOpen] = useState(false);
	const [search, setSearch] = useState('');
	const [selected, setSelected] = useState(new Set(['item1']));

	const items = [
		{ id: 'item1', label: 'Menu text 1', description: 'Info Text' },
		{ id: 'item2', label: 'Menu text 2', description: 'Info Text' },
		{ id: 'item-error', label: 'Error item', description: 'Something went wrong', variant: 'error' as const },
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

	const handleCancel = () => {
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
			<DsDropdownMenu.Trigger style={triggerFixedWidthStyle}>
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
						slots={{ startAdornment: <DsIcon icon="search" size="tiny" /> }}
					/>
				</DsDropdownMenu.Header>
				{filteredItems.map((item) => {
					const isError = 'variant' in item && item.variant === 'error';

					return (
						<DsDropdownMenu.Item key={item.id} value={item.id} variant={isError ? 'error' : undefined}>
							{isError ? (
								<DsIcon icon="search" size="tiny" />
							) : (
								<DsCheckbox
									tabIndex={-1}
									checked={selected.has(item.id)}
									onCheckedChange={() => toggleSelection(item.id)}
								/>
							)}
							<DsStack direction="column" gap="var(--3xs)">
								<DsTypography
									style={itemLabelStyle}
									variant="body-sm-reg"
									color={isError ? 'error' : undefined}
								>
									{item.label}
								</DsTypography>
								<DsTypography
									style={itemDescriptionStyle}
									variant="body-xs-reg"
									color={isError ? 'error' : undefined}
								>
									{item.description}
								</DsTypography>
							</DsStack>
						</DsDropdownMenu.Item>
					);
				})}
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
									<DsStack direction="column" gap="var(--3xs)">
										<DsTypography style={itemLabelStyle} variant="body-sm-reg">
											{item.label}
										</DsTypography>
										<DsTypography style={itemDescriptionStyle} variant="body-xs-reg">
											{item.description}
										</DsTypography>
									</DsStack>
								</DsDropdownMenu.Item>
							))}
						</DsDropdownMenu.ItemGroupContent>
					</DsDropdownMenu.ItemGroup>
				)}
				<DsDropdownMenu.Actions>
					<DsButton design="v1.2" buttonType="secondary" size="small" onClick={handleCancel}>
						Cancel
					</DsButton>
					<DsButton design="v1.2" buttonType="primary" size="small" onClick={noop}>
						Apply
					</DsButton>
				</DsDropdownMenu.Actions>
			</DsDropdownMenu.Content>
		</DsDropdownMenu.Root>
	);
};

export const CollapsibleGroupControlled = () => {
	const [collapsed, setCollapsed] = useState(false);

	return (
		<DsDropdownMenu.Root positioning={{ sameWidth: true }}>
			<DsDropdownMenu.Trigger style={triggerFixedWidthStyle}>
				<span>Controlled Group</span>
				<DsIcon icon="arrow_drop_down" />
			</DsDropdownMenu.Trigger>
			<DsDropdownMenu.Content>
				<DsDropdownMenu.ItemGroup collapsed={collapsed} onCollapsedChange={setCollapsed}>
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
};

export const RadioList = () => {
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

	const handleCancel = () => {
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
			<DsDropdownMenu.Trigger style={triggerFixedWidthStyle}>
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
						slots={{ startAdornment: <DsIcon icon="search" size="tiny" /> }}
					/>
				</DsDropdownMenu.Header>
				<DsRadioGroup.Root style={radioGroupStyle} value={tempSelected} onValueChange={setTempSelected}>
					{filteredOptions.map((option) => (
						<DsDropdownMenu.Item
							key={option.value}
							value={option.value}
							style={tempSelected === option.value ? radioSelectedStyle : undefined}
						>
							<DsRadioGroup.Item value={option.value} />
							<DsStack direction="column" gap="var(--3xs)">
								<DsTypography style={itemLabelStyle} variant="body-sm-reg">
									{option.label}
								</DsTypography>
								<DsTypography style={itemDescriptionStyle} variant="body-xs-reg">
									{option.description}
								</DsTypography>
							</DsStack>
						</DsDropdownMenu.Item>
					))}
				</DsRadioGroup.Root>
				<DsDropdownMenu.Actions>
					<DsButton design="v1.2" variant="danger" size="small" onClick={() => setOpen(false)}>
						Reset
					</DsButton>
					<DsButton design="v1.2" buttonType="secondary" size="small" onClick={handleCancel}>
						Cancel
					</DsButton>
					<DsButton design="v1.2" buttonType="primary" size="small" onClick={() => setOpen(false)}>
						Apply
					</DsButton>
				</DsDropdownMenu.Actions>
			</DsDropdownMenu.Content>
		</DsDropdownMenu.Root>
	);
};

export const UserMenu = () => (
	<DsDropdownMenu.Root positioning={{ placement: 'bottom-end' }}>
		<DsDropdownMenu.Trigger asChild>
			<DsButton design="v1.2" buttonType="secondary">
				<DsAvatar name="Mockup Developer" size="sm" />
			</DsButton>
		</DsDropdownMenu.Trigger>
		<DsDropdownMenu.Content>
			<DsUserCard name="Mockup Developer" subtitle="developer@mock.local" />
			<DsDropdownMenu.Item value="profile" onSelect={noop}>
				<DsIcon icon="person" />
				<span>Profile</span>
			</DsDropdownMenu.Item>
			<DsDropdownMenu.Item value="settings" onSelect={noop}>
				<DsIcon icon="settings" />
				<span>Settings</span>
			</DsDropdownMenu.Item>
			<DsDropdownMenu.Actions align="stretch">
				<DsDropdownMenu.Item value="logout" onSelect={noop}>
					<DsIcon icon="logout" />
					<span>Log out</span>
				</DsDropdownMenu.Item>
			</DsDropdownMenu.Actions>
		</DsDropdownMenu.Content>
	</DsDropdownMenu.Root>
);

export const ActionMenu = () => (
	<DsDropdownMenu.Root>
		<DsDropdownMenu.Trigger asChild>
			<DsButton design="v1.2" buttonType="secondary">
				<DsIcon icon="more_vert" />
			</DsButton>
		</DsDropdownMenu.Trigger>
		<DsDropdownMenu.Content>
			<DsDropdownMenu.Item value="edit" onSelect={noop}>
				<DsIcon icon="edit" />
				<span>Edit</span>
			</DsDropdownMenu.Item>
			<DsDropdownMenu.Item value="duplicate" onSelect={noop}>
				<DsIcon icon="content_copy" />
				<span>Duplicate</span>
			</DsDropdownMenu.Item>
			<DsDropdownMenu.Root positioning={{ placement: 'right-start' }}>
				<DsDropdownMenu.TriggerItem>
					<DsIcon icon="share" />
					<span>Share</span>
				</DsDropdownMenu.TriggerItem>
				<DsDropdownMenu.Content>
					<DsDropdownMenu.Item value="share-email" onSelect={noop}>
						<DsIcon icon="mail" />
						<span>Email</span>
					</DsDropdownMenu.Item>
					<DsDropdownMenu.Item value="share-link" onSelect={noop}>
						<DsIcon icon="link" />
						<span>Copy Link</span>
					</DsDropdownMenu.Item>
					<DsDropdownMenu.Item value="share-social" onSelect={noop}>
						<DsIcon icon="public" />
						<span>Social Media</span>
					</DsDropdownMenu.Item>
				</DsDropdownMenu.Content>
			</DsDropdownMenu.Root>
			<DsDropdownMenu.Separator />
			<DsDropdownMenu.Item value="delete" onSelect={noop} style={dangerStyle}>
				<DsIcon icon="delete" />
				<span>Delete item</span>
			</DsDropdownMenu.Item>
		</DsDropdownMenu.Content>
	</DsDropdownMenu.Root>
);

export const NestedSubmenus = () => (
	<DsDropdownMenu.Root>
		<DsDropdownMenu.Trigger style={triggerStyle}>
			<span>File</span>
			<DsIcon icon="arrow_drop_down" />
		</DsDropdownMenu.Trigger>
		<DsDropdownMenu.Content>
			<DsDropdownMenu.Root positioning={{ placement: 'right-start' }}>
				<DsDropdownMenu.TriggerItem>
					<DsIcon icon="note_add" />
					<span>New</span>
				</DsDropdownMenu.TriggerItem>
				<DsDropdownMenu.Content>
					<DsDropdownMenu.Item value="blank" onSelect={noop}>
						<DsIcon icon="description" />
						<span>Blank Document</span>
					</DsDropdownMenu.Item>
					<DsDropdownMenu.Root positioning={{ placement: 'right-start' }}>
						<DsDropdownMenu.TriggerItem>
							<DsIcon icon="dashboard" />
							<span>From Template</span>
						</DsDropdownMenu.TriggerItem>
						<DsDropdownMenu.Content>
							<DsDropdownMenu.Item value="template-resume" onSelect={noop}>
								<span>Resume</span>
							</DsDropdownMenu.Item>
							<DsDropdownMenu.Item value="template-invoice" onSelect={noop}>
								<span>Invoice</span>
							</DsDropdownMenu.Item>
							<DsDropdownMenu.Item value="template-letter" onSelect={noop}>
								<span>Letter</span>
							</DsDropdownMenu.Item>
						</DsDropdownMenu.Content>
					</DsDropdownMenu.Root>
				</DsDropdownMenu.Content>
			</DsDropdownMenu.Root>
			<DsDropdownMenu.Item value="open" onSelect={noop}>
				<DsIcon icon="folder_open" />
				<span>Open…</span>
			</DsDropdownMenu.Item>
		</DsDropdownMenu.Content>
	</DsDropdownMenu.Root>
);
