import { describe, expect, it } from 'vitest';
import { page } from 'vitest/browser';
import { DsButtonV3 } from '../../ds-button-v3';
import { DsEmptyState } from '../index';

describe('DsEmptyState', () => {
	it('shows the no-data message by default', async () => {
		await page.render(<DsEmptyState />);

		await expect.element(page.getByRole('status')).toHaveTextContent('No data to display.');
	});

	it('shows the no-matches message when variant is noMatches', async () => {
		await page.render(<DsEmptyState variant="noMatches" />);

		await expect.element(page.getByRole('status')).toHaveTextContent('No matching records found.');
	});

	it('overrides the message when message is passed', async () => {
		await page.render(<DsEmptyState message="Nothing here." />);

		await expect.element(page.getByRole('status')).toHaveTextContent('Nothing here.');
		await expect.element(page.getByText('No data to display.')).not.toBeInTheDocument();
	});

	it('replaces the bundled illustration when illustration is passed', async () => {
		await page.render(<DsEmptyState illustration={<span>Custom art</span>} />);

		await expect.element(page.getByText('Custom art')).toBeVisible();
	});

	it('renders the action slot', async () => {
		await page.render(<DsEmptyState action={<DsButtonV3 size="small">Add</DsButtonV3>} />);

		await expect.element(page.getByRole('button', { name: 'Add' })).toBeVisible();
	});
});
