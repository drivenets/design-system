import { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { page, userEvent } from 'vitest/browser';
import { DsSavedFilters } from '../index';
import type { DsSavedFilterItem } from '../ds-saved-filters.types';

const ITEMS: DsSavedFilterItem[] = [
	{ id: '1', name: 'MyFilter_1', count: 2 },
	{ id: '2', name: 'MyFilter_2', count: 1 },
	{ id: '3', name: 'MyFilter_3' },
];

interface HarnessProps {
	items?: DsSavedFilterItem[];
	value?: string | null;
	dirty?: boolean;
	withSave?: boolean;
	saveDisabled?: boolean;
	onValueChange?: (id: string | null) => void;
	onClear?: () => void | Promise<void>;
	onUpdate?: () => void | Promise<void>;
	onSaveAs?: (name: string) => void | Promise<void>;
	onRename?: (id: string, name: string) => void | Promise<void>;
	onDelete?: (id: string) => void | Promise<void>;
}

const createDeferred = () => {
	let resolve!: () => void;
	const promise = new Promise<void>((res) => {
		resolve = res;
	});

	return { promise, resolve };
};

const Harness = ({
	items = ITEMS,
	value = null,
	dirty = false,
	withSave = false,
	saveDisabled = false,
	onValueChange,
	onClear,
	onUpdate,
	onSaveAs,
	onRename,
	onDelete,
}: HarnessProps) => {
	const [currentValue, setCurrentValue] = useState(value);
	const [currentItems, setCurrentItems] = useState(items);

	const handleValueChange = (id: string | null) => {
		onValueChange?.(id);
		setCurrentValue(id);
	};

	return (
		<>
			<DsSavedFilters.Trigger
				items={currentItems}
				value={currentValue}
				dirty={dirty}
				onValueChange={handleValueChange}
				onClear={() => {
					const result = onClear?.();
					setCurrentValue(null);

					return result;
				}}
				onRename={(id, name) => {
					const result = onRename?.(id, name);
					setCurrentItems((current) => current.map((item) => (item.id === id ? { ...item, name } : item)));

					return result;
				}}
				onDelete={(id) => {
					const result = onDelete?.(id);
					setCurrentItems((current) => current.filter((item) => item.id !== id));

					return result;
				}}
			/>
			{withSave ? (
				<DsSavedFilters.Save
					items={currentItems}
					value={currentValue}
					disabled={saveDisabled}
					onUpdate={() => onUpdate?.()}
					onSaveAs={(name) => {
						const result = onSaveAs?.(name);
						setCurrentItems((current) => [...current, { id: name, name }]);

						return result;
					}}
				/>
			) : null}
		</>
	);
};

const openPicker = async (tagName = 'Saved filters') => {
	await page.getByRole('button', { name: tagName }).click();
	await expect.element(page.getByRole('heading', { name: 'Saved filters' })).toBeVisible();
};

describe('DsSavedFilters picker', () => {
	it('opens from the tag and closes from the header Close button', async () => {
		await page.render(<Harness />);

		await openPicker();

		await page.getByRole('button', { name: 'Close' }).click();
		await expect.element(page.getByText('MyFilter_1')).not.toBeVisible();
	});

	it('closes the picker on Escape', async () => {
		await page.render(<Harness />);

		await openPicker();
		await userEvent.keyboard('{Escape}');
		await expect.element(page.getByText('MyFilter_1')).not.toBeVisible();
	});

	it('shows the empty state copy when there are no items', async () => {
		await page.render(<Harness items={[]} />);

		await openPicker();

		await expect
			.element(page.getByText('No saved filters yet. Build a filter, then choose “Save filter”.'))
			.toBeVisible();
	});

	it('applies a row and updates the tag label', async () => {
		const onValueChange = vi.fn();

		await page.render(<Harness onValueChange={onValueChange} />);

		await openPicker();
		await page.getByRole('dialog').getByRole('button', { name: 'bookmark MyFilter_1' }).click();

		expect(onValueChange).toHaveBeenCalledWith('1');
		await expect.element(page.getByRole('button', { name: 'MyFilter_1' })).toBeVisible();
	});

	it('does not render the tag X when no saved filter is applied', async () => {
		await page.render(<Harness />);

		await expect.element(page.getByRole('button', { name: 'Clear filters' })).not.toBeInTheDocument();
	});

	it('calls onClear from the tag X and does not call onValueChange', async () => {
		const onClear = vi.fn();
		const onValueChange = vi.fn();

		await page.render(<Harness value="1" onClear={onClear} onValueChange={onValueChange} />);

		await page.getByRole('button', { name: 'Clear filters' }).click();

		expect(onClear).toHaveBeenCalledOnce();
		expect(onValueChange).not.toHaveBeenCalled();
	});

	it('surfaces dirty as unsaved changes on the tag', async () => {
		await page.render(<Harness value="1" dirty />);

		await expect.element(page.getByRole('button', { name: 'MyFilter_1, Unsaved changes' })).toBeVisible();
	});

	it('fills the bookmark on the active row, matching the tag preview', async () => {
		await page.render(<Harness value="1" />);

		await openPicker('MyFilter_1');

		const rowIconFill = (name: string) =>
			window.getComputedStyle(
				page
					.getByRole('dialog')
					.getByRole('button', { name: `bookmark ${name}` })
					.getByText('bookmark')
					.element(),
			).fontVariationSettings;

		expect(rowIconFill('MyFilter_1')).toMatch(/FILL["']?\s*1/);
		expect(rowIconFill('MyFilter_2')).not.toMatch(/FILL["']?\s*1/);
	});

	it('renders an optional count and omits it when undefined', async () => {
		await page.render(<Harness />);

		await openPicker();

		await expect.element(page.getByText('2')).toBeVisible();
		await expect.element(page.getByText('1')).toBeVisible();
		await expect
			.element(page.getByRole('dialog').getByRole('button', { name: 'bookmark MyFilter_3' }))
			.toBeVisible();
	});
});

describe('DsSavedFilters save', () => {
	it('saves as a new filter from the bar name popover when none is active', async () => {
		const onSaveAs = vi.fn();

		await page.render(<Harness items={[]} withSave onSaveAs={onSaveAs} />);

		await page.getByRole('button', { name: 'Save filter' }).click();
		await page.getByLabelText('Filter name').fill('Night shift');
		await page.getByRole('button', { name: /^Save$/ }).click();

		expect(onSaveAs).toHaveBeenCalledWith('Night shift');
	});

	it('does not open the name popover while disabled', async () => {
		await page.render(<Harness items={[]} withSave saveDisabled />);

		const saveButton = page.getByRole('button', { name: 'Save filter' });

		await expect.element(saveButton).toBeDisabled();
		await saveButton.click({ force: true });
		await expect.element(page.getByLabelText('Filter name')).not.toBeInTheDocument();
	});

	it('disables confirm when the name is blank', async () => {
		await page.render(<Harness items={[]} withSave />);

		await page.getByRole('button', { name: 'Save filter' }).click();

		await expect.element(page.getByRole('button', { name: /^Save$/ })).toBeDisabled();
	});

	it('updates the active snapshot from the save menu', async () => {
		const onUpdate = vi.fn();

		await page.render(<Harness value="1" dirty withSave onUpdate={onUpdate} />);

		await page.getByRole('button', { name: 'Save filter' }).click();
		await page.getByRole('menuitem', { name: 'Update “MyFilter_1”' }).click();

		expect(onUpdate).toHaveBeenCalledOnce();
	});

	it('saves as a new filter from the save menu via a modal', async () => {
		const onSaveAs = vi.fn();

		await page.render(<Harness value="1" dirty withSave onSaveAs={onSaveAs} />);

		await page.getByRole('button', { name: 'Save filter' }).click();
		await page.getByRole('menuitem', { name: 'Save as a new filter' }).click();
		await page.getByLabelText('Filter name').fill('Copy');
		await page.getByRole('button', { name: /^Save$/ }).click();

		expect(onSaveAs).toHaveBeenCalledWith('Copy');
	});
});

describe('DsSavedFilters row actions', () => {
	it('renames a snapshot from the overflow menu', async () => {
		const onRename = vi.fn();

		await page.render(<Harness onRename={onRename} />);

		await openPicker();
		await page.getByRole('button', { name: 'Filter actions: MyFilter_1' }).click();
		await page.getByRole('menuitem', { name: /Rename filter/ }).click();
		await page.getByLabelText('Filter name').fill('Renamed');
		await page.getByRole('button', { name: /^Save$/ }).click();

		expect(onRename).toHaveBeenCalledWith('1', 'Renamed');
	});

	it('deletes a snapshot only after confirming in the dialog', async () => {
		const onDelete = vi.fn();

		await page.render(<Harness onDelete={onDelete} />);

		await openPicker();
		await page.getByRole('button', { name: 'Filter actions: MyFilter_1' }).click();
		await page.getByRole('menuitem', { name: /Delete filter/ }).click();

		expect(onDelete).not.toHaveBeenCalled();
		await expect.element(page.getByText('Delete “MyFilter_1”? This cannot be undone.')).toBeVisible();
		await page.getByRole('button', { name: /^Delete$/ }).click();

		expect(onDelete).toHaveBeenCalledWith('1');
	});

	it('does not delete when the confirmation is cancelled', async () => {
		const onDelete = vi.fn();

		await page.render(<Harness onDelete={onDelete} />);

		await openPicker();
		await page.getByRole('button', { name: 'Filter actions: MyFilter_1' }).click();
		await page.getByRole('menuitem', { name: /Delete filter/ }).click();
		await page.getByRole('button', { name: 'Cancel' }).click();

		expect(onDelete).not.toHaveBeenCalled();
	});
});

describe('DsSavedFilters async callbacks', () => {
	it('shows a spinner on the tag until onClear settles', async () => {
		const deferred = createDeferred();
		const onClear = vi.fn(() => deferred.promise);
		const tagHasSpinner = () =>
			Boolean(page.getByRole('button', { name: 'Saved filters' }).element().querySelector('svg'));

		await page.render(<Harness value="1" onClear={onClear} />);
		await page.getByRole('button', { name: 'Clear filters' }).click();

		await expect.poll(tagHasSpinner).toBe(true);

		deferred.resolve();

		await expect.poll(tagHasSpinner).toBe(false);
		expect(onClear).toHaveBeenCalledOnce();
	});

	it('shows loading on save confirm until onSaveAs settles', async () => {
		const deferred = createDeferred();
		const onSaveAs = vi.fn(() => deferred.promise);

		await page.render(<Harness items={[]} withSave onSaveAs={onSaveAs} />);
		await page.getByRole('button', { name: 'Save filter' }).click();
		await page.getByLabelText('Filter name').fill('Night shift');
		await page.getByRole('button', { name: /^Save$/ }).click();

		await expect.element(page.getByRole('button', { name: /^Save$/ })).toHaveAttribute('aria-busy', 'true');

		deferred.resolve();
		await deferred.promise;

		await expect
			.element(page.getByRole('button', { name: 'Save filter' }))
			.toHaveAttribute('aria-expanded', 'false');
		expect(onSaveAs).toHaveBeenCalledWith('Night shift');
	});

	it('shows loading on the Save button until onUpdate settles', async () => {
		const deferred = createDeferred();
		const onUpdate = vi.fn(() => deferred.promise);

		await page.render(<Harness value="1" dirty withSave onUpdate={onUpdate} />);
		await page.getByRole('button', { name: 'Save filter' }).click();
		await page.getByRole('menuitem', { name: 'Update “MyFilter_1”' }).click();

		await expect
			.element(page.getByRole('button', { name: 'Save filter' }))
			.toHaveAttribute('aria-busy', 'true');

		deferred.resolve();

		await expect.element(page.getByRole('button', { name: 'Save filter' })).not.toHaveAttribute('aria-busy');
		expect(onUpdate).toHaveBeenCalledOnce();
	});

	it('shows loading on rename confirm until onRename settles', async () => {
		const deferred = createDeferred();
		const onRename = vi.fn(() => deferred.promise);

		await page.render(<Harness onRename={onRename} />);
		await openPicker();
		await page.getByRole('button', { name: 'Filter actions: MyFilter_1' }).click();
		await page.getByRole('menuitem', { name: /Rename filter/ }).click();
		await page.getByLabelText('Filter name').fill('Renamed');
		await page.getByRole('button', { name: /^Save$/ }).click();

		await expect.element(page.getByRole('button', { name: /^Save$/ })).toHaveAttribute('aria-busy', 'true');

		deferred.resolve();
		await deferred.promise;

		await expect
			.poll(() =>
				[...document.querySelectorAll('[data-scope="dialog"][data-state="open"]')].some((dialog) =>
					dialog.textContent.includes('Rename filter'),
				),
			)
			.toBe(false);
		expect(onRename).toHaveBeenCalledWith('1', 'Renamed');
	});

	it('shows loading on delete confirm until onDelete settles', async () => {
		const deferred = createDeferred();
		const onDelete = vi.fn(() => deferred.promise);

		await page.render(<Harness onDelete={onDelete} />);
		await openPicker();
		await page.getByRole('button', { name: 'Filter actions: MyFilter_1' }).click();
		await page.getByRole('menuitem', { name: /Delete filter/ }).click();
		await page.getByRole('button', { name: /^Delete$/ }).click();

		await expect.element(page.getByRole('button', { name: /^Delete$/ })).toHaveAttribute('aria-busy', 'true');

		deferred.resolve();
		await deferred.promise;

		await expect
			.poll(() =>
				[...document.querySelectorAll('[data-scope="dialog"][data-state="open"]')].some((dialog) =>
					dialog.textContent.includes('Delete filter'),
				),
			)
			.toBe(false);
		expect(onDelete).toHaveBeenCalledWith('1');
	});
});
