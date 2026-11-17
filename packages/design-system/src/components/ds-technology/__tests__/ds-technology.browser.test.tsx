import { describe, expect, it, vi } from 'vitest';
import { page, userEvent } from 'vitest/browser';
import DsTechnology from '../ds-technology';

const STRAIGHT_PATH = 'M10 50 L190 50';
const DIAGONAL_PATH = 'M10 10 L190 90';
const DISTANCE_FROM_LINE = 6;
const OCH_COLOR = 'rgb(98, 0, 238)';
const OTS_COLOR = 'rgb(255, 152, 0)';

const lineOf = (element: Element) =>
	element.querySelectorAll('path')[element.hasAttribute('data-selected') ? 1 : 0];

describe('DsTechnology', () => {
	it('is hidden from assistive technology when it has no name and no action', async () => {
		const { container } = await page.render(<DsTechnology type="och" />);

		const svg = container.querySelector('svg');

		expect(svg?.getAttribute('aria-hidden')).toBe('true');
		expect(svg?.hasAttribute('tabindex')).toBe(false);
		await expect.element(page.getByRole('button')).not.toBeInTheDocument();
		await expect.element(page.getByRole('img')).not.toBeInTheDocument();
	});

	it('is an image named by its aria-label when it has no action', async () => {
		await page.render(<DsTechnology type="oms" aria-label="OMS link, planned" stage="planned" />);

		await expect.element(page.getByRole('img', { name: 'OMS link, planned' })).toBeInTheDocument();
		await expect.element(page.getByRole('button')).not.toBeInTheDocument();
	});

	it('is a button named by its aria-label and fires onClick', async () => {
		const onClick = vi.fn();
		await page.render(
			<DsTechnology aria-label="OCH service A to B" path={STRAIGHT_PATH} onClick={onClick} />,
		);

		await page.getByRole('button', { name: 'OCH service A to B' }).click({ position: { x: 100, y: 50 } });

		expect(onClick).toHaveBeenCalledOnce();
	});

	it('is reachable with Tab and activated with Enter and Space', async () => {
		const onClick = vi.fn();
		await page.render(<DsTechnology aria-label="OCH service A to B" onClick={onClick} />);

		await userEvent.tab();
		await expect.element(page.getByRole('button', { name: 'OCH service A to B' })).toHaveFocus();

		await userEvent.keyboard('{Enter}');
		expect(onClick).toHaveBeenCalledTimes(1);

		await userEvent.keyboard(' ');
		expect(onClick).toHaveBeenCalledTimes(2);
	});

	it('is clickable next to the visible line, but not far from it', async () => {
		const onClick = vi.fn();
		await page.render(
			<DsTechnology aria-label="OCH service A to B" path={STRAIGHT_PATH} onClick={onClick} />,
		);

		const button = page.getByRole('button', { name: 'OCH service A to B' });

		await button.click({ position: { x: 100, y: 50 + DISTANCE_FROM_LINE } });
		expect(onClick).toHaveBeenCalledOnce();

		await button.click({ position: { x: 100, y: 100 }, force: true });
		expect(onClick).toHaveBeenCalledOnce();
	});

	it('shows feedback on hover and on keyboard focus only when it has an action', async () => {
		const { rerender } = await page.render(
			<DsTechnology aria-label="OCH service A to B" path={STRAIGHT_PATH} onClick={vi.fn()} />,
		);

		const button = page.getByRole('button', { name: 'OCH service A to B' });
		const svg = button.element();
		const line = lineOf(svg) as SVGPathElement;
		await expect.poll(() => getComputedStyle(line).stroke).toBe(OCH_COLOR);
		expect(getComputedStyle(svg).filter).toBe('none');

		await button.hover({ position: { x: 100, y: 50 } });

		await expect.poll(() => getComputedStyle(svg).filter).toContain('drop-shadow');
		await expect.poll(() => getComputedStyle(line).stroke).not.toBe(OCH_COLOR);

		await button.unhover();
		await userEvent.tab();

		await expect.element(button).toHaveFocus();
		await expect.poll(() => getComputedStyle(svg).filter).toContain('drop-shadow');

		await rerender(<DsTechnology aria-label="OCH service A to B" path={STRAIGHT_PATH} />);
		const image = page.getByRole('img', { name: 'OCH service A to B' });
		await image.hover({ position: { x: 100, y: 50 }, force: true });

		await expect.poll(() => getComputedStyle(image.element()).filter).toBe('none');
	});

	it('lets clicks through to what is behind it when it has no action', async () => {
		const onParentClick = vi.fn();
		await page.render(
			<button type="button" onClick={onParentClick}>
				<DsTechnology type="odu" />
				ODU
			</button>,
		);

		const sample = document.querySelector('svg') as SVGSVGElement;
		const { left, top, width, height } = sample.getBoundingClientRect();
		const target = document.elementFromPoint(left + width / 2, top + height / 2);

		expect(target).toBe(page.getByRole('button', { name: 'ODU' }).element());
	});

	it('marks only the selected line with aria-current and draws its halo', async () => {
		const { rerender, container } = await page.render(
			<DsTechnology aria-label="OTS link A to B" onClick={vi.fn()} />,
		);

		const button = page.getByRole('button', { name: 'OTS link A to B' });
		await expect.element(button).not.toHaveAttribute('aria-current');
		expect(container.querySelectorAll('path')).toHaveLength(2);

		await rerender(<DsTechnology aria-label="OTS link A to B" selected onClick={vi.fn()} />);

		await expect.element(button).toHaveAttribute('aria-current', 'true');
		expect(container.querySelectorAll('path')).toHaveLength(3);
	});

	it('draws the given path instead of the sample curve', async () => {
		const { rerender, container } = await page.render(<DsTechnology type="och" />);

		const svg = container.querySelector('svg') as SVGSVGElement;
		expect(svg.hasAttribute('viewBox')).toBe(true);
		expect(lineOf(svg)?.getAttribute('d')).not.toBe(STRAIGHT_PATH);

		await rerender(<DsTechnology type="och" path={STRAIGHT_PATH} />);

		expect(svg.hasAttribute('viewBox')).toBe(false);
		expect(lineOf(svg)?.getAttribute('d')).toBe(STRAIGHT_PATH);
	});

	it('keeps the line thickness when the sample is resized', async () => {
		const { container } = await page.render(<DsTechnology type="och" style={{ width: 16, height: 8 }} />);

		const svg = container.querySelector('svg') as SVGSVGElement;
		const line = lineOf(svg) as SVGPathElement;

		expect(svg.getBoundingClientRect().width).toBe(16);
		expect(getComputedStyle(line).vectorEffect).toBe('non-scaling-stroke');
		expect(getComputedStyle(line).strokeWidth).toBe('2px');
	});

	it('uses one color per type and one pattern per stage', async () => {
		const { rerender, container } = await page.render(<DsTechnology type="och" stage="deployed" />);

		const line = lineOf(container.querySelector('svg') as SVGSVGElement) as SVGPathElement;
		await expect.poll(() => getComputedStyle(line).stroke).toBe(OCH_COLOR);
		expect(getComputedStyle(line).strokeDasharray).toBe('none');

		await rerender(<DsTechnology type="ots" stage="planned" />);

		await expect.poll(() => getComputedStyle(line).stroke).toBe(OTS_COLOR);
		expect(getComputedStyle(line).strokeDasharray).toBe('1px, 5px');

		await rerender(<DsTechnology type="ots" stage="designed" />);

		expect(getComputedStyle(line).strokeDasharray).toBe('10px, 11px');
	});

	it('works nested inside a parent svg', async () => {
		const onClick = vi.fn();
		await page.render(
			<svg width={200} height={100}>
				<DsTechnology aria-label="OMS link A to B" path={DIAGONAL_PATH} onClick={onClick} />
			</svg>,
		);

		await page.getByRole('button', { name: 'OMS link A to B' }).click();

		expect(onClick).toHaveBeenCalledOnce();
	});
});
