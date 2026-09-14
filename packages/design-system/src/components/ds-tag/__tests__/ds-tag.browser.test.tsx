import { useState, type ReactElement } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { page, userEvent } from 'vitest/browser';

import DsTag from '../ds-tag';
import { tagSizes, tagVariants, type DsTagProps, type TagVariant } from '../ds-tag.types';
import { DsIcon } from '../../ds-icon';

const LONG_VALUE = 'Networking, Security, Observability and Automation';

const keyElement = () => page.getByText('Category', { exact: true }).element();

const valueElement = () => page.getByText(LONG_VALUE).element();

const rawReadableText = (element: Element): string => {
	if (element.getAttribute('aria-hidden') === 'true') {
		return '';
	}

	let text = '';

	for (const node of element.childNodes) {
		if (node.nodeType === Node.ELEMENT_NODE) {
			text += rawReadableText(node as Element);
		} else if (node.nodeType === Node.TEXT_NODE) {
			text += node.textContent ?? '';
		}
	}

	return text;
};

/*
 * What the tag actually announces, as opposed to `textContent`: an `aria-hidden` subtree
 * contributes nothing. `DsIcon` renders a Material icon as `<span>{icon}</span>`, so an icon that
 * is not hidden leaks its ligature name (`keyboard_arrow_right`) into the text a reader gets.
 */
const readableText = (element: Element): string => rawReadableText(element).replace(/\s+/g, ' ').trim();

const readableChildren = (element: Element): string[] =>
	[...element.children].map((child) => readableText(child));

const width = (element: Element): number => element.getBoundingClientRect().width;

const textWidth = (element: Element): number => {
	const range = document.createRange();
	range.selectNodeContents(element);

	return range.getBoundingClientRect().width;
};

const parentRegionOf = (child: Element): Element => {
	const region = child.parentElement;

	if (!region) {
		throw new Error('The segment is not mounted inside a parent region');
	}

	return region;
};

const horizontalGap = (before: Element, after: Element): number =>
	after.getBoundingClientRect().left - before.getBoundingClientRect().right;

// The segments row gap is a token, so expected offsets are derived from it rather than hardcoded.
const columnGap = (row: Element): number => Number.parseFloat(window.getComputedStyle(row).columnGap);

const segment = (text: string) => page.getByText(new RegExp(`^${text}$`));

const segmentStyle = (text: string) => window.getComputedStyle(segment(text).element());

const OPERATOR_SENTINEL = <span>operator slot sentinel</span>;

const OPERATOR_SENTINEL_TEXT = /^operator slot sentinel$/;

/*
 * `warning` and `onExpandClick` are contracts of every variant, so they are exercised through one
 * builder that gives each variant the props its union member needs.
 */
type SharedTagProps = Partial<
	Pick<DsTagProps, 'warning' | 'onExpandClick' | 'slots' | 'shape' | 'size' | 'onClick'>
>;

const tagOfVariant = (variant: TagVariant, shared: SharedTagProps = {}): ReactElement => {
	if (variant === 'key-value' || variant === 'operator-filter' || variant === 'query-filter') {
		return <DsTag {...shared} variant={variant} label="Field" value="Value" />;
	}

	return <DsTag {...shared} variant={variant} label="Field" />;
};

