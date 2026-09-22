import { useState, type ReactNode } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { page, userEvent } from 'vitest/browser';
import DsCheckbox from '../ds-checkbox';
import { DsButtonV3 } from '../../ds-button-v3';
import { checkboxSizes } from '../ds-checkbox.types';

const CHECKBOX_ROOT = '[data-scope="checkbox"][data-part="root"]';

// The browser harness drops real mouse clicks landing within ~12px of the test
// iframe's origin (measured: fails at a 0 and 2px mount offset, passes from 4px),
// and the control sits in that corner at the default padding. Offsetting the
// mount point keeps `getByRole('checkbox').click()` a real click. The overlay's
// own geometry is asserted un-offset by 'should cover the control box …'.
const HARNESS_OFFSET_PX = 16;

// Sub-pixel rounding between a text line box and a fixed-size control makes
// exact centre equality flaky; 2px is tighter than any real misalignment.
const ALIGNMENT_TOLERANCE_PX = 2;

const renderOffset = (node: ReactNode) =>
	page.render(<div style={{ padding: HARNESS_OFFSET_PX }}>{node}</div>);

const query = (selector: string, scope: ParentNode = document) =>
	scope.querySelector(selector) as HTMLElement;

const rootAt = (idx: number) => document.querySelectorAll<HTMLElement>(CHECKBOX_ROOT)[idx] as HTMLElement;

const checkboxRoot = (idx = 0) => page.elementLocator(rootAt(idx));

const partRect = (part: string) =>
	query(`[data-scope="checkbox"][data-part="${part}"]`).getBoundingClientRect();

const centerY = (box: DOMRect) => box.top + box.height / 2;

const controlRect = (idx = 0) => query('[data-part="control"]', rootAt(idx)).getBoundingClientRect();

const rootStyle = () => getComputedStyle(rootAt(0));

// Tokens are aliases, so read them through a probe element to get the resolved
// color the row renders. An undefined custom property would make the probe and
// the row both fall back and agree, so the token is proven to exist first.
const resolveToken = (token: string) => {
	if (!getComputedStyle(document.documentElement).getPropertyValue(token).trim()) {
		throw new Error(`${token} is not defined in _root.scss`);
	}

	const probe = document.createElement('span');

	probe.style.backgroundColor = `var(${token})`;
	document.body.append(probe);

	const color = getComputedStyle(probe).backgroundColor;

	probe.remove();

	return color;
};

const actionsAlignmentCases = checkboxSizes.flatMap((size) => [
	{ size, withInfo: false },
	{ size, withInfo: true },
]);

// Everything about a row that must not move between sizes. The info indent is
// measured from inside the root padding, so it isolates the row geometry from
// the size-dependent padding.
const rowGeometry = (idx: number) => {
	const root = rootAt(idx);
	const label = query('[data-part="label"]', root);
	const labelInfo = label.nextElementSibling as HTMLElement;
	const control = query('[data-part="control"]', root).getBoundingClientRect();
	const labelStyle = getComputedStyle(label);
	const infoStyle = getComputedStyle(labelInfo);

	return {
		labelType: [labelStyle.fontSize, labelStyle.fontWeight, labelStyle.lineHeight].join('/'),
		infoType: [infoStyle.fontSize, infoStyle.fontWeight, infoStyle.lineHeight].join('/'),
		controlSize: [control.width, control.height].join('x'),
		infoIndent:
			labelInfo.getBoundingClientRect().left -
			root.getBoundingClientRect().left -
			parseFloat(getComputedStyle(root).paddingInlineStart),
	};
};

