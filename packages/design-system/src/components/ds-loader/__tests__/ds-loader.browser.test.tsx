import { describe, expect, it } from 'vitest';
import { page } from 'vitest/browser';
import { DsLoader } from '../index';

describe('DsLoader', () => {
	it('renders a progressbar by default', async () => {
		await page.render(<DsLoader />);

		await expect.element(page.getByRole('progressbar')).toBeInTheDocument();
	});

	it('renders the pulsing variant with two circles and no spinner mask', async () => {
		await page.render(<DsLoader variant="pulsing" />);

		const svg = document.querySelector('svg');
		expect(svg).not.toBeNull();
		expect(svg?.querySelectorAll('circle')).toHaveLength(2);
		expect(svg?.querySelector('mask')).toBeNull();
	});

	it('forwards a custom className to the progressbar container', async () => {
		await page.render(<DsLoader className="my-custom-loader" />);

		const progressbar = page.getByRole('progressbar');
		await expect.element(progressbar).toHaveClass(/my-custom-loader/);
	});
});
