import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { mapPinColors, mapPinSizes } from '../ds-map-pin';
import { DsStack } from '../ds-stack';
import { pinDeviceBorders, pinDeviceColors } from './ds-pin-devices.types';
import { DsPinDevices } from './index';

const meta: Meta<typeof DsPinDevices> = {
	title: 'Components/PinDevices',
	component: DsPinDevices,
	parameters: { layout: 'centered' },
	argTypes: {
		size: { control: 'select', options: mapPinSizes },
		color: { control: 'select', options: mapPinColors },
		label: { control: 'text' },
		badge: { control: 'text' },
		selected: { control: 'boolean' },
		dragging: { control: 'boolean' },
		'aria-label': { control: 'text' },
		ring: { table: { disable: true } },
		badgeBorder: { table: { disable: true } },
		className: { table: { disable: true } },
		style: { table: { disable: true } },
		ref: { table: { disable: true } },
		onClick: { table: { disable: true } },
		onDeviceClick: { table: { disable: true } },
		onMoreDevicesClick: { table: { disable: true } },
	},
};

export default meta;
type Story = StoryObj<typeof DsPinDevices>;

/** A location with its devices. Hover it to see the card and the pin lift around the pin's tip. */
export const Default: Story = {
	args: {
		size: 'large',
		color: 'blue',
		label: 'T1',
		'aria-label': 'Central office T1, Haifa North',
		devices: [
			{ id: 'agg-1', color: 'gray', 'aria-label': 'Aggregation router AG-1' },
			{ id: 'agg-2', color: 'gray', 'aria-label': 'Aggregation router AG-2' },
			{ id: 'edge-1', color: 'light-blue', 'aria-label': 'Edge router ER-1' },
			{ id: 'edge-2', color: 'light-blue', 'aria-label': 'Edge router ER-2' },
			{ id: 'nms-1', color: 'dark-pink', 'aria-label': 'Network management NM-1' },
			{ id: 'acc-1', color: 'orange', 'aria-label': 'Access switch AS-1' },
			{ id: 'acc-2', color: 'orange', 'aria-label': 'Access switch AS-2' },
		],
	},
};

/**
 * Map each kind of device to one color so the mix of devices at a location reads at a glance.
 * In Network View: aggregation gray, edge light blue, network management dark pink, access orange,
 * virtual purple, passive pink, customer premises teal. A device without a color is neutral.
 */
export const DeviceColors: Story = {
	args: {
		size: 'large',
		color: 'blue',
		label: 'T2',
		'aria-label': 'Central office T2, Haifa South',
		devices: [
			{ id: 'gray', color: 'gray', 'aria-label': 'Aggregation' },
			{ id: 'light-blue', color: 'light-blue', 'aria-label': 'Edge' },
			{ id: 'dark-pink', color: 'dark-pink', 'aria-label': 'Network management' },
			{ id: 'orange', color: 'orange', 'aria-label': 'Access' },
			{ id: 'purple', color: 'purple', 'aria-label': 'Virtual' },
			{ id: 'pink', color: 'pink', 'aria-label': 'Passive' },
			{ id: 'teal', color: 'teal', 'aria-label': 'Customer premises' },
			{ id: 'neutral', 'aria-label': 'Unclassified device' },
		],
	},
};

/** `outlined` keeps a neutral fill, to tell apart two kinds of device that share a color, e.g. virtual and nested virtual. */
export const DeviceVariant: Story = {
	args: {
		size: 'large',
		color: 'blue',
		label: 'T2',
		'aria-label': 'Central office T2, Haifa South',
		devices: [
			{ id: 'vm-1', color: 'purple', 'aria-label': 'Virtual VM-1' },
			{ id: 'vm-2', color: 'purple', variant: 'outlined', 'aria-label': 'Nested virtual VM-2' },
		],
	},
};

/** The border shows a device's status, e.g. planned (`dotted`) or in design (`dashed`). */
export const DeviceBorders: Story = {
	args: {
		size: 'medium',
		color: 'orange',
		label: 'PEP',
		'aria-label': 'Access site PEP, Haifa North',
		devices: [
			{ id: 'solid', color: 'orange', border: 'solid', 'aria-label': 'Access switch, deployed' },
			{ id: 'dotted', color: 'orange', border: 'dotted', 'aria-label': 'Access switch, planned' },
			{ id: 'dashed', color: 'orange', border: 'dashed', 'aria-label': 'Access switch, designed' },
		],
	},
};

/** A short code in the square marks a kind of equipment, e.g. an optical router (`oR`) or a patch panel (`PL`). */
export const DeviceLabels: Story = {
	args: {
		size: 'small',
		color: 'teal',
		'aria-label': 'Fiber broadband site, Haifa North',
		devices: [
			{ id: 'or', label: 'oR', 'aria-label': 'Optical router' },
			{ id: 'pl', label: 'PL', 'aria-label': 'Patch panel' },
			{ id: 'cpe', color: 'teal', 'aria-label': 'Customer premises equipment' },
		],
	},
};

