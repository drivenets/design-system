import { createRef } from 'react';
import { describe, expect, it } from 'vitest';
import { page } from 'vitest/browser';

import { DsTypography } from '../index';

describe('DsTypography color', () => {
	it('semantic prop emits matching --font-* CSS variable as inline color', async () => {
		await page.render(
			<DsTypography variant="body-md-reg" color="error">
				err
			</DsTypography>,
		);

		const el = page.getByText('err').element() as HTMLElement;
		expect(el.style.color).toBe('var(--font-error)');
	});

	it('semantic prop works for kebab-case names (action-secondary-hover)', async () => {
		await page.render(
			<DsTypography variant="body-md-reg" color="action-secondary-hover">
				link
			</DsTypography>,
		);

		const el = page.getByText('link').element() as HTMLElement;
		expect(el.style.color).toBe('var(--font-action-secondary-hover)');
	});

	it('escape hatch: arbitrary CSS variable via color prop passes through', async () => {
		await page.render(
			<DsTypography variant="body-md-reg" color="var(--color-dap-blue-500)">
				blue
			</DsTypography>,
		);

		const el = page.getByText('blue').element() as HTMLElement;
		expect(el.style.color).toBe('var(--color-dap-blue-500)');
	});

	it('escape hatch: hex literal via color prop is preserved (browser canonicalizes to rgb)', async () => {
		await page.render(
			<DsTypography variant="body-md-reg" color="#ff8800">
				hex
			</DsTypography>,
		);

		const el = page.getByText('hex').element() as HTMLElement;
		expect(el.style.color).toBe('rgb(255, 136, 0)');
	});

	it('escape hatch: rgb literal via color prop is preserved', async () => {
		await page.render(
			<DsTypography variant="body-md-reg" color="rgb(10, 20, 30)">
				rgb
			</DsTypography>,
		);

		const el = page.getByText('rgb').element() as HTMLElement;
		expect(el.style.color).toBe('rgb(10, 20, 30)');
	});

	it('style.color overrides color prop (escape hatch wins)', async () => {
		await page.render(
			<DsTypography variant="body-md-reg" color="error" style={{ color: '#00ff00' }}>
				win
			</DsTypography>,
		);

		const el = page.getByText('win').element() as HTMLElement;
		expect(el.style.color).toBe('rgb(0, 255, 0)');
	});

	it('omitting color and style leaves inline color empty (inherits from context)', async () => {
		await page.render(<DsTypography variant="body-md-reg">plain</DsTypography>);

		const el = page.getByText('plain').element() as HTMLElement;
		expect(el.style.color).toBe('');
	});

	it('color prop preserves unrelated style properties', async () => {
		await page.render(
			<DsTypography variant="body-md-reg" color="success" style={{ marginTop: '8px', fontWeight: 700 }}>
				ok
			</DsTypography>,
		);

		const el = page.getByText('ok').element() as HTMLElement;
		expect(el.style.color).toBe('var(--font-success)');
		expect(el.style.marginTop).toBe('8px');
		expect(el.style.fontWeight).toBe('700');
	});
});

describe('DsTypography asChild', () => {
	it('renders an anchor child without wrapping and merges typography props', async () => {
		await page.render(
			<DsTypography variant="body-md-link" color="action" asChild>
				<a href="/docs">Docs</a>
			</DsTypography>,
		);

		const link = page.getByRole('link', { name: 'Docs' }).element() as HTMLAnchorElement;

		expect(link.tagName).toBe('A');
		expect(link.getAttribute('href')).toBe('/docs');
		expect(link.style.color).toBe('var(--font-action)');
		expect(link.className).toContain('body-md-link');
	});

	it('renders a button child without wrapping and preserves child props', async () => {
		await page.render(
			<DsTypography variant="body-md-md" color="success" asChild>
				<button type="button" className="custom-button">
					Save
				</button>
			</DsTypography>,
		);

		const button = page.getByRole('button', { name: 'Save' }).element() as HTMLButtonElement;

		expect(button.tagName).toBe('BUTTON');
		expect(button.type).toBe('button');
		expect(button.style.color).toBe('var(--font-success)');
		expect(button.className).toContain('custom-button');
		expect(button.className).toContain('body-md-md');
	});

	it('forwards ref to the child when asChild is used', async () => {
		const ref = createRef<HTMLButtonElement>();

		await page.render(
			<DsTypography variant="body-sm-md" asChild ref={ref}>
				<button type="button">Focusable</button>
			</DsTypography>,
		);

		expect(ref.current?.tagName).toBe('BUTTON');
	});
});

