import { useState } from 'react';
import { fn } from 'storybook/test';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { DsSavedFilters } from './index';
import type {
	DsSavedFilterItem,
	DsSavedFiltersSaveProps,
	DsSavedFiltersTriggerProps,
} from './ds-saved-filters.types';
import { DsStack } from '../ds-stack';
import { DsTypography } from '../ds-typography';
import styles from './ds-saved-filters.stories.module.scss';

type StoryArgs = DsSavedFiltersTriggerProps & Pick<DsSavedFiltersSaveProps, 'onUpdate' | 'onSaveAs'>;

const meta: Meta<StoryArgs> = {
	title: 'Components/SavedFilters',
	component: DsSavedFilters.Trigger,
	tags: ['!manifest'],
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
Picker for named filter snapshots: a trigger tag, an anchored list, save / rename, and delete.

**Internal component.** Per design, saved filters belong to the filters bar and are not
exported from \`@drivenets/design-system\`. These stories document it for internal review;
consumers get it through the bar, never directly.`,
			},
		},
	},
	args: {
		items: [
			{ id: '1', name: 'MyFilter_1', count: 2 },
			{ id: '2', name: 'MyFilter_2', count: 1 },
			{ id: '3', name: 'MyFilter_3', count: 5 },
		],
		value: null,
		dirty: false,
		onValueChange: fn(),
		onClear: fn(),
		onUpdate: fn(),
		onSaveAs: fn(),
		onRename: fn(),
		onDelete: fn(),
	},
	argTypes: {
		items: {
			control: 'object',
			description: 'Named snapshots. `count` is the number of Filter conditions in that snapshot.',
			type: {
				name: 'array',
				value: {
					name: 'object',
					value: {
						id: { name: 'string', required: true },
						name: { name: 'string', required: true },
						count: { name: 'number' },
					},
				},
			},
			table: {
				type: {
					summary: 'DsSavedFilterItem[]',
					detail: '{ id: string; name: string; count?: number }',
				},
			},
		},
		value: {
			control: 'text',
			description: 'Id of the Active saved filter. Leave empty when none is applied.',
		},
		dirty: {
			control: 'boolean',
			description: 'Whether the working document diverged from the Active saved filter',
		},
		locale: {
			control: 'object',
			description: 'Override built-in copy',
		},
		className: { table: { disable: true } },
		style: { table: { disable: true } },
		ref: { table: { disable: true } },
		onValueChange: { action: 'valueChange', table: { disable: true } },
		onClear: { action: 'clear', table: { disable: true } },
		onUpdate: { action: 'update', table: { disable: true } },
		onSaveAs: { action: 'saveAs', table: { disable: true } },
		onRename: { action: 'rename', table: { disable: true } },
		onDelete: { action: 'delete', table: { disable: true } },
	},
};

export default meta;
type Story = StoryObj<StoryArgs>;

/**
 * Empty list: the picker shows the no-data empty state. Build a filter, then save it.
 */
export const NoSavedFilters: Story = {
	args: {
		items: [],
		value: null,
		dirty: false,
	},
	parameters: {
		docs: { source: { type: 'code' } },
	},
	render: (args) => {
		const [value, setValue] = useState(args.value);

		return (
			<DsSavedFilters.Trigger
				items={args.items}
				value={value}
				dirty={args.dirty}
				locale={args.locale}
				onValueChange={(id) => {
					args.onValueChange(id);
					setValue(id);
				}}
				onClear={() => {
					void args.onClear();
					setValue(null);
				}}
				onRename={args.onRename}
				onDelete={args.onDelete}
			/>
		);
	},
};

/**
 * Saved snapshots exist but none is applied. The tag reads “Saved filters” with a chevron.
 */
export const ListNoneActive: Story = {
	args: {
		value: null,
		dirty: false,
	},
	parameters: {
		docs: { source: { type: 'code' } },
	},
	render: (args) => {
		const [value, setValue] = useState(args.value);
		const [items, setItems] = useState<DsSavedFilterItem[]>([...args.items]);

		return (
			<DsSavedFilters.Trigger
				items={items}
				value={value}
				dirty={args.dirty}
				locale={args.locale}
				onValueChange={(id) => {
					args.onValueChange(id);
					setValue(id);
				}}
				onClear={() => {
					void args.onClear();
					setValue(null);
				}}
				onRename={(id, name) => {
					void args.onRename(id, name);
					setItems((current) => current.map((item) => (item.id === id ? { ...item, name } : item)));
				}}
				onDelete={(id) => {
					void args.onDelete(id);
					setItems((current) => current.filter((item) => item.id !== id));
				}}
			/>
		);
	},
};

