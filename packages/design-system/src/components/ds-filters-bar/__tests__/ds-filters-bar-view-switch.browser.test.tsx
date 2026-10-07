import { describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';
import { DsFiltersBar } from '../index';
import type { DsFilterDocument, DsFilterField, DsFiltersBarProps } from '../ds-filters-bar.types';

const FIELDS: ReadonlyArray<DsFilterField> = [
	{
		type: 'enum',
		id: 'status',
		label: 'Status',
		operators: [{ value: '=', label: 'equals' }],
		options: [
			{ value: 'A', label: 'A' },
			{ value: 'B', label: 'B' },
		],
	},
];

const OR_QUERY = 'status = "A" OR status = "B"';
const withQuery: DsFilterDocument = { conditions: [], query: OR_QUERY };
const LOCKED_REASON = 'Clear the advanced query to switch views';

const SwitchBar = (props: DsFiltersBarProps) => <DsFiltersBar fields={FIELDS} defaultExpanded {...props} />;

const viewSwitch = (name = 'Filter view') => page.getByRole('radiogroup', { name });
const viewItem = (name: string) => page.getByRole('radio', { name, exact: true });
const addFilterButton = () => page.getByRole('button', { name: 'Add filter', exact: true });
const queryField = () => page.getByRole('textbox', { name: 'Advanced query' });
const clearAll = () => page.getByRole('button', { name: 'Clear all', exact: true });
const builderDialog = () => page.getByRole('dialog', { name: 'Query builder' });

// Ark renders the radio as a visually hidden input outside the viewport, so fire a native click
// on the element directly instead of a Playwright pointer click.
const selectView = async (name: string) => {
	await expect.element(viewItem(name)).toBeInTheDocument();
	(viewItem(name).element() as HTMLElement).click();
};

// The tooltip trigger wraps the radio's label.
const hoverItem = (name: string) =>
	page.elementLocator(viewItem(name).element().closest('label') as HTMLElement).hover();

describe('DsFiltersBar view switch', () => {
	it('renders one item per view, named by the default locale, with the shown view checked', async () => {
		await page.render(<SwitchBar defaultView="builder" />);

		await expect.element(viewSwitch()).toBeVisible();
		expect(page.getByRole('radio').elements()).toHaveLength(3);
		await expect.element(viewItem('Filters')).not.toBeChecked();
		await expect.element(viewItem('Query builder')).toBeChecked();
		await expect.element(viewItem('Advanced query')).not.toBeChecked();
	});

	it('shows the selected view and reports it', async () => {
		const onViewChange = vi.fn();

		await page.render(<SwitchBar onViewChange={onViewChange} />);

		await selectView('Advanced query');

		await expect.element(queryField()).toBeVisible();
		await expect.element(viewItem('Advanced query')).toBeChecked();
		expect(onViewChange).toHaveBeenCalledExactlyOnceWith('advanced');
	});

	it('disables the filters and builder items while an Advanced query is the source', async () => {
		const onViewChange = vi.fn();

		await page.render(<SwitchBar defaultView="builder" onViewChange={onViewChange} />);

		await selectView('Advanced query');
		await queryField().fill(OR_QUERY);

		await expect.element(viewItem('Filters')).toBeDisabled();
		await expect.element(viewItem('Query builder')).toBeDisabled();
		await expect.element(viewItem('Advanced query')).toBeEnabled();
		await expect.element(viewItem('Advanced query')).toBeChecked();

		await selectView('Filters');

		await expect.element(queryField()).toBeVisible();
		expect(onViewChange).toHaveBeenCalledExactlyOnceWith('advanced');

		await clearAll().click();

		await expect.element(viewItem('Filters')).toBeEnabled();
		await expect.element(viewItem('Advanced query')).toBeChecked();
	});

	it('explains a locked item with the lockedView tooltip', async () => {
		await page.render(<SwitchBar defaultValue={withQuery} />);

		await hoverItem('Filters');

		await expect.element(page.getByRole('tooltip', { name: LOCKED_REASON })).toBeVisible();
	});

	it('describes a locked item by the lockedView reason until the query is cleared', async () => {
		await page.render(<SwitchBar defaultValue={withQuery} />);

		await expect.element(viewItem('Filters')).toHaveAccessibleDescription(LOCKED_REASON);
		await expect.element(viewItem('Query builder')).toHaveAccessibleDescription(LOCKED_REASON);
		await expect.element(viewItem('Advanced query')).not.toHaveAccessibleDescription();

		await clearAll().click();

		await expect.element(viewItem('Filters')).not.toHaveAccessibleDescription();
		await expect.element(viewItem('Query builder')).not.toHaveAccessibleDescription();
	});

	it('takes names and the tooltip from locale.viewSwitch, keeping defaults for the rest', async () => {
		await page.render(
			<SwitchBar
				defaultValue={withQuery}
				locale={{
					viewSwitch: { label: 'Mode', views: { advanced: 'Code' }, lockedView: 'Locked by the query' },
				}}
			/>,
		);

		await expect.element(viewSwitch('Mode')).toBeVisible();
		await expect.element(viewItem('Code')).toBeChecked();
		await expect.element(viewItem('Filters')).toBeDisabled();

		await hoverItem('Query builder');

		await expect.element(page.getByRole('tooltip', { name: 'Locked by the query' })).toBeVisible();
		await expect.element(viewItem('Filters')).toHaveAccessibleDescription('Locked by the query');
	});
});

describe('DsFiltersBar views', () => {
	it('offers only the listed views, in Figma order', async () => {
		await page.render(<SwitchBar views={['advanced', 'filters']} />);

		expect(
			page
				.getByRole('radio')
				.elements()
				.map((element) => element.getAttribute('aria-label')),
		).toEqual(['Filters', 'Advanced query']);
		await expect.element(viewItem('Query builder')).not.toBeInTheDocument();
	});

	it('hides the switch and shows the only listed view', async () => {
		await page.render(<SwitchBar views={['builder']} />);

		await expect.element(viewSwitch()).not.toBeInTheDocument();

		await addFilterButton().click();

		await expect.element(builderDialog()).toBeVisible();
	});

	it('falls back to the first listed view when the requested one is not listed', async () => {
		await page.render(<SwitchBar views={['filters', 'advanced']} defaultView="builder" />);

		await expect.element(viewItem('Filters')).toBeChecked();
		await expect.element(addFilterButton()).toBeVisible();
		await expect.element(queryField()).not.toBeInTheDocument();
	});

	it('shows the advanced view while a query is set, even when not listed', async () => {
		await page.render(<SwitchBar views={['filters']} defaultValue={withQuery} />);

		await expect.element(viewSwitch()).not.toBeInTheDocument();
		await expect.element(queryField()).toHaveValue(OR_QUERY);

		await clearAll().click();

		await expect.element(queryField()).not.toBeInTheDocument();
		await expect.element(addFilterButton()).toBeVisible();
	});
});
