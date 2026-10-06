import { useState, type ReactNode } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { page, userEvent } from 'vitest/browser';
import DsPinToggle from '../ds-pin-toggle';
import { DsCheckbox } from '../../ds-checkbox';

const resolveToken = (token: string) => {
	if (!getComputedStyle(document.documentElement).getPropertyValue(token).trim()) {
		throw new Error(`${token} is not defined in _root.scss`);
	}

	const probe = document.createElement('span');

	probe.style.color = `var(${token})`;
	document.body.append(probe);

	const color = getComputedStyle(probe).color;

	probe.remove();

	return color;
};

const glyph = (name: string) => {
	const icon = page.getByRole('button', { name }).element().firstElementChild;

	if (!icon) {
		throw new Error(`pin "${name}" rendered no glyph`);
	}

	return icon;
};

const glyphColor = (name: string) => getComputedStyle(glyph(name)).color;

const HARNESS_OFFSET_PX = 16;

const renderOffset = (node: ReactNode) =>
	page.render(<div style={{ padding: HARNESS_OFFSET_PX }}>{node}</div>);

function ControlledPin({ onPinnedChange }: { onPinnedChange?: (pinned: boolean) => void }) {
	const [pinned, setPinned] = useState(false);

	return (
		<DsPinToggle
			itemLabel="Notifications"
			pinned={pinned}
			onPinnedChange={(next) => {
				onPinnedChange?.(next);
				setPinned(next);
			}}
		/>
	);
}

