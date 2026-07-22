import { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { page, userEvent } from 'vitest/browser';

import { DsCard } from '../ds-card';
import { DsIcon } from '../../ds-icon';
import { DsTypography } from '../../ds-typography';
import { DsStack } from '../../ds-stack';

function ControlledSelectableCard() {
	const [selected, setSelected] = useState(false);

	return (
		<DsCard.Root selectable selected={selected} onClick={() => setSelected(!selected)}>
			<DsCard.Header>Controlled Card</DsCard.Header>
			<DsCard.Body>{selected ? 'Selected! Click to deselect.' : 'Click to select.'}</DsCard.Body>
		</DsCard.Root>
	);
}

function CollapsibleCard() {
	const [expanded, setExpanded] = useState(true);

	return (
		<DsCard.Root size="large">
			<DsCard.Header>
				<button type="button" onClick={() => setExpanded(!expanded)} aria-expanded={expanded}>
					<DsIcon icon="expand_more" />
				</button>
				<DsTypography variant="heading3">Collapsible Card</DsTypography>
			</DsCard.Header>
			{expanded && (
				<DsCard.Body>
					<DsTypography variant="body-md-reg">
						This content can be collapsed by clicking the header.
					</DsTypography>
				</DsCard.Body>
			)}
		</DsCard.Root>
	);
}

function cardRootFromLabel(label: string) {
	const labelElement = page.getByText(label).element() as HTMLElement;
	return page.elementLocator(labelElement.closest('[data-size]') as HTMLElement);
}

describe('DsCard', () => {
	it('renders a static card without button semantics', async () => {
		await page.render(
			<DsCard.Root size="medium">
				<DsCard.Header>Card Title</DsCard.Header>
				<DsCard.Body>Card content goes here</DsCard.Body>
			</DsCard.Root>,
		);

		await expect.element(page.getByText('Card Title')).toBeVisible();
		await expect.element(page.getByText('Card content goes here')).toBeVisible();
		await expect.element(page.getByRole('button')).not.toBeInTheDocument();
	});

	it('applies the correct data-size attribute for each size', async () => {
		await page.render(
			<DsStack direction="row" gap="var(--sm)" flexWrap="wrap">
				<DsCard.Root size="small">
					<DsCard.Header>Small Card</DsCard.Header>
					<DsCard.Body>Small content</DsCard.Body>
				</DsCard.Root>
				<DsCard.Root size="medium">
					<DsCard.Header>Medium Card</DsCard.Header>
					<DsCard.Body>Medium content</DsCard.Body>
				</DsCard.Root>
				<DsCard.Root size="large">
					<DsCard.Header>Large Card</DsCard.Header>
					<DsCard.Body>Large content</DsCard.Body>
				</DsCard.Root>
			</DsStack>,
		);

		await expect.element(cardRootFromLabel('Small Card')).toHaveAttribute('data-size', 'small');
		await expect.element(cardRootFromLabel('Medium Card')).toHaveAttribute('data-size', 'medium');
		await expect.element(cardRootFromLabel('Large Card')).toHaveAttribute('data-size', 'large');
	});

	it('fires onClick when a selectable card is clicked', async () => {
		const onClick = vi.fn();

		await page.render(
			<DsCard.Root selectable selected={false} onClick={onClick}>
				<DsCard.Header>Selectable Card</DsCard.Header>
				<DsCard.Body>Click to select this card</DsCard.Body>
			</DsCard.Root>,
		);

		const card = page.getByRole('button');
		await expect.element(card).toHaveAttribute('aria-pressed', 'false');

		await card.click();

		expect(onClick).toHaveBeenCalledOnce();
	});

	it('exposes selected and highlight data attributes when highlightSelected is true', async () => {
		await page.render(
			<DsCard.Root selectable selected highlightSelected>
				<DsCard.Header>Highlighted Card</DsCard.Header>
				<DsCard.Body>This card has a highlighted background when selected</DsCard.Body>
			</DsCard.Root>,
		);

		const card = page.getByRole('button');
		await expect.element(card).toHaveAttribute('aria-pressed', 'true');
		await expect.element(card).toHaveAttribute('data-highlight', 'true');
		await expect.element(card).toHaveAttribute('data-selected', 'true');
	});

	it('toggles controlled selection when clicked', async () => {
		await page.render(<ControlledSelectableCard />);

		const card = page.getByRole('button');
		await expect.element(card).toHaveAttribute('aria-pressed', 'false');

		await card.click();
		await expect.element(card).toHaveAttribute('aria-pressed', 'true');
		await expect.element(page.getByText('Selected! Click to deselect.')).toBeVisible();

		await card.click();
		await expect.element(card).toHaveAttribute('aria-pressed', 'false');
		await expect.element(page.getByText('Click to select.')).toBeVisible();
	});

	it('does not fire onClick when disabled', async () => {
		const onClick = vi.fn();

		await page.render(
			<DsCard.Root selectable disabled onClick={onClick}>
				<DsCard.Header>Disabled Card</DsCard.Header>
				<DsCard.Body>Cannot interact</DsCard.Body>
			</DsCard.Root>,
		);

		const card = page.getByRole('button');
		await expect.element(card).toHaveAttribute('aria-disabled', 'true');
		await expect.element(card).toHaveAttribute('tabindex', '-1');

		await card.click({ force: true });
		expect(onClick).not.toHaveBeenCalled();

		(card.element() as HTMLElement).focus();
		await userEvent.keyboard('{Enter}');
		expect(onClick).not.toHaveBeenCalled();

		await userEvent.keyboard(' ');
		expect(onClick).not.toHaveBeenCalled();
	});

	it('toggles collapsible content via the header button', async () => {
		await page.render(<CollapsibleCard />);

		const toggleButton = page.getByRole('button');
		await expect.element(toggleButton).toHaveAttribute('aria-expanded', 'true');

		await toggleButton.click();
		await expect.element(toggleButton).toHaveAttribute('aria-expanded', 'false');

		await toggleButton.click();
		await expect.element(toggleButton).toHaveAttribute('aria-expanded', 'true');
	});
});