const longText =
	'The quick brown fox jumps over the lazy dog while the sleepy cat watches from the warm windowsill nearby.';

describe('DsTypography truncate', () => {
	it('single-line truncate clips to one line with an ellipsis', async () => {
		await page.render(
			<div style={{ width: 120 }}>
				<DsTypography variant="body-md-reg" truncate>
					{longText}
				</DsTypography>
			</div>,
		);

		const el = page.getByText(longText).element() as HTMLElement;
		const computed = getComputedStyle(el);

		expect(computed.whiteSpace).toBe('nowrap');
		expect(computed.textOverflow).toBe('ellipsis');
		expect(computed.overflow).toBe('hidden');
		expect(el.scrollWidth).toBeGreaterThan(el.clientWidth);
	});

	it('numeric truncate clamps to the requested number of lines', async () => {
		await page.render(
			<div style={{ width: 120 }}>
				<DsTypography variant="body-md-reg" truncate={3}>
					{longText}
				</DsTypography>
			</div>,
		);

		const el = page.getByText(longText).element() as HTMLElement;

		expect(el.style.getPropertyValue('--ds-typography-line-clamp')).toBe('3');
		expect(getComputedStyle(el).webkitLineClamp).toBe('3');
	});

	it('values below 1 clamp to a single line', async () => {
		await page.render(
			<div style={{ width: 120 }}>
				<DsTypography variant="body-md-reg" truncate={0}>
					{longText}
				</DsTypography>
			</div>,
		);

		const el = page.getByText(longText).element() as HTMLElement;

		expect(getComputedStyle(el).whiteSpace).toBe('nowrap');
	});

	it('does not clip when truncate is omitted', async () => {
		await page.render(
			<div style={{ width: 120 }}>
				<DsTypography variant="body-md-reg">{longText}</DsTypography>
			</div>,
		);

		const el = page.getByText(longText).element() as HTMLElement;

		expect(getComputedStyle(el).whiteSpace).not.toBe('nowrap');
		expect(getComputedStyle(el).textOverflow).not.toBe('ellipsis');
	});
});

describe('DsTypography tooltip on truncation', () => {
	it('shows the full text in a tooltip when the text overflows', async () => {
		await page.render(
			<div style={{ width: 120 }}>
				<DsTypography variant="body-md-reg" truncate tooltip>
					{longText}
				</DsTypography>
			</div>,
		);

		await page.getByText(longText, { exact: true }).hover();
		await expect.element(page.getByRole('tooltip', { name: longText })).toBeVisible();
	});

	it('does not show a tooltip when the text fits', async () => {
		await page.render(
			<div style={{ width: 600 }}>
				<DsTypography variant="body-md-reg" truncate tooltip>
					Short text
				</DsTypography>
			</div>,
		);

		await page.getByText('Short text').hover();
		await expect.element(page.getByRole('tooltip')).not.toBeInTheDocument();
	});

	it('does not show a tooltip when tooltip is enabled but truncate is off', async () => {
		await page.render(
			<div style={{ width: 120 }}>
				<DsTypography variant="body-md-reg" tooltip>
					{longText}
				</DsTypography>
			</div>,
		);

		await page.getByText(longText).hover();
		await expect.element(page.getByRole('tooltip')).not.toBeInTheDocument();
	});

	it('uses tooltipContent as an override for the tooltip body', async () => {
		await page.render(
			<div style={{ width: 120 }}>
				<DsTypography variant="body-md-reg" truncate tooltip tooltipContent="Full override text">
					{longText}
				</DsTypography>
			</div>,
		);

		await page.getByText(longText, { exact: true }).hover();
		await expect.element(page.getByRole('tooltip', { name: 'Full override text' })).toBeVisible();
	});
});
