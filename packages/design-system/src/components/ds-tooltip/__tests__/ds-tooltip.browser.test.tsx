import { createRef } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';
import DsTooltip from '../ds-tooltip';
import { DsPopover } from '../../ds-popover';

describe('DsTooltip', () => {
	it('should show tooltip on hover', async () => {
		await page.render(
			<DsTooltip content="Tooltip text">
				<button type="button">Trigger</button>
			</DsTooltip>,
		);

		await page.getByRole('button', { name: 'Trigger' }).hover();
		await expect.element(page.getByRole('tooltip')).toBeVisible();
	});

	it('should show full long text without truncation', async () => {
		const longText =
			'This tooltip contains a long message that spans multiple lines to verify the content is fully visible without truncation. The tooltip should expand vertically to accommodate all text, regardless of length. Users rely on tooltips to reveal information that may be clipped elsewhere in the interface, so cutting off tooltip content defeats the purpose.';

		await page.render(
			<DsTooltip content={longText}>
				<button type="button">Trigger</button>
			</DsTooltip>,
		);

		await page.getByRole('button', { name: 'Trigger' }).hover();
		await expect.element(page.getByRole('tooltip', { name: longText })).toBeVisible();
	});

	it('should render children directly when content is undefined', async () => {
		await page.render(
			<DsTooltip content={undefined}>
				<button type="button">Trigger</button>
			</DsTooltip>,
		);

		await expect.element(page.getByRole('button', { name: 'Trigger' })).toBeVisible();
	});

	it('should render rich JSX content', async () => {
		await page.render(
			<DsTooltip
				content={
					<div>
						<strong>Bold</strong> and <em>italic</em>
					</div>
				}
			>
				<button type="button">Trigger</button>
			</DsTooltip>,
		);

		await page.getByRole('button', { name: 'Trigger' }).hover();

		const tooltip = page.getByRole('tooltip');
		await expect.element(tooltip).toBeVisible();
		await expect.element(tooltip.getByText('Bold')).toBeVisible();
		await expect.element(tooltip.getByText('italic')).toBeVisible();
	});

	it('should forward slotProps to tooltip content wrapper', async () => {
		await page.render(
			<DsTooltip
				content="Styled tooltip"
				slotProps={{ content: { className: 'custom-tooltip', style: { maxWidth: 200 } } }}
			>
				<button type="button">Trigger</button>
			</DsTooltip>,
		);

		await page.getByRole('button', { name: 'Trigger' }).hover();
		await expect.element(page.getByRole('tooltip')).toBeVisible();

		const wrapper = document.querySelector('.custom-tooltip');
		expect(wrapper).toBeTruthy();
		expect((wrapper as HTMLElement).style.maxWidth).toBe('200px');
	});

	it('should conditionally show tooltip based on content prop', async () => {
		const { rerender } = await page.render(
			<DsTooltip content={undefined}>
				<button type="button">Trigger</button>
			</DsTooltip>,
		);

		const trigger = page.getByRole('button', { name: 'Trigger' });

		await trigger.hover();
		await expect.element(page.getByRole('tooltip')).not.toBeInTheDocument();
		await trigger.unhover();

		await rerender(
			<DsTooltip content="Now visible">
				<button type="button">Trigger</button>
			</DsTooltip>,
		);

		await trigger.hover();
		await expect.element(page.getByRole('tooltip', { name: 'Now visible' })).toBeVisible();
	});

	it('closes immediately when the pointer leaves a non-interactive tooltip', async () => {
		await page.render(
			<DsTooltip content="Tooltip text">
				<button type="button">Trigger</button>
			</DsTooltip>,
		);

		const trigger = page.getByRole('button', { name: 'Trigger' });
		await trigger.hover();
		await expect.element(page.getByRole('tooltip')).toBeVisible();

		await trigger.unhover();
		await expect.element(page.getByRole('tooltip')).not.toBeInTheDocument();
	});

	it('does not block clicks on elements it overlaps when not interactive', async () => {
		const onClick = vi.fn();

		// Bottom placement with the component's 0px gutter puts the panel directly
		// over the button below the trigger.
		await page.render(
			<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
				<DsTooltip content="Covers the button below" placement="bottom">
					<button type="button">Trigger</button>
				</DsTooltip>
				<button type="button" onClick={onClick}>
					Underneath
				</button>
			</div>,
		);

		await page.getByRole('button', { name: 'Trigger' }).hover();
		await expect.element(page.getByRole('tooltip')).toBeVisible();

		// A non-interactive tooltip is decoration; it must stay pointer-transparent.
		await page.getByRole('button', { name: 'Underneath' }).click();
		expect(onClick).toHaveBeenCalledOnce();
	});

	it('keeps an interactive tooltip open so actions inside it can be clicked', async () => {
		const onOpen = vi.fn();

		await page.render(
			<DsTooltip
				interactive
				closeDelay={150}
				content={
					<button type="button" onClick={onOpen}>
						Open in catalog
					</button>
				}
			>
				<button type="button">Trigger</button>
			</DsTooltip>,
		);

		await page.getByRole('button', { name: 'Trigger' }).hover();
		await expect.element(page.getByRole('tooltip')).toBeVisible();

		const action = page.getByRole('button', { name: 'Open in catalog' });
		await action.hover();
		await expect.element(page.getByRole('tooltip')).toBeVisible();

		await action.click();
		expect(onOpen).toHaveBeenCalledOnce();
	});
});

