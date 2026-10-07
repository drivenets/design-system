import { describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';
import { DsFiltersBar } from '../index';
import { useDsFiltersBarContext } from '../ds-filters-bar.context';
import type {
	DsFilterCondition,
	DsFiltersBarRootProps,
	DsFiltersBarSavedFiltersProps,
	DsFiltersBarSaveFilterProps,
} from '../ds-filters-bar.types';

const ITEMS = [
	{ id: '1', name: 'Night shift', count: 1 },
	{ id: '2', name: 'Failed runs', count: 2 },
];
const SEARCH: DsFilterCondition = { kind: 'search', id: 'search-1', text: 'AAA' };
const QUERY = 'status = "A" OR status = "B"';

// Filling the document is other parts' job, so a probe drives it here.
const Probe = () => {
	const bar = useDsFiltersBarContext();

	return (
		<div>
			<output aria-label="conditions">{bar.conditions.map((condition) => condition.id).join(',')}</output>
			<output aria-label="query">{String(bar.query)}</output>
			<button type="button" onClick={() => bar.addCondition(SEARCH)}>
				add
			</button>
		</div>
	);
};

const savedFiltersProps = (
	overrides: Partial<DsFiltersBarSavedFiltersProps> = {},
): DsFiltersBarSavedFiltersProps => ({
	items: ITEMS,
	value: null,
	onValueChange: vi.fn(),
	onClear: vi.fn(),
	onRename: vi.fn(),
	onDelete: vi.fn(),
	...overrides,
});

const saveFilterProps = (
	overrides: Partial<DsFiltersBarSaveFilterProps> = {},
): DsFiltersBarSaveFilterProps => ({
	items: ITEMS,
	value: null,
	onUpdate: vi.fn(),
	onSaveAs: vi.fn(),
	...overrides,
});

const renderSavedFilters = (
	props: DsFiltersBarSavedFiltersProps,
	rootProps: Omit<DsFiltersBarRootProps, 'children'> = {},
) =>
	page.render(
		<DsFiltersBar.Root {...rootProps}>
			<Probe />
			<DsFiltersBar.SavedFilters {...props} />
		</DsFiltersBar.Root>,
	);

const renderSaveFilter = (
	props: DsFiltersBarSaveFilterProps,
	rootProps: Omit<DsFiltersBarRootProps, 'children'> = {},
) =>
	page.render(
		<DsFiltersBar.Root {...rootProps}>
			<Probe />
			<DsFiltersBar.SaveFilter {...props} />
		</DsFiltersBar.Root>,
	);

const output = (name: string) => page.getByRole('status', { name });
const saveButton = () => page.getByRole('button', { name: 'Save filter', exact: true });

describe('DsFiltersBar.SavedFilters', () => {
	it('shows the Active saved filter from the consumer items, value and dirty', async () => {
		await renderSavedFilters(savedFiltersProps({ value: '2', dirty: true }));

		await expect
			.element(page.getByRole('button', { name: 'Failed runs, Unsaved changes', exact: true }))
			.toBeVisible();
	});

	it('lists the consumer items and reports the one picked', async () => {
		const onValueChange = vi.fn();

		await renderSavedFilters(savedFiltersProps({ onValueChange }));

		await page.getByRole('button', { name: 'Saved filters', exact: true }).click();
		await page.getByRole('dialog').getByRole('button', { name: 'bookmark Night shift' }).click();

		expect(onValueChange).toHaveBeenCalledExactlyOnceWith('1');
	});

	it.each([
		{ source: 'conditions', rootProps: { defaultConditions: [SEARCH] } },
		{ source: 'an Advanced query', rootProps: { defaultQuery: QUERY } },
	])('clears the filter document driven by $source before onClear runs', async ({ rootProps }) => {
		const calls: string[] = [];
		const onClear = vi.fn(() => {
			calls.push('clear');
		});

		await renderSavedFilters(savedFiltersProps({ value: '1', onClear }), {
			...rootProps,
			onConditionsChange: (conditions) => calls.push(`conditions:${String(conditions.length)}`),
			onQueryChange: (query) => calls.push(`query:${String(query)}`),
		});

		await page.getByRole('button', { name: 'Clear filters', exact: true }).click();

		expect(calls).toEqual(['conditions:0', 'query:null', 'clear']);
		await expect.element(output('conditions')).toHaveTextContent('');
		await expect.element(output('query')).toHaveTextContent('null');
	});

	it('keeps the tag busy until an async onClear settles', async () => {
		let settle!: () => void;
		const onClear = vi.fn(
			() =>
				new Promise<void>((resolve) => {
					settle = resolve;
				}),
		);

		await renderSavedFilters(savedFiltersProps({ value: '1', onClear }), { defaultConditions: [SEARCH] });

		const clear = page.getByRole('button', { name: 'Clear filters', exact: true });

		await clear.click();
		await expect.element(output('conditions')).toHaveTextContent('');

		// While busy, the tag ignores another clear.
		await clear.click();
		expect(onClear).toHaveBeenCalledOnce();

		settle();
		await clear.click();
		await expect.poll(() => onClear.mock.calls.length).toBe(2);
	});

	it('passes the locale through to the picker', async () => {
		await renderSavedFilters(savedFiltersProps({ locale: { savedFilters: 'Views' } }));

		await expect.element(page.getByRole('button', { name: 'Views', exact: true })).toBeVisible();
	});
});

describe('DsFiltersBar.SaveFilter', () => {
	it('is disabled while the filter document is empty', async () => {
		await renderSaveFilter(saveFilterProps());

		await expect.element(saveButton()).toBeDisabled();

		await page.getByRole('button', { name: 'add' }).click();

		await expect.element(saveButton()).toBeEnabled();
	});

	it('is enabled while an Advanced query is the source', async () => {
		await renderSaveFilter(saveFilterProps(), { defaultQuery: QUERY });

		await expect.element(saveButton()).toBeEnabled();
	});

	it('follows an explicit disabled over the empty document', async () => {
		const { rerender } = await page.render(
			<DsFiltersBar.Root>
				<DsFiltersBar.SaveFilter {...saveFilterProps({ disabled: false })} />
			</DsFiltersBar.Root>,
		);

		await expect.element(saveButton()).toBeEnabled();

		await rerender(
			<DsFiltersBar.Root defaultConditions={[SEARCH]}>
				<DsFiltersBar.SaveFilter {...saveFilterProps({ disabled: true })} />
			</DsFiltersBar.Root>,
		);

		await expect.element(saveButton()).toBeDisabled();
	});

	it('saves the document as a new filter through the consumer handler', async () => {
		const onSaveAs = vi.fn();

		await renderSaveFilter(saveFilterProps({ onSaveAs }), { defaultConditions: [SEARCH] });

		await saveButton().click();
		await page.getByLabelText('Filter name').fill('Morning');
		await page.getByRole('button', { name: /^Save$/ }).click();

		expect(onSaveAs).toHaveBeenCalledExactlyOnceWith('Morning');
	});

	it('updates the Active saved filter through the consumer handler', async () => {
		const onUpdate = vi.fn();

		await renderSaveFilter(saveFilterProps({ value: '1', onUpdate }), { defaultConditions: [SEARCH] });

		await saveButton().click();
		await page.getByRole('menuitem', { name: 'Update “Night shift”' }).click();

		expect(onUpdate).toHaveBeenCalledOnce();
	});
});
