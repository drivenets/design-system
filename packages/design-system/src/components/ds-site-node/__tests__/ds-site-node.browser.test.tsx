import { describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';
import DsSiteNode from '../ds-site-node';

describe('DsSiteNode', () => {
	it('names the node from its tier and site code content and fires onClick', async () => {
		const onClick = vi.fn();
		await page.render(<DsSiteNode tier="T1" siteCode="OKCAOKLU" onClick={onClick} />);

		const node = page.getByRole('button', { name: /T1\s+OKCAOKLU/ });
		await node.click();

		expect(onClick).toHaveBeenCalledOnce();
	});

	it('keeps the muted state clickable (de-emphasized, not disabled)', async () => {
		const onClick = vi.fn();
		await page.render(<DsSiteNode state="muted" tier="T1" siteCode="OKCAOKLU" onClick={onClick} />);

		const node = page.getByRole('button', { name: /OKCAOKLU/ });
		await expect.element(node).not.toBeDisabled();
		await node.click();

		expect(onClick).toHaveBeenCalledOnce();
	});

	it('marks the selected node with aria-current', async () => {
		await page.render(<DsSiteNode state="selected" tier="T1" siteCode="OKCAOKLU" />);

		const node = page.getByRole('button', { name: /OKCAOKLU/ });
		await expect.element(node).toHaveAttribute('aria-current', 'true');
	});

	it('renders the overflow label and expands on click', async () => {
		const onClick = vi.fn();
		await page.render(<DsSiteNode state="overflow" overflowLabel="+2 more" onClick={onClick} />);

		const node = page.getByRole('button', { name: '+2 more' });
		await node.click();

		expect(onClick).toHaveBeenCalledOnce();
	});

	it('supports a custom aria-label override', async () => {
		await page.render(<DsSiteNode tier="T1" siteCode="OKCAOKLU" aria-label="Tier 1, London site" />);

		await expect.element(page.getByRole('button', { name: 'Tier 1, London site' })).toBeVisible();
	});

	it('reveals the full site code in a tooltip when the text overflows', async () => {
		await page.render(<DsSiteNode tier="T1" siteCode="OKCAOKLU-LONDON-01" />);

		await page.getByText('OKCAOKLU-LONDON-01').hover();

		await expect.element(page.getByRole('tooltip')).toBeVisible();
	});
});
