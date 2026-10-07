import { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';
import { DsFiltersBar } from '../index';

const Controlled = () => {
	const [active, setActive] = useState(false);

	return (
		<DsFiltersBar.Root>
			<DsFiltersBar.Pinned>
				<DsFiltersBar.PinnedGroup label="Status">
					<DsFiltersBar.PinnedToggle label="Active" count={10} active={active} onActiveChange={setActive} />
				</DsFiltersBar.PinnedGroup>
			</DsFiltersBar.Pinned>
		</DsFiltersBar.Root>
	);
};

describe('DsFiltersBar pinned', () => {
	it('toggles a pill and reports the next pressed state', async () => {
		await page.render(<Controlled />);

		const toggle = page.getByRole('button', { name: /Active/ });
		await expect.element(toggle).toHaveAttribute('aria-pressed', 'false');

		await toggle.click();

		await expect.element(toggle).toHaveAttribute('aria-pressed', 'true');
	});

	it('names each category group', async () => {
		await page.render(<Controlled />);

		await expect.element(page.getByRole('group', { name: 'Status' })).toBeVisible();
	});

	it('disables a toggle when its count is 0', async () => {
		const onActiveChange = vi.fn();

		await page.render(
			<DsFiltersBar.Root>
				<DsFiltersBar.Pinned>
					<DsFiltersBar.PinnedGroup label="Status">
						<DsFiltersBar.PinnedToggle
							label="Pending"
							count={0}
							active={false}
							onActiveChange={onActiveChange}
						/>
					</DsFiltersBar.PinnedGroup>
				</DsFiltersBar.Pinned>
			</DsFiltersBar.Root>,
		);

		const toggle = page.getByRole('button', { name: /Pending/ });
		await expect.element(toggle).toBeDisabled();
		await toggle.click({ force: true });

		expect(onActiveChange).not.toHaveBeenCalled();
	});

	it('keeps a zero-count toggle enabled when disabled is false', async () => {
		const onActiveChange = vi.fn();

		await page.render(
			<DsFiltersBar.Root>
				<DsFiltersBar.Pinned>
					<DsFiltersBar.PinnedGroup label="Status">
						<DsFiltersBar.PinnedToggle
							label="Pending"
							count={0}
							active={false}
							disabled={false}
							onActiveChange={onActiveChange}
						/>
					</DsFiltersBar.PinnedGroup>
				</DsFiltersBar.Pinned>
			</DsFiltersBar.Root>,
		);

		await page.getByRole('button', { name: /Pending/ }).click();

		expect(onActiveChange).toHaveBeenCalledWith(true);
	});

	it('uses the locale label', async () => {
		await page.render(
			<DsFiltersBar.Root>
				<DsFiltersBar.Pinned locale={{ label: 'Shortcuts' }}>
					<DsFiltersBar.PinnedGroup label="Status">
						<DsFiltersBar.PinnedToggle label="Active" count={10} active={false} />
					</DsFiltersBar.PinnedGroup>
				</DsFiltersBar.Pinned>
			</DsFiltersBar.Root>,
		);

		await expect.element(page.getByText('Shortcuts')).toBeVisible();
	});
});