describe('DsCheckbox', () => {
	it('should toggle checked state when clicked', async () => {
		await renderOffset(<DsCheckbox label="label" labelInfo="labelInfo" className="custom-checkbox" />);

		const checkbox = page.getByRole('checkbox');

		await expect.element(checkbox).not.toBeChecked();

		await checkbox.click();
		await expect.element(checkbox).toBeChecked();

		await checkbox.click();
		await expect.element(checkbox).not.toBeChecked();
	});

	it('should render in indeterminate state', async () => {
		function IndeterminateCheckbox() {
			const [checked, setChecked] = useState<boolean | 'indeterminate'>('indeterminate');

			return (
				<DsCheckbox
					label="label"
					labelInfo="labelInfo"
					checked={checked}
					onCheckedChange={(newState) => setChecked(newState)}
				/>
			);
		}

		await page.render(<IndeterminateCheckbox />);

		await expect.element(checkboxRoot()).toHaveAttribute('data-state', 'indeterminate');
	});

	it('should support disabled state', async () => {
		await page.render(<DsCheckbox label="label" labelInfo="labelInfo" disabled />);

		const checkbox = page.getByRole('checkbox', { disabled: true });

		await expect.element(checkbox).toBeDisabled();
		await expect.element(page.getByText('labelInfo')).toBeVisible();

		await checkbox.click({ force: true });
		await expect.element(checkbox).not.toBeChecked();
	});

	it('should call onCheckedChange when toggled', async () => {
		const onCheckedChange = vi.fn();

		await renderOffset(<DsCheckbox label="label" onCheckedChange={onCheckedChange} />);

		const checkbox = page.getByRole('checkbox');

		await checkbox.click();
		await expect.element(checkbox).toBeChecked();
		expect(onCheckedChange).toHaveBeenCalledWith(true);

		await checkbox.click();
		await expect.element(checkbox).not.toBeChecked();
		expect(onCheckedChange).toHaveBeenCalledWith(false);
	});

	it('should support warning variant', async () => {
		const onCheckedChange = vi.fn();

		await renderOffset(
			<DsCheckbox variant="warning" label="label" labelInfo="labelInfo" onCheckedChange={onCheckedChange} />,
		);

		const checkbox = page.getByRole('checkbox');

		await expect.element(checkbox).not.toBeChecked();
		await expect.element(page.getByText('label', { exact: true })).toBeVisible();
		await expect.element(page.getByText('labelInfo')).toBeVisible();

		await checkbox.click();
		await expect.element(checkbox).toBeChecked();
		expect(onCheckedChange).toHaveBeenCalledWith(true);
	});

	it('should toggle when clicking the label', async () => {
		const onCheckedChange = vi.fn();

		await page.render(<DsCheckbox label="label" onCheckedChange={onCheckedChange} />);

		const checkbox = page.getByRole('checkbox');

		await expect.element(checkbox).not.toBeChecked();

		await page.getByText('label').click();
		await expect.element(checkbox).toBeChecked();
		expect(onCheckedChange).toHaveBeenCalledWith(true);
	});

	it('should stack labelInfo under the label and keep the control on the label row', async () => {
		await page.render(<DsCheckbox label="label" labelInfo="labelInfo" />);

		await expect.element(page.getByText('labelInfo')).toBeVisible();

		const label = partRect('label');
		const labelInfo = page.getByText('labelInfo').element().getBoundingClientRect();

		expect(labelInfo.left).toBeCloseTo(label.left, 0);
		expect(labelInfo.top).toBeGreaterThanOrEqual(label.bottom);
		expect(Math.abs(centerY(partRect('control')) - centerY(label))).toBeLessThanOrEqual(
			ALIGNMENT_TOLERANCE_PX,
		);
	});

	describe('size', () => {
		it('should pad all four sides at medium', async () => {
			await page.render(<DsCheckbox label="label" />);

			const style = rootStyle();

			expect(style.paddingBlockStart).toBe('2px');
			expect(style.paddingBlockEnd).toBe('2px');
			expect(style.paddingInlineStart).toBe('2px');
			expect(style.paddingInlineEnd).toBe('2px');
		});

		it('should pad all four sides at large', async () => {
			await page.render(<DsCheckbox size="large" label="label" />);

			const style = rootStyle();

			expect(style.paddingBlockStart).toBe('8px');
			expect(style.paddingBlockEnd).toBe('8px');
			expect(style.paddingInlineStart).toBe('8px');
			expect(style.paddingInlineEnd).toBe('8px');
		});

		it('should keep typography, control size and info indent identical across sizes', async () => {
			await page.render(
				<>
					<DsCheckbox size="medium" label="label" labelInfo="labelInfo" />
					<DsCheckbox size="large" label="label" labelInfo="labelInfo" />
				</>,
			);

			const medium = rowGeometry(0);
			const large = rowGeometry(1);

			expect(large).toEqual(medium);
		});

		it.each(checkboxSizes)('should keep the checkbox role clickable at %s', async (size) => {
			const onCheckedChange = vi.fn();

			await renderOffset(<DsCheckbox size={size} label="label" onCheckedChange={onCheckedChange} />);

			const checkbox = page.getByRole('checkbox');

			await checkbox.click();
			await expect.element(checkbox).toBeChecked();
			expect(onCheckedChange).toHaveBeenCalledWith(true);
		});

		it.each(checkboxSizes)('should cover the control with the hidden input at %s', async (size) => {
			// The overlay is what makes `getByRole('checkbox')` clickable, so assert
			// it at the real default mount point rather than through an offset.
			await page.render(<DsCheckbox size={size} label="label" />);

			const input = page.getByRole('checkbox').element();
			const inputBox = input.getBoundingClientRect();
			const control = controlRect();

			expect(inputBox.left).toBeCloseTo(control.left, 1);
			expect(inputBox.top).toBeCloseTo(control.top, 1);
			expect(inputBox.width).toBeCloseTo(control.width, 1);
			expect(inputBox.height).toBeCloseTo(control.height, 1);

			const atCenter = document.elementFromPoint(
				inputBox.left + inputBox.width / 2,
				inputBox.top + inputBox.height / 2,
			);

			expect(atCenter).toBe(input);
		});

		it.each(checkboxSizes)('should reflect the indeterminate state at %s', async (size) => {
			await page.render(<DsCheckbox size={size} label="label" checked="indeterminate" />);

			await expect.element(checkboxRoot()).toHaveAttribute('data-state', 'indeterminate');
		});

		it.each(checkboxSizes)('should block interaction when disabled at %s', async (size) => {
			const onCheckedChange = vi.fn();

			await page.render(<DsCheckbox size={size} label="label" disabled onCheckedChange={onCheckedChange} />);

			const checkbox = page.getByRole('checkbox', { disabled: true });

			await expect.element(checkbox).toBeDisabled();

			await checkbox.click({ force: true });

			await expect.element(checkbox).not.toBeChecked();
			expect(onCheckedChange).not.toHaveBeenCalled();
		});

		it.each(checkboxSizes)('should apply the warning palette when checked at %s', async (size) => {
			await page.render(
				<>
					<DsCheckbox size={size} label="default" checked />
					<DsCheckbox size={size} variant="warning" label="warned" checked />
				</>,
			);

			const controlColor = (idx: number) =>
				getComputedStyle(query('[data-part="control"]', rootAt(idx))).backgroundColor;

			expect(controlColor(1)).not.toBe(controlColor(0));
		});
	});

	describe('actions', () => {
		it('should render actions outside the checkbox label', async () => {
			await page.render(
				<DsCheckbox
					label="label"
					actions={<DsButtonV3 variant="tertiary" size="tiny" icon="keep" aria-label="Pin" />}
				/>,
			);

			const pin = page.getByRole('button', { name: 'Pin' }).element();
			const root = query(CHECKBOX_ROOT);

			expect(root.tagName).toBe('LABEL');
			expect(root.contains(pin)).toBe(false);
			expect(pin.closest('label')).toBeNull();
		});

		it('should not toggle the checkbox when an actions button is clicked', async () => {
			const onPinClick = vi.fn();
			const onCheckedChange = vi.fn();

			await page.render(
				<DsCheckbox
					label="label"
					onCheckedChange={onCheckedChange}
					actions={
						<DsButtonV3 variant="tertiary" size="tiny" icon="keep" aria-label="Pin" onClick={onPinClick} />
					}
				/>,
			);

			await page.getByRole('button', { name: 'Pin' }).click();

			expect(onPinClick).toHaveBeenCalledOnce();
			expect(onCheckedChange).not.toHaveBeenCalled();
			await expect.element(page.getByRole('checkbox')).not.toBeChecked();
		});

		it('should not toggle the checkbox when an actions button is activated by keyboard', async () => {
			const onPinClick = vi.fn();
			const onCheckedChange = vi.fn();

			await page.render(
				<DsCheckbox
					label="label"
					onCheckedChange={onCheckedChange}
					actions={
						<DsButtonV3 variant="tertiary" size="tiny" icon="keep" aria-label="Pin" onClick={onPinClick} />
					}
				/>,
			);

			(page.getByRole('button', { name: 'Pin' }).element() as HTMLElement).focus();
			await userEvent.keyboard('{Enter}');
			await userEvent.keyboard(' ');

			expect(onPinClick).toHaveBeenCalledTimes(2);
			expect(onCheckedChange).not.toHaveBeenCalled();
			await expect.element(page.getByRole('checkbox')).not.toBeChecked();
		});

		it('should not wrap the checkbox when actions is omitted', async () => {
			await page.render(
				<div id="host">
					<DsCheckbox label="label" />
				</div>,
			);

			const host = query('#host');

			expect(host.children).toHaveLength(1);
			expect(host.children[0]).toBe(document.querySelector(CHECKBOX_ROOT));
		});

		it('should apply className to the outer element whether or not actions is set', async () => {
			await page.render(
				<>
					<DsCheckbox label="plain" className="row" />
					<DsCheckbox
						label="pinned"
						className="row"
						actions={<DsButtonV3 variant="tertiary" size="tiny" icon="keep" aria-label="Pin" />}
					/>
				</>,
			);

			expect(rootAt(0).classList.contains('row')).toBe(true);

			const wrapped = rootAt(1);

			expect(wrapped.classList.contains('row')).toBe(false);
			expect((wrapped.parentElement as HTMLElement).classList.contains('row')).toBe(true);
		});

		it('should highlight the whole row, actions included, on hover', async () => {
			await renderOffset(
				<DsCheckbox
					label="label"
					actions={<DsButtonV3 variant="tertiary" size="tiny" icon="keep" aria-label="Pin" />}
				/>,
			);

			const root = query(CHECKBOX_ROOT);
			const wrapper = root.parentElement as HTMLElement;
			const hovered = resolveToken('--background-secondary-hover');

			await userEvent.hover(page.elementLocator(root));

			// Polled because `background-color` transitions over 0.2s.
			await expect.poll(() => getComputedStyle(wrapper).backgroundColor, { timeout: 2000 }).toBe(hovered);

			// The label half must not paint its own narrower highlight inside the row.
			expect(getComputedStyle(root).backgroundColor).toBe('rgba(0, 0, 0, 0)');

			// The highlight has to actually reach under the pin.
			const wrapperRect = wrapper.getBoundingClientRect();
			const pinRect = page.getByRole('button', { name: 'Pin' }).element().getBoundingClientRect();

			expect(pinRect.left).toBeGreaterThanOrEqual(wrapperRect.left);
			expect(pinRect.right).toBeLessThanOrEqual(wrapperRect.right);
			expect(pinRect.top).toBeGreaterThanOrEqual(wrapperRect.top);
			expect(pinRect.bottom).toBeLessThanOrEqual(wrapperRect.bottom);
		});

		it('should pin actions to the trailing edge of a stretched row', async () => {
			// A list row stretches to its container, as inside DsCheckboxGroup.
			await renderOffset(
				<div style={{ inlineSize: '320px', display: 'flex', flexDirection: 'column' }}>
					<DsCheckbox
						label="label"
						actions={<DsButtonV3 variant="tertiary" size="tiny" icon="keep" aria-label="Pin" />}
					/>
				</div>,
			);

			const root = query(CHECKBOX_ROOT);
			const wrapper = root.parentElement as HTMLElement;
			const wrapperRect = wrapper.getBoundingClientRect();
			const pinRect = page.getByRole('button', { name: 'Pin' }).element().getBoundingClientRect();
			const labelRect = query('[data-part="label"]', root).getBoundingClientRect();

			// Flush with the row's end rather than hugging the label, so the
			// highlight does not run on past the pin into empty space.
			expect(wrapperRect.right - pinRect.right).toBeLessThanOrEqual(ALIGNMENT_TOLERANCE_PX);
			expect(pinRect.left - labelRect.right).toBeGreaterThan(ALIGNMENT_TOLERANCE_PX);
		});

		it('should not highlight a disabled row on hover', async () => {
			await renderOffset(
				<DsCheckbox
					label="label"
					disabled
					actions={<DsButtonV3 variant="tertiary" size="tiny" icon="keep" aria-label="Pin" />}
				/>,
			);

			const root = query(CHECKBOX_ROOT);
			const wrapper = root.parentElement as HTMLElement;

			await userEvent.hover(page.elementLocator(root));

			expect(getComputedStyle(wrapper).backgroundColor).toBe('rgba(0, 0, 0, 0)');
		});

		it.each(actionsAlignmentCases)(
			'should centre actions against the control at $size (labelInfo: $withInfo)',
			async ({ size, withInfo }) => {
				await page.render(
					<DsCheckbox
						size={size}
						label="label"
						labelInfo={withInfo ? 'labelInfo' : undefined}
						actions={<DsButtonV3 variant="tertiary" size="tiny" icon="keep" aria-label="Pin" />}
					/>,
				);

				const pin = page.getByRole('button', { name: 'Pin' }).element().getBoundingClientRect();

				expect(Math.abs(centerY(pin) - centerY(partRect('control')))).toBeLessThanOrEqual(
					ALIGNMENT_TOLERANCE_PX,
				);
			},
		);
	});
});
