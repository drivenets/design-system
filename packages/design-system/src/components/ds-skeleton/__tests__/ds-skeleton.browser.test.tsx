import { describe, expect, it } from 'vitest';
import { page } from 'vitest/browser';
import type { DsAvatarSize } from '../../ds-avatar';
import { DsSkeleton } from '../index';
import styles from '../ds-skeleton.module.scss';

const locator = (element: Element | null) => page.elementLocator(element as unknown as HTMLElement);

const dot = (className: string | undefined) => `.${className ?? ''}`;

describe('DsSkeleton', () => {
	describe('color variants', () => {
		it('applies the gray and blue color classes to each element', async () => {
			await page.render(
				<div data-testid="color-variants">
					<div>
						<DsSkeleton.Text color="gray" />
						<DsSkeleton.Circle color="gray" />
						<DsSkeleton.Rect width={40} height={40} color="gray" />
					</div>
					<div>
						<DsSkeleton.Text color="blue" />
						<DsSkeleton.Circle color="blue" />
						<DsSkeleton.Rect width={40} height={40} color="blue" />
					</div>
				</div>,
			);

			const container = document.querySelector('[data-testid="color-variants"]');

			expect(container?.querySelectorAll(dot(styles.gray))).toHaveLength(3);
			expect(container?.querySelectorAll(dot(styles.blue))).toHaveLength(3);
		});
	});

	describe('circle sizes', () => {
		const sizeCases: [DsAvatarSize, string][] = [
			['xsm', '24px'],
			['sm', '32px'],
			['regular', '40px'],
			['md', '48px'],
			['lg', '64px'],
			['xl', '80px'],
		];

		it.each(sizeCases)('maps semantic size "%s" to %s width and height', async (size, expected) => {
			await page.render(<DsSkeleton.Circle size={size} />);

			const circle = locator(document.querySelector(dot(styles.circle)));
			await expect.element(circle).toHaveStyle({ width: expected, height: expected });
		});

		it('applies a numeric size as pixels', async () => {
			await page.render(<DsSkeleton.Circle size={100} />);

			const circle = locator(document.querySelector(dot(styles.circle)));
			await expect.element(circle).toHaveStyle({ width: '100px', height: '100px' });
		});
	});

	describe('rectangle shapes', () => {
		it('uses the default radius for a sized rectangle', async () => {
			await page.render(<DsSkeleton.Rect width={120} height={40} />);

			const rect = locator(document.querySelector(dot(styles.rectangle)));
			await expect.element(rect).toHaveStyle({ width: '120px', height: '40px', borderRadius: '4px' });
		});

		it('maps the "round" radius to 999px', async () => {
			await page.render(<DsSkeleton.Rect width={80} height={24} radius="round" />);

			const rect = locator(document.querySelector(dot(styles.rectangle)));
			await expect.element(rect).toHaveStyle({ width: '80px', height: '24px', borderRadius: '999px' });
		});

		it('applies a numeric radius as pixels', async () => {
			await page.render(<DsSkeleton.Rect width={200} height={150} radius={8} />);

			const rect = locator(document.querySelector(dot(styles.rectangle)));
			await expect.element(rect).toHaveStyle({ width: '200px', height: '150px', borderRadius: '8px' });
		});
	});
});
