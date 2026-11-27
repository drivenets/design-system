import { describe, expect, it, vi } from 'vitest';
import { page, userEvent } from 'vitest/browser';
import { DsFiltersBar } from '../index';
import type {
	DsFilterCondition,
	DsFilterDocument,
	DsFilterField,
	DsFilterOption,
	DsFiltersBarProps,
} from '../ds-filters-bar.types';

interface PendingRequest {
	search: string;
	draft: DsFilterDocument;
	signal: AbortSignal;
	resolve: (options: ReadonlyArray<DsFilterOption>) => void;
	reject: (error: unknown) => void;
}

/**
 * A server whose every request waits until the test settles it
 */
const createServer = () => {
	const requests: PendingRequest[] = [];
	const loadOptions = vi.fn(
		(search: string, draft: DsFilterDocument, signal: AbortSignal) =>
			new Promise<ReadonlyArray<DsFilterOption>>((resolve, reject) => {
				requests.push({ search, draft, signal, resolve, reject });
			}),
	);

	const request = async (index: number) => {
		await expect.poll(() => requests.length).toBeGreaterThan(index);

		return requests[index] as PendingRequest;
	};

	return { requests, loadOptions, request };
};

const ALICE: DsFilterOption = { value: 'u-1', label: 'Alice Moss', data: { instances: ['i-10', 'i-11'] } };
const BRUNO: DsFilterOption = { value: 'u-2', label: 'Bruno Hale', data: { instances: ['i-20'] } };
const CARLA: DsFilterOption = { value: 'u-3', label: 'Carla Reed', data: { instances: [] } };

const TEAM_FIELD: DsFilterField = {
	type: 'enum',
	id: 'team',
	label: 'Team',
	options: [
		{ value: 'core', label: 'Core' },
		{ value: 'edge', label: 'Edge' },
	],
};

const fieldsWith = (loadOptions: NonNullable<Extract<DsFilterField, { type: 'enum' }>['loadOptions']>) => [
	TEAM_FIELD,
	{ type: 'enum', id: 'editors', label: 'Editors', loadOptions } satisfies DsFilterField,
];

const conditions = (...items: DsFilterCondition[]): DsFilterDocument => ({ conditions: items, query: null });

const filtersDialog = () => page.getByRole('dialog', { name: 'Filters' });
const builderDialog = () => page.getByRole('dialog', { name: 'Query builder' });
const fieldTab = (label: string) => page.getByRole('tab', { name: new RegExp(`^${label}(\\s|$)`) });
const optionCheckbox = (name: string) => page.getByRole('checkbox', { name, exact: true });
const optionSearch = () => page.getByRole('textbox', { name: 'Search Editors' });
const loadStatus = () => filtersDialog().getByRole('status');
const button = (name: string) => page.getByRole('button', { name, exact: true });
const chip = (label: string) => button(label);

const openEditorsTab = async () => {
	await button('Add filter').click();
	await expect.element(filtersDialog()).toBeVisible();
	await fieldTab('Editors').click();
};

const Bar = (props: DsFiltersBarProps) => <DsFiltersBar defaultExpanded {...props} />;

