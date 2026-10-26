import { describe, expect, it } from 'vitest';
import { page } from 'vitest/browser';
import { DsIllustration } from '../index';
import { dsIllustrationVariants } from '../ds-illustration.types';

describe('DsIllustration', () => {
	it.each(dsIllustrationVariants)('should leave the corners of %s transparent', async (variant) => {
		const { container } = await page.render(<DsIllustration variant={variant} />);
		const svg = container.querySelector('svg') as SVGSVGElement;
		const { left, top } = svg.getBoundingClientRect();

		const cornerTarget = document.elementFromPoint(left + 1, top + 1);

		expect(cornerTarget === svg || !svg.contains(cornerTarget)).toBe(true);
	});

	it('is decorative by default and exposes a label when asked', async () => {
		const { container, rerender } = await page.render(<DsIllustration variant="device" />);
		const svg = container.querySelector('svg');

		expect(svg).toHaveAttribute('aria-hidden', 'true');

		await rerender(<DsIllustration variant="device" aria-hidden={false} aria-label="Device scene" />);

		await expect.element(page.getByLabelText('Device scene')).toBeVisible();
	});
});
