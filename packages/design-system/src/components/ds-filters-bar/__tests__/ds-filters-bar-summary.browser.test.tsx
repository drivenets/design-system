import { createRef } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { page, type Locator } from 'vitest/browser';
import { DsFiltersBar } from '../index';
import type {
	DsFilterCondition,
	DsFilterField,
	DsFiltersBarRootProps,
	DsFiltersBarSummaryProps,
} from '../ds-filters-bar.types';

const FIELDS: ReadonlyArray<DsFilterField> = [
	{
		type: 'enum',
		id: 'status',
		label: 'Status',
		operators: [
			{ value: '=', label: 'equals' },
			{ value: '!=', label: 'not equal' },
		],
		options: [
			{ value: 'active', label: 'Active' },
			{ value: 'pending', label: 'Pending' },
		],
	},
	{
		type: 'text',
		id: 'lastRunResult',
		label: 'Last run result',
		operators: [
			{ value: '=', label: 'equals' },
			{ value: '!=', label: 'not equal' },
		],
	},
	{
		type: 'compound',
		id: 'input',
		label: 'Input',
		subfields: [
			{
				type: 'text',
				id: 'name',
				label: 'Name',
				operators: [
					{ value: '=', label: 'equals' },
					{ value: '~', label: 'contains' },
				],
			},
		],
	},
	{
		type: 'number',
		id: 'duration',
		label: 'Duration',
		operators: [
			{ value: '=', label: 'equals' },
			{ value: '>', label: 'greater than' },
		],
	},
];

const STATUS: DsFilterCondition = {
	kind: 'field',
	id: 'status-1',
	field: 'status',
	operator: '=',
	value: ['active'],
};
const LAST_RUN: DsFilterCondition = {
	kind: 'field',
	id: 'last-run-1',
	field: 'lastRunResult',
	operator: '!=',
	value: 'Success',
};
const INPUT_NAME: DsFilterCondition = {
	kind: 'field',
	id: 'input-name-1',
	field: 'input',
	subfield: 'name',
	operator: '~',
	value: 'WF456',
};
const DURATION_RANGE: DsFilterCondition = {
	kind: 'field',
	id: 'duration-1',
	field: 'duration',
	operator: '=',
	value: { from: 10, to: 20 },
};
const SEARCH_AAA: DsFilterCondition = { kind: 'search', id: 'search-1', text: 'AAA' };

const OR_QUERY = 'status = "active" OR status = "pending"';
const SAVED_FILTER = 'Ira123';

interface BarProps extends Omit<DsFiltersBarRootProps, 'children'> {
	summaryProps?: DsFiltersBarSummaryProps;
}

const SummaryBar = ({ summaryProps, ...props }: BarProps) => (
	<DsFiltersBar.Root fields={FIELDS} {...props}>
		<DsFiltersBar.Summary {...summaryProps} />
	</DsFiltersBar.Root>
);

const DisclosureBar = ({ summaryProps, ...props }: BarProps) => (
	<DsFiltersBar.Root fields={FIELDS} {...props}>
		<DsFiltersBar.Disclosure />
		<DsFiltersBar.Summary {...summaryProps} />
		<DsFiltersBar.Toolbar>
			<button type="button">Add filter</button>
		</DsFiltersBar.Toolbar>
	</DsFiltersBar.Root>
);

const escapeRegExp = (text: string) => text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// Summary items may be separated by layout gap instead of a text space, so only that gap is optional.
const summaryOf = (...items: string[]) => new RegExp(items.map(escapeRegExp).join('\\s*'));

const region = () => page.getByRole('region', { name: 'Filters' });
const showButton = (name = 'Show filters') => page.getByRole('button', { name, exact: true });
const hideButton = (name = 'Hide filters') => page.getByRole('button', { name, exact: true });
// A bold label may include its trailing colon.
const label = (text: string) => page.getByText(new RegExp(`^${escapeRegExp(text)}:?$`));
const visibleCount = (count: number) => page.getByText(`(${String(count)})`, { exact: true });

const fontWeightOf = (locator: Locator) => () => Number(getComputedStyle(locator.element()).fontWeight);

