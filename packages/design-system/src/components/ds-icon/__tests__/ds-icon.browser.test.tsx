import type { FC, SVGProps } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';
import DsIcon from '../ds-icon';
import { iconColors } from '../ds-icon.types';

const TestSvg: FC<SVGProps<SVGSVGElement>> = (props) => (
	<svg data-testid="test-svg" viewBox="0 0 24 24" {...props}>
		<circle cx="12" cy="12" r="10" fill="currentColor" />
	</svg>
);

describe('DsIcon', () => {
	it('should render a material icon', async () => {
		await page.render(<DsIcon icon="home" />);

		const icon = page.getByText('home');
		await expect.element(icon).toBeVisible();
	});

	it('should render a custom SVG icon', async () => {
		await page.render(<DsIcon icon="special-home" />);

		const svg = page.elementLocator(document.querySelector('svg') as unknown as HTMLElement);
		await expect.element(svg).toBeInTheDocument();
	});

	it('should render an inline SVG component', async () => {
		await page.render(<DsIcon icon={TestSvg} />);

		await expect.element(page.getByTestId('test-svg')).toBeInTheDocument();
	});

	describe('color prop', () => {
		it.each(iconColors.map((c) => [c]))(
			'should resolve semantic color "%s" to var(--icon-%s)',
			async (color) => {
				await page.render(<DsIcon icon="home" color={color} />);

				const icon = page.getByText('home');
				await expect.element(icon).toHaveAttribute('style', expect.stringContaining(`var(--icon-${color})`));
			},
		);

		it('should pass CSS variables through unchanged', async () => {
			await page.render(<DsIcon icon="home" color="var(--my-custom-color)" />);

			const icon = page.getByText('home');
			await expect.element(icon).toHaveAttribute('style', expect.stringContaining('var(--my-custom-color)'));
		});

		it('should apply color to a custom SVG icon', async () => {
			await page.render(<DsIcon icon="special-home" color="success" />);

			const svg = page.elementLocator(document.querySelector('svg') as unknown as HTMLElement);
			await expect.element(svg).toHaveAttribute('style', expect.stringContaining('var(--icon-success)'));
		});

		it('should apply color to an inline SVG component', async () => {
			await page.render(<DsIcon icon={TestSvg} color="error" />);

			const svg = page.getByTestId('test-svg');
			await expect.element(svg).toHaveAttribute('style', expect.stringContaining('var(--icon-error)'));
		});

		it('should let style.color override the color prop', async () => {
			await page.render(<DsIcon icon="home" color="error" style={{ color: 'var(--icon-warning)' }} />);

			const icon = page.getByText('home');
			await expect.element(icon).toHaveAttribute('style', expect.stringContaining('var(--icon-warning)'));
		});
	});

	it('should call onClick when clicked', async () => {
		const onClick = vi.fn();

		await page.render(<DsIcon icon="home" onClick={onClick} />);

		await page.getByText('home').click();
		expect(onClick).toHaveBeenCalledOnce();
	});
});
