import { describe, expect, it } from 'vitest';
import { page } from 'vitest/browser';

import { DsStack } from '../ds-stack';

describe('DsStack', () => {
	it('renders children in a flex column by default', async () => {
		await page.render(
			<DsStack>
				<button type="button">First</button>
				<button type="button">Second</button>
			</DsStack>,
		);

		const first = page.getByRole('button', { name: 'First' });
		const second = page.getByRole('button', { name: 'Second' });
		await expect.element(first).toBeVisible();
		await expect.element(second).toBeVisible();

		const firstRect = first.element().getBoundingClientRect();
		const secondRect = second.element().getBoundingClientRect();
		expect(secondRect.top).toBeGreaterThanOrEqual(firstRect.bottom);
	});

	it('renders children in a row when direction is "row"', async () => {
		await page.render(
			<DsStack direction="row">
				<button type="button">Left</button>
				<button type="button">Right</button>
			</DsStack>,
		);

		const left = page.getByRole('button', { name: 'Left' });
		const right = page.getByRole('button', { name: 'Right' });

		const leftRect = left.element().getBoundingClientRect();
		const rightRect = right.element().getBoundingClientRect();
		expect(rightRect.left).toBeGreaterThanOrEqual(leftRect.right);
	});

	it('applies gap between children', async () => {
		await page.render(
			<DsStack direction="row" gap={20}>
				<button type="button">A</button>
				<button type="button">B</button>
			</DsStack>,
		);

		const a = page.getByRole('button', { name: 'A' });
		const b = page.getByRole('button', { name: 'B' });

		const aRect = a.element().getBoundingClientRect();
		const bRect = b.element().getBoundingClientRect();
		const actualGap = bRect.left - aRect.right;
		expect(actualGap).toBeCloseTo(20, 0);
	});

	it('applies alignItems and justifyContent', async () => {
		await page.render(
			<DsStack
				direction="row"
				justifyContent="center"
				alignItems="center"
				style={{ height: 200, width: 400 }}
			>
				<button type="button">Centered</button>
			</DsStack>,
		);

		const container = page.getByRole('button', { name: 'Centered' }).element().parentElement;
		expect(container).toBeTruthy();
		const containerStyle = getComputedStyle(container as Element);
		expect(containerStyle.justifyContent).toBe('center');
		expect(containerStyle.alignItems).toBe('center');
	});

	it('applies flex, flexWrap, and width', async () => {
		await page.render(
			<DsStack flex="1" flexWrap="wrap" width="500px">
				<button type="button">Child</button>
			</DsStack>,
		);

		const container = page.getByRole('button', { name: 'Child' }).element().parentElement;
		expect(container).toBeTruthy();
		const containerStyle = getComputedStyle(container as Element);
		expect(containerStyle.flexWrap).toBe('wrap');
		expect(containerStyle.width).toBe('500px');
	});

	it('merges custom className and style', async () => {
		await page.render(
			<DsStack className="custom-class" style={{ padding: 12 }}>
				<button type="button">Styled</button>
			</DsStack>,
		);

		const container = page.getByRole('button', { name: 'Styled' }).element().parentElement as HTMLElement;
		expect(container).toBeTruthy();
		expect(container.classList.contains('custom-class')).toBe(true);
		expect(container.style.padding).toBe('12px');
	});

	it('forwards ref to the root div', async () => {
		let refElement: HTMLDivElement | null = null;

		await page.render(
			<DsStack
				ref={(el) => {
					refElement = el;
				}}
			>
				<button type="button">Ref test</button>
			</DsStack>,
		);

		await expect.element(page.getByRole('button', { name: 'Ref test' })).toBeVisible();
		expect(refElement).toBeInstanceOf(HTMLDivElement);
	});

	it('user style overrides layout props', async () => {
		await page.render(
			<DsStack gap={10} style={{ gap: 30 }}>
				<button type="button">X</button>
				<button type="button">Y</button>
			</DsStack>,
		);

		const container = page.getByRole('button', { name: 'X' }).element().parentElement as HTMLElement;
		expect(container).toBeTruthy();
		expect(container.style.gap).toBe('30px');
	});
});
