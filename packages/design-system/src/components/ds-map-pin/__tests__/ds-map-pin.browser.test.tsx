import { describe, expect, it, vi } from 'vitest';
import { page, userEvent } from 'vitest/browser';
import DsMapPin from '../ds-map-pin';

describe('DsMapPin', () => {
	it('is named by its aria-label and fires onClick', async () => {
		const onClick = vi.fn();
		await page.render(<DsMapPin label="T1" aria-label="Central office T1, Haifa North" onClick={onClick} />);

		await page.getByRole('button', { name: 'Central office T1, Haifa North' }).click();

		expect(onClick).toHaveBeenCalledOnce();
	});

	it('is reachable with Tab and activated with Enter', async () => {
		const onClick = vi.fn();
		await page.render(<DsMapPin label="T1" aria-label="Central office T1" onClick={onClick} />);

		await userEvent.tab();
		await expect.element(page.getByRole('button', { name: 'Central office T1' })).toHaveFocus();

		await userEvent.keyboard('{Enter}');

		expect(onClick).toHaveBeenCalledOnce();
	});

	it('marks only the selected pin with aria-current', async () => {
		const { rerender } = await page.render(<DsMapPin label="T1" aria-label="Central office T1" />);

		const pin = page.getByRole('button', { name: 'Central office T1' });
		await expect.element(pin).not.toHaveAttribute('aria-current');

		await rerender(<DsMapPin label="T1" selected aria-label="Central office T1" />);

		await expect.element(pin).toHaveAttribute('aria-current', 'true');
	});

	it('shows the count instead of the label and caps it at 99+', async () => {
		const { rerender } = await page.render(
			<DsMapPin size="small" category="fiber-broadband" label="FB" count={8} aria-label="8 customer sites" />,
		);

		await expect.element(page.getByText('8', { exact: true })).toBeInTheDocument();
		await expect.element(page.getByText('FB')).not.toBeInTheDocument();

		await rerender(
			<DsMapPin size="small" category="fiber-broadband" count={240} aria-label="240 customer sites" />,
		);

		await expect.element(page.getByText('99+')).toBeInTheDocument();
	});

	it('keeps the visible code out of the accessible name', async () => {
		await page.render(
			<DsMapPin label="T1" aria-label="Central office T1, Haifa North, planned" planning="planned" />,
		);

		await expect
			.element(page.getByRole('button', { name: 'Central office T1, Haifa North, planned' }))
			.toBeVisible();
		await expect.element(page.getByRole('button', { name: 'T1', exact: true })).not.toBeInTheDocument();
	});
});
