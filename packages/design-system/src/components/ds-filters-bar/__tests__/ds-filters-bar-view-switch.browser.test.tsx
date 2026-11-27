import { describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';
import { DsFiltersBar } from '../index';
import type { DsFilterField, DsFiltersBarProps } from '../ds-filters-bar.types';

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

const SwitchBar = (props: DsFiltersBarProps) => <DsFiltersBar fields={FIELDS} defaultExpanded {...props} />;

const viewSwitch = (name = 'Filter view') => page.getByRole('radiogroup', { name });
const viewItem = (name: string) => page.getByRole('radio', { name, exact: true });
const addFilterButton = () => page.getByRole('button', { name: 'Add filter', exact: true });
const builderDialog = () => page.getByRole('dialog', { name: 'Query builder' });
const filtersDialog = () => page.getByRole('dialog', { name: 'Filters' });

// Ark renders the radio as a visually hidden input outside the viewport, so fire a native click
// on the element directly instead of a Playwright pointer click.
const selectView = async (name: string) => {
	await expect.element(viewItem(name)).toBeInTheDocument();
	(viewItem(name).element() as HTMLElement).click();
};

const itemNames = () =>
	page
		.getByRole('radio')
		.elements()
		.map((element) => element.getAttribute('aria-label'));

describe('DsFiltersBar view switch', () => {
	it('offers the filters and builder views, named by the default locale, with the shown view checked', async () => {
		await page.render(<SwitchBar defaultView="builder" />);

		await expect.element(viewSwitch()).toBeVisible();
		expect(itemNames()).toEqual(['Filters', 'Query builder']);
		await expect.element(viewItem('Filters')).not.toBeChecked();
		await expect.element(viewItem('Query builder')).toBeChecked();
	});

	it('shows the selected view and reports it', async () => {
		const onViewChange = vi.fn();

		await page.render(<SwitchBar onViewChange={onViewChange} />);

		await selectView('Query builder');

		await expect.element(viewItem('Query builder')).toBeChecked();
		expect(onViewChange).toHaveBeenCalledExactlyOnceWith('builder');

		await addFilterButton().click();

		await expect.element(builderDialog()).toBeVisible();
	});

	it('takes names from locale.viewSwitch, keeping defaults for the rest', async () => {
		await page.render(
			<SwitchBar locale={{ viewSwitch: { label: 'Mode', views: { builder: 'Builder' } } }} />,
		);

		await expect.element(viewSwitch('Mode')).toBeVisible();
		expect(itemNames()).toEqual(['Filters', 'Builder']);
	});
});

describe('DsFiltersBar views', () => {
	it('offers the listed views in Figma order', async () => {
		await page.render(<SwitchBar views={['builder', 'filters']} />);

		expect(itemNames()).toEqual(['Filters', 'Query builder']);
	});

	it('hides the switch and shows the only listed view', async () => {
		await page.render(<SwitchBar views={['builder']} />);

		await expect.element(viewSwitch()).not.toBeInTheDocument();

		await addFilterButton().click();

		await expect.element(builderDialog()).toBeVisible();
	});

	it('falls back to the first listed view when the requested one is not listed', async () => {
		await page.render(<SwitchBar views={['filters']} defaultView="builder" />);

		await expect.element(viewSwitch()).not.toBeInTheDocument();

		await addFilterButton().click();

		await expect.element(filtersDialog()).toBeVisible();
		await expect.element(builderDialog()).not.toBeInTheDocument();
	});
});
