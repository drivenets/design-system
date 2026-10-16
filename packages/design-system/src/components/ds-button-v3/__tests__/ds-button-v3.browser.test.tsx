import { createRef, type FormEvent } from 'react';
import { describe, expect, it, onTestFinished, vi } from 'vitest';
import { page, userEvent } from 'vitest/browser';
import { buttonV3Colors, buttonV3Variants, DsButtonV3 } from '../index';
import { DsDropdownMenu } from '../../ds-dropdown-menu';
import { DsTooltip } from '../../ds-tooltip';

describe('DsButtonV3', () => {
	it('calls onClick when clicked', async () => {
		const onClick = vi.fn();

		await page.render(<DsButtonV3 onClick={onClick}>Click me</DsButtonV3>);

		await page.getByRole('button', { name: 'Click me' }).click();

		expect(onClick).toHaveBeenCalled();
	});

	it('does not call onClick when disabled', async () => {
		const onClick = vi.fn();

		await page.render(
			<DsButtonV3 onClick={onClick} disabled>
				Click me
			</DsButtonV3>,
		);

		const button = page.getByRole('button', { name: 'Click me', disabled: true });

		await button.click({ force: true });

		expect(onClick).not.toHaveBeenCalled();
		await expect.element(button).toBeDisabled();
	});

	it('applies selected state', async () => {
		await page.render(<DsButtonV3 selected>Label</DsButtonV3>);

		const button = page.getByRole('button', { name: 'Label' });

		await expect.element(button).toHaveAttribute('data-selected', 'true');
	});

	it('applies data-high-emphasis when highEmphasis is set', async () => {
		await page.render(<DsButtonV3 highEmphasis>Label</DsButtonV3>);

		const button = page.getByRole('button', { name: 'Label' });

		await expect.element(button).toHaveAttribute('data-high-emphasis', 'true');
	});

	it('omits data-high-emphasis by default', async () => {
		await page.render(<DsButtonV3>Label</DsButtonV3>);

		const button = page.getByRole('button', { name: 'Label' });

		await expect.element(button).not.toHaveAttribute('data-high-emphasis');
	});

	it('sets data-color for error palette', async () => {
		await page.render(<DsButtonV3 color="error">Delete</DsButtonV3>);

		const button = page.getByRole('button', { name: 'Delete' });

		await expect.element(button).toHaveAttribute('data-color', 'error');
	});

	it('applies iconOnly layout when icon is set without children', async () => {
		await page.render(<DsButtonV3 icon="check_circle" aria-label="Confirm" />);

		const button = page.getByRole('button', { name: 'Confirm' });

		await expect.element(button).toHaveAttribute('data-icon-only', 'true');
	});

	it('does not apply iconOnly layout when icon is set with children', async () => {
		await page.render(<DsButtonV3 icon="check_circle">Save</DsButtonV3>);

		const button = page.getByRole('button', { name: 'Save' });

		await expect.element(button).not.toHaveAttribute('data-icon-only');
	});

	it('renders native submit button type', async () => {
		await page.render(<DsButtonV3 type="submit">Send</DsButtonV3>);

		const button = page.getByRole('button', { name: 'Send' });

		await expect.element(button).toHaveAttribute('type', 'submit');
	});

	it('merges className', async () => {
		await page.render(<DsButtonV3 className="extra">X</DsButtonV3>);

		await expect.element(page.getByRole('button', { name: 'X' })).toHaveClass('extra');
	});

	it('sets aria-busy and data-loading when loading', async () => {
		await page.render(<DsButtonV3 loading>Save</DsButtonV3>);

		const button = page.getByRole('button', { name: 'Save' });

		await expect.element(button).toHaveAttribute('aria-busy', 'true');
		await expect.element(button).toHaveAttribute('data-loading', '');
	});

	it('renders spinner instead of icon when loading', async () => {
		await page.render(<DsButtonV3 loading icon="check_circle" aria-label="Saving" />);

		const button = page.getByRole('button', { name: 'Saving' });

		await expect.element(button).toHaveAttribute('aria-busy', 'true');

		const el = button.element();
		expect(el.querySelector('svg')).toBeTruthy();
		expect(el.querySelector('[aria-hidden]')).toBeNull();
	});

	it('does not call onClick when loading', async () => {
		const onClick = vi.fn();

		await page.render(
			<DsButtonV3 loading onClick={onClick}>
				Save
			</DsButtonV3>,
		);

		await page.getByRole('button', { name: 'Save' }).click({ force: true });

		expect(onClick).not.toHaveBeenCalled();
	});

	it('sets data-variant for each variant', async () => {
		for (const variant of ['primary', 'primary-subtle', 'secondary', 'tertiary'] as const) {
			await page.render(
				<DsButtonV3 variant={variant} aria-label={variant}>
					Label
				</DsButtonV3>,
			);

			await expect
				.element(page.getByRole('button', { name: variant }))
				.toHaveAttribute('data-variant', variant);
		}
	});

	it('applies default props when none are specified', async () => {
		await page.render(<DsButtonV3>Default</DsButtonV3>);

		const button = page.getByRole('button', { name: 'Default' });

		await expect.element(button).toHaveAttribute('data-color', 'default');
		await expect.element(button).toHaveAttribute('data-variant', 'primary');
		await expect.element(button).toHaveAttribute('data-size', 'medium');
	});

	it('forwards ref to the button element', async () => {
		const ref = createRef<HTMLButtonElement>();

		await page.render(<DsButtonV3 ref={ref}>Ref</DsButtonV3>);

		expect(ref.current).toBeInstanceOf(HTMLButtonElement);
		expect(ref.current?.textContent).toBe('Ref');
	});

	it('loading without disabled keeps normal colors', async () => {
		const onClick = vi.fn();

		await page.render(
			<DsButtonV3 loading onClick={onClick}>
				Saving
			</DsButtonV3>,
		);

		const button = page.getByRole('button', { name: 'Saving', disabled: true });

		await expect.element(button).toBeDisabled();
		await expect.element(button).toHaveAttribute('data-loading', '');
		await button.click({ force: true });
		expect(onClick).not.toHaveBeenCalled();
	});

	it('loading + disabled shows spinner with disabled styling', async () => {
		await page.render(
			<DsButtonV3 loading disabled>
				Saving
			</DsButtonV3>,
		);

		const button = page.getByRole('button', { name: 'Saving', disabled: true });

		await expect.element(button).toBeDisabled();
		await expect.element(button).not.toHaveAttribute('data-loading');
		await expect.element(button).toHaveAttribute('aria-busy', 'true');
	});

	it('selected + disabled does not remove selected styling', async () => {
		await page.render(
			<DsButtonV3 selected disabled>
				Toggle
			</DsButtonV3>,
		);

		const button = page.getByRole('button', { name: 'Toggle', disabled: true });

		await expect.element(button).toBeDisabled();
		await expect.element(button).toHaveAttribute('aria-pressed', 'true');
		await expect.element(button).toHaveAttribute('data-selected', 'true');
	});

	it('spreads rest props onto the button element', async () => {
		await page.render(
			<DsButtonV3 data-testid="my-btn" aria-label="Spread">
				Rest
			</DsButtonV3>,
		);

		const button = page.getByRole('button', { name: 'Spread' });

		await expect.element(button).toHaveAttribute('data-testid', 'my-btn');
	});

	describe('color="light" renders a visible background', () => {
		const transparent = 'rgba(0, 0, 0, 0)';

		it('primary has a non-transparent background', async () => {
			await page.render(
				<DsButtonV3 color="light" variant="primary">
					Light
				</DsButtonV3>,
			);

			const el = page.getByRole('button', { name: 'Light' }).element();

			expect(getComputedStyle(el).backgroundColor).not.toBe(transparent);
		});

		it('primary disabled keeps a visible border', async () => {
			await page.render(
				<DsButtonV3 color="light" variant="primary" disabled>
					Light
				</DsButtonV3>,
			);

			const el = page.getByRole('button', { name: 'Light' }).element();

			expect(getComputedStyle(el).borderColor).not.toBe(transparent);
		});

		it('secondary selected has a non-transparent background', async () => {
			await page.render(
				<DsButtonV3 color="light" variant="secondary" selected>
					Light
				</DsButtonV3>,
			);

			const el = page.getByRole('button', { name: 'Light' }).element();

			expect(getComputedStyle(el).backgroundColor).not.toBe(transparent);
		});
	});
});

