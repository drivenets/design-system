import { afterEach, describe, expect, it } from 'vitest';
import { page } from 'vitest/browser';
import DsChipGroup from '../ds-chip-group';
import { readZIndex, resetZIndexTiers, setZIndexTier } from '../../../../vitest/z-index-tiers';

const items = Array.from({ length: 12 }, (_, idx) => ({
	id: String(idx),
	label: `Filter ${String(idx)}`,
}));

describe('DsChipGroup stacking', () => {
	afterEach(resetZIndexTiers);

	const openOverflowList = async () => {
		await page.render(<DsChipGroup items={items} style={{ width: 320 }} />);

		await page.getByText(/show all/).click();
		await expect.element(page.getByRole('dialog')).toBeVisible();

		return page.getByRole('dialog').element();
	};

	it('stacks the overflow list just above popovers by default', async () => {
		expect(readZIndex(await openOverflowList())).toBe(1001);
	});

	it('moves the overflow list with --z-index-popover', async () => {
		setZIndexTier('popover', 1500);

		expect(readZIndex(await openOverflowList())).toBe(1501);
	});
});