/**
 * From 16 devices on, the card draws 13 and an indicator shows how many more there are.
 * Use `onMoreDevicesClick` to open a view with every device.
 */
export const MoreDevices: Story = {
	args: {
		size: 'large',
		color: 'blue',
		label: 'T1',
		'aria-label': 'Central office T1, Tel Aviv',
		devices: Array.from({ length: 40 }, (_, index) => ({
			id: `device-${String(index + 1)}`,
			color: 'gray' as const,
			'aria-label': `Aggregation router AG-${String(index + 1)}`,
		})),
	},
};

/** The selected location gets a border in the pin's color on the card and the pin. */
export const Selected: Story = {
	args: {
		size: 'medium',
		color: 'orange',
		label: 'PEP',
		selected: true,
		'aria-label': 'Access site PEP, Haifa North',
		devices: [
			{ id: 'acc-1', color: 'orange', 'aria-label': 'Access switch AS-1' },
			{ id: 'acc-2', color: 'orange', 'aria-label': 'Access switch AS-2' },
			{ id: 'edge-1', color: 'light-blue', 'aria-label': 'Edge router ER-1' },
		],
	},
};

/** Set `dragging` while the user moves the location; it renders above every other marker. */
export const Dragging: Story = {
	args: {
		size: 'small',
		color: 'teal',
		dragging: true,
		'aria-label': 'Fiber broadband site, Haifa North',
		devices: [
			{ id: 'cpe-1', color: 'teal', 'aria-label': 'Customer premises CP-1' },
			{ id: 'cpe-2', color: 'teal', 'aria-label': 'Customer premises CP-2' },
		],
	},
};

/** Keep the device whose details are open selected with `selectedDeviceId`. */
export const SelectedDevice: Story = {
	parameters: { docs: { source: { type: 'code' } } },
	render: function Render() {
		const [selectedDeviceId, setSelectedDeviceId] = useState<string | null>('edge-1');

		return (
			<DsPinDevices
				label="T1"
				aria-label="Central office T1, Haifa North"
				selectedDeviceId={selectedDeviceId}
				onDeviceClick={(device) => setSelectedDeviceId(device.id)}
				devices={[
					{ id: 'agg-1', color: 'gray', 'aria-label': 'Aggregation router AG-1' },
					{ id: 'edge-1', color: 'light-blue', 'aria-label': 'Edge router ER-1' },
					{ id: 'edge-2', color: 'light-blue', 'aria-label': 'Edge router ER-2' },
					{ id: 'acc-1', color: 'orange', 'aria-label': 'Access switch AS-1' },
				]}
			/>
		);
	},
};

/** Translate the accessible name of the indicator for 16 or more devices. */
export const Localized: Story = {
	args: {
		label: 'T1',
		'aria-label': 'Central office T1, Haifa North',
		locale: { moreDevices: (count) => `Show ${String(count)} hidden devices` },
		devices: Array.from({ length: 20 }, (_, index) => ({
			id: `device-${String(index + 1)}`,
			color: 'light-blue' as const,
			'aria-label': `Edge router ER-${String(index + 1)}`,
		})),
	},
};

export const DeviceCounts: Story = {
	tags: ['!manifest'],
	parameters: { docs: { canvas: { sourceState: 'none' } } },
	render: () => (
		<DsStack direction="column" gap="var(--lg)" alignItems="flex-start">
			{Array.from({ length: 16 }, (_, index) => index + 1).map((count) => (
				<DsPinDevices
					key={count}
					label="T1"
					aria-label={`${String(count)} devices`}
					devices={Array.from({ length: count === 16 ? 112 : count }, (__, deviceIndex) => ({
						id: String(deviceIndex),
						color: pinDeviceColors[deviceIndex % pinDeviceColors.length],
						border: pinDeviceBorders[deviceIndex % pinDeviceBorders.length],
						'aria-label': `Device ${String(deviceIndex + 1)}`,
					}))}
				/>
			))}
		</DsStack>
	),
};

export const AllVariants: Story = {
	tags: ['!manifest'],
	parameters: { docs: { canvas: { sourceState: 'none' } } },
	render: () => (
		<DsStack direction="column" gap="var(--lg)">
			{(
				[
					{ size: 'large', color: 'blue', label: 'T1' },
					{ size: 'medium', color: 'orange', label: 'PEP' },
					{ size: 'small', color: 'teal', label: undefined },
				] as const
			).map(({ size, color, label }) => (
				<DsStack key={color} direction="row" gap="var(--lg)" alignItems="flex-end">
					{[{}, { selected: true }, { dragging: true }].map((state, index) => (
						<DsPinDevices
							key={index}
							size={size}
							color={color}
							label={label}
							aria-label={`${color} ${String(index)}`}
							{...state}
							devices={Array.from({ length: 8 }, (__, deviceIndex) => ({
								id: String(deviceIndex),
								color: 'gray' as const,
								'aria-label': `Device ${String(deviceIndex + 1)}`,
							}))}
						/>
					))}
				</DsStack>
			))}
		</DsStack>
	),
};