describe('DsTag', () => {
	it('renders the label and exposes no button role without handlers', async () => {
		await page.render(<DsTag label="Default Tag" />);

		await expect.element(page.getByText('Default Tag')).toBeInTheDocument();
		await expect.element(page.getByRole('button')).not.toBeInTheDocument();
	});

	it('fires onClick on every click', async () => {
		const onClick = vi.fn();
		await page.render(<DsTag label="Clickable Tag" onClick={onClick} />);

		const tag = page.getByRole('button', { name: 'Clickable Tag' });

		await tag.click();
		expect(onClick).toHaveBeenCalledTimes(1);

		await tag.click();
		expect(onClick).toHaveBeenCalledTimes(2);
	});

	it('toggles aria-pressed on click and removes itself on delete (controlled)', async () => {
		function Controlled() {
			const [deleted, setDeleted] = useState(false);
			const [selected, setSelected] = useState(true);

			if (deleted) {
				return <span>Poof! Deleted!</span>;
			}

			return (
				<DsTag
					selected={selected}
					label="Controlled"
					onDelete={() => setDeleted(true)}
					onClick={() => setSelected(!selected)}
				/>
			);
		}

		await page.render(<Controlled />);

		const tag = page.getByRole('button', { name: 'Controlled' });
		await expect.element(tag).toHaveAttribute('aria-pressed', 'true');

		await tag.click();
		await expect.element(tag).not.toHaveAttribute('aria-pressed');

		await tag.click();
		await expect.element(tag).toHaveAttribute('aria-pressed', 'true');

		await tag.hover();
		await page.getByRole('button', { name: 'Delete tag' }).click();

		await expect.element(page.getByText('Poof! Deleted!')).toBeInTheDocument();
		await expect.element(tag).not.toBeInTheDocument();
	});

	it('does not render a delete button or fire callbacks when disabled', async () => {
		const onClick = vi.fn();
		const onDelete = vi.fn();
		await page.render(<DsTag label="Disabled Tag" selected disabled onClick={onClick} onDelete={onDelete} />);

		const tag = page.getByRole('button', { name: 'Disabled Tag' });
		await expect.element(tag).toHaveAttribute('aria-disabled', 'true');
		await expect.element(page.getByRole('button', { name: 'Delete tag' })).not.toBeInTheDocument();

		await tag.click({ force: true });
		expect(onClick).not.toHaveBeenCalled();
		expect(onDelete).not.toHaveBeenCalled();
	});
});

describe('DsTag variants', () => {
	it('renders the include icon', async () => {
		await page.render(<DsTag label="Include Tag" variant="include" />);

		await expect.element(page.getByText('Include Tag')).toBeInTheDocument();
		await expect.element(page.getByText('check_circle')).toBeInTheDocument();
	});

	it('renders the exclude icon', async () => {
		await page.render(<DsTag label="Exclude Tag" variant="exclude" />);

		await expect.element(page.getByText('do_not_disturb_on')).toBeInTheDocument();
	});

	it('renders a custom slot icon instead of the variant icon', async () => {
		await page.render(
			<DsTag
				label="Custom Icon Tag"
				variant="include"
				slots={{ icon: <DsIcon icon="star" size="tiny" /> }}
			/>,
		);

		await expect.element(page.getByText('star')).toBeInTheDocument();
		await expect.element(page.getByText('check_circle')).not.toBeInTheDocument();
	});
});

describe('DsTag keyboard interaction', () => {
	it('fires onClick when Enter or Space is pressed on the tag', async () => {
		const onClick = vi.fn();
		await page.render(<DsTag label="Keyboard Tag" onClick={onClick} />);

		(page.getByRole('button', { name: 'Keyboard Tag' }).element() as HTMLElement).focus();

		await userEvent.keyboard('{Enter}');
		expect(onClick).toHaveBeenCalledTimes(1);

		await userEvent.keyboard(' ');
		expect(onClick).toHaveBeenCalledTimes(2);
	});

	it('fires onDelete when Backspace or Delete is pressed on the tag', async () => {
		const onClick = vi.fn();
		const onDelete = vi.fn();
		await page.render(<DsTag label="Keyboard Tag" onClick={onClick} onDelete={onDelete} />);

		(page.getByRole('button', { name: 'Keyboard Tag' }).element() as HTMLElement).focus();

		await userEvent.keyboard('{Backspace}');
		expect(onDelete).toHaveBeenCalledTimes(1);

		await userEvent.keyboard('{Delete}');
		expect(onDelete).toHaveBeenCalledTimes(2);

		expect(onClick).not.toHaveBeenCalled();
	});

	it('fires onDelete and stops propagation when the delete button is activated by keyboard', async () => {
		const onClick = vi.fn();
		const onDelete = vi.fn();
		await page.render(<DsTag label="Keyboard Tag" onClick={onClick} onDelete={onDelete} />);

		await page.getByRole('button', { name: 'Keyboard Tag' }).hover();

		const deleteButton = page.getByRole('button', { name: 'Delete tag' });
		await expect.element(deleteButton).toBeVisible();
		(deleteButton.element() as HTMLElement).focus();

		await userEvent.keyboard('{Enter}');
		expect(onDelete).toHaveBeenCalledTimes(1);

		await userEvent.keyboard(' ');
		expect(onDelete).toHaveBeenCalledTimes(2);

		expect(onClick).not.toHaveBeenCalled();
	});
});

