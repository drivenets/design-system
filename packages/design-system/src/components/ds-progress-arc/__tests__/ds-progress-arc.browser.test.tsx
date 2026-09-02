import { describe, expect, it } from 'vitest';
import { page } from 'vitest/browser';

import { DsIcon } from '../../ds-icon';
import { DsProgressArc } from '../index';

describe('DsProgressArc', () => {
	it('exposes progress semantics and value text for a mid-range value', async () => {
		await page.render(<DsProgressArc value={50} />);

		const progress = page.getByRole('progressbar');
		await expect.element(progress).toBeInTheDocument();
		await expect.element(progress).toHaveAttribute('aria-valuenow', '50');
		await expect.element(progress).toHaveAttribute('aria-valuemin', '0');
		await expect.element(progress).toHaveAttribute('aria-valuemax', '100');
		await expect.element(page.getByText('50%')).toBeVisible();
	});

	it('forces a full value and check icon for the success variant', async () => {
		await page.render(<DsProgressArc variant="success" />);

		const progress = page.getByRole('progressbar');
		await expect.element(progress).toHaveAttribute('aria-valuenow', '100');
		await expect.element(page.getByText('check')).toBeVisible();
	});

	it('keeps the value and shows the close icon for the error variant', async () => {
		await page.render(<DsProgressArc variant="error" value={50} />);

		const progress = page.getByRole('progressbar');
		await expect.element(progress).toHaveAttribute('aria-valuenow', '50');
		await expect.element(page.getByText('close')).toBeVisible();
	});

	it('renders custom children in the center over the default text', async () => {
		await page.render(
			<DsProgressArc value={80}>
				<DsIcon icon="warning" size="small" />
			</DsProgressArc>,
		);

		const progress = page.getByRole('progressbar');
		await expect.element(progress).toHaveAttribute('aria-valuenow', '80');
		await expect.element(page.getByText('warning')).toBeVisible();
	});

	it('shows 0% at the minimum value', async () => {
		await page.render(<DsProgressArc value={0} />);

		const progress = page.getByRole('progressbar');
		await expect.element(progress).toHaveAttribute('aria-valuenow', '0');
		await expect.element(page.getByText('0%')).toBeVisible();
	});

	it('shows 100% at the maximum value', async () => {
		await page.render(<DsProgressArc value={100} />);

		const progress = page.getByRole('progressbar');
		await expect.element(progress).toHaveAttribute('aria-valuenow', '100');
		await expect.element(page.getByText('100%')).toBeVisible();
	});
});
