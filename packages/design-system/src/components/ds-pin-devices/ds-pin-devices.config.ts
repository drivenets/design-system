import type { PinDevice } from './ds-pin-devices.types';

interface DeviceRows {
	top: number;
	left: number;
	right: number;
}

export const MAX_DRAWN_DEVICES = 15;
export const DRAWN_DEVICES_WITH_MORE = 13;

const rowsByCount: readonly DeviceRows[] = Object.freeze([
	{ top: 0, left: 0, right: 0 },
	{ top: 1, left: 0, right: 0 },
	{ top: 2, left: 0, right: 0 },
	{ top: 3, left: 0, right: 0 },
	{ top: 4, left: 0, right: 0 },
	{ top: 5, left: 0, right: 0 },
	{ top: 5, left: 1, right: 0 },
	{ top: 5, left: 1, right: 1 },
	{ top: 6, left: 1, right: 1 },
	{ top: 7, left: 1, right: 1 },
	{ top: 7, left: 2, right: 1 },
	{ top: 7, left: 2, right: 2 },
	{ top: 8, left: 2, right: 2 },
	{ top: 9, left: 2, right: 2 },
	{ top: 9, left: 3, right: 2 },
	{ top: 9, left: 3, right: 3 },
]);

const rowsWithMore: DeviceRows = Object.freeze({ top: 9, left: 3, right: 1 });

export const layoutDevices = (devices: PinDevice[]) => {
	const hasMore = devices.length > MAX_DRAWN_DEVICES;
	const { top, left, right } = hasMore ? rowsWithMore : (rowsByCount[devices.length] ?? rowsWithMore);

	return {
		top: devices.slice(0, top),
		left: devices.slice(top, top + left),
		right: devices.slice(top + left, top + left + right),
		moreCount: hasMore ? devices.length - DRAWN_DEVICES_WITH_MORE : 0,
	};
};