describe('DsTag key-value variant', () => {
	it('reads as key, colon separator, then value', async () => {
		await page.render(<DsTag variant="key-value" label="Category" value="Networking" />);

		await expect.element(page.getByText('Category', { exact: true })).toBeInTheDocument();
		await expect.element(page.getByText('Networking')).toBeInTheDocument();

		const key = keyElement();
		const row = parentRegionOf(key);

		// The colon is CSS generated content, so it stays out of text content; key precedes value.
		expect(key.textContent).toBe('Category');
		expect([...row.children].map((child) => child.textContent)).toEqual(['Category', 'Networking']);
		expect(row.textContent).toBe('CategoryNetworking');
	});

	it('truncates a long value with an ellipsis when the tag is width constrained', async () => {
		await page.render(
			<DsTag variant="key-value" label="Category" value={LONG_VALUE} style={{ maxWidth: '160px' }} />,
		);

		const value = valueElement();
		const { textOverflow, overflow, whiteSpace } = window.getComputedStyle(value);

		expect(whiteSpace).toBe('nowrap');
		expect(overflow).toBe('hidden');
		expect(textOverflow).toBe('ellipsis');
		expect(value.scrollWidth).toBeGreaterThan(value.clientWidth);
	});

	it('clips the value but never the key when the tag is width constrained', async () => {
		await page.render(
			<DsTag variant="key-value" label="Category" value={LONG_VALUE} style={{ maxWidth: '160px' }} />,
		);

		const key = keyElement();
		const value = valueElement();

		expect(textWidth(key)).toBeLessThanOrEqual(width(key) + 1);
		expect(textWidth(value)).toBeGreaterThan(width(value) + 1);
	});

	it('fires onDelete from the revealed delete button', async () => {
		const onDelete = vi.fn();
		await page.render(<DsTag variant="key-value" label="Category" value="Networking" onDelete={onDelete} />);

		// Delete button is hidden until the tag is hovered/focused.
		await page.getByRole('button', { name: 'Category' }).hover();

		const deleteButton = page.getByRole('button', { name: 'Delete tag' });
		await expect.element(deleteButton).toBeVisible();
		await deleteButton.click();

		expect(onDelete).toHaveBeenCalledOnce();
	});
});

describe('DsTag query-filter variant', () => {
	it('reads as label then value, with the separator icon kept out of the reading order', async () => {
		await page.render(<DsTag variant="query-filter" label="Region" value="Site A" />);

		const region = parentRegionOf(segment('Region').element());
		const separator = region.children[1];

		// Head, then a segment that reads as nothing, then the tail.
		expect(readableChildren(region)).toEqual(['Region', '', 'Site A']);
		expect(readableText(region)).not.toContain('keyboard_arrow_right');

		// That silent middle segment is the separator: still in the DOM to draw the chevron, but
		// hidden from the AX tree so its ligature name never reaches the reader.
		expect(separator?.textContent).toBe('keyboard_arrow_right');
		expect(separator?.getAttribute('aria-hidden')).toBe('true');
	});

	it.each([
		['medium', '14px'],
		['small', '12px'],
	] as const)('inverts the key-value emphasis onto the tail at %s size', async (size, fontSize) => {
		await page.render(
			<>
				<DsTag variant="key-value" size={size} label="Category" value="Networking" />
				<DsTag variant="query-filter" size={size} label="Region" value="Site A" />
			</>,
		);

		const head = segmentStyle('Region');
		const tail = segmentStyle('Site A');
		const mutedValue = segmentStyle('Networking');
		const emphasizedKey = window.getComputedStyle(keyElement());

		expect(head.fontSize).toBe(fontSize);
		expect(tail.fontSize).toBe(fontSize);
		expect(head.fontWeight).toBe('400');
		expect(tail.fontWeight).toBe('600');

		// key-value puts the weight on the head and mutes the tail — query-filter must do neither.
		expect(emphasizedKey.fontWeight).toBe('500');
		expect(mutedValue.color).not.toBe(emphasizedKey.color);
		expect(tail.color).toBe(head.color);
		expect(tail.color).not.toBe(mutedValue.color);
	});

	it('keeps a width-constrained long value clipped behind an ellipsis', async () => {
		await page.render(
			<DsTag variant="query-filter" label="Region" value={LONG_VALUE} style={{ maxWidth: '160px' }} />,
		);

		const value = valueElement();

		expect(window.getComputedStyle(value).textOverflow).toBe('ellipsis');
		expect(value.scrollWidth).toBeGreaterThan(value.clientWidth);
		expect(textWidth(value)).toBeGreaterThan(width(value) + 1);
	});
});

