import { describe, expect, it, vi } from 'vitest';
import { page, userEvent } from 'vitest/browser';
import { DsFiltersBar } from '../index';
import { useDsFiltersBarContext } from '../ds-filters-bar.context';
import type { DsFilterField, DsFilterFieldCondition, DsFiltersBarRootProps } from '../ds-filters-bar.types';

const FIELDS: ReadonlyArray<DsFilterField> = [
	{
		type: 'enum',
		id: 'status',
		label: 'Status',
		operators: [
			{ value: '=', label: 'equals' },
			{ value: 'IN', label: 'in' },
		],
		options: [
			{ value: 'active', label: 'Active' },
			{ value: 'pending', label: 'Pending' },
		],
	},
	{
		type: 'number',
		id: 'latency',
		label: 'Latency',
		operators: [{ value: '>=', label: 'at least' }],
	},
];

const STATUS: DsFilterFieldCondition = {
	kind: 'field',
	id: 'status-1',
	field: 'status',
	operator: '=',
	value: ['active'],
};

// Switching views, clearing and editing conditions are other parts' jobs, so a probe drives them here.
const Probe = () => {
	const bar = useDsFiltersBarContext();

	return (
		<div>
			<output aria-label="locked">{bar.lockedViews.join(',')}</output>
			<button type="button" onClick={() => bar.setView(bar.view === 'advanced' ? 'filters' : 'advanced')}>
				switch view
			</button>
			<button type="button" onClick={bar.clear}>
				clear
			</button>
			<button type="button" onClick={() => bar.setConditions([STATUS])}>
				set status active
			</button>
		</div>
	);
};

const renderQuery = (props: Omit<DsFiltersBarRootProps, 'children'> = {}) =>
	page.render(
		<DsFiltersBar.Root fields={FIELDS} defaultView="advanced" {...props}>
			<Probe />
			<DsFiltersBar.View value="advanced">
				<DsFiltersBar.Query />
			</DsFiltersBar.View>
		</DsFiltersBar.Root>,
	);

const field = () => page.getByRole('textbox', { name: 'Advanced query' });

