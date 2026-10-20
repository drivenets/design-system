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
				</>,
			);

			expect(screen.container.querySelectorAll('[role="status"], [aria-live]')).toHaveLength(0);
			await expect.element(page.getByText('Active')).toBeVisible();
		});

		it('should render a status live region when live is set', async () => {
			await page.render(<DsStatusBadgeV2 phase="execution" label="Running" live />);

			await expect.element(page.getByRole('status', { name: 'Running' })).toBeInTheDocument();
		});
	});

	describe('accessible name', () => {
		it('should name a static icon-only badge by its label', async () => {
			await page.render(<DsStatusBadgeV2 phase="active" label="Active" iconOnly />);

			await expect.element(page.getByRole('img', { name: 'Active' })).toBeInTheDocument();
		});

		it('should name a static badge by its aria-label', async () => {
			await page.render(<DsStatusBadgeV2 phase="active" label="Active" aria-label="Status: Active" />);

			await expect.element(page.getByRole('img', { name: 'Status: Active' })).toBeInTheDocument();
		});
	});
});