/**
 * An applied snapshot: the tag and the matching row both use a filled bookmark.
 */
export const ListActive: Story = {
	args: {
		value: '1',
		dirty: false,
	},
	parameters: {
		docs: { source: { type: 'code' } },
	},
	render: (args) => {
		const [value, setValue] = useState(args.value);
		const [items, setItems] = useState<DsSavedFilterItem[]>([...args.items]);

		return (
			<DsSavedFilters.Trigger
				items={items}
				value={value}
				dirty={args.dirty}
				locale={args.locale}
				onValueChange={(id) => {
					args.onValueChange(id);
					setValue(id);
				}}
				onClear={() => {
					void args.onClear();
					setValue(null);
				}}
				onRename={(id, name) => {
					void args.onRename(id, name);
					setItems((current) => current.map((item) => (item.id === id ? { ...item, name } : item)));
				}}
				onDelete={(id) => {
					void args.onDelete(id);
					setItems((current) => current.filter((item) => item.id !== id));
					setValue((current) => (current === id ? null : current));
				}}
			/>
		);
	},
};

/**
 * The working document diverged from the applied snapshot. The tag shows a warning and Save is mounted.
 */
export const DirtyActive: Story = {
	args: {
		value: '1',
		dirty: true,
	},
	parameters: {
		docs: { source: { type: 'code' } },
	},
	render: (args) => {
		const [value, setValue] = useState(args.value);
		const [items, setItems] = useState<DsSavedFilterItem[]>([...args.items]);

		return (
			<DsStack direction="row" alignItems="center" gap="var(--xs)">
				<DsSavedFilters.Trigger
					items={items}
					value={value}
					dirty={args.dirty}
					locale={args.locale}
					onValueChange={(id) => {
						args.onValueChange(id);
						setValue(id);
					}}
					onClear={() => {
						void args.onClear();
						setValue(null);
					}}
					onRename={(id, name) => {
						void args.onRename(id, name);
						setItems((current) => current.map((item) => (item.id === id ? { ...item, name } : item)));
					}}
					onDelete={(id) => {
						void args.onDelete(id);
						setItems((current) => current.filter((item) => item.id !== id));
						setValue((current) => (current === id ? null : current));
					}}
				/>
				<DsSavedFilters.Save
					items={items}
					value={value}
					locale={args.locale}
					onUpdate={args.onUpdate}
					onSaveAs={(name) => {
						void args.onSaveAs(name);
						setItems((current) => [...current, { id: name, name, count: 0 }]);
						setValue(name);
					}}
				/>
			</DsStack>
		);
	},
};

/**
 * Row overflow: rename (name modal) and delete. Save is omitted so the picker is the focus.
 */
export const RowActions: Story = {
	args: {
		value: null,
		dirty: false,
	},
	parameters: {
		docs: { source: { type: 'code' } },
	},
	render: (args) => {
		const [value, setValue] = useState(args.value);
		const [items, setItems] = useState<DsSavedFilterItem[]>([...args.items]);

		return (
			<DsSavedFilters.Trigger
				items={items}
				value={value}
				dirty={args.dirty}
				locale={args.locale}
				onValueChange={(id) => {
					args.onValueChange(id);
					setValue(id);
				}}
				onClear={() => {
					void args.onClear();
					setValue(null);
				}}
				onRename={(id, name) => {
					void args.onRename(id, name);
					setItems((current) => current.map((item) => (item.id === id ? { ...item, name } : item)));
				}}
				onDelete={(id) => {
					void args.onDelete(id);
					setItems((current) => current.filter((item) => item.id !== id));
				}}
			/>
		);
	},
};

/**
 * Sibling layout: trigger, other bar chrome, then Save. The filters bar will interleave regions this way.
 */
