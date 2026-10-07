import { createRef } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { page, userEvent, type Locator } from 'vitest/browser';
import { DsFiltersBar } from '../index';
import type {
	DsFilterField,
	DsFiltersBarDisclosureProps,
	DsFiltersBarRootProps,
} from '../ds-filters-bar.types';

const FIELDS: ReadonlyArray<DsFilterField> = [
	{
		type: 'enum',
		id: 'status',
		label: 'Status',
		operators: [{ value: '=', label: 'equals' }],
		options: [{ value: 'active', label: 'Active' }],
	},
];

interface BarProps extends Omit<DsFiltersBarRootProps, 'children'> {
	disclosureProps?: DsFiltersBarDisclosureProps;
}

const DisclosureBar = ({ disclosureProps, ...props }: BarProps) => (
	<DsFiltersBar.Root fields={FIELDS} {...props}>
		<DsFiltersBar.Disclosure {...disclosureProps} />
		<DsFiltersBar.Summary count={18} />
		<DsFiltersBar.Toolbar>
			<button type="button">Add filter</button>
		</DsFiltersBar.Toolbar>
		<div>Below the bar</div>
	</DsFiltersBar.Root>
);

const region = () => page.getByRole('region', { name: 'Filters' });
const showButton = (name = 'Show filters') => page.getByRole('button', { name, exact: true });
const hideButton = (name = 'Hide filters') => page.getByRole('button', { name, exact: true });
const addFilter = () => page.getByRole('button', { name: 'Add filter' });
const below = () => page.getByText('Below the bar', { exact: true });

// Root renders its parts as direct children, so the part holding a located element is its child of the region.
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

describe('DsFiltersBar.Disclosure', () => {
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
		await expect.element(addFilter()).toBeVisible();

		await hideButton().click();

		expect(onExpandedChange).toHaveBeenLastCalledWith(false);
		await expect.element(showButton()).toHaveAttribute('aria-expanded', 'false');
		await expect.element(addFilter()).not.toBeInTheDocument();
	});

	it('points the chevron down while collapsed and turns it right while expanded', async () => {
		await page.render(<DisclosureBar />);

		const chevron = page.getByText('keyboard_arrow_down', { exact: true });
		const transformOf = () => getComputedStyle(chevron.element()).transform;

		expect(chevron.element().closest('[aria-hidden="true"]')).not.toBeNull();
		await expect.poll(transformOf).toBe('none');

		await showButton().click();

		// rotate(-90deg) once the transition ends
		await expect.poll(transformOf).toMatch(/^matrix\([^,]+, -1, 1, /);
	});

	it('points aria-controls at the toolbar', async () => {
		await page.render(<DisclosureBar defaultExpanded />);

		const toolbar = document.getElementById(hideButton().element().getAttribute('aria-controls') ?? '');

		expect(toolbar).not.toBeNull();
		expect(toolbar).toContainElement(addFilter().element());
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

	it('takes its accessible names from the Root locale', async () => {
		await page.render(<DisclosureBar locale={{ expand: 'Open filters', collapse: 'Close filters' }} />);

		await showButton('Open filters').click();

		await expect.element(hideButton('Close filters')).toHaveAttribute('aria-expanded', 'true');
	});

	it('forwards ref, className and style to the button', async () => {
		const ref = createRef<HTMLButtonElement>();

		await page.render(
			<DisclosureBar disclosureProps={{ ref, className: 'custom', style: { marginTop: 3 } }} />,
		);

		const button = showButton();

		await expect.element(button).toHaveClass('custom');
		await expect.element(button).toHaveStyle({ marginTop: '3px' });
		expect(ref.current).toBeInstanceOf(HTMLButtonElement);
		expect(ref.current).toBe(button.element());
	});
});

describe('DsFiltersBar.Disclosure layout', () => {
	it('sits on the same line as the Summary while collapsed', async () => {
		await page.render(<DisclosureBar />);

		await expect.element(region()).toMatchTextContent('View: All;');
		await settleAnimations();

		const summary = partOf(page.getByText(/^View:?$/));

		expect(isSameLineBefore(rectOf(showButton()), rectOf(summary))).toBe(true);
	});

	it('sits on the same line as the Toolbar while expanded', async () => {
		await page.render(<DisclosureBar defaultExpanded />);

		await expect.element(addFilter()).toBeVisible();
		await settleAnimations();

		expect(isSameLineBefore(rectOf(hideButton()), rectOf(addFilter()))).toBe(true);
	});

	it('wraps the lines after the first under the Disclosure', async () => {
		await page.render(
			<DsFiltersBar.Root fields={FIELDS} defaultExpanded style={{ width: 200 }}>
				<DsFiltersBar.Disclosure />
				<DsFiltersBar.Toolbar>
					<button type="button" style={{ width: 120 }}>
						First
					</button>
					<button type="button" style={{ width: 120 }}>
						Second
					</button>
				</DsFiltersBar.Toolbar>
			</DsFiltersBar.Root>,
		);

		await settleAnimations();

		const disclosure = rectOf(hideButton());
		const first = rectOf(page.getByRole('button', { name: 'First' }));
		const second = rectOf(page.getByRole('button', { name: 'Second' }));

		expect(isSameLineBefore(disclosure, first)).toBe(true);
		expect(second.top).toBeGreaterThanOrEqual(disclosure.bottom);
		expect(Math.abs(second.left - disclosure.left)).toBeLessThanOrEqual(LAYOUT_TOLERANCE_PX);
	});

	it('places any other child below the Disclosure line at full width', async () => {
		await page.render(<DisclosureBar />);

		await expect.element(below()).toBeVisible();
		await settleAnimations();

		const disclosure = rectOf(showButton());
		const summary = rectOf(partOf(page.getByText(/^View:?$/)));
		const other = rectOf(partOf(below()));

		expect(other.top).toBeGreaterThanOrEqual(
			Math.max(disclosure.bottom, summary.bottom) - LAYOUT_TOLERANCE_PX,
		);
		expect(Math.abs(other.left - disclosure.left)).toBeLessThanOrEqual(LAYOUT_TOLERANCE_PX);
		expect(Math.abs(other.right - summary.right)).toBeLessThanOrEqual(LAYOUT_TOLERANCE_PX);
	});
});
