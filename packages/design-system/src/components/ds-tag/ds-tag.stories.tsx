import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent, waitFor, within } from 'storybook/test';
import DsTag from './ds-tag';
import { tagSizes, tagVariants } from './ds-tag.types';
import { DsIcon } from '../ds-icon';

const meta: Meta<typeof DsTag> = {
	title: 'Design System/Tag',
	component: DsTag,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		label: {
			control: 'text',
			description: 'The label text to display in the tag',
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
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByText('Default Tag')).toBeInTheDocument();
	},
};

export const Clickable: Story = {
	args: {
		label: 'Clickable Tag',
		onClick: fn(),
	},
	play: async ({ args, canvasElement }) => {
		const canvas = within(canvasElement);

		const tag = canvas.getByText('Clickable Tag');

		await expect(tag).toBeInTheDocument();

		// Click triggers onClick
		await userEvent.click(tag);
		await expect(args.onClick).toHaveBeenCalledTimes(1);

		await userEvent.click(tag);
		await expect(args.onClick).toHaveBeenCalledTimes(2);
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
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const tag = canvas.getByLabelText('Controlled');
		await expect(tag).toHaveAttribute('aria-pressed', 'true');

		await userEvent.click(tag);

		await waitFor(async () => {
			await expect(tag).not.toHaveAttribute('aria-pressed');
		});

		await userEvent.click(tag);

		await waitFor(async () => {
			await expect(tag).toHaveAttribute('aria-pressed', 'true');
		});

		const deleteButton = canvas.getByLabelText('Delete tag');
		await userEvent.click(deleteButton);

		await waitFor(async () => {
			await expect(canvas.getByText('Poof! Deleted!')).toBeInTheDocument();
		});
	},
};

export const Include: Story = {
	args: {
		label: 'Include Tag',
		variant: 'include',
		onDelete: fn(),
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByText('Include Tag')).toBeInTheDocument();

		await expect(canvas.getByText('check_circle')).toBeInTheDocument();
	},
};

export const Exclude: Story = {
	args: {
		label: 'Exclude Tag',
		variant: 'exclude',
		onDelete: fn(),
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByText('Exclude Tag')).toBeInTheDocument();

		await expect(canvas.getByText('do_not_disturb_on')).toBeInTheDocument();
	},
};

export const Small: Story = {
	args: {
		label: 'Small Tag',
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
	play: async ({ args, canvasElement }) => {
		const canvas = within(canvasElement);

		const tag = canvas.getByText('Disabled Tag');

		await expect(tag).toBeInTheDocument();

		// Delete button should not be visible when disabled
		await expect(canvas.queryByLabelText('Delete tag')).not.toBeInTheDocument();

		// Click should not trigger callbacks when disabled
		await userEvent.click(tag, { pointerEventsCheck: 0 });
		await expect(args.onClick).not.toHaveBeenCalled();
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
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByText('Custom Icon Tag')).toBeInTheDocument();

		// Custom icon should be rendered instead of the variant icon
		await expect(canvas.getByText('star')).toBeInTheDocument();
		await expect(canvas.queryByText('check_circle')).not.toBeInTheDocument();
	},
};

export const KeyboardInteraction: Story = {
	args: {
		label: 'Keyboard Tag',
		onClick: fn(),
		onDelete: fn(),
	},
	play: async ({ args, canvasElement, step }) => {
		const canvas = within(canvasElement);

		const tag = canvas.getByRole('button', { name: /Keyboard Tag/i });
		const deleteButton = canvas.getByLabelText('Delete tag');

		let onClickCalls = 0;
		let onDeleteCalls = 0;

		await step('Tag Enter/Space keys trigger onClick', async () => {
			tag.focus();
			await expect(tag).toHaveFocus();

			await userEvent.keyboard('{Enter}');
			await expect(args.onClick).toHaveBeenCalledTimes(++onClickCalls);

			await userEvent.keyboard(' ');
			await expect(args.onClick).toHaveBeenCalledTimes(++onClickCalls);
		});

		await step('Tag Backspace/Delete keys trigger onDelete', async () => {
			tag.focus();

			await userEvent.keyboard('{Backspace}');
			await expect(args.onDelete).toHaveBeenCalledTimes(++onDeleteCalls);

			await userEvent.keyboard('{Delete}');
			await expect(args.onDelete).toHaveBeenCalledTimes(++onDeleteCalls);

			// onClick should not have been called additionally
			await expect(args.onClick).toHaveBeenCalledTimes(onClickCalls);
		});

		await step('Delete button Enter/Space keys trigger onDelete and stop propagation', async () => {
			deleteButton.focus();
			await expect(deleteButton).toHaveFocus();

			await userEvent.keyboard('{Enter}');
			await expect(args.onDelete).toHaveBeenCalledTimes(++onDeleteCalls);

			await userEvent.keyboard(' ');
			await expect(args.onDelete).toHaveBeenCalledTimes(++onDeleteCalls);

			// onClick should not be called (propagation stopped)
			await expect(args.onClick).toHaveBeenCalledTimes(onClickCalls);
		});
	},
};
