import { createRef } from 'react';
import { describe, expect, it } from 'vitest';
import { page } from 'vitest/browser';
import DsStatusBadgeV2 from '../ds-status-badge-v2';
import { DsStatusBadgeV2 as DsStatusBadgeV2Responsive } from '../index';

describe('DsStatusBadgeV2', () => {
	it('renders with role="status" and aria-label from label', async () => {
		await page.render(<DsStatusBadgeV2 phase="active" label="Active" />);

		await expect.element(page.getByRole('status', { name: 'Active' })).toBeVisible();
	});

	it('renders label text', async () => {
		await page.render(<DsStatusBadgeV2 phase="pending" label="Reserved" />);

		await expect.element(page.getByText('Reserved')).toBeVisible();
	});

	it('renders default phase icon', async () => {
		await page.render(<DsStatusBadgeV2 phase="active" label="Active" />);

		const badge = page.getByRole('status').element();
		expect(badge.querySelector('[aria-hidden="true"]')).toBeTruthy();
	});

	it('hides icon when icon={null} (text-only)', async () => {
		await page.render(<DsStatusBadgeV2 phase="active" label="Active" icon={null} />);

		const badge = page.getByRole('status').element();
		expect(badge.querySelector('[aria-hidden="true"]')).toBeNull();

		await expect.element(page.getByText('Active')).toBeVisible();
	});

	it('renders custom icon override', async () => {
		await page.render(<DsStatusBadgeV2 phase="active" label="Active" icon="star" />);

		const badge = page.getByRole('status').element();
		const icon = badge.querySelector('[aria-hidden="true"]');
		expect(icon).toBeTruthy();
		expect(icon?.textContent).toBe('star');
	});

	it('iconOnly hides label and shows tooltip with label text on hover', async () => {
		await page.render(<DsStatusBadgeV2 phase="active" label="Active" iconOnly />);

		await expect.element(page.getByText('Active')).not.toBeInTheDocument();

		await page.getByRole('status', { name: 'Active' }).hover();
		await expect.element(page.getByRole('tooltip', { name: 'Active' })).toBeVisible();
	});

	it('custom aria-label overrides label', async () => {
		await page.render(<DsStatusBadgeV2 phase="active" label="Active" aria-label="Custom status" />);

		await expect.element(page.getByRole('status', { name: 'Custom status' })).toBeVisible();
	});

	it('applies secondary variant class', async () => {
		await page.render(<DsStatusBadgeV2 phase="active" label="Active" variant="secondary" />);

		const badge = page.getByRole('status').element();
		expect(badge.classList.toString()).toMatch(/secondary/);
	});

	it('applies small size class', async () => {
		await page.render(<DsStatusBadgeV2 phase="active" label="Active" size="small" />);

		const badge = page.getByRole('status').element();
		expect(badge.classList.toString()).toMatch(/small/);
	});

	it('merges className', async () => {
		await page.render(<DsStatusBadgeV2 phase="active" label="Active" className="extra" />);

		await expect.element(page.getByRole('status')).toHaveClass('extra');
	});

	it('forwards ref', async () => {
		const ref = createRef<HTMLElement>();

		await page.render(<DsStatusBadgeV2 phase="active" label="Active" ref={ref} />);

		expect(ref.current).toBeInstanceOf(HTMLElement);
		expect(ref.current?.getAttribute('role')).toBe('status');
	});

	it('renders via responsive wrapper', async () => {
		await page.render(
			<DsStatusBadgeV2Responsive phase="execution" label="Testing" size={{ lg: 'medium', md: 'small' }} />,
		);

		await expect.element(page.getByRole('status', { name: 'Testing' })).toBeVisible();
	});
});