// Past DsTooltip's 200ms open delay, so a missing tooltip is not just a tooltip that has yet to open.
const TOOLTIP_SETTLE_MS = 400;

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// The element that truncates is the nearest ancestor drawing the ellipsis.
const truncatingAncestorOf = (locator: Locator): HTMLElement | null => {
	let element: HTMLElement | null = locator.element() as HTMLElement;

	while (element && getComputedStyle(element).textOverflow !== 'ellipsis') {
		element = element.parentElement;
	}

	return element;
};

const isInside = (inner: Locator, outer: Locator) => {
	const innerRect = inner.element().getBoundingClientRect();
	const outerRect = outer.element().getBoundingClientRect();

	return innerRect.left >= outerRect.left && innerRect.right <= outerRect.right;
};

describe('DsFiltersBar.Summary text', () => {
	it('reads `View: All;` and the count for an empty document', async () => {
		await page.render(<SummaryBar summaryProps={{ count: 18 }} />);

		await expect.element(region()).toMatchTextContent(summaryOf('View: All;', '(18)'));
	});

	it('omits the operator for `=` and words every other operator by its label', async () => {
		await page.render(<SummaryBar defaultConditions={[STATUS, LAST_RUN]} summaryProps={{ count: 18 }} />);

		await expect
			.element(region())
			.toMatchTextContent(summaryOf('Status: Active;', 'Last run result not equal: Success;', '(18)'));
		await expect.element(region()).not.toMatchTextContent('equals');
		await expect.element(region()).not.toMatchTextContent('View: All');
	});

	it('shows a range without an operator', async () => {
		await page.render(<SummaryBar defaultConditions={[DURATION_RANGE]} />);

		await expect.element(region()).toMatchTextContent('Duration: 10 – 20;');
		await expect.element(region()).not.toMatchTextContent('equals');
	});

	it('joins a compound field path with ` › `', async () => {
		await page.render(<SummaryBar defaultConditions={[INPUT_NAME]} />);

		await expect.element(region()).toMatchTextContent('Input › Name contains: WF456;');
	});

	it('reads a search condition as `Search: <text>;`', async () => {
		await page.render(<SummaryBar defaultConditions={[STATUS, SEARCH_AAA]} />);

		await expect.element(region()).toMatchTextContent(summaryOf('Status: Active;', 'Search: AAA;'));
	});

	it('reads `Advanced query;` without conditions or query text while an Advanced query is the source', async () => {
		await page.render(
			<SummaryBar defaultConditions={[STATUS]} defaultQuery={OR_QUERY} summaryProps={{ count: 18 }} />,
		);

		await expect.element(region()).toMatchTextContent(summaryOf('Advanced query;', '(18)'));
		await expect.element(region()).not.toMatchTextContent('Status');
		await expect.element(region()).not.toMatchTextContent('OR');
		await expect.element(region()).not.toMatchTextContent('View: All');
	});

	it('reads `Filter: <name>;` without `View: All` when the saved filter has nothing after it', async () => {
		await page.render(<SummaryBar summaryProps={{ count: 18, activeSavedFilterName: SAVED_FILTER }} />);

		await expect.element(region()).toMatchTextContent(summaryOf(`Filter: ${SAVED_FILTER};`, '(18)'));
		await expect.element(region()).not.toMatchTextContent('View');
	});

	it('drops the `;` after the saved filter name when conditions follow', async () => {
		await page.render(
			<SummaryBar
				defaultConditions={[STATUS, SEARCH_AAA]}
				summaryProps={{ count: 18, activeSavedFilterName: SAVED_FILTER }}
			/>,
		);

		await expect
			.element(region())
			.toMatchTextContent(summaryOf(`Filter: ${SAVED_FILTER}`, 'Status: Active;', 'Search: AAA;', '(18)'));
		await expect.element(region()).not.toMatchTextContent(`${SAVED_FILTER};`);
	});

	it('drops the `;` after the saved filter name when an Advanced query follows', async () => {
		await page.render(
			<SummaryBar defaultQuery={OR_QUERY} summaryProps={{ activeSavedFilterName: SAVED_FILTER }} />,
		);

		await expect
			.element(region())
			.toMatchTextContent(summaryOf(`Filter: ${SAVED_FILTER}`, 'Advanced query;'));
		await expect.element(region()).not.toMatchTextContent(`${SAVED_FILTER};`);
	});

	it('updates as the conditions change', async () => {
		const { rerender } = await page.render(<SummaryBar onConditionsChange={vi.fn()} conditions={[]} />);

		await expect.element(region()).toMatchTextContent('View: All;');

		await rerender(<SummaryBar onConditionsChange={vi.fn()} conditions={[STATUS]} />);

		await expect.element(region()).toMatchTextContent('Status: Active;');
		await expect.element(region()).not.toMatchTextContent('View: All');
	});
});

