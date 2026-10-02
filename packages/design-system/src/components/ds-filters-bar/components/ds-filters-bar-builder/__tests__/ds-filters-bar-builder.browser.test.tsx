import { describe, expect, it, vi } from 'vitest';
import { page, userEvent } from 'vitest/browser';
import { DsFiltersBar } from '../../../ds-filters-bar';
import type { DsFilterCondition, DsFilterField, DsFiltersBarView } from '../../../ds-filters-bar.types';
import type { DsFiltersBarBuilderLocale } from '../ds-filters-bar-builder.types';

const FIELDS: ReadonlyArray<DsFilterField> = [
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
					{ value: '~', label: 'Contains' },
					{ value: '=', label: 'Equal' },
				],
			},
		],
	},
	{ type: 'text', id: 'output', label: 'Output', operators: [{ value: '=', label: 'Equal' }] },
	{
		type: 'enum',
		id: 'status',
		label: 'Status',
		operators: [{ value: '=', label: 'equals' }],
		options: [
			{ value: 'active', label: 'Active' },
			{ value: 'pending', label: 'Pending' },
		],
	},
	{ type: 'number', id: 'parents', label: 'Parents', operators: [{ value: '>', label: 'greater than' }] },
	{
		type: 'date',
		id: 'lastRun',
		label: 'Last run',
		operators: [{ value: '=', label: 'is' }],
		presets: [{ value: 'today', label: 'Today' }],
	},
];

const dialog = () => page.getByRole('dialog', { name: 'Query builder' });
const choice = (name: string) => page.getByRole('button', { name, exact: true });
const field = () => page.getByRole('textbox', { name: 'Search field' });

interface HarnessProps {
	locale?: DsFiltersBarBuilderLocale;
	query?: string | null;
	onConditionsChange?: (conditions: ReadonlyArray<DsFilterCondition>) => void;
	onViewChange?: (view: DsFiltersBarView) => void;
}

const Harness = ({ locale, query = null, onConditionsChange, onViewChange }: HarnessProps) => (
	<DsFiltersBar.Root
		fields={FIELDS}
		defaultExpanded
		defaultView="builder"
		defaultQuery={query}
		onConditionsChange={onConditionsChange}
		onViewChange={onViewChange}
	>
		<DsFiltersBar.Toolbar>
			<DsFiltersBar.View value="builder">
				<DsFiltersBar.Builder suggestedFields={['input', 'status']} locale={locale} />
			</DsFiltersBar.View>
		</DsFiltersBar.Toolbar>
	</DsFiltersBar.Root>
);

describe('DsFiltersBar.Builder', () => {
	it('offers suggested fields and finds the others by search', async () => {
		await page.render(<Harness />);

		await expect.element(choice('Input')).toBeVisible();
		await expect.element(choice('Status')).toBeVisible();
		await expect.element(choice('Output')).not.toBeInTheDocument();

		await field().fill('out');

		await expect.element(choice('Output')).toBeVisible();
		await expect.element(choice('Input')).not.toBeInTheDocument();
	});

	it('saves a compound condition and starts another', async () => {
		const onConditionsChange = vi.fn();

		await page.render(<Harness onConditionsChange={onConditionsChange} />);

		await choice('Input').click();
		await choice('Name').click();
		await choice('Contains').click();
		await page.getByRole('textbox', { name: 'Value' }).fill('AAA');
		await choice('Save query').click();

		expect(onConditionsChange).toHaveBeenCalledOnce();
		expect(onConditionsChange.mock.calls[0]?.[0]).toEqual([
			expect.objectContaining({
				kind: 'field',
				field: 'input',
				subfield: 'name',
				operator: '~',
				value: 'AAA',
			}),
		]);
		await expect.element(choice('Input')).toBeVisible();
		await expect.element(choice('Save query')).toBeDisabled();
	});

	it('saves an enum option without asking for an operator', async () => {
		const onConditionsChange = vi.fn();

		await page.render(<Harness onConditionsChange={onConditionsChange} />);

		await choice('Status').click();

		await expect.element(choice('equals')).not.toBeInTheDocument();
		await expect.element(page.getByText('Select a value')).toBeVisible();

		await choice('Active').click();
		await choice('Save query').click();

		expect(onConditionsChange.mock.calls[0]?.[0]).toEqual([
			expect.objectContaining({ field: 'status', operator: '=', value: ['active'] }),
		]);
	});

	it('keeps save disabled until a number is complete, including when submitted with Enter', async () => {
		const onConditionsChange = vi.fn();

		await page.render(<Harness onConditionsChange={onConditionsChange} />);

		await field().fill('parents');
		await userEvent.keyboard('{Enter}');
		await choice('greater than').click();

		const value = page.getByRole('textbox', { name: 'Value' });

		await value.fill('12.');
		await expect.element(choice('Save query')).toBeDisabled();

		await value.fill('3');
		await userEvent.keyboard('{Enter}');

		expect(onConditionsChange.mock.calls[0]?.[0]).toEqual([
			expect.objectContaining({ field: 'parents', operator: '>', value: 3 }),
		]);
	});

	it('saves a date preset by its value', async () => {
		const onConditionsChange = vi.fn();

		await page.render(<Harness onConditionsChange={onConditionsChange} />);

		await field().fill('last');
		await choice('Last run').click();
		await choice('is').click();
		await choice('Today').click();

		await expect.element(page.getByRole('textbox', { name: 'Value' })).toHaveValue('Today');
		await choice('Save query').click();

		expect(onConditionsChange.mock.calls[0]?.[0]).toEqual([
			expect.objectContaining({ field: 'lastRun', operator: '=', value: 'today' }),
		]);
	});

	it('clears the selection and closes back to the filters view', async () => {
		const onViewChange = vi.fn();

		await page.render(<Harness onViewChange={onViewChange} />);

		await choice('Input').click();
		await page.getByRole('button', { name: 'Clear selection' }).click();

		await expect.element(choice('Name')).not.toBeInTheDocument();
		await expect.element(choice('Input')).toBeVisible();

		await choice('Close').click();

		expect(onViewChange).toHaveBeenCalledWith('filters');
		await expect.element(dialog()).not.toBeInTheDocument();
	});

	it('uses locale strings', async () => {
		await page.render(
			<Harness locale={{ title: 'Build a condition', save: 'Add condition', close: 'Dismiss' }} />,
		);

		await expect.element(page.getByRole('dialog', { name: 'Build a condition' })).toBeVisible();
		await expect.element(choice('Add condition')).toBeVisible();
		await expect.element(choice('Dismiss')).toBeVisible();
	});

	it('stays closed while the view is locked', async () => {
		await page.render(<Harness query='status = "Active"' />);

		await expect.element(page.getByRole('dialog')).not.toBeInTheDocument();
	});
});
