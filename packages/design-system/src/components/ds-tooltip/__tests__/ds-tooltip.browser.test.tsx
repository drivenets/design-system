import { describe, expect, it } from 'vitest';
import { page } from 'vitest/browser';
import DsTooltip from '../ds-tooltip';

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
});
