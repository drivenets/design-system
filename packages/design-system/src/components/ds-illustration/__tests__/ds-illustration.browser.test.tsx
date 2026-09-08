import { describe, expect, it } from 'vitest';
import { page } from 'vitest/browser';
import { DsIllustration } from '../index';

describe('DsIllustration', () => {
	it('is decorative by default and exposes a label when asked', async () => {
		const { container, rerender } = await page.render(<DsIllustration variant="device" />);
		const svg = container.querySelector('svg');

		expect(svg).toHaveAttribute('aria-hidden', 'true');

		await rerender(<DsIllustration variant="device" aria-hidden={false} aria-label="Device scene" />);

		await expect.element(page.getByLabelText('Device scene')).toBeVisible();
	});
});
