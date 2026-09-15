import { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { page, userEvent } from 'vitest/browser';

import DsToggleFilterData from '../ds-toggle-filter-data';

const LABEL = 'Errors';

const VALUE = '12';

/*
 * The two segments are adjacent inline spans, so the accessible name may or may not gain a space
 * between them depending on the engine — the locator matches on the label and the segment order is
 * asserted structurally instead.
 */
const pill = () => page.getByRole('button', { name: /Errors/ });

const pillElement = () => pill().element() as HTMLButtonElement;

const segmentTexts = (button: Element): (string | null)[] =>
	[...button.children].map((child) => child.textContent);

const activeStates = [false, true] as const;

const disabledCombinations = activeStates.flatMap((active) =>
	activeStates.map((disabled) => [active, disabled] as const),
);

describe('DsToggleFilterData', () => {
	it('renders the label followed by the value', async () => {
		await page.render(<DsToggleFilterData label={LABEL} value={VALUE} active={false} />);

		await expect.element(pill()).toBeVisible();
		expect(segmentTexts(pillElement())).toEqual([LABEL, VALUE]);
	});

	it('exposes aria-pressed false while inactive', async () => {
		await page.render(<DsToggleFilterData label={LABEL} value={VALUE} active={false} />);

		await expect.element(pill()).toHaveAttribute('aria-pressed', 'false');
	});

	it('exposes aria-pressed true while active', async () => {
		await page.render(<DsToggleFilterData label={LABEL} value={VALUE} active />);

		await expect.element(pill()).toHaveAttribute('aria-pressed', 'true');
	});

	/*
	 * A greyed pill still has to announce whether its filter is on, so `disabled` must never drop
	 * `aria-pressed` — for either value.
	 */
	it.each(activeStates)('keeps aria-pressed exposed while disabled with active=%s', async (active) => {
		await page.render(<DsToggleFilterData label={LABEL} value={VALUE} active={active} disabled />);

		await expect.element(pill()).toBeDisabled();
		await expect.element(pill()).toHaveAttribute('aria-pressed', String(active));
	});
});

describe('DsToggleFilterData activation', () => {
	it.each([
		[false, true],
		[true, false],
	])('reports the next active value on click when active=%s', async (active, next) => {
		const onActiveChange = vi.fn();
		await page.render(
			<DsToggleFilterData label={LABEL} value={VALUE} active={active} onActiveChange={onActiveChange} />,
		);

		await pill().click();

		expect(onActiveChange).toHaveBeenCalledExactlyOnceWith(next);
	});

	it('activates on Enter', async () => {
		const onActiveChange = vi.fn();
		await page.render(
			<DsToggleFilterData label={LABEL} value={VALUE} active={false} onActiveChange={onActiveChange} />,
		);

		pillElement().focus();
		await expect.element(pill()).toHaveFocus();

		await userEvent.keyboard('{Enter}');

		expect(onActiveChange).toHaveBeenCalledExactlyOnceWith(true);
	});

	it('activates on Space', async () => {
		const onActiveChange = vi.fn();
		await page.render(
			<DsToggleFilterData label={LABEL} value={VALUE} active onActiveChange={onActiveChange} />,
		);

		pillElement().focus();
		await expect.element(pill()).toHaveFocus();

		await userEvent.keyboard(' ');

		expect(onActiveChange).toHaveBeenCalledExactlyOnceWith(false);
	});

	it('forwards the raw click event to onClick before onActiveChange', async () => {
		const order: string[] = [];
		const clickedTargets: (EventTarget | null)[] = [];
		const onClick = vi.fn((event: { currentTarget: EventTarget | null }) => {
			order.push('onClick');
			clickedTargets.push(event.currentTarget);
		});
		const onActiveChange = vi.fn(() => order.push('onActiveChange'));

		await page.render(
			<DsToggleFilterData
				label={LABEL}
				value={VALUE}
				active={false}
				onClick={onClick}
				onActiveChange={onActiveChange}
			/>,
		);

		const button = pillElement();
		await pill().click();

		expect(order).toEqual(['onClick', 'onActiveChange']);
		expect(clickedTargets).toEqual([button]);
	});

	it('fires neither callback when disabled, by pointer or by keyboard', async () => {
		const onClick = vi.fn();
		const onActiveChange = vi.fn();
		await page.render(
			<DsToggleFilterData
				label={LABEL}
				value={VALUE}
				active={false}
				disabled
				onClick={onClick}
				onActiveChange={onActiveChange}
			/>,
		);

		await pill().click({ force: true });

		// `focus()` is a no-op on a disabled control, which is *why* the keys below cannot reach the
		// pill. Asserted rather than assumed, so this does not silently become a test of `document.body`.
		pillElement().focus();
		await expect.element(pill()).not.toHaveFocus();

		await userEvent.keyboard('{Enter}');
		await userEvent.keyboard(' ');

		expect(onClick).not.toHaveBeenCalled();
		expect(onActiveChange).not.toHaveBeenCalled();
	});

	it('drops out of the tab order when disabled', async () => {
		await page.render(
			<>
				<button type="button">Before</button>
				<DsToggleFilterData label={LABEL} value={VALUE} active={false} disabled />
				<button type="button">After</button>
			</>,
		);

		(page.getByRole('button', { name: 'Before' }).element() as HTMLButtonElement).focus();
		await userEvent.tab();

		await expect.element(page.getByRole('button', { name: 'After' })).toHaveFocus();
		await expect.element(pill()).not.toHaveFocus();
	});
});

describe('DsToggleFilterData controlled selection', () => {
	it('flips the rendered state when the parent owns active', async () => {
		function Controlled() {
			const [active, setActive] = useState(false);

			return (
				<>
					<DsToggleFilterData label={LABEL} value={VALUE} active={active} onActiveChange={setActive} />
					<output>{active ? 'Filter applied' : 'Filter cleared'}</output>
				</>
			);
		}

		await page.render(<Controlled />);

		await expect.element(pill()).toHaveAttribute('aria-pressed', 'false');
		await expect.element(page.getByText('Filter cleared')).toBeInTheDocument();

		await pill().click();

		await expect.element(pill()).toHaveAttribute('aria-pressed', 'true');
		await expect.element(page.getByText('Filter applied')).toBeInTheDocument();

		await pill().click();

		await expect.element(pill()).toHaveAttribute('aria-pressed', 'false');
		await expect.element(page.getByText('Filter cleared')).toBeInTheDocument();
	});

	it('never toggles itself while the parent holds active fixed', async () => {
		const onActiveChange = vi.fn();
		await page.render(
			<DsToggleFilterData label={LABEL} value={VALUE} active={false} onActiveChange={onActiveChange} />,
		);

		await pill().click();
		await pill().click();

		expect(onActiveChange.mock.calls).toEqual([[true], [true]]);
		await expect.element(pill()).toHaveAttribute('aria-pressed', 'false');
	});
});

describe('DsToggleFilterData has no delete affordance', () => {
	/*
	 * A tripwire, not a guard against today's code: the pill currently has no branch that could
	 * render one. It exists so that adding an icon or dismiss slot later has to face this first —
	 * nesting a control inside a toggle button would also make the button's own name unreadable.
	 */
	it.each(disabledCombinations)(
		'renders nothing removable when active=%s and disabled=%s',
		async (active, disabled) => {
			await page.render(
				<DsToggleFilterData label={LABEL} value={VALUE} active={active} disabled={disabled} />,
			);

			expect(pillElement().querySelectorAll('button, [role="button"]')).toHaveLength(0);
			await expect
				.element(page.getByRole('button', { name: /delete|remove|clear|close/i, includeHidden: true }))
				.not.toBeInTheDocument();
		},
	);
});
