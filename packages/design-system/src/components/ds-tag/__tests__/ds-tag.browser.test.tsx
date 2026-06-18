import { describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';

import DsTag from '../ds-tag';

describe('DsTag key-value variant', () => {
	it('renders key and value with an auto-rendered colon', async () => {
		await page.render(<DsTag variant="key-value" label="Category" value="Networking" />);

		await expect.element(page.getByText('Category')).toBeInTheDocument();
		await expect.element(page.getByText('Networking')).toBeInTheDocument();

		// Colon is a CSS pseudo-element, so it never reaches the DOM/AX tree;
		// assert it via computed style of the key's `::after`.
		const keyAfter = window.getComputedStyle(page.getByText('Category').element(), '::after').content;
		expect(keyAfter).toMatch(/:/);
	});

	it('fires onDelete from the revealed delete button', async () => {
		const onDelete = vi.fn();
		await page.render(<DsTag variant="key-value" label="Category" value="Networking" onDelete={onDelete} />);

		// Delete button is hidden until the tag is hovered/focused.
		await page.getByRole('button', { name: 'Category' }).hover();

		const deleteButton = page.getByRole('button', { name: 'Delete tag' });
		await expect.element(deleteButton).toBeVisible();
		await deleteButton.click();

		expect(onDelete).toHaveBeenCalledOnce();
	});
});
