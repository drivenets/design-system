import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import DsTag from './ds-tag';
import { tagSizes, tagVariants } from './ds-tag.types';
import { DsIcon } from '../ds-icon';

const meta: Meta<typeof DsTag> = {
	title: 'Components/Tag',
	component: DsTag,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		label: {
			control: 'text',
			description: 'The label text to display in the tag',
		},
		value: {
			control: 'text',
			description: 'Value rendered after the key. Required for the `key-value` variant',
		},
		size: {
			control: 'select',
			options: tagSizes,
			description: 'Size of the tag',
		},
		variant: {
			control: 'select',
			options: tagVariants,
			description: 'Variant of the tag',
		},
		selected: {
			control: 'boolean',
			description: 'Whether the tag is in a selected state',
		},
		disabled: {
			control: 'boolean',
			description: 'Whether the tag is disabled',
		},
		onClick: {
			action: 'changed',
			description: 'Function called when clicked',
		},
		className: {
			table: { disable: true },
			control: false,
		},
		style: {
			table: { disable: true },
			control: false,
		},
		ref: {
			table: { disable: true },
			control: false,
		},
	},
};

export default meta;

type Story = StoryObj<typeof DsTag>;

export const Default: Story = {
	args: {
		label: 'Default Tag',
		onClick: undefined,
	},
};

export const Clickable: Story = {
	args: {
		label: 'Clickable Tag',
		onClick: fn(),
	},
};

export const Controlled: Story = {
	render: function Render() {
		const [deleted, setDeleted] = useState(false);
		const [selected, setSelected] = useState(true);

		if (deleted) {
			return <span>Poof! Deleted!</span>;
		}

		return (
			<DsTag
				selected={selected}
				label="Controlled"
				onDelete={() => setDeleted(true)}
				onClick={() => setSelected(!selected)}
			/>
		);
	},
};

export const Include: Story = {
	args: {
		label: 'Include Tag',
		variant: 'include',
		onDelete: fn(),
	},
};

export const Exclude: Story = {
	args: {
		label: 'Exclude Tag',
		variant: 'exclude',
		onDelete: fn(),
	},
};

export const Small: Story = {
	args: {
		label: 'Small Tag',
		size: 'small',
	},
};

/**
 * Use the `key-value` variant to display a labeled attribute, e.g. `Category: Networking`.
 * The `label` is the bold key (`--font-main`); `value` is the secondary-colored value
 * (`--font-secondary`). The colon is appended automatically — pass `label="Category"`, not
 * `label="Category:"`.
 */
export const KeyValue: Story = {
	args: {
		variant: 'key-value',
		label: 'Category',
		value: 'Networking',
	},
};

export const KeyValueSelected: Story = {
	args: {
		variant: 'key-value',
		label: 'Category',
		value: 'Networking',
		selected: true,
		onClick: fn(),
	},
};

export const KeyValueDisabled: Story = {
	args: {
		variant: 'key-value',
		label: 'Category',
		value: 'Networking',
		disabled: true,
	},
};

export const KeyValueWithDelete: Story = {
	args: {
		variant: 'key-value',
		label: 'Category',
		value: 'Networking',
		onDelete: fn(),
	},
};

export const KeyValueSmall: Story = {
	args: {
		variant: 'key-value',
		label: 'Category',
		value: 'Networking',
		size: 'small',
	},
};

export const Disabled: Story = {
	args: {
		label: 'Disabled Tag',
		selected: true,
		disabled: true,
		onClick: fn(),
		onDelete: fn(),
	},
};

export const CustomIcon: Story = {
	args: {
		label: 'Custom Icon Tag',
		variant: 'include',
		slots: {
			icon: <DsIcon icon="star" size="tiny" />,
		},
	},
};

export const KeyboardInteraction: Story = {
	args: {
		label: 'Keyboard Tag',
		onClick: fn(),
		onDelete: fn(),
	},
};