describe('DsFiltersBar.Summary typography', () => {
	it('renders the operator label in italics and the field label in bold', async () => {
		await page.render(<SummaryBar defaultConditions={[STATUS, LAST_RUN]} />);

		await expect.element(page.getByText('not equal', { exact: true })).toHaveStyle({ fontStyle: 'italic' });
		await expect.poll(fontWeightOf(label('Last run result'))).toBeGreaterThanOrEqual(600);
		await expect.poll(fontWeightOf(label('Status'))).toBeGreaterThanOrEqual(600);
	});

	it('renders the `View`, `Filter` and `Search` labels in bold', async () => {
		const { rerender } = await page.render(<SummaryBar onConditionsChange={vi.fn()} conditions={[]} />);

		await expect.poll(fontWeightOf(label('View'))).toBeGreaterThanOrEqual(600);

		await rerender(
			<SummaryBar
				onConditionsChange={vi.fn()}
				conditions={[SEARCH_AAA]}
				summaryProps={{ activeSavedFilterName: SAVED_FILTER }}
			/>,
		);

		await expect.poll(fontWeightOf(label('Filter'))).toBeGreaterThanOrEqual(600);
		await expect.poll(fontWeightOf(label('Search'))).toBeGreaterThanOrEqual(600);
	});
});

describe('DsFiltersBar.Summary count', () => {
	it('announces the count in a status region and hides the visible `(N)` from assistive tech', async () => {
		await page.render(<SummaryBar summaryProps={{ count: 18 }} />);

		await expect.element(page.getByRole('status')).toMatchTextContent(/^\s*18 results\s*$/);
		await expect.element(visibleCount(18)).toBeVisible();
		expect(visibleCount(18).element().closest('[aria-hidden="true"]')).not.toBeNull();
	});

	it('announces a new count when it changes', async () => {
		const { rerender } = await page.render(<SummaryBar summaryProps={{ count: 18 }} />);

		await rerender(<SummaryBar summaryProps={{ count: 4 }} />);

		await expect.element(page.getByRole('status')).toHaveTextContent('4 results');
		await expect.element(visibleCount(4)).toBeVisible();
	});

	it('renders no count and no status region when count is omitted', async () => {
		await page.render(<SummaryBar />);

		await expect.element(region()).toMatchTextContent('View: All;');
		await expect.element(region()).not.toMatchTextContent(/\(\d+\)/);
		await expect.element(page.getByRole('status')).not.toBeInTheDocument();
	});
});

describe('DsFiltersBar.Summary locale', () => {
	it('replaces the empty label, empty value and result count', async () => {
		await page.render(
			<SummaryBar
				summaryProps={{
					count: 18,
					locale: {
						emptyLabel: 'Showing',
						emptyValue: 'Everything',
						resultCount: (count) => `${String(count)} matches`,
					},
				}}
			/>,
		);

		await expect.element(region()).toMatchTextContent('Showing: Everything;');
		await expect.element(page.getByRole('status')).toHaveTextContent('18 matches');
		await expect.element(region()).not.toMatchTextContent('View');
	});

	it('replaces the saved filter and search labels', async () => {
		await page.render(
			<SummaryBar
				defaultConditions={[SEARCH_AAA]}
				summaryProps={{
					activeSavedFilterName: SAVED_FILTER,
					locale: { activeSavedFilter: 'Saved view', search: 'Text' },
				}}
			/>,
		);

		await expect.element(region()).toMatchTextContent(summaryOf(`Saved view: ${SAVED_FILTER}`, 'Text: AAA;'));
		await expect.element(region()).not.toMatchTextContent('Filter:');
		await expect.element(region()).not.toMatchTextContent('Search:');
	});

	it('replaces the advanced query label', async () => {
		await page.render(
			<SummaryBar defaultQuery={OR_QUERY} summaryProps={{ locale: { advancedQuery: 'Custom query' } }} />,
		);

		await expect.element(region()).toMatchTextContent('Custom query;');
		await expect.element(region()).not.toMatchTextContent('Advanced query');
	});
});