describe('DsTooltip controlled state', () => {
	it('shows the tooltip from a controlled open prop without hover', async () => {
		await page.render(
			<DsTooltip content="Tooltip text" open>
				<button type="button">Trigger</button>
			</DsTooltip>,
		);

		await expect.element(page.getByRole('tooltip')).toBeVisible();
	});

	it('reports hover through onOpenChange but stays hidden while controlled closed', async () => {
		const onOpenChange = vi.fn();

		await page.render(
			<DsTooltip content="Tooltip text" open={false} onOpenChange={onOpenChange}>
				<button type="button">Trigger</button>
			</DsTooltip>,
		);

		await page.getByRole('button', { name: 'Trigger' }).hover();

		await vi.waitFor(() => expect(onOpenChange).toHaveBeenCalledWith(true));
		await expect.element(page.getByRole('tooltip')).not.toBeInTheDocument();
	});

	it('fires onOpenChange on hover and unhover when uncontrolled', async () => {
		const onOpenChange = vi.fn();

		await page.render(
			<DsTooltip content="Tooltip text" onOpenChange={onOpenChange}>
				<button type="button">Trigger</button>
			</DsTooltip>,
		);

		const trigger = page.getByRole('button', { name: 'Trigger' });
		await trigger.hover();
		await vi.waitFor(() => expect(onOpenChange).toHaveBeenCalledWith(true));

		await trigger.unhover();
		await vi.waitFor(() => expect(onOpenChange).toHaveBeenLastCalledWith(false));
	});

	it('opens on mount with defaultOpen', async () => {
		await page.render(
			<DsTooltip content="Tooltip text" defaultOpen>
				<button type="button">Trigger</button>
			</DsTooltip>,
		);

		await expect.element(page.getByRole('tooltip')).toBeVisible();
	});
});

describe('DsTooltip forwarding', () => {
	it.each([
		['with content', 'Tooltip text'],
		['without content', undefined],
	])('forwards ref to the trigger element %s', async (_, content) => {
		const ref = createRef<HTMLElement>();

		await page.render(
			<DsTooltip content={content} ref={ref}>
				<button type="button">Trigger</button>
			</DsTooltip>,
		);

		expect(ref.current).toBe(page.getByRole('button', { name: 'Trigger' }).element());
	});

	it('forwards props injected by an outer trigger when content is undefined', async () => {
		const { container } = await page.render(
			<DsPopover.Root>
				<DsPopover.Trigger>
					<DsTooltip content={undefined}>
						<button type="button">Trigger</button>
					</DsTooltip>
				</DsPopover.Trigger>
				<DsPopover.Panel>
					<DsPopover.Header>Details</DsPopover.Header>
				</DsPopover.Panel>
			</DsPopover.Root>,
		);

		const trigger = page.getByRole('button', { name: 'Trigger' });
		await expect.element(trigger).toHaveAttribute('aria-haspopup', 'dialog');
		// No wrapper element: the button is the trigger itself.
		expect(container.firstElementChild).toBe(trigger.element());

		await trigger.click();
		await expect.element(page.getByRole('dialog', { name: 'Details' })).toBeVisible();
	});
});
