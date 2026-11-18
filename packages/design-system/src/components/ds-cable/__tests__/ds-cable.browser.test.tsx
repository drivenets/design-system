import { describe, expect, it, vi } from 'vitest';
import { page, userEvent } from 'vitest/browser';
import DsCable from '../ds-cable';

const from = { x: 20, y: 40 };
const to = { x: 220, y: 80 };
const middle = { x: 120, y: 60 };

const linePath = (name: string) => {
	const lines = page.getByLabelText(name).element().querySelectorAll('path');

	return lines[lines.length - 1]?.getAttribute('d');
};

describe('DsCable', () => {
	it('is named by its aria-label and fires onClick', async () => {
		const onClick = vi.fn();
		await page.render(<DsCable from={from} to={to} aria-label="Cable A to B" onClick={onClick} />);

		await page.getByRole('button', { name: 'Cable A to B' }).click();

		expect(onClick).toHaveBeenCalledOnce();
	});

	it('is reachable with Tab and activated with Enter and Space', async () => {
		const onClick = vi.fn();
		await page.render(<DsCable from={from} to={to} aria-label="Cable A to B" onClick={onClick} />);

		await userEvent.tab();
		await expect.element(page.getByRole('button', { name: 'Cable A to B' })).toHaveFocus();

		await userEvent.keyboard('{Enter}');
		await userEvent.keyboard(' ');

		expect(onClick).toHaveBeenCalledTimes(2);
	});

	it('fires onClick near the line, not only on it', async () => {
		const onClick = vi.fn();
		await page.render(
			<div data-testid="map" style={{ position: 'relative', width: 240, height: 120 }}>
				<DsCable from={from} to={to} aria-label="Cable A to B" onClick={onClick} />
			</div>,
		);
		const nearLineOffset = 6;

		await page.getByTestId('map').click({ position: { x: middle.x, y: middle.y + nearLineOffset } });

		expect(onClick).toHaveBeenCalledOnce();
	});

	it('is a static image without onClick and lets clicks through', async () => {
		const onMapClick = vi.fn();
		await page.render(
			<div
				data-testid="map"
				role="presentation"
				style={{ position: 'relative', width: 240, height: 120 }}
				onClick={onMapClick}
			>
				<DsCable from={from} to={to} aria-label="Cable A to B" />
			</div>,
		);

		await expect.element(page.getByRole('img', { name: 'Cable A to B' })).toBeInTheDocument();
		await expect.element(page.getByRole('button')).not.toBeInTheDocument();

		await page.getByTestId('map').click({ position: middle });

		expect(onMapClick).toHaveBeenCalledOnce();
		expect((onMapClick.mock.calls[0]?.[0] as { target: Element }).target).toBe(
			page.getByTestId('map').element(),
		);
	});

	it('marks only the selected cable with aria-current', async () => {
		const { rerender } = await page.render(
			<DsCable from={from} to={to} aria-label="Cable A to B" onClick={vi.fn()} />,
		);

		const cable = page.getByRole('button', { name: 'Cable A to B' });
		await expect.element(cable).not.toHaveAttribute('aria-current');

		await rerender(<DsCable from={from} to={to} selected aria-label="Cable A to B" onClick={vi.fn()} />);

		await expect.element(cable).toHaveAttribute('aria-current', 'true');
	});

	it('draws a straight line by default and bends with curvature', async () => {
		const { rerender } = await page.render(<DsCable from={from} to={to} aria-label="Cable A to B" />);

		expect(linePath('Cable A to B')).toBe('M20 40L220 80');

		await rerender(<DsCable from={from} to={to} curvature={0.25} aria-label="Cable A to B" />);

		expect(linePath('Cable A to B')).toBe('M20 40Q130 10 220 80');
	});

	it('draws the given path instead of a line between two points', async () => {
		await page.render(<DsCable path="M0 0C10 0 10 20 20 20" aria-label="Cable A to B" />);

		expect(linePath('Cable A to B')).toBe('M0 0C10 0 10 20 20 20');
	});

	it('draws nothing until both ends have finite coordinates', async () => {
		const { rerender } = await page.render(
			<DsCable from={{ x: Number.NaN, y: 40 }} to={to} aria-label="Cable A to B" />,
		);

		await expect.element(page.getByRole('img', { name: 'Cable A to B' })).not.toBeInTheDocument();

		await rerender(<DsCable from={from} to={to} aria-label="Cable A to B" />);

		await expect.element(page.getByRole('img', { name: 'Cable A to B' })).toBeInTheDocument();
	});
});
