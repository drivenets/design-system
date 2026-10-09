import { describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';
import { DsFiltersBar } from '../index';
import type { DsFilterField, DsFilterPin, DsFiltersBarProps } from '../ds-filters-bar.types';

const FIELDS: ReadonlyArray<DsFilterField> = [
	{
		type: 'enum',
		id: 'status',
		label: 'Status',
		operators: [{ value: '=', label: 'equals' }],
		options: [
			{ value: 'active', label: 'Active' },
			{ value: 'pending', label: 'Pending' },
			{ value: 'failed', label: 'Failed' },
		],
	},
	{
		type: 'date',
		id: 'lastRun',
		label: 'Last run',
		operators: [{ value: '=', label: 'is' }],
		presets: [
			{ value: 'today', label: 'Today' },
			{ value: 'last7Days', label: 'Last 7 days' },
		],
	},
];

const ACTIVE: DsFilterPin = { field: 'status', value: 'active' };
const PENDING: DsFilterPin = { field: 'status', value: 'pending' };
const TODAY: DsFilterPin = { field: 'lastRun', value: 'today' };

const PinnedBar = (props: DsFiltersBarProps) => <DsFiltersBar fields={FIELDS} {...props} />;

const group = (name: string) => page.getByRole('group', { name });
// A toggle's name is its label, followed by its count when there is one.
const toggle = (label: string) => page.getByRole('button', { name: new RegExp(`^${label}\\s*\\d*$`) });
const pinnedLabel = (text = 'Pinned') => page.getByText(text, { exact: true });

const labelsIn = (name: string) =>
	group(name)
		.getByRole('button')
		.elements()
		.map((element) => element.firstChild?.textContent);

describe('DsFiltersBar pinned row', () => {
	it('groups the pins by field in fields order, each toggle in pins order and named by its option or preset', async () => {
		await page.render(<PinnedBar defaultPins={[TODAY, PENDING, { field: 'gone', value: 'x' }, ACTIVE]} />);

		const groups = page.getByRole('group').elements();

		// Each group's first node is its label; the toggles follow it.
		expect(groups.map((element) => element.firstChild?.textContent)).toEqual(['Status', 'Last run']);
		expect(labelsIn('Status')).toEqual(['Pending', 'Active']);
		expect(labelsIn('Last run')).toEqual(['Today']);
	});

	it('renders no row while there are no pins', async () => {
		await page.render(<PinnedBar />);

		await expect.element(pinnedLabel()).not.toBeInTheDocument();
		await expect.element(page.getByRole('group')).not.toBeInTheDocument();
	});

	it('renders no row while every pin names a field missing from fields', async () => {
		await page.render(<PinnedBar defaultPins={[{ field: 'gone', value: 'x' }]} />);

		await expect.element(pinnedLabel()).not.toBeInTheDocument();
	});

	it('switches a toggle on and off and reports the switched-on pins', async () => {
		const onActiveTogglesChange = vi.fn();

		await page.render(
			<PinnedBar
				defaultPins={[ACTIVE, PENDING]}
				defaultActiveToggles={[PENDING]}
				onActiveTogglesChange={onActiveTogglesChange}
			/>,
		);

		await expect.element(toggle('Pending')).toHaveAttribute('aria-pressed', 'true');
		await expect.element(toggle('Active')).toHaveAttribute('aria-pressed', 'false');

		await toggle('Active').click();

		expect(onActiveTogglesChange).toHaveBeenLastCalledWith([PENDING, ACTIVE]);
		await expect.element(toggle('Active')).toHaveAttribute('aria-pressed', 'true');

		await toggle('Pending').click();

		expect(onActiveTogglesChange).toHaveBeenLastCalledWith([ACTIVE]);
		await expect.element(toggle('Pending')).toHaveAttribute('aria-pressed', 'false');
	});

	it('drops a switched-on toggle whose field is missing from fields', async () => {
		const onActiveTogglesChange = vi.fn();
		const gone: DsFilterPin = { field: 'gone', value: 'x' };

		await page.render(
			<PinnedBar
				defaultPins={[gone, ACTIVE]}
				defaultActiveToggles={[gone]}
				onActiveTogglesChange={onActiveTogglesChange}
			/>,
		);

		await toggle('Active').click();

		expect(onActiveTogglesChange).toHaveBeenCalledExactlyOnceWith([ACTIVE]);
	});

	it('reports the change and keeps controlled activeToggles', async () => {
		const onActiveTogglesChange = vi.fn();

		await page.render(
			<PinnedBar pins={[ACTIVE]} activeToggles={[]} onActiveTogglesChange={onActiveTogglesChange} />,
		);

		await toggle('Active').click();

		expect(onActiveTogglesChange).toHaveBeenCalledExactlyOnceWith([ACTIVE]);
		await expect.element(toggle('Active')).toHaveAttribute('aria-pressed', 'false');
	});

	it('switches off an option that is unpinned from the filters dialog', async () => {
		const onPinsChange = vi.fn();
		const onActiveTogglesChange = vi.fn();

		await page.render(
			<PinnedBar
				defaultExpanded
				defaultPins={[ACTIVE, PENDING]}
				defaultActiveToggles={[ACTIVE, PENDING]}
				onPinsChange={onPinsChange}
				onActiveTogglesChange={onActiveTogglesChange}
			/>,
		);

		await page.getByRole('button', { name: 'Add filter', exact: true }).click();
		await page.getByRole('button', { name: 'Pin Active', exact: true }).click();
		await page.getByRole('button', { name: 'Save filters', exact: true }).click();

		expect(onPinsChange).toHaveBeenCalledExactlyOnceWith([PENDING]);
		expect(onActiveTogglesChange).toHaveBeenCalledExactlyOnceWith([PENDING]);
		await expect.element(toggle('Active')).not.toBeInTheDocument();
		await expect.element(toggle('Pending')).toHaveAttribute('aria-pressed', 'true');
	});
});

describe('DsFiltersBar pinned counts', () => {
	it('shows the count getPinCount gives each pin', async () => {
		const getPinCount = vi.fn((pin: DsFilterPin) => (pin.value === 'active' ? 12 : 3));

		await page.render(<PinnedBar defaultPins={[ACTIVE, TODAY]} getPinCount={getPinCount} />);

		await expect.element(toggle('Active').getByText('12', { exact: true })).toBeVisible();
		await expect.element(toggle('Today').getByText('3', { exact: true })).toBeVisible();
		expect(getPinCount).toHaveBeenCalledWith(ACTIVE);
		expect(getPinCount).toHaveBeenCalledWith(TODAY);
	});

	it('shows no counts and never disables a toggle without getPinCount', async () => {
		const onActiveTogglesChange = vi.fn();

		await page.render(<PinnedBar defaultPins={[ACTIVE]} onActiveTogglesChange={onActiveTogglesChange} />);

		await expect.element(toggle('Active')).toBeEnabled();
		expect(toggle('Active').element().textContent).toBe('Active');

		await toggle('Active').click();

		expect(onActiveTogglesChange).toHaveBeenCalledExactlyOnceWith([ACTIVE]);
	});

	it('disables a switched-off toggle whose count is 0', async () => {
		const onActiveTogglesChange = vi.fn();

		await page.render(
			<PinnedBar
				defaultPins={[PENDING]}
				getPinCount={() => 0}
				onActiveTogglesChange={onActiveTogglesChange}
			/>,
		);

		await expect.element(toggle('Pending')).toBeDisabled();
		await toggle('Pending').click({ force: true });

		expect(onActiveTogglesChange).not.toHaveBeenCalled();
	});

	it('keeps a switched-on zero-count toggle enabled so it can be turned off', async () => {
		const onActiveTogglesChange = vi.fn();

		await page.render(
			<PinnedBar
				defaultPins={[PENDING]}
				defaultActiveToggles={[PENDING]}
				getPinCount={() => 0}
				onActiveTogglesChange={onActiveTogglesChange}
			/>,
		);

		await toggle('Pending').click();

		expect(onActiveTogglesChange).toHaveBeenCalledExactlyOnceWith([]);
	});
});

describe('DsFiltersBar pinned locale', () => {
	it('labels the row by locale.pinned', async () => {
		await page.render(<PinnedBar defaultPins={[ACTIVE]} locale={{ pinned: { label: 'Shortcuts' } }} />);

		await expect.element(pinnedLabel('Shortcuts')).toBeVisible();
		await expect.element(pinnedLabel()).not.toBeInTheDocument();
	});
});