describe('DsPinToggle', () => {
	it('should reflect pinned as the pressed state', async () => {
		const { rerender } = await page.render(<DsPinToggle itemLabel="Notifications" />);

		await expect.element(page.getByRole('button', { pressed: false })).toBeVisible();

		await rerender(<DsPinToggle itemLabel="Notifications" pinned />);

		await expect.element(page.getByRole('button', { pressed: true })).toBeVisible();
	});

	it('should call onPinnedChange with the negated value when clicked', async () => {
		const onPinnedChange = vi.fn();

		await renderOffset(<ControlledPin onPinnedChange={onPinnedChange} />);

		await page.getByRole('button').click();

		expect(onPinnedChange).toHaveBeenLastCalledWith(true);
		await expect.element(page.getByRole('button', { pressed: true })).toBeVisible();

		await page.getByRole('button').click();

		expect(onPinnedChange).toHaveBeenLastCalledWith(false);
		await expect.element(page.getByRole('button', { pressed: false })).toBeVisible();
	});

	it('should toggle in both directions on Enter and Space', async () => {
		const onPinnedChange = vi.fn();

		await page.render(<ControlledPin onPinnedChange={onPinnedChange} />);

		(page.getByRole('button').element() as HTMLElement).focus();

		await userEvent.keyboard('{Enter}');

		expect(onPinnedChange).toHaveBeenNthCalledWith(1, true);
		await expect.element(page.getByRole('button', { pressed: true })).toBeVisible();

		await userEvent.keyboard(' ');

		expect(onPinnedChange).toHaveBeenNthCalledWith(2, false);
		await expect.element(page.getByRole('button', { pressed: false })).toBeVisible();
	});

	it('should not activate when disabled', async () => {
		const onPinnedChange = vi.fn();

		await renderOffset(<DsPinToggle itemLabel="Notifications" disabled onPinnedChange={onPinnedChange} />);

		const pin = page.getByRole('button', { disabled: true });

		await expect.element(pin).toBeDisabled();

		await pin.click({ force: true });
		(pin.element() as HTMLElement).focus();
		await userEvent.keyboard('{Enter}');
		await userEvent.keyboard(' ');

		expect(onPinnedChange).not.toHaveBeenCalled();
	});

	it('should name each pin after its row, and keep the name stable across states', async () => {
		const { rerender } = await page.render(
			<>
				<DsPinToggle itemLabel="Notifications" />
				<DsPinToggle itemLabel="Alerts" />
			</>,
		);

		await expect.element(page.getByRole('button', { name: 'Pin Notifications' })).toBeVisible();
		await expect.element(page.getByRole('button', { name: 'Pin Alerts' })).toBeVisible();

		// `aria-pressed` carries the state; the name must not also flip to "Unpin",
		// or a pinned row announces the state twice in opposite directions.
		await rerender(
			<>
				<DsPinToggle itemLabel="Notifications" pinned />
				<DsPinToggle itemLabel="Alerts" pinned />
			</>,
		);

		await expect
			.element(page.getByRole('button', { name: 'Pin Notifications', pressed: true }))
			.toBeVisible();
		await expect.element(page.getByRole('button', { name: 'Pin Alerts', pressed: true })).toBeVisible();
	});

	it('should translate the pin verb through locale', async () => {
		await page.render(<DsPinToggle itemLabel="Notifications" locale={{ pin: 'Keep' }} />);

		await expect.element(page.getByRole('button', { name: 'Keep Notifications' })).toBeVisible();
	});

	it('should color the glyph by pinned state', async () => {
		await page.render(
			<>
				<DsPinToggle itemLabel="unpinned" />
				<DsPinToggle itemLabel="pinned" pinned />
				<DsPinToggle itemLabel="blocked" pinned disabled />
			</>,
		);

		expect(glyphColor('Pin unpinned')).toBe(resolveToken('--icon-tertiary'));
		expect(glyphColor('Pin pinned')).toBe(resolveToken('--icon-action'));
		expect(glyphColor('Pin blocked')).toBe(resolveToken('--icon-disabled'));
	});

	it('should render the filled pushpin glyph in both states', async () => {
		const { rerender } = await page.render(<DsPinToggle itemLabel="Notifications" />);

		expect(getComputedStyle(glyph('Pin Notifications')).fontVariationSettings).toBe('"FILL" 1');

		await rerender(<DsPinToggle itemLabel="Notifications" pinned />);

		expect(getComputedStyle(glyph('Pin Notifications')).fontVariationSettings).toBe('"FILL" 1');
	});

	it('should hover an unpinned pin within the grey family, never into the action color', async () => {
		await renderOffset(<DsPinToggle itemLabel="unpinned" />);

		await userEvent.hover(page.getByRole('button', { name: 'Pin unpinned' }));

		await expect
			.poll(() => glyphColor('Pin unpinned'), { timeout: 2000 })
			.toBe(resolveToken('--icon-secondary'));
		expect(glyphColor('Pin unpinned')).not.toBe(resolveToken('--icon-action'));
	});

	it('should hover a pinned pin within the action family', async () => {
		await renderOffset(<DsPinToggle itemLabel="pinned" pinned />);

		await userEvent.hover(page.getByRole('button', { name: 'Pin pinned' }));

		await expect
			.poll(() => glyphColor('Pin pinned'), { timeout: 2000 })
			.toBe(resolveToken('--icon-action-hover'));
	});

	it('should size the pin to the 20px control box a DsCheckbox row aligns to', async () => {
		await page.render(<DsPinToggle itemLabel="Notifications" />);

		const { width, height } = page.getByRole('button').element().getBoundingClientRect();

		expect(width).toBeCloseTo(20, 1);
		expect(height).toBeCloseTo(20, 1);
	});

	describe('inside DsCheckbox actions', () => {
		it('should pin the row without toggling the checkbox when clicked', async () => {
			const onPinnedChange = vi.fn();
			const onCheckedChange = vi.fn();

			await page.render(
				<DsCheckbox
					label="Active"
					onCheckedChange={onCheckedChange}
					actions={<DsPinToggle itemLabel="Active" onPinnedChange={onPinnedChange} />}
				/>,
			);

			await page.getByRole('button', { name: 'Pin Active' }).click();

			expect(onPinnedChange).toHaveBeenCalledWith(true);
			expect(onCheckedChange).not.toHaveBeenCalled();
			await expect.element(page.getByRole('checkbox')).not.toBeChecked();
		});

		it('should pin the row without toggling the checkbox when activated by keyboard', async () => {
			const onPinnedChange = vi.fn();
			const onCheckedChange = vi.fn();

			await page.render(
				<DsCheckbox
					label="Active"
					onCheckedChange={onCheckedChange}
					actions={<DsPinToggle itemLabel="Active" onPinnedChange={onPinnedChange} />}
				/>,
			);

			(page.getByRole('button', { name: 'Pin Active' }).element() as HTMLElement).focus();
			await userEvent.keyboard('{Enter}');

			expect(onPinnedChange).toHaveBeenCalledWith(true);
			expect(onCheckedChange).not.toHaveBeenCalled();
			await expect.element(page.getByRole('checkbox')).not.toBeChecked();
		});
	});
});
