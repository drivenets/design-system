import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { DsSplitButton } from './';
import { splitButtonSizes } from './ds-split-button.types';

const meta: Meta<typeof DsSplitButton> = {
	title: 'Components/SplitButton',
	component: DsSplitButton,
	parameters: {
		layout: 'centered',
	},
	args: {
		size: 'medium',
		disabled: false,
	},
	argTypes: {
		size: { control: 'radio', options: splitButtonSizes },
		className: { table: { disable: true } },
		style: { table: { disable: true } },
		ref: { table: { disable: true } },
		slotProps: { table: { disable: true } },
	},
};

export default meta;

type Story = StoryObj<typeof DsSplitButton>;

export const Default: Story = {
	args: {
		slotProps: {
			button: { icon: 'refresh', 'aria-label': 'Refresh' },
			select: {
				options: [
					{ label: '30s', value: '30' },
					{ label: '1m', value: '60' },
				],
				value: '30',
				onValueChange: fn(),
				multiple: false,
			},
		},
	},
};

/**
 * Compact layout for dense toolbars; the select switches to its small size to
 * stay aligned with the primary action.
 */
export const Small: Story = {
	args: {
		size: 'small',
		slotProps: {
			button: { icon: 'refresh', 'aria-label': 'Refresh' },
			select: {
				options: [
					{ label: '30s', value: '30' },
					{ label: '1m', value: '60' },
				],
				value: '30',
				onValueChange: fn(),
				multiple: false,
			},
		},
	},
};

/**
 * Shows a spinner on the primary action and blocks its click. Use while the
 * action triggered by the button is in progress; the select stays interactive.
 */
export const Loading: Story = {
	args: {
		slotProps: {
			button: { icon: 'refresh', 'aria-label': 'Refresh', loading: true },
			select: {
				options: [
					{ label: '30s', value: '30' },
					{ label: '1m', value: '60' },
				],
				value: '30',
				onValueChange: fn(),
				multiple: false,
			},
		},
	},
};

/**
 * Non-interactive state for both slots when the action is currently unavailable.
 */
export const Disabled: Story = {
	args: {
		disabled: true,
		slotProps: {
			button: { icon: 'refresh', 'aria-label': 'Refresh' },
			select: {
				options: [
					{ label: '30s', value: '30' },
					{ label: '1m', value: '60' },
				],
				value: '30',
				onValueChange: fn(),
				multiple: false,
			},
		},
	},
};

/**
 * Wire the select `value`/`onValueChange` to local state and drive the button
 * `loading` flag from the async action to reflect real usage.
 */
export const Controlled: Story = {
	parameters: { docs: { source: { type: 'code' } } },
	render: (args) => {
		const [value, setValue] = useState('30');
		const [loading, setLoading] = useState(false);

		const handleAction = () => {
			setLoading(true);
			setTimeout(() => setLoading(false), 2000);
		};

		return (
			<DsSplitButton
				{...args}
				slotProps={{
					button: {
						icon: 'refresh',
						'aria-label': 'Refresh',
						loading,
						onClick: handleAction,
					},
					select: {
						options: [
							{ label: '30s', value: '30' },
							{ label: '1m', value: '60' },
						],
						value,
						onValueChange: setValue,
						multiple: false,
					},
				}}
			/>
		);
	},
};
