import { describe, expect, it, vi } from 'vitest';
import { page, userEvent, type Locator } from 'vitest/browser';
import { DsFiltersBar } from '../index';
import type { DsFilterField, DsFiltersBarProps } from '../ds-filters-bar.types';

const FIELDS: ReadonlyArray<DsFilterField> = [
	{
		type: 'enum',
		id: 'status',
		label: 'Status',
		operators: [{ value: '=', label: 'equals' }],
		options: [{ value: 'active', label: 'Active' }],
	},
];

const DisclosureBar = (props: DsFiltersBarProps) => (
	<DsFiltersBar fields={FIELDS} resultCount={18} {...props} />
);

const region = () => page.getByRole('region', { name: 'Filters' });
const showButton = (name = 'Show filters') => page.getByRole('button', { name, exact: true });
const hideButton = (name = 'Hide filters') => page.getByRole('button', { name, exact: true });
const searchInput = () => page.getByRole('textbox', { name: 'Search' });
const pinnedGroup = () => page.getByRole('group', { name: 'Status' });

// The bar renders its parts as direct children, so the part holding a located element is its child of the region.
const partOf = (locator: Locator): HTMLElement => {
	const root = region().element();
	let element = locator.element() as HTMLElement;

	while (element.parentElement && element.parentElement !== root) {
		element = element.parentElement;
	}

	return element;
};

const rectOf = (target: Locator | HTMLElement) =>
	(target instanceof HTMLElement ? target : target.element()).getBoundingClientRect();

const LAYOUT_TOLERANCE_PX = 1;

// Summary and Toolbar slide in when they mount; measure where they settle.
const settleAnimations = () => Promise.all(document.getAnimations().map((animation) => animation.finished));

const isSameLineBefore = (first: DOMRect, second: DOMRect) =>
	first.top < second.bottom && second.top < first.bottom && first.right <= second.left;

describe('DsFiltersBar disclosure', () => {
	it('toggles the bar, its accessible name and aria-expanded', async () => {
		const onExpandedChange = vi.fn();

		await page.render(<DisclosureBar onExpandedChange={onExpandedChange} />);

		await expect.element(showButton()).toHaveAttribute('aria-expanded', 'false');
		await expect.element(showButton()).not.toHaveAttribute('aria-pressed');
		await expect.element(region()).toMatchTextContent('View: All;');

		await showButton().click();

		expect(onExpandedChange).toHaveBeenLastCalledWith(true);
		await expect.element(hideButton()).toHaveAttribute('aria-expanded', 'true');
		await expect.element(hideButton()).not.toHaveAttribute('aria-pressed');
		await expect.element(searchInput()).toBeVisible();

		await hideButton().click();

		expect(onExpandedChange).toHaveBeenLastCalledWith(false);
		await expect.element(showButton()).toHaveAttribute('aria-expanded', 'false');
		await expect.element(searchInput()).not.toBeInTheDocument();
	});

	it('points the chevron down while collapsed and turns it right while expanded', async () => {
		await page.render(<DisclosureBar />);

		const chevron = showButton().getByText('keyboard_arrow_down', { exact: true }).element();
		const transformOf = () => getComputedStyle(chevron).transform;

		expect(chevron.closest('[aria-hidden="true"]')).not.toBeNull();
		await expect.poll(transformOf).toBe('none');

		await showButton().click();

		// rotate(-90deg) once the transition ends
		await expect.poll(transformOf).toMatch(/^matrix\([^,]+, -1, 1, /);
	});

	it('points aria-controls at the toolbar', async () => {
		await page.render(<DisclosureBar defaultExpanded />);

		const toolbar = document.getElementById(hideButton().element().getAttribute('aria-controls') ?? '');

		expect(toolbar).not.toBeNull();
		expect(toolbar).toContainElement(searchInput().element());
	});

	it('keeps keyboard focus on the button across the toggle', async () => {
		const onExpandedChange = vi.fn();

		await page.render(<DisclosureBar onExpandedChange={onExpandedChange} />);

		await userEvent.tab();
		await expect.element(showButton()).toHaveFocus();

		await userEvent.keyboard('{Enter}');

		expect(onExpandedChange).toHaveBeenLastCalledWith(true);
		await expect.element(hideButton()).toHaveFocus();

		await userEvent.keyboard('{Enter}');

		expect(onExpandedChange).toHaveBeenLastCalledWith(false);
		await expect.element(showButton()).toHaveFocus();
	});

	it('takes its accessible names from the locale', async () => {
		await page.render(<DisclosureBar locale={{ expand: 'Open filters', collapse: 'Close filters' }} />);

		await showButton('Open filters').click();

		await expect.element(hideButton('Close filters')).toHaveAttribute('aria-expanded', 'true');
	});
});

describe('DsFiltersBar disclosure layout', () => {
	it('sits on the same line as the summary while collapsed', async () => {
		await page.render(<DisclosureBar />);

		await expect.element(region()).toMatchTextContent('View: All;');
		await settleAnimations();

		const summary = partOf(page.getByText(/^View:?$/));

		expect(isSameLineBefore(rectOf(showButton()), rectOf(summary))).toBe(true);
	});

	it('sits on the same line as the toolbar while expanded', async () => {
		await page.render(<DisclosureBar defaultExpanded />);

		await expect.element(searchInput()).toBeVisible();
		await settleAnimations();

		expect(isSameLineBefore(rectOf(hideButton()), rectOf(searchInput()))).toBe(true);
	});

	it('wraps the toolbar lines after the first under the disclosure', async () => {
		await page.render(<DisclosureBar defaultExpanded style={{ width: 320 }} />);

		await settleAnimations();

		const disclosure = rectOf(hideButton());
		const items = [
			searchInput(),
			page.getByRole('radiogroup', { name: 'Filter view' }),
			page.getByRole('button', { name: 'Add filter', exact: true }),
		].map(rectOf);
		const wrapped = items.filter((item) => item.top >= disclosure.bottom);

		expect(isSameLineBefore(disclosure, items[0] as DOMRect)).toBe(true);
		expect(wrapped).not.toHaveLength(0);
		expect(Math.abs(Math.min(...wrapped.map((item) => item.left)) - disclosure.left)).toBeLessThanOrEqual(
			LAYOUT_TOLERANCE_PX,
		);
	});

	it('places the pinned row below the disclosure line at full width', async () => {
		await page.render(<DisclosureBar defaultPins={[{ field: 'status', value: 'active' }]} />);

		await expect.element(pinnedGroup()).toBeVisible();
		await settleAnimations();

		const disclosure = rectOf(showButton());
		const summary = rectOf(partOf(page.getByText(/^View:?$/)));
		const pinned = rectOf(partOf(pinnedGroup()));

		expect(pinned.top).toBeGreaterThanOrEqual(
			Math.max(disclosure.bottom, summary.bottom) - LAYOUT_TOLERANCE_PX,
		);
		expect(Math.abs(pinned.left - disclosure.left)).toBeLessThanOrEqual(LAYOUT_TOLERANCE_PX);
		expect(Math.abs(pinned.right - summary.right)).toBeLessThanOrEqual(LAYOUT_TOLERANCE_PX);
	});
});