describe('DsTag operator-filter variant', () => {
	it('renders label, then the operator slot, then value', async () => {
		await page.render(
			<DsTag
				variant="operator-filter"
				label="Bandwidth"
				value="10 Gbps"
				slots={{ operator: <button type="button">≠</button> }}
			/>,
		);

		const region = parentRegionOf(segment('Bandwidth').element());

		expect([...region.children].map((child) => child.textContent)).toEqual(['Bandwidth', '≠', '10 Gbps']);
	});

	it('reserves no gap for a missing operator slot', async () => {
		await page.render(
			<>
				<DsTag variant="operator-filter" label="Bandwidth" value="10 Gbps" />
				<DsTag
					variant="operator-filter"
					label="Latency"
					value="20 ms"
					slots={{ operator: <button type="button">≠</button> }}
				/>
			</>,
		);

		const bareRegion = parentRegionOf(segment('Bandwidth').element());
		const bareGap = horizontalGap(segment('Bandwidth').element(), segment('10 Gbps').element());

		const slottedRegion = parentRegionOf(segment('Latency').element());
		const slotWrapper = parentRegionOf(page.getByRole('button', { name: '≠' }).element());
		const slottedGap = horizontalGap(segment('Latency').element(), segment('20 ms').element());

		expect(bareRegion.children.length).toBe(2);
		expect(Math.abs(bareGap - columnGap(bareRegion))).toBeLessThanOrEqual(1);

		// With a slot the same row spans two token gaps plus the trigger — the bare row spans one.
		expect(Math.abs(slottedGap - (2 * columnGap(slottedRegion) + width(slotWrapper)))).toBeLessThanOrEqual(1);
	});

	it('does not fire the tag onClick when the operator slot is clicked', async () => {
		const onClick = vi.fn();
		const onOperatorClick = vi.fn();
		await page.render(
			<DsTag
				variant="operator-filter"
				label="Bandwidth"
				value="10 Gbps"
				onClick={onClick}
				slots={{
					operator: (
						<button type="button" onClick={onOperatorClick}>
							≠
						</button>
					),
				}}
			/>,
		);

		await page.getByRole('button', { name: '≠' }).click();

		expect(onOperatorClick).toHaveBeenCalledOnce();
		expect(onClick).not.toHaveBeenCalled();
	});

	it('lets a slot input swallow Enter and Backspace instead of activating or deleting the tag', async () => {
		const onClick = vi.fn();
		const onDelete = vi.fn();
		await page.render(
			<DsTag
				variant="operator-filter"
				label="Bandwidth"
				value="10 Gbps"
				onClick={onClick}
				onDelete={onDelete}
				slots={{ operator: <input type="text" aria-label="Operator" /> }}
			/>,
		);

		const operatorInput = page.getByRole('textbox', { name: 'Operator' });
		await operatorInput.fill('contains');

		await userEvent.keyboard('{Enter}');
		await userEvent.keyboard('{Backspace}');

		await expect.element(operatorInput).toHaveValue('contain');
		expect(onClick).not.toHaveBeenCalled();
		expect(onDelete).not.toHaveBeenCalled();
	});

	it('keeps a width-constrained long value clipped behind an ellipsis', async () => {
		await page.render(
			<DsTag
				variant="operator-filter"
				label="Bandwidth"
				value={LONG_VALUE}
				style={{ maxWidth: '160px' }}
				slots={{ operator: <button type="button">≠</button> }}
			/>,
		);

		const value = valueElement();

		expect(window.getComputedStyle(value).textOverflow).toBe('ellipsis');
		expect(value.scrollWidth).toBeGreaterThan(value.clientWidth);
		expect(textWidth(value)).toBeGreaterThan(width(value) + 1);
	});
});

