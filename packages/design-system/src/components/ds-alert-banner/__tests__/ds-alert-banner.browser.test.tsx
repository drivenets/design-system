import { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';
import DsAlertBanner from '../ds-alert-banner';

function ControlledBanner({
	inline,
	onOpenChange,
}: {
	inline?: boolean;
	onOpenChange?: (open: boolean) => void;
}) {
	const [open, setOpen] = useState(false);

	return (
		<div>
			<button type="button" onClick={() => setOpen(true)}>
				Show Alert Banner
			</button>
			<DsAlertBanner
				open={open}
				onOpenChange={(next) => {
					onOpenChange?.(next);
					setOpen(next);
				}}
				inline={inline}
				variant="warning"
				icon="warning"
				closable
			>
				<DsAlertBanner.Title>Attention needed</DsAlertBanner.Title>
				<DsAlertBanner.Body>This is an important alert message.</DsAlertBanner.Body>
			</DsAlertBanner>
		</div>
	);
}

describe('DsAlertBanner', () => {
	it('renders nothing while open is false', async () => {
		await page.render(<ControlledBanner />);

		await expect.element(page.getByText('Attention needed')).not.toBeInTheDocument();
	});

	it('shows the inline banner when its trigger is clicked', async () => {
		await page.render(<ControlledBanner inline />);

		await page.getByRole('button', { name: 'Show Alert Banner' }).click();

		await expect.element(page.getByText('Attention needed')).toBeVisible();
	});

	it('dismisses the inline banner when the close button is clicked', async () => {
		await page.render(<ControlledBanner inline />);

		await page.getByRole('button', { name: 'Show Alert Banner' }).click();
		await expect.element(page.getByText('Attention needed')).toBeVisible();

		await page.getByRole('button', { name: 'Close alert' }).click();

		await expect.element(page.getByText('Attention needed')).not.toBeInTheDocument();
	});

	it('dismisses the global banner when the close button is clicked', async () => {
		await page.render(<ControlledBanner inline={false} />);

		await page.getByRole('button', { name: 'Show Alert Banner' }).click();
		await expect.element(page.getByText('This is an important alert message.')).toBeVisible();

		await page.getByRole('button', { name: 'Close alert' }).click();

		await expect.element(page.getByText('This is an important alert message.')).not.toBeInTheDocument();
	});

	it('calls onOpenChange with false when the close button is clicked', async () => {
		const onOpenChange = vi.fn();

		await page.render(
			<DsAlertBanner open onOpenChange={onOpenChange} inline variant="error" icon="error" closable>
				<DsAlertBanner.Body>Something went wrong. Please try again.</DsAlertBanner.Body>
			</DsAlertBanner>,
		);

		await page.getByRole('button', { name: 'Close alert' }).click();

		expect(onOpenChange).toHaveBeenCalledWith(false);
	});

	it('does not render a close button when closable is false', async () => {
		await page.render(
			<DsAlertBanner open onOpenChange={vi.fn()} inline variant="info-blue" icon="info">
				<DsAlertBanner.Body>Informational message without a close button.</DsAlertBanner.Body>
			</DsAlertBanner>,
		);

		await expect.element(page.getByText('Informational message without a close button.')).toBeVisible();
		await expect.element(page.getByRole('button', { name: 'Close alert' })).not.toBeInTheDocument();
	});

	it('renders action buttons that fire their handlers', async () => {
		const onProceed = vi.fn();

		await page.render(
			<DsAlertBanner open onOpenChange={vi.fn()} inline variant="warning" icon="warning">
				<DsAlertBanner.Title>Attention needed</DsAlertBanner.Title>
				<DsAlertBanner.Body>Choose how you want to proceed.</DsAlertBanner.Body>
				<DsAlertBanner.Actions>
					<button type="button" onClick={onProceed}>
						Proceed
					</button>
					<button type="button">Skip</button>
				</DsAlertBanner.Actions>
			</DsAlertBanner>,
		);

		await page.getByRole('button', { name: 'Proceed' }).click();

		expect(onProceed).toHaveBeenCalledOnce();
	});
});
