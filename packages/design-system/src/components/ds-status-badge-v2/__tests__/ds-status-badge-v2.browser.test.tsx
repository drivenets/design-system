import { describe, expect, it } from 'vitest';
import { page } from 'vitest/browser';

import { DsStatusBadgeV2 } from '../index';

describe('DsStatusBadgeV2', () => {
	describe('live region', () => {
		it('should not render live regions for static badges', async () => {
			const screen = await page.render(
				<>
					<DsStatusBadgeV2 phase="active" label="Active" />
					<DsStatusBadgeV2 phase="pending" label="Pending" variant="secondary" />
					<DsStatusBadgeV2 phase="result-failed" label="Failed" icon={null} />
					<DsStatusBadgeV2 phase="deprecated" label="Deprecated" iconOnly />
				</>,
			);

			expect(screen.container.querySelectorAll('[role], [aria-live]')).toHaveLength(0);
			await expect.element(page.getByText('Active')).toBeVisible();
		});

		it('should announce label changes when aria-live is set', async () => {
			const screen = await page.render(
				<DsStatusBadgeV2 phase="execution" label="Running" aria-live="polite" />,
			);

			// Keep the DOM node: announcements need the same region to persist across label changes.
			const region = screen.container.querySelector('[aria-live="polite"]');

			expect(region).toHaveAttribute('aria-atomic', 'true');
			expect(region?.textContent).toContain('Running');

			await screen.rerender(<DsStatusBadgeV2 phase="result-succeeded" label="Done" aria-live="polite" />);

			expect(region?.textContent).toContain('Done');
		});

		it('should announce icon-only label changes when aria-live is set', async () => {
			const screen = await page.render(
				<DsStatusBadgeV2 phase="execution" label="Running" iconOnly aria-live="assertive" />,
			);

			// Keep the DOM node: announcements need the same region to persist across label changes.
			const region = screen.container.querySelector('[aria-live="assertive"]');

			expect(region?.textContent).toContain('Running');

			await screen.rerender(
				<DsStatusBadgeV2 phase="result-failed" label="Failed" iconOnly aria-live="assertive" />,
			);

			expect(region?.textContent).toContain('Failed');
		});
	});

	describe('accessible name', () => {
		it('should expose an icon-only badge label as text', async () => {
			await page.render(<DsStatusBadgeV2 phase="active" label="Active" iconOnly />);

			await expect.element(page.getByText('Active')).toBeInTheDocument();
		});

		it('should expose a custom aria-label as text in place of the visible label', async () => {
			await page.render(<DsStatusBadgeV2 phase="active" label="Active" aria-label="Status: Active" />);

			await expect.element(page.getByText('Active', { exact: true })).toHaveAttribute('aria-hidden', 'true');
			await expect.element(page.getByText('Status: Active')).toBeInTheDocument();
		});
	});
});