describe('DsFiltersBar loadOptions', () => {
	describe('in the filters dialog', () => {
		it('shows loading until the options arrive, without a search', async () => {
			const server = createServer();
			await page.render(<Bar fields={fieldsWith(server.loadOptions)} />);

			await openEditorsTab();

			const first = await server.request(0);

			expect(first.search).toBe('');
			await expect.element(loadStatus()).toHaveTextContent('Loading…');

			first.resolve([ALICE, BRUNO]);

			await expect.element(optionCheckbox('Alice Moss')).toBeVisible();
			await expect.element(optionCheckbox('Bruno Hale')).toBeVisible();
			await expect.element(loadStatus()).not.toHaveTextContent('Loading…');
		});

		it('shows the empty state when the result has no options', async () => {
			const server = createServer();
			await page.render(<Bar fields={fieldsWith(server.loadOptions)} />);

			await openEditorsTab();
			(await server.request(0)).resolve([]);

			await expect.element(loadStatus()).toHaveTextContent('No results');
		});

		it('shows the error and loads again from the retry button', async () => {
			const server = createServer();
			await page.render(<Bar fields={fieldsWith(server.loadOptions)} />);

			await openEditorsTab();
			(await server.request(0)).reject(new Error('Offline'));

			await expect.element(page.getByRole('alert').getByText('Could not load the options')).toBeVisible();

			await button('Try again').click();

			const retried = await server.request(1);

			expect(retried.search).toBe('');
			retried.resolve([ALICE]);

			await expect.element(optionCheckbox('Alice Moss')).toBeVisible();
			await expect.element(page.getByRole('alert')).not.toBeInTheDocument();
		});

		it('drops the previous result when a search fails, keeping the checked options', async () => {
			const server = createServer();
			await page.render(<Bar fields={fieldsWith(server.loadOptions)} />);

			await openEditorsTab();
			(await server.request(0)).resolve([ALICE, BRUNO]);
			await optionCheckbox('Alice Moss').click();

			await optionSearch().fill('carla');
			(await server.request(1)).reject(new Error('Offline'));

			await expect.element(page.getByRole('alert').getByText('Could not load the options')).toBeVisible();
			await expect.element(optionCheckbox('Alice Moss')).toBeChecked();
			await expect.element(optionCheckbox('Bruno Hale')).not.toBeInTheDocument();
		});

		it('sends the search once typing pauses, not on every key', async () => {
			const server = createServer();
			await page.render(<Bar fields={fieldsWith(server.loadOptions)} />);

			await openEditorsTab();
			(await server.request(0)).resolve([ALICE, BRUNO, CARLA]);
			await userEvent.type(optionSearch(), 'bru');

			const searched = await server.request(1);

			expect(searched.search).toBe('bru');
			searched.resolve([BRUNO]);

			await expect.element(optionCheckbox('Bruno Hale')).toBeVisible();
			await expect.element(optionCheckbox('Alice Moss')).not.toBeInTheDocument();
			expect(server.requests.map((request) => request.search)).toEqual(['', 'bru']);
		});

		it('aborts an older request and ignores its late response', async () => {
			const server = createServer();
			await page.render(<Bar fields={fieldsWith(server.loadOptions)} />);

			await openEditorsTab();
			(await server.request(0)).resolve([ALICE, BRUNO, CARLA]);

			await optionSearch().fill('a');
			const older = await server.request(1);

			await optionSearch().fill('car');
			const newer = await server.request(2);

			expect(older.signal.aborted).toBe(true);
			expect(newer.signal.aborted).toBe(false);

			newer.resolve([CARLA]);
			await expect.element(optionCheckbox('Carla Reed')).toBeVisible();

			older.resolve([ALICE]);

			await expect.element(optionCheckbox('Alice Moss')).not.toBeInTheDocument();
			await expect.element(optionCheckbox('Carla Reed')).toBeVisible();
		});

		it('keeps a checked option listed and checked when the latest result leaves it out', async () => {
			const server = createServer();
			const onValueChange = vi.fn();
			await page.render(<Bar fields={fieldsWith(server.loadOptions)} onValueChange={onValueChange} />);

			await openEditorsTab();
			(await server.request(0)).resolve([ALICE, BRUNO]);
			await optionCheckbox('Alice Moss').click();

			await optionSearch().fill('carla');
			(await server.request(1)).resolve([CARLA]);

			await expect.element(optionCheckbox('Carla Reed')).toBeVisible();
			await expect.element(optionCheckbox('Alice Moss')).toBeChecked();
			await expect.element(optionCheckbox('Bruno Hale')).not.toBeInTheDocument();

			await optionCheckbox('Carla Reed').click();
			await button('Save filters').click();

			expect(onValueChange).toHaveBeenCalledExactlyOnceWith(
				conditions({
					kind: 'field',
					id: expect.any(String) as string,
					field: 'editors',
					operator: '=',
					value: ['u-1', 'u-3'],
					options: [ALICE, CARLA],
				}),
			);
		});

		it('passes the open draft, so a field can depend on another one before Save', async () => {
			const server = createServer();
			await page.render(<Bar fields={fieldsWith(server.loadOptions)} />);

			await button('Add filter').click();
			await optionCheckbox('Core').click();
			await fieldTab('Editors').click();

			const { draft } = await server.request(0);

			expect(draft.conditions).toEqual([
				expect.objectContaining({ field: 'team', operator: '=', value: ['core'] }),
			]);
		});

		it('labels a chip and its saved filter from the condition snapshot without a load', async () => {
			const server = createServer();
			const saved = conditions({
				kind: 'field',
				id: 'editors-1',
				field: 'editors',
				operator: 'IN',
				value: ['u-1', 'u-2'],
				options: [ALICE, BRUNO],
			});

			await page.render(
				<Bar
					fields={fieldsWith(server.loadOptions)}
					savedFilters={{
						items: [{ id: 'mine', name: 'My editors', document: saved }],
						defaultActiveId: 'mine',
						onSaveAs: vi.fn(),
						onUpdate: vi.fn(),
						onRename: vi.fn(),
						onDelete: vi.fn(),
					}}
				/>,
			);

			await expect.element(chip('Editors').getByText('Alice Moss, Bruno Hale')).toBeVisible();
			expect(server.loadOptions).not.toHaveBeenCalled();
		});

		it('does not load before the dialog opens, even as the first tab, and loads again on reopen', async () => {
			const server = createServer();
			const editorsFirst = [...fieldsWith(server.loadOptions)].reverse();
			await page.render(<Bar fields={editorsFirst} />);

			await expect.element(button('Add filter')).toBeVisible();
			expect(server.loadOptions).not.toHaveBeenCalled();

			await button('Add filter').click();
			(await server.request(0)).resolve([ALICE]);
			await expect.element(optionCheckbox('Alice Moss')).toBeVisible();

			await button('Close').click();
			await button('Add filter').click();

			const reopened = await server.request(1);

			await expect.element(loadStatus()).toHaveTextContent('Loading…');
			reopened.resolve([BRUNO]);
			await expect.element(optionCheckbox('Bruno Hale')).toBeVisible();
		});

		it('shows the error when loadOptions throws instead of rejecting', async () => {
			const loadOptions = vi.fn(() => {
				throw new Error('Bad search');
			});
			await page.render(<Bar fields={fieldsWith(loadOptions)} />);

			await openEditorsTab();

			await expect.element(page.getByRole('alert').getByText('Could not load the options')).toBeVisible();
		});

		it('keeps a checked value without a snapshot listed, labeled from the field options', async () => {
			const server = createServer();
			const fields = fieldsWith(server.loadOptions).map((field) =>
				field.id === 'editors' ? { ...field, options: [ALICE] } : field,
			);
			await page.render(
				<Bar
					fields={fields}
					defaultValue={conditions({
						kind: 'field',
						id: 'editors-1',
						field: 'editors',
						operator: 'IN',
						value: ['u-1', 'u-9'],
					})}
				/>,
			);

			await expect.element(chip('Editors').getByText('Alice Moss, u-9')).toBeVisible();

			await chip('Editors').click();
			(await server.request(0)).resolve([BRUNO]);

			await expect.element(optionCheckbox('Bruno Hale')).toBeVisible();
			await expect.element(optionCheckbox('Alice Moss')).toBeChecked();
			await expect.element(optionCheckbox('u-9')).toBeChecked();
		});

		it('leaves the field’s own conditions out of the draft', async () => {
			const server = createServer();
			await page.render(
				<Bar
					fields={fieldsWith(server.loadOptions)}
					defaultValue={conditions({
						kind: 'field',
						id: 'editors-1',
						field: 'editors',
						operator: 'IN',
						value: ['u-1'],
						options: [ALICE],
					})}
				/>,
			);

			await openEditorsTab();
			(await server.request(0)).resolve([ALICE, BRUNO]);
			await optionCheckbox('Bruno Hale').click();
			await optionSearch().fill('c');

			const { draft } = await server.request(1);

			expect(draft.conditions).toEqual([]);
		});

		it('hides the pin toggle on loaded options', async () => {
			const server = createServer();
			await page.render(<Bar fields={fieldsWith(server.loadOptions)} />);

			await openEditorsTab();
			(await server.request(0)).resolve([ALICE]);

			await expect.element(optionCheckbox('Alice Moss')).toBeVisible();
			await expect.element(button('Pin Alice Moss')).not.toBeInTheDocument();
		});
	});

	describe('in the query builder', () => {
		it('lists the loaded options and saves the chosen one with its snapshot', async () => {
			const server = createServer();
			const onValueChange = vi.fn();
			await page.render(
				<Bar fields={fieldsWith(server.loadOptions)} defaultView="builder" onValueChange={onValueChange} />,
			);

			await button('Add filter').click();
			await expect.element(builderDialog()).toBeVisible();
			await button('Editors').click();

			const first = await server.request(0);

			await expect.element(builderDialog().getByRole('status')).toHaveTextContent('Loading…');
			first.resolve([ALICE, BRUNO]);

			await button('Bruno Hale').click();
			await button('Save query').click();

			expect(onValueChange).toHaveBeenCalledExactlyOnceWith(
				conditions({
					kind: 'field',
					id: expect.any(String) as string,
					field: 'editors',
					operator: '=',
					value: ['u-2'],
					options: [BRUNO],
				}),
			);
		});

		it('does not pick the only choice with Enter while a new search loads', async () => {
			const server = createServer();
			const onValueChange = vi.fn();
			await page.render(
				<Bar fields={fieldsWith(server.loadOptions)} defaultView="builder" onValueChange={onValueChange} />,
			);

			await button('Add filter').click();
			await button('Editors').click();
			(await server.request(0)).resolve([ALICE]);
			await expect.element(button('Alice Moss')).toBeVisible();

			await page.getByRole('textbox', { name: 'Search value' }).fill('zz');
			await userEvent.keyboard('{Enter}');

			await expect.element(button('Save query')).toBeDisabled();
			expect(onValueChange).not.toHaveBeenCalled();
		});

		it('shows the error and loads again from the retry button', async () => {
			const server = createServer();
			await page.render(<Bar fields={fieldsWith(server.loadOptions)} defaultView="builder" />);

			await button('Add filter').click();
			await button('Editors').click();
			(await server.request(0)).reject(new Error('Offline'));

			await expect
				.element(builderDialog().getByRole('alert').getByText('Could not load the options'))
				.toBeVisible();

			await button('Try again').click();
			(await server.request(1)).resolve([CARLA]);

			await expect.element(button('Carla Reed')).toBeVisible();
		});
	});
});