const REASON = 'You need edit access to delete this item';
// Longer than a render and than the reason tooltip's close delay.
const SETTLE_MS = 500;

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// `userEvent.tab()` presses Tab in the top-level page, which reaches the test frame only once it has focus.
const tabIntoFrame = async () => {
	window.focus();
	await userEvent.tab();
};

// `color="light"` has no `primary-subtle`.
const colorVariantPairs = buttonV3Colors.flatMap((color) =>
	buttonV3Variants
		.filter((variant) => color !== 'light' || variant !== 'primary-subtle')
		.map((variant) => ({ color, variant })),
);

const DISABLED_LOOK = ['background-color', 'color', 'border-color', 'cursor'] as const;

const disabledLook = (element: Element) => {
	const style = getComputedStyle(element);

	return Object.fromEntries(DISABLED_LOOK.map((property) => [property, style.getPropertyValue(property)]));
};

describe('DsButtonV3 disabledReason', () => {
	it('stays focusable and is announced as disabled with the reason as its description', async () => {
		await page.render(
			<DsButtonV3 disabled disabledReason={REASON}>
				Delete
			</DsButtonV3>,
		);

		const button = page.getByRole('button', { name: 'Delete', disabled: true });

		await tabIntoFrame();

		await expect.element(button).toHaveFocus();
		await expect.element(button).toHaveAttribute('aria-disabled', 'true');
		await expect.element(button).not.toHaveAttribute('disabled');
		await expect.element(button).toHaveAccessibleName('Delete');
		await expect.element(button).toHaveAccessibleDescription(REASON);
	});

	it('shows the reason on hover and hides it when the pointer leaves', async () => {
		await page.render(
			<DsButtonV3 disabled disabledReason={REASON}>
				Delete
			</DsButtonV3>,
		);

		const button = page.getByRole('button', { name: 'Delete' });

		await button.hover();
		await expect.element(page.getByRole('tooltip', { name: REASON })).toBeVisible();

		await button.unhover();
		await expect.element(page.getByRole('tooltip')).not.toBeInTheDocument();
	});

	it('shows the reason on keyboard focus and dismisses it on blur and Escape', async () => {
		await page.render(
			<>
				<DsButtonV3 disabled disabledReason={REASON}>
					Delete
				</DsButtonV3>
				<DsButtonV3>Next</DsButtonV3>
			</>,
		);

		const button = page.getByRole('button', { name: 'Delete' });
		const tooltip = page.getByRole('tooltip', { name: REASON });

		await tabIntoFrame();
		await expect.element(button).toHaveFocus();
		await expect.element(tooltip).toBeVisible();

		await userEvent.tab();
		await expect.element(page.getByRole('button', { name: 'Next' })).toHaveFocus();
		await expect.element(tooltip).not.toBeInTheDocument();

		await userEvent.tab({ shift: true });
		await expect.element(tooltip).toBeVisible();

		await userEvent.keyboard('{Escape}');
		await expect.element(tooltip).not.toBeInTheDocument();
		await expect.element(button).toHaveFocus();
	});

	it('ignores clicks, Enter and Space without submitting its form or reaching ancestors', async () => {
		const onClick = vi.fn();
		const onSubmit = vi.fn((event: FormEvent) => event.preventDefault());
		const onDocumentClick = vi.fn();

		document.addEventListener('click', onDocumentClick);
		onTestFinished(() => document.removeEventListener('click', onDocumentClick));

		await page.render(
			<form onSubmit={onSubmit}>
				<DsButtonV3 type="submit" disabled disabledReason={REASON} onClick={onClick}>
					Save
				</DsButtonV3>
			</form>,
		);

		const button = page.getByRole('button', { name: 'Save' });

		await tabIntoFrame();
		await expect.element(button).toHaveFocus();
		await userEvent.keyboard('{Enter}');
		await userEvent.keyboard(' ');
		await button.click({ force: true });

		expect(onClick).not.toHaveBeenCalled();
		expect(onSubmit).not.toHaveBeenCalled();
		expect(onDocumentClick).not.toHaveBeenCalled();
	});

	it('keeps the reason open when the disabled button is clicked', async () => {
		await page.render(
			<DsButtonV3 disabled disabledReason={REASON}>
				Delete
			</DsButtonV3>,
		);

		const button = page.getByRole('button', { name: 'Delete' });
		const tooltip = page.getByRole('tooltip', { name: REASON });

		await button.hover();
		await expect.element(tooltip).toBeVisible();

		await button.click({ force: true });
		await expect.element(tooltip).toBeVisible();
	});

	it('keeps the reason open while the pointer moves onto it', async () => {
		await page.render(
			<DsButtonV3 disabled disabledReason={REASON}>
				Delete
			</DsButtonV3>,
		);

		const tooltip = page.getByRole('tooltip', { name: REASON });

		await page.getByRole('button', { name: 'Delete' }).hover();
		await expect.element(tooltip).toBeVisible();

		await tooltip.hover();
		await wait(SETTLE_MS);
		await expect.element(tooltip).toBeVisible();
	});

	it('does not open a menu it triggers', async () => {
		const onOpenChange = vi.fn();

		await page.render(
			<DsDropdownMenu.Root onOpenChange={onOpenChange}>
				<DsDropdownMenu.Trigger asChild>
					<DsButtonV3 disabled disabledReason={REASON}>
						Actions
					</DsButtonV3>
				</DsDropdownMenu.Trigger>
				<DsDropdownMenu.Content>
					<DsDropdownMenu.Item value="edit">Edit</DsDropdownMenu.Item>
				</DsDropdownMenu.Content>
			</DsDropdownMenu.Root>,
		);

		const trigger = page.getByRole('button', { name: 'Actions' });

		await tabIntoFrame();
		await expect.element(trigger).toHaveFocus();

		await userEvent.keyboard('{Enter}');
		await userEvent.keyboard('{ArrowDown}');
		await trigger.click({ force: true });

		expect(onOpenChange).not.toHaveBeenCalled();
		await expect.element(trigger).toHaveAttribute('aria-expanded', 'false');
	});

	it('acts as a regular button while enabled', async () => {
		const onClick = vi.fn();

		await page.render(
			<DsButtonV3 disabledReason={REASON} onClick={onClick}>
				Delete
			</DsButtonV3>,
		);

		const button = page.getByRole('button', { name: 'Delete' });

		// Keyboard focus would open the reason right away, with no hover delay.
		await tabIntoFrame();
		await expect.element(button).toHaveFocus();
		await wait(SETTLE_MS);
		await expect.element(page.getByRole('tooltip')).not.toBeInTheDocument();

		await button.click();
		expect(onClick).toHaveBeenCalledOnce();
		await expect.element(button).not.toHaveAttribute('aria-disabled');
		await expect.element(button).not.toHaveAccessibleDescription();
	});

	it('keeps its own aria-describedby alongside the reason', async () => {
		await page.render(
			<>
				<p id="delete-hint">Deleted items stay in the bin for 30 days</p>
				<DsButtonV3 disabled disabledReason={REASON} aria-describedby="delete-hint">
					Delete
				</DsButtonV3>
			</>,
		);

		await expect
			.element(page.getByRole('button', { name: 'Delete' }))
			.toHaveAccessibleDescription(`${REASON} Deleted items stay in the bin for 30 days`);
	});

	it('shows the reason instead of a wrapping label tooltip while disabled', async () => {
		const { rerender } = await page.render(
			<DsTooltip content="Delete row">
				<DsButtonV3 icon="delete" aria-label="Delete" disabled disabledReason={REASON} />
			</DsTooltip>,
		);

		const button = page.getByRole('button', { name: 'Delete' });

		await expect.element(button).toHaveAccessibleName('Delete');
		await expect.element(button).toHaveAccessibleDescription(REASON);

		await button.hover();
		await expect.element(page.getByRole('tooltip', { name: REASON })).toBeVisible();
		await expect.element(page.getByRole('tooltip', { name: 'Delete row' })).not.toBeInTheDocument();

		await button.unhover();
		await rerender(
			<DsTooltip content="Delete row">
				<DsButtonV3 icon="delete" aria-label="Delete" disabledReason={REASON} />
			</DsTooltip>,
		);

		await button.hover();
		await expect.element(page.getByRole('tooltip', { name: 'Delete row' })).toBeVisible();
	});

	it('keeps focus on the same button when it becomes disabled with a reason', async () => {
		const ExportButton = ({ reason }: { reason?: string }) => (
			<DsButtonV3 disabled={reason !== undefined} disabledReason={reason}>
				Export
			</DsButtonV3>
		);

		const { rerender } = await page.render(<ExportButton />);

		await tabIntoFrame();
		const focusedBefore = page.getByRole('button', { name: 'Export' }).element();
		await expect.element(page.getByRole('button', { name: 'Export' })).toHaveFocus();

		await rerender(<ExportButton reason="An export is already running" />);

		const button = page.getByRole('button', { name: 'Export' });

		expect(button.element()).toBe(focusedBefore);
		await expect.element(button).toHaveFocus();
		await expect.element(button).toHaveAccessibleDescription('An export is already running');
	});

	it.each(colorVariantPairs)(
		'looks the same as a natively disabled $color $variant button',
		async ({ color, variant }) => {
			await page.render(
				<>
					<DsButtonV3 color={color} variant={variant} disabled>
						Native
					</DsButtonV3>
					<DsButtonV3 color={color} variant={variant} disabled disabledReason={REASON}>
						With reason
					</DsButtonV3>
				</>,
			);

			const native = page.getByRole('button', { name: 'Native' }).element();
			const withReason = page.getByRole('button', { name: 'With reason' }).element();

			expect(disabledLook(withReason)).toEqual(disabledLook(native));
		},
	);

	it('keeps disabled colors and shows a focus ring when focused from the keyboard', async () => {
		await page.render(
			<>
				<DsButtonV3 disabled>Native</DsButtonV3>
				<DsButtonV3 disabled disabledReason={REASON}>
					With reason
				</DsButtonV3>
			</>,
		);

		const withReasonButton = page.getByRole('button', { name: 'With reason' });

		await tabIntoFrame();
		await expect.element(withReasonButton).toHaveFocus();

		const native = getComputedStyle(page.getByRole('button', { name: 'Native' }).element());
		const withReason = getComputedStyle(withReasonButton.element());

		expect(withReason.backgroundColor).toBe(native.backgroundColor);
		expect(withReason.color).toBe(native.color);
		expect(withReason.outlineStyle).toBe('solid');
	});
});