describe('DsFiltersBar.Query', () => {
	it('shows the conditions in the query language', async () => {
		await renderQuery({ defaultConditions: [STATUS] });

		await expect.element(field()).toHaveValue('status = "active"');
	});

	it('turns a query joined by AND into conditions without locking views', async () => {
		const onConditionsChange = vi.fn();
		const onQueryChange = vi.fn();

		await renderQuery({ conditions: [], query: null, onConditionsChange, onQueryChange });

		await field().fill('status = active AND latency >= 10');

		await expect
			.poll(() => onConditionsChange.mock.lastCall)
			.toEqual([
				[
					expect.objectContaining({ field: 'status', operator: '=', value: ['active'] }),
					expect.objectContaining({ field: 'latency', operator: '>=', value: 10 }),
				],
			]);
		expect(onQueryChange).not.toHaveBeenCalled();
		await expect.element(page.getByRole('status', { name: 'locked' })).toHaveTextContent('');
	});

	it('keeps a query with OR as the query', async () => {
		const onConditionsChange = vi.fn();
		const onQueryChange = vi.fn();

		await renderQuery({ conditions: [STATUS], query: null, onConditionsChange, onQueryChange });

		await field().fill('status = active OR latency >= 10');

		await expect.poll(() => onQueryChange.mock.lastCall).toEqual(['status = active OR latency >= 10']);
		expect(onConditionsChange).not.toHaveBeenCalled();
	});

	it.each(['status = active OR latency >= 10', '(status = active)'])(
		'locks the filters and builder views while %s is the source',
		async (query) => {
			await renderQuery();

			await field().fill(query);

			await expect.element(page.getByRole('status', { name: 'locked' })).toHaveTextContent('filters,builder');
		},
	);

	it('shows why a query is invalid and keeps it out of the document', async () => {
		const onConditionsChange = vi.fn();
		const onQueryChange = vi.fn();

		await renderQuery({ conditions: [STATUS], query: null, onConditionsChange, onQueryChange });

		await field().fill('owner = me');

		await expect.element(field()).toHaveAccessibleDescription('Unknown field “owner”');
		await expect.element(field()).toHaveAttribute('aria-invalid', 'true');
		expect(onConditionsChange).not.toHaveBeenCalled();
		expect(onQueryChange).not.toHaveBeenCalled();
	});

	it('keeps the typed text and its line breaks after the field loses focus', async () => {
		const onConditionsChange = vi.fn();

		await renderQuery({ onConditionsChange });

		await field().fill('STATUS in (Pending, active)\nAND latency >= 5');
		await userEvent.tab();

		await expect.element(field()).toHaveValue('STATUS in (Pending, active)\nAND latency >= 5');
		expect(onConditionsChange).toHaveBeenCalledOnce();
	});

	it('shows the canonical text once the document changes elsewhere', async () => {
		await renderQuery();

		await field().fill('STATUS = Pending');
		await userEvent.tab();
		await expect.element(field()).toHaveValue('STATUS = Pending');

		await page.getByRole('button', { name: 'set status active' }).click();

		await expect.element(field()).toHaveValue('status = "active"');
	});

	it('keeps an invalid query through blur and drops it when the view changes', async () => {
		await renderQuery({ defaultConditions: [STATUS] });

		await field().fill('status = gone');
		await userEvent.tab();

		await expect.element(field()).toHaveValue('status = gone');
		await expect.element(field()).toHaveAccessibleDescription('“gone” is not a value of this field');

		await page.getByRole('button', { name: 'switch view' }).click();
		await expect.element(field()).not.toBeInTheDocument();

		await page.getByRole('button', { name: 'switch view' }).click();
		await expect.element(field()).toHaveValue('status = "active"');
		await expect.element(field()).not.toHaveAttribute('aria-invalid');
	});

	it.each([
		{ state: 'empty', defaultConditions: [] },
		{ state: 'populated', defaultConditions: [STATUS] },
	])('drops an invalid query when the $state document is cleared', async ({ defaultConditions }) => {
		await renderQuery({ defaultConditions });

		await field().fill('status =');
		await userEvent.tab();
		await expect.element(field()).toHaveAccessibleDescription('The query is incomplete');

		await page.getByRole('button', { name: 'clear' }).click();

		await expect.element(field()).toHaveValue('');
		await expect.element(field()).not.toHaveAttribute('aria-invalid');

		await field().click();

		await expect.element(field()).toHaveValue('');
		await expect.element(field()).not.toHaveAttribute('aria-invalid');
	});

	it('keeps the last valid conditions while a later edit is invalid', async () => {
		const onConditionsChange = vi.fn();

		await renderQuery({ conditions: [STATUS], onConditionsChange });

		await field().fill('status = active AND latency >=');

		await expect.element(field()).toHaveAccessibleDescription('The query is incomplete');
		expect(onConditionsChange).not.toHaveBeenCalled();
	});

	it('empties the conditions when the text is cleared', async () => {
		const onConditionsChange = vi.fn();

		await renderQuery({ conditions: [STATUS], onConditionsChange });

		await field().fill('');

		await expect.poll(() => onConditionsChange.mock.lastCall).toEqual([[]]);
	});

	it('opens a syntax reference with an example built from the fields', async () => {
		await renderQuery();

		await page.getByRole('button', { name: 'Query syntax' }).click();

		const help = page.getByRole('dialog', { name: 'Query syntax' });

		await expect.element(help.getByText('does not contain')).toBeVisible();
		await expect.element(help.getByText('status = "active" AND latency >= 10')).toBeVisible();
	});

	it('keeps the typed query when the syntax reference opens', async () => {
		const onConditionsChange = vi.fn();

		await renderQuery({ conditions: [], onConditionsChange });

		await field().fill('STATUS = Active');
		await expect.poll(() => onConditionsChange).toHaveBeenCalled();

		await page.getByRole('button', { name: 'Query syntax' }).click();

		await expect.element(page.getByRole('dialog', { name: 'Query syntax' })).toBeVisible();
		await expect.element(field()).toHaveValue('STATUS = Active');
	});
});
