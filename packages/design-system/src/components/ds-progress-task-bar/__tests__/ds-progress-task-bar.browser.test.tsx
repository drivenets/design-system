import { describe, expect, it } from 'vitest';
import { page } from 'vitest/browser';

import DsProgressTaskBar from '../ds-progress-task-bar';
import { formatCount } from '../utils';

describe('DsProgressTaskBar', () => {
	it('renders only statuses with a non-zero count', async () => {
		await page.render(<DsProgressTaskBar running={300} total={1000} />);

		await expect.element(page.getByText('300')).toBeVisible();
		await expect.element(page.getByText('of 1K')).toBeVisible();
		await expect.element(page.getByText('0', { exact: true })).not.toBeInTheDocument();
	});

	it('shows a single 0 when every status is empty', async () => {
		await page.render(<DsProgressTaskBar total={999} />);

		await expect.element(page.getByText('0')).toBeVisible();
		await expect.element(page.getByText('of 999')).toBeVisible();
	});

	it('abbreviates large counts in the legend and total', async () => {
		await page.render(
			<DsProgressTaskBar completed={1_000_000} running={9_500} failed={125_000} total={1_400_000} />,
		);

		await expect.element(page.getByText('1M')).toBeVisible();
		await expect.element(page.getByText('9.5K')).toBeVisible();
		await expect.element(page.getByText('125K')).toBeVisible();
		await expect.element(page.getByText('of 1.4M')).toBeVisible();
	});

	it('exposes progress semantics relative to the total', async () => {
		await page.render(<DsProgressTaskBar completed={300} running={100} failed={100} total={1000} />);

		const bar = page.getByRole('progressbar');
		await expect.element(bar).toHaveAttribute('aria-valuenow', '500');
		await expect.element(bar).toHaveAttribute('aria-valuemax', '1000');
	});

	it('treats the total as at least the sum of the statuses', async () => {
		await page.render(<DsProgressTaskBar completed={1000} />);

		const bar = page.getByRole('progressbar');
		await expect.element(bar).toHaveAttribute('aria-valuenow', '1000');
		await expect.element(bar).toHaveAttribute('aria-valuemax', '1000');
		await expect.element(page.getByText('of 1K')).toBeVisible();
	});

	it('shows the status label in a tooltip when hovering the status icon', async () => {
		await page.render(<DsProgressTaskBar completed={300} total={1000} />);

		await page.getByText('check_circle').hover();
		await expect.element(page.getByRole('tooltip', { name: 'Completed' })).toBeVisible();
	});

	it('uses the locale override for tooltips', async () => {
		// cspell:disable-next-line
		await page.render(<DsProgressTaskBar completed={300} total={1000} locale={{ completed: 'Terminé' }} />);

		await page.getByText('check_circle').hover();
		// cspell:disable-next-line
		await expect.element(page.getByRole('tooltip', { name: 'Terminé' })).toBeVisible();
	});

	it('uses the locale override for the total label', async () => {
		await page.render(
			<DsProgressTaskBar completed={300} total={1000} locale={{ total: (value) => `sur ${value}` }} />,
		);

		await expect.element(page.getByText('sur 1K')).toBeVisible();
		await expect.element(page.getByText('of 1K')).not.toBeInTheDocument();
	});
});

describe('formatCount', () => {
	it.each([
		[0, '0'],
		[27, '27'],
		[99, '99'],
		[100, '100'],
		[999, '999'],
		[1_000, '1K'],
		[1_050, '1.1K'],
		[1_100, '1.1K'],
		[9_500, '9.5K'],
		[10_000, '10K'],
		[87_499, '87K'],
		[999_999, '999K'],
		[1_000_000, '1M'],
		[1_200_000, '1.2M'],
		[9_990_000, '10M'],
	])('formats %i as %s', (input, expected) => {
		expect(formatCount(input)).toBe(expected);
	});
});