export const CompoundBar: Story = {
	args: {
		items: [
			{ id: '1', name: 'MyFilter_1', count: 2 },
			{ id: '2', name: 'MyFilter_2' },
		],
		value: null,
		dirty: false,
	},
	parameters: {
		docs: { source: { type: 'code' } },
	},
	render: (args) => {
		const [value, setValue] = useState(args.value);
		const [items, setItems] = useState<DsSavedFilterItem[]>([...args.items]);

		return (
			<div className={styles.bar}>
				<DsSavedFilters.Trigger
					items={items}
					value={value}
					dirty={args.dirty}
					locale={args.locale}
					onValueChange={(id) => {
						args.onValueChange(id);
						setValue(id);
					}}
					onClear={() => {
						void args.onClear();
						setValue(null);
					}}
					onRename={(id, name) => {
						void args.onRename(id, name);
						setItems((current) => current.map((item) => (item.id === id ? { ...item, name } : item)));
					}}
					onDelete={(id) => {
						void args.onDelete(id);
						setItems((current) => current.filter((item) => item.id !== id));
					}}
				/>
				<div className={styles.spacer} />
				<DsTypography variant="body-sm-reg" color="secondary">
					Query / pins
				</DsTypography>
				<DsSavedFilters.Save
					items={items}
					value={value}
					locale={args.locale}
					onUpdate={args.onUpdate}
					onSaveAs={(name) => {
						void args.onSaveAs(name);
						setItems((current) => [...current, { id: name, name }]);
						setValue(name);
					}}
				/>
			</div>
		);
	},
};

/**
 * Callbacks may return a Promise. The launching control stays in a loading state until it settles.
 */
export const AsyncActions: Story = {
	args: {
		value: '1',
		dirty: true,
	},
	parameters: {
		docs: { source: { type: 'code' } },
	},
	render: (args) => {
		const [value, setValue] = useState(args.value);
		const [items, setItems] = useState<DsSavedFilterItem[]>([...args.items]);
		const persist = () => new Promise<void>((resolve) => setTimeout(resolve, 800));

		return (
			<DsStack direction="row" alignItems="center" gap="var(--xs)">
				<DsSavedFilters.Trigger
					items={items}
					value={value}
					dirty={args.dirty}
					locale={args.locale}
					onValueChange={(id) => {
						args.onValueChange(id);
						setValue(id);
					}}
					onClear={async () => {
						void args.onClear();
						await persist();
						setValue(null);
					}}
					onRename={async (id, name) => {
						void args.onRename(id, name);
						await persist();
						setItems((current) => current.map((item) => (item.id === id ? { ...item, name } : item)));
					}}
					onDelete={async (id) => {
						void args.onDelete(id);
						await persist();
						setItems((current) => current.filter((item) => item.id !== id));
						setValue((current) => (current === id ? null : current));
					}}
				/>
				<DsSavedFilters.Save
					items={items}
					value={value}
					locale={args.locale}
					onUpdate={async () => {
						void args.onUpdate();
						await persist();
					}}
					onSaveAs={async (name) => {
						void args.onSaveAs(name);
						await persist();
						setItems((current) => [...current, { id: name, name, count: 0 }]);
						setValue(name);
					}}
				/>
			</DsStack>
		);
	},
};

/**
 * Override built-in strings with `locale`. Omitted keys keep their defaults.
 */
export const Localized: Story = {
	args: {
		items: [{ id: '1', name: 'MyFilter_1', count: 2 }],
		value: null,
		dirty: false,
		locale: {
			savedFilters: 'My saved filters',
			noSavedFilters: 'Nothing saved yet. Build a filter, then choose “Save this filter”.',
			saveFilter: 'Save this filter',
			expandAriaLabel: 'Show saved filters',
			clearAriaLabel: 'Clear saved filter',
		},
	},
	parameters: {
		docs: { source: { type: 'code' } },
	},
	render: (args) => {
		const [value, setValue] = useState(args.value);

		return (
			<DsSavedFilters.Trigger
				items={args.items}
				value={value}
				dirty={args.dirty}
				locale={args.locale}
				onValueChange={(id) => {
					args.onValueChange(id);
					setValue(id);
				}}
				onClear={() => {
					void args.onClear();
					setValue(null);
				}}
				onRename={args.onRename}
				onDelete={args.onDelete}
			/>
		);
	},
};
