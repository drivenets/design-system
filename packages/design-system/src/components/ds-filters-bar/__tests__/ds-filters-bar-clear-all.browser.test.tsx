import { createRef } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';
import { DsFiltersBar } from '../index';
import { useDsFiltersBarContext } from '../ds-filters-bar.context';
import type {
	DsFilterCondition,
	DsFiltersBarClearAllProps,
	DsFiltersBarRootProps,
} from '../ds-filters-bar.types';

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

interface HarnessProps extends Omit<DsFiltersBarRootProps, 'children'> {
	clearAllProps?: DsFiltersBarClearAllProps;
}

const renderClearAll = ({ clearAllProps, ...props }: HarnessProps = {}) =>
	page.render(
		<DsFiltersBar.Root {...props}>
			<Probe />
			<DsFiltersBar.ClearAll {...clearAllProps} />
		</DsFiltersBar.Root>,
	);

const clearAll = (name = 'Clear all') => page.getByRole('button', { name, exact: true });
const output = (name: string) => page.getByRole('status', { name });

describe('DsFiltersBar.ClearAll', () => {
	it('renders nothing while the filter document is empty', async () => {
		await renderClearAll();

		await expect.element(clearAll()).not.toBeInTheDocument();

		await page.getByRole('button', { name: 'add' }).click();

		await expect.element(clearAll()).toBeVisible();
	});

	it('empties the conditions, then calls onClick', async () => {
		const calls: string[] = [];
		const onConditionsChange = vi.fn((conditions: ReadonlyArray<DsFilterCondition>) => {
			calls.push(`conditions:${String(conditions.length)}`);
		});
		const onClick = vi.fn(() => {
			calls.push('click');
		});

		await renderClearAll({ defaultConditions: [SEARCH], onConditionsChange, clearAllProps: { onClick } });

		await clearAll().click();

		expect(calls).toEqual(['conditions:0', 'click']);
		await expect.element(output('conditions')).toHaveTextContent('');
		await expect.element(clearAll()).not.toBeInTheDocument();
	});

	it('drops the Advanced query', async () => {
		const onQueryChange = vi.fn();
		const onConditionsChange = vi.fn();

		await renderClearAll({ defaultQuery: QUERY, onQueryChange, onConditionsChange });

		await clearAll().click();

		expect(onQueryChange).toHaveBeenCalledExactlyOnceWith(null);
		expect(onConditionsChange).toHaveBeenCalledExactlyOnceWith([]);
		await expect.element(output('query')).toHaveTextContent('null');
	});

	it.each([
		['conditions', { defaultConditions: [SEARCH] }],
		['an Advanced query', { defaultQuery: QUERY }],
	])('moves focus to Search after clearing %s', async (_, props) => {
		await page.render(
			<DsFiltersBar.Root {...props}>
				<DsFiltersBar.Disclosure />
				<DsFiltersBar.Search />
				<DsFiltersBar.ClearAll />
			</DsFiltersBar.Root>,
		);

		await clearAll().click();

		await expect.element(clearAll()).not.toBeInTheDocument();
		await expect.element(page.getByRole('textbox', { name: 'Search' })).toHaveFocus();
	});

	it('moves focus to the disclosure button after clearing when there is no Search', async () => {
		await page.render(
			<DsFiltersBar.Root defaultConditions={[SEARCH]}>
				<DsFiltersBar.Disclosure />
				<DsFiltersBar.ClearAll />
			</DsFiltersBar.Root>,
		);

		await clearAll().click();

		await expect.element(page.getByRole('button', { name: 'Show filters' })).toHaveFocus();
	});

	it('leaves focus where onClick moved it', async () => {
		const elsewhere = createRef<HTMLButtonElement>();

		await page.render(
			<DsFiltersBar.Root defaultConditions={[SEARCH]}>
				<DsFiltersBar.Search />
				<button ref={elsewhere} type="button">
					elsewhere
				</button>
				<DsFiltersBar.ClearAll onClick={() => elsewhere.current?.focus()} />
			</DsFiltersBar.Root>,
		);

		await clearAll().click();

		await expect.element(page.getByRole('button', { name: 'elsewhere' })).toHaveFocus();
	});

	it('takes its label from the locale', async () => {
		await renderClearAll({ defaultConditions: [SEARCH], clearAllProps: { locale: { label: 'Reset' } } });

		await expect.element(clearAll('Reset')).toBeVisible();
	});

	it('forwards ref, className and style', async () => {
		const ref = createRef<HTMLButtonElement>();

		await renderClearAll({
			defaultConditions: [SEARCH],
			clearAllProps: { ref, className: 'custom', style: { marginLeft: '3px' } },
		});

		await expect.element(clearAll()).toHaveClass('custom');
		await expect.element(clearAll()).toHaveStyle({ marginLeft: '3px' });
		expect(ref.current).toBe(clearAll().element());
	});
});
