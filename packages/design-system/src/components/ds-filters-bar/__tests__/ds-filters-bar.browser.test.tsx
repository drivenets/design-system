import { describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';
import { DsFiltersBar } from '../index';
import { useDsFiltersBarContext } from '../ds-filters-bar.context';
import type {
	DsFilterCondition,
	DsFilterFieldCondition,
	DsFiltersBarRootProps,
} from '../ds-filters-bar.types';

// Parts render nothing yet, so a probe drives the shared context directly.
const Probe = () => {
	const bar = useDsFiltersBarContext();

	return (
		<div>
			<output aria-label="conditions">{bar.conditions.map((condition) => condition.id).join(',')}</output>
			<output aria-label="query">{String(bar.query)}</output>
			<output aria-label="query text">{bar.queryText}</output>
			<output aria-label="locked">{bar.lockedViews.join(',')}</output>
			<output aria-label="empty">{String(bar.isEmpty)}</output>
			<output aria-label="expanded">{String(bar.expanded)}</output>
			<output aria-label="view">{bar.view}</output>
			<button type="button" onClick={() => bar.addCondition(SEARCH)}>
				add
			</button>
			<button type="button" onClick={() => bar.updateCondition({ ...STATUS, operator: '!=' })}>
				update
			</button>
			<button type="button" onClick={() => bar.removeCondition(STATUS.id)}>
				remove
			</button>
			<button type="button" onClick={() => bar.setQuery('status = "Active"')}>
				query
			</button>
			<button type="button" onClick={() => bar.setQuery('  ')}>
				blank query
			</button>
			<button type="button" onClick={bar.clear}>
				clear
			</button>
			<button type="button" onClick={() => bar.setExpanded(!bar.expanded)}>
				toggle
			</button>
			<button type="button" onClick={() => bar.setView('advanced')}>
				advanced
			</button>
		</div>
	);
};

const STATUS: DsFilterFieldCondition = {
	kind: 'field',
	id: 'status-1',
	field: 'status',
	operator: '=',
	value: 'active',
};
const SEARCH: DsFilterCondition = { kind: 'search', id: 'search-1', text: 'AAA' };

const renderBar = (props: Omit<DsFiltersBarRootProps, 'children'> = {}) =>
	page.render(
		<DsFiltersBar.Root {...props}>
			<Probe />
		</DsFiltersBar.Root>,
	);

const output = (name: string) => page.getByRole('status', { name });

describe('DsFiltersBar filter document', () => {
	it('adds, updates and removes conditions when uncontrolled', async () => {
		await renderBar({ defaultConditions: [STATUS] });

		await page.getByRole('button', { name: 'add' }).click();
		await expect.element(output('conditions')).toHaveTextContent('status-1,search-1');

		await page.getByRole('button', { name: 'remove' }).click();
		await expect.element(output('conditions')).toHaveTextContent('search-1');
	});

	it('reports the next conditions and keeps the controlled value', async () => {
		const onConditionsChange = vi.fn();

		await renderBar({ conditions: [STATUS], onConditionsChange });

		await page.getByRole('button', { name: 'update' }).click();

		expect(onConditionsChange).toHaveBeenCalledWith([{ ...STATUS, operator: '!=' }]);
		await expect.element(output('conditions')).toHaveTextContent('status-1');
	});

	it('clears conditions and drops the query but reports each change', async () => {
		const onConditionsChange = vi.fn();
		const onQueryChange = vi.fn();

		await renderBar({ conditions: [STATUS], query: 'x', onConditionsChange, onQueryChange });

		await page.getByRole('button', { name: 'clear' }).click();

		expect(onConditionsChange).toHaveBeenCalledWith([]);
		expect(onQueryChange).toHaveBeenCalledWith(null);
	});

	it('is empty only without conditions and without an edited query', async () => {
		await renderBar();

		await expect.element(output('empty')).toHaveTextContent('true');

		await page.getByRole('button', { name: 'query', exact: true }).click();
		await expect.element(output('empty')).toHaveTextContent('false');

		await page.getByRole('button', { name: 'clear' }).click();
		await expect.element(output('empty')).toHaveTextContent('true');
	});
});

describe('DsFiltersBar query source', () => {
	it('shows the formatted conditions while no query is edited', async () => {
		await renderBar({
			defaultConditions: [STATUS],
			formatQuery: (conditions) => conditions.map((condition) => condition.id).join(' AND '),
		});

		await expect.element(output('query')).toHaveTextContent('null');
		await expect.element(output('query text')).toHaveTextContent('status-1');
		await expect.element(output('locked')).toHaveTextContent('');
	});

	it('makes an edited query the source and locks the filters and builder views', async () => {
		await renderBar({ defaultConditions: [STATUS], formatQuery: () => 'generated' });

		await page.getByRole('button', { name: 'query', exact: true }).click();

		await expect.element(output('query text')).toHaveTextContent('status = "Active"');
		await expect.element(output('locked')).toHaveTextContent('filters,builder');
	});

	it('hands control back to the conditions for a blank query', async () => {
		const onQueryChange = vi.fn();

		await renderBar({ query: 'x', onQueryChange });

		await page.getByRole('button', { name: 'blank query' }).click();

		expect(onQueryChange).toHaveBeenCalledWith(null);
	});
});

describe('DsFiltersBar UI state', () => {
	it('starts collapsed on the filters view', async () => {
		await renderBar();

		await expect.element(output('expanded')).toHaveTextContent('false');
		await expect.element(output('view')).toHaveTextContent('filters');
	});

	it('toggles expanded and switches view when uncontrolled', async () => {
		await renderBar();

		await page.getByRole('button', { name: 'toggle' }).click();
		await page.getByRole('button', { name: 'advanced' }).click();

		await expect.element(output('expanded')).toHaveTextContent('true');
		await expect.element(output('view')).toHaveTextContent('advanced');
	});

	it('reports expanded and view changes when controlled', async () => {
		const onExpandedChange = vi.fn();
		const onViewChange = vi.fn();

		await renderBar({ expanded: false, view: 'filters', onExpandedChange, onViewChange });

		await page.getByRole('button', { name: 'toggle' }).click();
		await page.getByRole('button', { name: 'advanced' }).click();

		expect(onExpandedChange).toHaveBeenCalledWith(true);
		expect(onViewChange).toHaveBeenCalledWith('advanced');
		await expect.element(output('expanded')).toHaveTextContent('false');
		await expect.element(output('view')).toHaveTextContent('filters');
	});

	it('throws when a part is used outside Root', async () => {
		const consoleError = vi.spyOn(console, 'error').mockImplementation(() => undefined);

		await expect(page.render(<DsFiltersBar.Summary />)).rejects.toThrow(
			'DsFiltersBar compound components must be used within DsFiltersBar.Root',
		);

		consoleError.mockRestore();
	});
});
