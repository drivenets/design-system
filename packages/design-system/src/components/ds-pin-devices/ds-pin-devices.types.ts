import type { CSSProperties, MouseEvent, Ref } from 'react';
import type { MapPinBadgeBorder, MapPinColor, MapPinRing, MapPinSize } from '../ds-map-pin';

export const pinDeviceTypes = [
	'aggregation',
	'edge',
	'network-management',
	'access',
	'virtual',
	'passive',
	'virtual-nested',
	'customer-premises',
] as const;
export type PinDeviceType = (typeof pinDeviceTypes)[number];

export const pinDeviceStages = ['deployed', 'planned', 'designed'] as const;
export type PinDeviceStage = (typeof pinDeviceStages)[number];

export interface PinDevice {
	id: string;
	/**
	 * Sets the square's color. Without it the square is neutral.
	 */
	type?: PinDeviceType;
	/**
	 * Sets the square's border: solid when deployed, dotted when planned, dashed when designed.
	 * @default 'deployed'
	 */
	stage?: PinDeviceStage;
	/**
	 * Short code shown in the square, e.g. `"oR"` or `"PL"`.
	 */
	label?: string;
	/**
	 * Accessible name of the device, e.g. `"Edge router ER-12, planned"`.
	 */
	'aria-label': string;
}

export interface DsPinDevicesLocale {
	/**
	 * Accessible name of the indicator shown for 16 or more devices.
	 * @default (count) => `${count} more devices`
	 */
	moreDevices?: (count: number) => string;
}

export interface DsPinDevicesProps {
	ref?: Ref<HTMLDivElement>;
	/**
	 * Devices at the location, in display order. Up to 15 are drawn; from 16 on, the first 13 are drawn
	 * and an indicator shows how many more there are.
	 */
	devices: PinDevice[];
	/**
	 * Size of the pin under the card.
	 * @default 'large'
	 */
	size?: MapPinSize;
	/**
	 * Color of the pin and of the selected card's border.
	 * @default 'blue'
	 */
	color?: MapPinColor;
	/**
	 * Ring around the pin's core, for a secondary status of the location.
	 * @default 'none'
	 */
	ring?: MapPinRing;
	/**
	 * Short code shown in the pin, e.g. `"T1"`.
	 */
	label?: string;
	/**
	 * Short code shown in a tag on the pin, e.g. `"oR"`.
	 */
	badge?: string;
	/**
	 * Border of the pin's badge.
	 * @default 'solid'
	 */
	badgeBorder?: MapPinBadgeBorder;
	/**
	 * Device whose square shows as selected and is marked with `aria-current`, e.g. while its details are open.
	 */
	selectedDeviceId?: string | null;
	/**
	 * Shows the selected border on the card and the pin, and marks the pin with `aria-current`.
	 * @default false
	 */
	selected?: boolean;
	/**
	 * Shows the dragged style and raises the card above all others while the consumer moves it.
	 * @default false
	 */
	dragging?: boolean;
	/**
	 * Accessible name of the location, used for the card and its pin, e.g. `"Central office T1, Haifa North"`.
	 */
	'aria-label': string;
	locale?: DsPinDevicesLocale;
	className?: string;
	style?: CSSProperties;
	/**
	 * Called when the pin is activated.
	 */
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
	onDeviceClick?: (device: PinDevice, event: MouseEvent<HTMLButtonElement>) => void;
	/**
	 * Called when the indicator for 16 or more devices is activated, e.g. to open a view with every device.
	 */
	onMoreDevicesClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
