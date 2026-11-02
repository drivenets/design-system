import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { mapPinColors, mapPinSizes } from '../ds-map-pin';
import { DsStack } from '../ds-stack';
import { pinDeviceStages, pinDeviceTypes } from './ds-pin-devices.types';
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
			{ id: 'agg-1', type: 'aggregation', 'aria-label': 'Aggregation router AG-1' },
			{ id: 'agg-2', type: 'aggregation', 'aria-label': 'Aggregation router AG-2' },
			{ id: 'edge-1', type: 'edge', 'aria-label': 'Edge router ER-1' },
			{ id: 'edge-2', type: 'edge', 'aria-label': 'Edge router ER-2' },
			{ id: 'nms-1', type: 'network-management', 'aria-label': 'Network management NM-1' },
			{ id: 'acc-1', type: 'access', 'aria-label': 'Access switch AS-1' },
			{ id: 'acc-2', type: 'access', 'aria-label': 'Access switch AS-2' },
		],
	},
};

/** Each device type has its own color, so the mix of devices at a location reads at a glance. */
export const DeviceTypes: Story = {
	args: {
		size: 'large',
		color: 'blue',
		label: 'T2',
		'aria-label': 'Central office T2, Haifa South',
		devices: [
			{ id: 'aggregation', type: 'aggregation', 'aria-label': 'Aggregation' },
			{ id: 'edge', type: 'edge', 'aria-label': 'Edge' },
			{ id: 'network-management', type: 'network-management', 'aria-label': 'Network management' },
			{ id: 'access', type: 'access', 'aria-label': 'Access' },
			{ id: 'virtual', type: 'virtual', 'aria-label': 'Virtual' },
			{ id: 'passive', type: 'passive', 'aria-label': 'Passive' },
			{ id: 'virtual-nested', type: 'virtual-nested', 'aria-label': 'Virtual nested' },
			{ id: 'customer-premises', type: 'customer-premises', 'aria-label': 'Customer premises' },
			{ id: 'untyped', 'aria-label': 'Unclassified device' },
		],
	},
};

/** The border shows each device's stage: solid when deployed, dotted when planned, dashed when designed. */
export const DeviceStages: Story = {
	args: {
		size: 'medium',
		color: 'orange',
		label: 'PEP',
		'aria-label': 'Access site PEP, Haifa North',
		devices: [
			{ id: 'deployed', type: 'access', stage: 'deployed', 'aria-label': 'Access switch, deployed' },
			{ id: 'planned', type: 'access', stage: 'planned', 'aria-label': 'Access switch, planned' },
			{ id: 'designed', type: 'access', stage: 'designed', 'aria-label': 'Access switch, designed' },
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
			{ id: 'cpe', type: 'customer-premises', 'aria-label': 'Customer premises equipment' },
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
			type: 'aggregation' as const,
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
			{ id: 'acc-1', type: 'access', 'aria-label': 'Access switch AS-1' },
			{ id: 'acc-2', type: 'access', 'aria-label': 'Access switch AS-2' },
			{ id: 'edge-1', type: 'edge', 'aria-label': 'Edge router ER-1' },
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
			{ id: 'cpe-1', type: 'customer-premises', 'aria-label': 'Customer premises CP-1' },
			{ id: 'cpe-2', type: 'customer-premises', 'aria-label': 'Customer premises CP-2' },
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
					{ id: 'agg-1', type: 'aggregation', 'aria-label': 'Aggregation router AG-1' },
					{ id: 'edge-1', type: 'edge', 'aria-label': 'Edge router ER-1' },
					{ id: 'edge-2', type: 'edge', 'aria-label': 'Edge router ER-2' },
					{ id: 'acc-1', type: 'access', 'aria-label': 'Access switch AS-1' },
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
			type: 'edge' as const,
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
						type: pinDeviceTypes[deviceIndex % pinDeviceTypes.length],
						stage: pinDeviceStages[deviceIndex % pinDeviceStages.length],
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
								type: 'aggregation' as const,
								'aria-label': `Device ${String(deviceIndex + 1)}`,
							}))}
						/>
					))}
				</DsStack>
			))}
		</DsStack>
	),
};
