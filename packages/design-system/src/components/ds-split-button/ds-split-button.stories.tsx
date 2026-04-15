import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { DsSplitButton } from './';
import { splitButtonSizes } from './ds-split-button.types';
import type { DsSelectProps } from '../ds-select';

const refreshOptions = [
	{ label: '30s', value: '30' },
	{ label: '1m', value: '60' },
	{ label: '5m', value: '300' },
	{ label: '10m', value: '600' },
];

const meta: Meta<typeof DsSplitButton> = {
	title: 'Design System/SplitButton',
	component: DsSplitButton,
	parameters: {
		layout: 'centered',
	},
	args: {
		size: 'medium',
		disabled: false,
		slotProps: {
			button: { icon: 'refresh' },
			select: {
				options: refreshOptions,
				value: '30',
				onValueChange: fn(),
				multiple: false,
			},
		},
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
						...args.slotProps.button,
						loading,
						icon: 'refresh',
						onClick: handleAction,
					},
					select: {
						...args.slotProps.select,
						value,
						onValueChange: setValue,
					} as DsSelectProps,
				}}
			/>
		);
	},
};

export const Loading: Story = {
	args: {
		slotProps: {
			button: {
				loading: true,
			},
			select: {
				options: refreshOptions,
				value: '30',
				onValueChange: fn(),
			},
		},
	},
};

export const Disabled: Story = {
	args: {
		disabled: true,
	},
};