describe('DsTag operator slot is variant scoped', () => {
	it.each(tagVariants.filter((variant) => variant !== 'operator-filter'))(
		'ignores slots.operator on the %s variant',
		async (variant) => {
			await page.render(tagOfVariant(variant, { slots: { operator: OPERATOR_SENTINEL } }));

			await expect.element(page.getByText(/^Field:?$/)).toBeVisible();
			await expect.element(page.getByText(OPERATOR_SENTINEL_TEXT)).not.toBeInTheDocument();
		},
	);

	it('renders the same slot node for the operator-filter variant', async () => {
		await page.render(
			<DsTag variant="operator-filter" label="Field" value="Value" slots={{ operator: OPERATOR_SENTINEL }} />,
		);

		await expect.element(page.getByText(OPERATOR_SENTINEL_TEXT)).toBeVisible();
	});
});

describe('DsTag expand chevron', () => {
	it('renders only with onExpandClick and stays visible without hover, unlike delete', async () => {
		const { rerender } = await page.render(<DsTag label="Region" onDelete={vi.fn()} />);

		await expect.element(page.getByRole('button', { name: 'Expand' })).not.toBeInTheDocument();

		await rerender(<DsTag label="Region" onDelete={vi.fn()} onExpandClick={vi.fn()} />);

		await expect.element(page.getByRole('button', { name: 'Expand' })).toBeVisible();

		// The delete button is mounted but `visibility: hidden` until hover; the chevron never is.
		await expect
			.element(page.getByRole('button', { name: 'Delete tag', includeHidden: true }))
			.not.toBeVisible();
		await page.getByRole('button', { name: 'Region' }).hover();
		await expect.element(page.getByRole('button', { name: 'Delete tag' })).toBeVisible();
		await expect.element(page.getByRole('button', { name: 'Expand' })).toBeVisible();
	});

	it('fires onExpandClick on click without firing the tag onClick', async () => {
		const onClick = vi.fn();
		const onExpandClick = vi.fn();
		await page.render(<DsTag label="Region" onClick={onClick} onExpandClick={onExpandClick} />);

		await page.getByRole('button', { name: 'Expand' }).click();

		expect(onExpandClick).toHaveBeenCalledOnce();
		expect(onClick).not.toHaveBeenCalled();
	});

	it('activates on Enter and Space and swallows the tag delete shortcut', async () => {
		const onClick = vi.fn();
		const onDelete = vi.fn();
		const onExpandClick = vi.fn();
		await page.render(
			<DsTag label="Region" onClick={onClick} onDelete={onDelete} onExpandClick={onExpandClick} />,
		);

		(page.getByRole('button', { name: 'Expand' }).element() as HTMLElement).focus();

		await userEvent.keyboard('{Enter}');
		expect(onExpandClick).toHaveBeenCalledTimes(1);

		await userEvent.keyboard(' ');
		expect(onExpandClick).toHaveBeenCalledTimes(2);

		await userEvent.keyboard('{Backspace}');
		expect(onDelete).not.toHaveBeenCalled();
		expect(onClick).not.toHaveBeenCalled();
	});

	it('is suppressed by disabled, the same way the delete button is', async () => {
		const onClick = vi.fn();
		const onDelete = vi.fn();
		const onExpandClick = vi.fn();
		await page.render(
			<DsTag label="Region" disabled onClick={onClick} onDelete={onDelete} onExpandClick={onExpandClick} />,
		);

		await expect.element(page.getByRole('button', { name: 'Expand' })).not.toBeInTheDocument();
		await expect.element(page.getByRole('button', { name: 'Delete tag' })).not.toBeInTheDocument();

		await page.getByRole('button', { name: 'Region' }).click({ force: true });

		expect(onExpandClick).not.toHaveBeenCalled();
		expect(onDelete).not.toHaveBeenCalled();
		expect(onClick).not.toHaveBeenCalled();
	});

	it('keeps no expanded state and reveals no region across repeated clicks', async () => {
		const onClick = vi.fn();
		const onExpandClick = vi.fn();
		await page.render(<DsTag label="Region" onClick={onClick} onExpandClick={onExpandClick} />);

		const tag = page.getByRole('button', { name: 'Region' }).element();
		const chevron = page.getByRole('button', { name: 'Expand' });

		await chevron.click();
		await chevron.click();
		await chevron.click();

		expect(onExpandClick).toHaveBeenCalledTimes(3);
		expect(onClick).not.toHaveBeenCalled();
		// Neither the tag root nor anything inside it grows an expanded state.
		expect(parentRegionOf(tag).querySelector('[aria-expanded]')).toBeNull();
	});
});

