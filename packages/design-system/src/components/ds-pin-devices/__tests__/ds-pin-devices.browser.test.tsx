import { describe, expect, it, vi } from 'vitest';
import { page, userEvent } from 'vitest/browser';
import DsPinDevices from '../ds-pin-devices';
import type { PinDevice } from '../ds-pin-devices.types';

const createDevices = (count: number): PinDevice[] =>
	Array.from({ length: count }, (_, index) => ({
		id: `device-${String(index + 1)}`,
		type: 'edge',
		'aria-label': `Edge router ${String(index + 1)}`,
	}));

describe('DsPinDevices', () => {
	it('groups the pin and the devices under the location name', async () => {
		await page.render(<DsPinDevices label="T1" aria-label="Central office T1" devices={createDevices(2)} />);

		const group = page.getByRole('group', { name: 'Central office T1' });

		await expect.element(group.getByRole('button', { name: 'Central office T1' })).toBeVisible();
		await expect.element(group.getByRole('button', { name: 'Edge router 1' })).toBeVisible();
		await expect.element(group.getByRole('button', { name: 'Edge router 2' })).toBeVisible();
	});

	it('fires onClick from the pin and onDeviceClick with the clicked device', async () => {
		const onClick = vi.fn();
		const onDeviceClick = vi.fn();
		const devices = createDevices(3);
		await page.render(
			<DsPinDevices
				aria-label="Central office T1"
				devices={devices}
				onClick={onClick}
				onDeviceClick={onDeviceClick}
			/>,
		);

		await page.getByRole('button', { name: 'Edge router 2' }).click();

		expect(onDeviceClick).toHaveBeenCalledExactlyOnceWith(devices[1], expect.anything());
		expect(onClick).not.toHaveBeenCalled();

		await page.getByRole('button', { name: 'Central office T1' }).click();

		expect(onClick).toHaveBeenCalledOnce();
	});

	it('draws up to 15 devices without the more indicator', async () => {
		await page.render(<DsPinDevices aria-label="Central office T1" devices={createDevices(15)} />);

		await expect.element(page.getByRole('button', { name: 'Edge router 15' })).toBeVisible();
		await expect.element(page.getByRole('button', { name: /more devices/ })).not.toBeInTheDocument();
	});

	it('draws 13 devices and counts the rest from 16 devices on', async () => {
		const onMoreDevicesClick = vi.fn();
		await page.render(
			<DsPinDevices
				aria-label="Central office T1"
				devices={createDevices(16)}
				onMoreDevicesClick={onMoreDevicesClick}
			/>,
		);

		await expect.element(page.getByRole('button', { name: 'Edge router 13' })).toBeVisible();
		await expect.element(page.getByRole('button', { name: 'Edge router 14' })).not.toBeInTheDocument();
		await expect.element(page.getByText('+3')).toBeVisible();

		await page.getByRole('button', { name: '3 more devices' }).click();

		expect(onMoreDevicesClick).toHaveBeenCalledOnce();
	});

	it('names the more indicator from locale', async () => {
		await page.render(
			<DsPinDevices
				aria-label="Central office T1"
				devices={createDevices(120)}
				locale={{ moreDevices: (count) => `Show ${String(count)} hidden devices` }}
			/>,
		);

		await expect.element(page.getByRole('button', { name: 'Show 107 hidden devices' })).toBeVisible();
	});

	it('marks the selected device and the selected pin with aria-current', async () => {
		await page.render(
			<DsPinDevices
				aria-label="Central office T1"
				devices={createDevices(3)}
				selectedDeviceId="device-2"
				selected
			/>,
		);

		await expect
			.element(page.getByRole('button', { name: 'Edge router 2' }))
			.toHaveAttribute('aria-current', 'true');
		await expect
			.element(page.getByRole('button', { name: 'Edge router 1' }))
			.not.toHaveAttribute('aria-current');
		await expect
			.element(page.getByRole('button', { name: 'Central office T1' }))
			.toHaveAttribute('aria-current', 'true');
	});

	it('reaches every device and the pin with Tab', async () => {
		const onDeviceClick = vi.fn();
		await page.render(
			<DsPinDevices
				aria-label="Central office T1"
				devices={createDevices(2)}
				onDeviceClick={onDeviceClick}
			/>,
		);

		await userEvent.tab();
		await expect.element(page.getByRole('button', { name: 'Edge router 1' })).toHaveFocus();

		await userEvent.keyboard('{Enter}');
		expect(onDeviceClick).toHaveBeenCalledOnce();

		await userEvent.tab();
		await expect.element(page.getByRole('button', { name: 'Edge router 2' })).toHaveFocus();

		await userEvent.tab();
		await expect.element(page.getByRole('button', { name: 'Central office T1' })).toHaveFocus();
	});
});