describe('DsFiltersBar.Summary expanded state', () => {
	it('renders nothing while expanded', async () => {
		await page.render(
			<DisclosureBar defaultExpanded defaultConditions={[STATUS]} summaryProps={{ count: 18 }} />,
		);

		await expect.element(hideButton()).toBeInTheDocument();
		await expect.element(region()).not.toMatchTextContent('Status: Active;');
		await expect.element(visibleCount(18)).not.toBeInTheDocument();
		await expect.element(page.getByRole('status')).not.toBeInTheDocument();
	});

	it('does not expand the bar when the summary text is clicked', async () => {
		const onExpandedChange = vi.fn();

		await page.render(<DisclosureBar onExpandedChange={onExpandedChange} summaryProps={{ count: 18 }} />);

		await label('View').click();

		expect(onExpandedChange).not.toHaveBeenCalled();
		await expect.element(showButton()).toHaveAttribute('aria-expanded', 'false');
		await expect.element(region()).toMatchTextContent('View: All;');
	});
});

describe('DsFiltersBar.Summary parts', () => {
	it('forwards ref, className and style to its element', async () => {
		const ref = createRef<HTMLDivElement>();

		await page.render(<SummaryBar summaryProps={{ ref, className: 'custom', style: { marginLeft: 3 } }} />);

		await expect.element(region()).toMatchTextContent('View: All;');

		const summary = ref.current;

		expect(summary).toBeInstanceOf(HTMLDivElement);
		expect(summary).toContainElement(label('View').element());
		expect(summary).toHaveClass('custom');
		expect(summary).toHaveStyle({ marginLeft: '3px' });
	});
});

describe('DsFiltersBar.Summary overflow', () => {
	const MANY_CONDITIONS: ReadonlyArray<DsFilterCondition> = [
		STATUS,
		LAST_RUN,
		INPUT_NAME,
		DURATION_RANGE,
		SEARCH_AAA,
		{ kind: 'search', id: 'search-2', text: 'a rather long search phrase that cannot fit' },
	];

	it('keeps the saved filter name and the count visible while the conditions truncate', async () => {
		await page.render(
			<div style={{ width: 200 }}>
				<DisclosureBar
					defaultConditions={MANY_CONDITIONS}
					summaryProps={{ count: 18, activeSavedFilterName: SAVED_FILTER }}
				/>
			</div>,
		);

		await expect.element(visibleCount(18)).toBeVisible();
		await expect.poll(() => isInside(visibleCount(18), region())).toBe(true);
		await expect.poll(() => isInside(page.getByText(new RegExp(SAVED_FILTER)), region())).toBe(true);

		const conditions = truncatingAncestorOf(label('Status'));

		expect(conditions).not.toBeNull();
		expect(conditions).toHaveStyle({ textOverflow: 'ellipsis', whiteSpace: 'nowrap' });
	});

	it('shows the full summary in a tooltip on hover while truncated', async () => {
		await page.render(
			<div style={{ width: 200 }}>
				<DisclosureBar defaultConditions={MANY_CONDITIONS} summaryProps={{ count: 18 }} />
			</div>,
		);

		await label('Status').hover();

		const tooltip = page.getByRole('tooltip');

		await expect.element(tooltip).toBeVisible();
		await expect
			.element(tooltip)
			.toMatchTextContent(
				summaryOf(
					'Status: Active;',
					'Last run result not equal: Success;',
					'Input › Name contains: WF456;',
					'Duration: 10 – 20;',
					'Search: AAA;',
					'Search: a rather long search phrase that cannot fit;',
				),
			);
	});

	it('shows no tooltip on hover while the summary fits', async () => {
		await page.render(
			<div style={{ width: 1200 }}>
				<DisclosureBar defaultConditions={[STATUS]} summaryProps={{ count: 18 }} />
			</div>,
		);

		await label('Status').hover();
		await wait(TOOLTIP_SETTLE_MS);

		await expect.element(page.getByRole('tooltip')).not.toBeInTheDocument();
	});
});
