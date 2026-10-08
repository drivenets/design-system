import { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { page, userEvent } from 'vitest/browser';
import { DsFiltersBar } from '../index';
import {
	emptyFilterDocument,
	type DsFilterDocument,
	type DsFilterField,
	type DsFilterFieldCondition,
	type DsFiltersBarProps,
	type DsFiltersBarSavedFiltersConfig,
} from '../ds-filters-bar.types';

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
const OR_QUERY = 'status = active OR latency >= 10';

const withStatus: DsFilterDocument = { conditions: [STATUS], query: null };

const QueryBar = (props: DsFiltersBarProps) => (
	<DsFiltersBar fields={FIELDS} defaultExpanded defaultView="advanced" {...props} />
);

// Holds the document outside the bar, so only reported changes reach the field.
const ControlledQueryBar = ({
	initialValue = emptyFilterDocument,
	onValueChange,
}: {
	initialValue?: DsFilterDocument;
	onValueChange: (value: DsFilterDocument) => void;
}) => {
	const [value, setValue] = useState(initialValue);

	return (
		<QueryBar
			value={value}
			onValueChange={(next) => {
				onValueChange(next);
				setValue(next);
			}}
		/>
	);
};

const field = () => page.getByRole('textbox', { name: 'Advanced query' });
const viewItem = (name: string) => page.getByRole('radio', { name, exact: true });
const clearAll = () => page.getByRole('button', { name: 'Clear all', exact: true });

// Ark renders the radio as a visually hidden input outside the viewport, so fire a native click
// on the element directly instead of a Playwright pointer click.
const selectView = async (name: string) => {
	await expect.element(viewItem(name)).toBeInTheDocument();
	(viewItem(name).element() as HTMLElement).click();
};

describe('DsFiltersBar advanced query', () => {
	it('shows the conditions in the query language', async () => {
		await page.render(<QueryBar defaultValue={withStatus} />);

		await expect.element(field()).toHaveValue('status = "active"');
	});

	it('turns a query joined by AND into conditions without locking views', async () => {
		const onValueChange = vi.fn();

		await page.render(<ControlledQueryBar onValueChange={onValueChange} />);

		await field().fill('status = active AND latency >= 10');

		await expect
			.poll(() => onValueChange.mock.lastCall)
			.toEqual([
				{
					conditions: [
						expect.objectContaining({ field: 'status', operator: '=', value: ['active'] }),
						expect.objectContaining({ field: 'latency', operator: '>=', value: 10 }),
					],
					query: null,
				},
			]);
		await expect.element(viewItem('Filters')).toBeEnabled();
		await expect.element(viewItem('Query builder')).toBeEnabled();
	});

	it('keeps a query with OR as the query, next to the kept conditions', async () => {
		const onValueChange = vi.fn();

		await page.render(<ControlledQueryBar initialValue={withStatus} onValueChange={onValueChange} />);

		await field().fill(OR_QUERY);

		await expect.poll(() => onValueChange.mock.calls).toEqual([[{ conditions: [STATUS], query: OR_QUERY }]]);
	});

	it.each([OR_QUERY, '(status = active)'])(
		'locks the filters and builder views while %s is the source',
		async (query) => {
			await page.render(<QueryBar />);

			await field().fill(query);

			await expect.element(viewItem('Filters')).toBeDisabled();
			await expect.element(viewItem('Query builder')).toBeDisabled();
			await expect.element(viewItem('Advanced query')).toBeChecked();
		},
	);

	it('replaces an Advanced query with the conditions of a compatible query in one change', async () => {
		const onValueChange = vi.fn();

		await page.render(
			<ControlledQueryBar
				initialValue={{ conditions: [STATUS], query: OR_QUERY }}
				onValueChange={onValueChange}
			/>,
		);

		await field().fill('status = pending');

		await expect
			.poll(() => onValueChange.mock.calls)
			.toEqual([
				[
					{
						conditions: [expect.objectContaining({ field: 'status', operator: '=', value: ['pending'] })],
						query: null,
					},
				],
			]);
		await expect.element(viewItem('Filters')).toBeEnabled();
	});

	it('hands control back to the conditions when the query text is blanked', async () => {
		const onValueChange = vi.fn();

		await page.render(
			<ControlledQueryBar initialValue={{ conditions: [], query: OR_QUERY }} onValueChange={onValueChange} />,
		);

		await field().fill('');

		await expect.poll(() => onValueChange.mock.lastCall).toEqual([emptyFilterDocument]);
		await expect.element(viewItem('Filters')).toBeEnabled();
	});

	it('shows why a query is invalid and keeps it out of the document', async () => {
		const onValueChange = vi.fn();

		await page.render(<ControlledQueryBar initialValue={withStatus} onValueChange={onValueChange} />);

		await field().fill('owner = me');

		await expect.element(field()).toHaveAccessibleDescription('Unknown field “owner”');
		await expect.element(field()).toHaveAttribute('aria-invalid', 'true');
		expect(onValueChange).not.toHaveBeenCalled();
	});

	it('keeps the typed text and its line breaks after the field loses focus', async () => {
		const onValueChange = vi.fn();

		await page.render(<QueryBar onValueChange={onValueChange} />);

		await field().fill('STATUS in (Pending, active)\nAND latency >= 5');
		await userEvent.tab();

		await expect.element(field()).toHaveValue('STATUS in (Pending, active)\nAND latency >= 5');
		expect(onValueChange).toHaveBeenCalledOnce();
	});

	it('shows the canonical text once the document changes elsewhere', async () => {
		await page.render(<QueryBar />);

		await field().fill('STATUS = Pending');
		await userEvent.tab();
		await expect.element(field()).toHaveValue('STATUS = Pending');

		await page.getByRole('textbox', { name: 'Search' }).fill('AAA');
		await userEvent.keyboard('{Enter}');

		await expect.element(field()).toHaveValue('status = "pending" AND "AAA"');
	});

	it('keeps an invalid query through blur and drops it when the view changes', async () => {
		await page.render(<QueryBar defaultValue={withStatus} />);

		await field().fill('status = gone');
		await userEvent.tab();

		await expect.element(field()).toHaveValue('status = gone');
		await expect.element(field()).toHaveAccessibleDescription('“gone” is not a value of this field');

		await selectView('Filters');
		await expect.element(field()).not.toBeInTheDocument();

		await selectView('Advanced query');
		await expect.element(field()).toHaveValue('status = "active"');
		await expect.element(field()).not.toHaveAttribute('aria-invalid');
	});

	// Clear all shows only while there is something to clear, so the empty document has an
	// Active saved filter to drop.
	const emptySavedFilter: DsFiltersBarSavedFiltersConfig = {
		items: [{ id: 'all', name: 'Everything', document: emptyFilterDocument }],
		defaultActiveId: 'all',
		onSaveAs: () => 'new',
		onUpdate: () => undefined,
		onRename: () => undefined,
		onDelete: () => undefined,
	};

	it.each([
		{ state: 'empty', props: { savedFilters: emptySavedFilter } },
		{ state: 'populated', props: { defaultValue: withStatus } },
	])('drops an invalid query when the $state document is cleared', async ({ props }) => {
		await page.render(<QueryBar {...props} />);

		await field().fill('status =');
		await userEvent.tab();
		await expect.element(field()).toHaveAccessibleDescription('The query is incomplete');

		await clearAll().click();

		await expect.element(field()).toHaveValue('');
		await expect.element(field()).not.toHaveAttribute('aria-invalid');

		await field().click();

		await expect.element(field()).toHaveValue('');
		await expect.element(field()).not.toHaveAttribute('aria-invalid');
	});

	it('keeps the last valid conditions while a later edit is invalid', async () => {
		const onValueChange = vi.fn();

		await page.render(<ControlledQueryBar initialValue={withStatus} onValueChange={onValueChange} />);

		await field().fill('status = active AND latency >=');

		await expect.element(field()).toHaveAccessibleDescription('The query is incomplete');
		expect(onValueChange).not.toHaveBeenCalled();
	});

	it('empties the conditions when the text is cleared', async () => {
		const onValueChange = vi.fn();

		await page.render(<ControlledQueryBar initialValue={withStatus} onValueChange={onValueChange} />);

		await field().fill('');

		await expect.poll(() => onValueChange.mock.lastCall).toEqual([emptyFilterDocument]);
	});

	it('opens a syntax reference with an example built from the fields', async () => {
		await page.render(<QueryBar />);

		await page.getByRole('button', { name: 'Query syntax' }).click();

		const help = page.getByRole('dialog', { name: 'Query syntax' });

		await expect.element(help.getByText('does not contain')).toBeVisible();
		await expect.element(help.getByText('status = "active" AND latency >= 10')).toBeVisible();
	});

	it('keeps the typed query when the syntax reference opens', async () => {
		const onValueChange = vi.fn();

		await page.render(<ControlledQueryBar onValueChange={onValueChange} />);

		await field().fill('STATUS = Active');
		await expect.poll(() => onValueChange).toHaveBeenCalled();

		await page.getByRole('button', { name: 'Query syntax' }).click();

		await expect.element(page.getByRole('dialog', { name: 'Query syntax' })).toBeVisible();
		await expect.element(field()).toHaveValue('STATUS = Active');
	});
});

describe('DsFiltersBar advanced query slotProps', () => {
	it('replaces the syntax reference with slotProps.query.slots.help', async () => {
		await page.render(
			<QueryBar slotProps={{ query: { slots: { help: <a href="#docs">Query docs</a> } } }} />,
		);

		await page.getByRole('button', { name: 'Query syntax' }).click();

		const help = page.getByRole('dialog', { name: 'Query syntax' });

		await expect.element(help.getByRole('link', { name: 'Query docs' })).toBeVisible();
		await expect.element(help.getByText('does not contain')).not.toBeInTheDocument();
	});

	it('disables the field through slotProps.query.disabled', async () => {
		await page.render(<QueryBar slotProps={{ query: { disabled: true } }} />);

		await expect.element(field()).toBeDisabled();
	});

	it('takes its strings from locale.query', async () => {
		await page.render(<QueryBar locale={{ query: { label: 'Expression' } }} />);

		await expect.element(page.getByRole('textbox', { name: 'Expression' })).toBeVisible();
	});
});
