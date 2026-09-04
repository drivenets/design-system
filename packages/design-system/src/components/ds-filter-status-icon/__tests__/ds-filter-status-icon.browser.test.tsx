import { describe, expect, it } from 'vitest';
import { page } from 'vitest/browser';

import { DsFilterStatusIcon } from '../index';
import { filterStatuses } from '../ds-filter-status-icon.types';

describe('DsFilterStatusIcon', () => {
	it('exposes the accessible name for an active running status', async () => {
		await page.render(<DsFilterStatusIcon status="running" active />);

		await expect.element(page.getByLabelText('running status')).toBeInTheDocument();
	});

	it.each(filterStatuses)('names an active %s icon "<status> status"', async (status) => {
		await page.render(<DsFilterStatusIcon status={status} active />);

		await expect.element(page.getByLabelText(`${status} status`)).toBeInTheDocument();
	});

	it.each(filterStatuses)('names an inactive %s icon "<status> status (inactive)"', async (status) => {
		await page.render(<DsFilterStatusIcon status={status} active={false} />);

		await expect.element(page.getByLabelText(`${status} status (inactive)`)).toBeInTheDocument();
	});
});