describe('DsTag warning dot', () => {
	it('renders a named dot only when warning is set', async () => {
		const { rerender } = await page.render(<DsTag label="Region" />);

		await expect.element(page.getByRole('img', { name: 'Warning' })).not.toBeInTheDocument();

		await rerender(<DsTag label="Region" warning />);

		await expect.element(page.getByRole('img', { name: 'Warning' })).toBeVisible();
	});

	it('takes the warning and expand accessible names from locale', async () => {
		await page.render(
			<DsTag
				label="Region"
				warning
				onExpandClick={vi.fn()}
				locale={{ warningAriaLabel: 'Overlapping filter', expandAriaLabel: 'Show matches' }}
			/>,
		);

		await expect.element(page.getByRole('img', { name: 'Overlapping filter' })).toBeVisible();
		await expect.element(page.getByRole('button', { name: 'Show matches' })).toBeVisible();
		await expect.element(page.getByRole('img', { name: 'Warning' })).not.toBeInTheDocument();
		await expect.element(page.getByRole('button', { name: 'Expand' })).not.toBeInTheDocument();
	});

	/*
	 * An interactive tag is a `role="button"`, which makes its subtree presentational and prunes the
	 * dot's own name — so the warning has to reach the reader through the root name instead.
	 */
	it('folds the warning into the root name when the tag is interactive', async () => {
		await page.render(<DsTag label="Region" warning onClick={vi.fn()} />);

		await expect.element(page.getByRole('button', { name: 'Region, Warning' })).toBeVisible();
	});

	it('folds the locale warning name into the root name when the tag is interactive', async () => {
		await page.render(
			<DsTag label="Region" warning onClick={vi.fn()} locale={{ warningAriaLabel: 'Overlapping filter' }} />,
		);

		await expect.element(page.getByRole('button', { name: 'Region, Overlapping filter' })).toBeVisible();
		await expect.element(page.getByRole('button', { name: 'Region, Warning' })).not.toBeInTheDocument();
	});
});

describe('DsTag cross-cutting props on every variant', () => {
	it.each(tagVariants)('carries the warning dot and a working chevron on the %s variant', async (variant) => {
		const onExpandClick = vi.fn();
		await page.render(tagOfVariant(variant, { warning: true, onExpandClick }));

		await expect.element(page.getByRole('img', { name: 'Warning' })).toBeVisible();
		await page.getByRole('button', { name: 'Expand' }).click();

		expect(onExpandClick).toHaveBeenCalledOnce();
	});

	// `border-radius` lives on `.tag` itself, independent of variant and size, so one pair covers it.
	it('switches between the 4px radius and a pill as shape changes', async () => {
		const onClick = vi.fn();
		const { rerender } = await page.render(<DsTag label="Field" onClick={onClick} />);

		const tag = page.getByRole('button', { name: 'Field' });
		expect(window.getComputedStyle(tag.element()).borderRadius).toBe('4px');

		await rerender(<DsTag label="Field" onClick={onClick} shape="round" />);
		expect(window.getComputedStyle(tag.element()).borderRadius).toBe('9999px');

		await rerender(<DsTag label="Field" onClick={onClick} shape="default" />);
		expect(window.getComputedStyle(tag.element()).borderRadius).toBe('4px');
	});

	/*
	 * The radius rule lives on the root `.tag`, so it is structurally independent of variant and
	 * size — but the criterion is explicit that it must hold for all six variants at both sizes, so
	 * assert the whole grid. One test walking the combinations, rather than twelve near-identical
	 * cases.
	 */
	it('applies the pill radius to every variant at both sizes', async () => {
		const onClick = vi.fn();
		const { rerender } = await page.render(<DsTag label="Field" onClick={onClick} shape="round" />);

		const radiusOfRoot = () =>
			window.getComputedStyle(page.getByRole('button', { name: 'Field' }).element()).borderRadius;

		for (const variant of tagVariants) {
			for (const size of tagSizes) {
				await rerender(tagOfVariant(variant, { size, shape: 'round', onClick }));

				expect(radiusOfRoot(), `${variant} at ${size}`).toBe('9999px');
			}
		}
	});
});
