import { describe, expect, it, vi } from 'vitest';
import { page, userEvent } from 'vitest/browser';
import { DsFormControl } from '../../ds-form-control';
import { DsCodeInput } from '../index';

const query = 'Status = Active AND status = Scheduled';
const multiline = 'SELECT *\nFROM devices';
const fits = 'abcdefghij';

const getField = () => page.getByPlaceholder('Enter a query');
const getExpand = () => page.getByRole('button', { name: 'Expand code editor' });
const getCollapse = () => page.getByRole('button', { name: 'Collapse code editor' });
const getCodeArea = () => page.getByRole('textbox', { name: 'Code' });
const getSearch = () => page.getByRole('textbox', { name: 'Search in code' });
const getAdditionalLines = (count: number) =>
	page.getByRole('button', { name: `${String(count)} additional code lines` });

const expectPanelClosed = async () => {
	await expect.poll(() => getCodeArea().query()).toBeNull();
};

const fieldNode = () => document.querySelector<HTMLTextAreaElement>('textarea[placeholder="Enter a query"]');
const chromeNode = () =>
	document.querySelector('[aria-label="Expand code editor"], [aria-label="Collapse code editor"]')
		?.parentElement?.parentElement;
const panelNode = () => document.querySelector<HTMLElement>('[role="dialog"]');
const codeAreaNode = () => document.querySelector<HTMLTextAreaElement>('[role="dialog"] textarea');
const backdropNode = () =>
	codeAreaNode()?.parentElement?.parentElement?.previousElementSibling as HTMLElement | undefined;

describe('DsCodeInput', () => {
	it('renders the value in the collapsed field', async () => {
		await page.render(<DsCodeInput placeholder="Enter a query" defaultValue={query} />);

		await expect.element(getField()).toHaveValue(query);
	});

	it('keeps newlines in the value instead of silently joining the lines', async () => {
		const onValueChange = vi.fn();
		await page.render(
			<DsCodeInput placeholder="Enter a query" defaultValue={multiline} onValueChange={onValueChange} />,
		);

		await expect.element(getField()).toHaveValue(multiline);

		await getField().click();
		await expectPanelClosed();
		await userEvent.keyboard('{End}{Enter}X');

		expect(onValueChange).toHaveBeenLastCalledWith(expect.stringContaining('\n'));
		expect(fieldNode()?.value.includes('\n')).toBe(true);
	});

	it('shows the first logical line and a hidden-line indicator while unfocused', async () => {
		await page.render(<DsCodeInput placeholder="Enter a query" defaultValue={multiline} />);

		await expect.element(getField()).toHaveValue(multiline);
		await expect.element(getAdditionalLines(1)).toBeVisible();
	});

	it('does not flatten newlines into spaces in the collapsed field', async () => {
		await page.render(<DsCodeInput placeholder="Enter a query" defaultValue={multiline} />);

		expect(fieldNode()?.previousElementSibling?.textContent ?? fieldNode()?.value).not.toBe(
			'SELECT * FROM devices',
		);
		await expect.element(getField()).toHaveValue(multiline);
	});

	it('places the caret at the click position in the collapsed field', async () => {
		await page.render(<DsCodeInput placeholder="Enter a query" defaultValue={fits} />);

		await getField().click({ position: { x: 2, y: 8 } });

		await expectPanelClosed();
		expect(fieldNode()?.selectionStart).toBeLessThan(fits.length);
		expect(fieldNode()?.selectionEnd).toBeLessThan(fits.length);
	});

	it('leaves the caret at the browser default when the field is tabbed into', async () => {
		await page.render(
			<>
				<button type="button">Before</button>
				<DsCodeInput placeholder="Enter a query" defaultValue={fits} />
			</>,
		);

		await page.getByRole('button', { name: 'Before' }).click();
		await userEvent.keyboard('{Tab}');

		await expectPanelClosed();
		await expect.element(getField()).toHaveFocus();
		expect(fieldNode()?.selectionStart).toBe(0);
		expect(fieldNode()?.selectionEnd).toBe(0);
	});

	it('inserts a newline on Enter without opening the overlay', async () => {
		await page.render(<DsCodeInput placeholder="Enter a query" defaultValue={fits} />);

		await getField().click();
		await userEvent.keyboard('{Enter}');

		await expectPanelClosed();
		expect(fieldNode()?.value).toContain('\n');
		expect(fieldNode()?.offsetHeight).toBe(fieldNode()?.parentElement?.clientHeight);
	});

	it('stays collapsed when a multiline value is focused', async () => {
		await page.render(<DsCodeInput placeholder="Enter a query" defaultValue={multiline} />);

		await getField().click({ position: { x: 2, y: 8 } });

		await expectPanelClosed();
		await expect.element(getField()).toHaveFocus();
	});

	it('stays collapsed when typing overflows the collapsed field', async () => {
		await page.render(
			<div style={{ width: 80 }}>
				<DsCodeInput placeholder="Enter a query" />
			</div>,
		);

		await getField().click();
		await userEvent.keyboard('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');

		await expectPanelClosed();
		await expect.element(getField()).toHaveFocus();
	});

	it('opens the overlay from the hidden-line indicator', async () => {
		await page.render(<DsCodeInput placeholder="Enter a query" defaultValue={multiline} />);

		await getAdditionalLines(1).click();

		await expect.element(getCodeArea()).toBeVisible();
		await expect.element(getCodeArea()).toHaveFocus();
	});

	it('keeps the same textarea node when expanding', async () => {
		await page.render(<DsCodeInput placeholder="Enter a query" defaultValue={query} />);

		const node = fieldNode();

		await getExpand().click();

		expect(codeAreaNode()).toBe(node);
	});

	it('restores the collapsed caret in the overlay when Expand is pressed', async () => {
		await page.render(<DsCodeInput placeholder="Enter a query" defaultValue={fits} />);

		await getField().click();
		await userEvent.keyboard('{End}');
		const caret = fieldNode()?.selectionStart;

		expect(caret).toBe(fits.length);

		await getExpand().click();

		await expect.element(getCodeArea()).toHaveFocus();
		expect(codeAreaNode()?.selectionStart).toBe(caret);
		expect(codeAreaNode()?.selectionEnd).toBe(caret);
	});

	it('opens the overlay from Alt+ArrowDown and keeps the caret', async () => {
		await page.render(<DsCodeInput placeholder="Enter a query" defaultValue={fits} />);

		await getField().click();
		await userEvent.keyboard('{End}');
		const caret = fieldNode()?.selectionStart;

		expect(caret).toBe(fits.length);

		await userEvent.keyboard('{Alt>}{ArrowDown}{/Alt}');

		await expect.element(getCodeArea()).toBeVisible();
		await expect.element(getCodeArea()).toHaveFocus();
		expect(codeAreaNode()?.selectionStart).toBe(caret);
		expect(codeAreaNode()?.selectionEnd).toBe(caret);
	});

	it('does not open the overlay on ArrowDown without Alt', async () => {
		await page.render(<DsCodeInput placeholder="Enter a query" defaultValue={fits} />);

		await getField().click();
		await userEvent.keyboard('{ArrowDown}');

		await expectPanelClosed();
		await expect.element(getField()).toHaveFocus();
	});

	it('focuses the editor when the overlay opens from the toggle', async () => {
		await page.render(<DsCodeInput placeholder="Enter a query" defaultValue={query} />);

		await getExpand().click();

		await expect.element(getCodeArea()).toHaveFocus();
	});

	it('does not scroll the page to the top on the first expand', async () => {
		const belowFoldPx = 2000;
		const awayFromTopPx = 100;

		await page.render(
			<div>
				<div style={{ height: belowFoldPx }} aria-hidden />
				<DsCodeInput placeholder="Enter a query" defaultValue={query} />
			</div>,
		);

		getExpand().element().scrollIntoView();
		const scrollBefore = window.scrollY;

		expect(scrollBefore).toBeGreaterThan(awayFromTopPx);

		await getExpand().click();

		await expect.element(getCodeArea()).toBeVisible();
		await expect.element(getCodeArea()).toHaveFocus();
		expect(window.scrollY).toBeGreaterThan(awayFromTopPx);
	});

	it('opens the overlay from the toggle and flips it to collapse', async () => {
		await page.render(<DsCodeInput placeholder="Enter a query" defaultValue={query} />);

		await expectPanelClosed();

		await getExpand().click();

		await expect.element(getCodeArea()).toBeVisible();
		await expect.element(getCollapse()).toBeVisible();
		await expect.element(getCollapse()).toHaveAttribute('aria-expanded', 'true');
		await expect.element(getCollapse()).toHaveAttribute('aria-controls');
	});

	it('exposes aria-expanded on the collapsed toggle', async () => {
		await page.render(<DsCodeInput placeholder="Enter a query" defaultValue={query} />);

		await expect.element(getExpand()).toHaveAttribute('aria-expanded', 'false');
	});

	it('reports edits made in the collapsed field', async () => {
		const onValueChange = vi.fn();
		await page.render(<DsCodeInput placeholder="Enter a query" onValueChange={onValueChange} />);

		await getField().fill('a');

		expect(onValueChange).toHaveBeenLastCalledWith('a');
	});

	it('emits LF-only text after a user edit', async () => {
		const onValueChange = vi.fn();
		await page.render(
			<DsCodeInput placeholder="Enter a query" defaultValue={'a\r\nb'} onValueChange={onValueChange} />,
		);

		await getField().click();
		await userEvent.keyboard('x');

		expect(onValueChange.mock.calls.at(-1)?.[0]).not.toMatch(/\r/);
	});

	it('shares one value between the collapsed field and the overlay', async () => {
		const onValueChange = vi.fn();
		await page.render(
			<DsCodeInput placeholder="Enter a query" defaultValue={query} onValueChange={onValueChange} />,
		);

		await getExpand().click();
		await getCodeArea().fill(`${query} extra`);

		expect(onValueChange).toHaveBeenLastCalledWith(`${query} extra`);
		await expect.element(getField()).toHaveValue(`${query} extra`);
	});

	it('marks every occurrence of the search query, ignoring case', async () => {
		await page.render(<DsCodeInput placeholder="Enter a query" defaultValue={query} defaultExpanded />);

		await getSearch().fill('status');

		expect(document.querySelectorAll('mark')).toHaveLength(2);
	});

	it('renders no marks for an empty search query', async () => {
		await page.render(<DsCodeInput placeholder="Enter a query" defaultValue={query} defaultExpanded />);

		expect(document.querySelectorAll('mark')).toHaveLength(0);
	});

	it('treats regular expression metacharacters in the search query literally', async () => {
		await page.render(<DsCodeInput placeholder="Enter a query" defaultValue="a.c and abc" defaultExpanded />);

		await getSearch().fill('.');

		expect(document.querySelectorAll('mark')).toHaveLength(1);
	});

	it('clears the search query when the overlay is reopened', async () => {
		await page.render(<DsCodeInput placeholder="Enter a query" defaultValue={query} />);

		await getExpand().click();
		await getSearch().fill('status');
		expect(document.querySelectorAll('mark')).toHaveLength(2);

		await getCollapse().click({ force: true });
		await getExpand().click();

		await expect.element(getSearch()).toHaveValue('');
		expect(document.querySelectorAll('mark')).toHaveLength(0);
	});

	it('tabs from the editor to search while the overlay is open', async () => {
		await page.render(<DsCodeInput placeholder="Enter a query" defaultValue={query} />);

		await getExpand().click();
		await expect.element(getCodeArea()).toHaveFocus();

		await userEvent.keyboard('{Tab}');

		await expect.element(getSearch()).toHaveFocus();
	});

	it('keeps the highlight backdrop the same height as the editor for a trailing newline', async () => {
		await page.render(<DsCodeInput placeholder="Enter a query" defaultValue={'a\n'} defaultExpanded />);
		await expect.element(getCodeArea()).toBeVisible();

		expect(backdropNode()?.offsetHeight).toBe(codeAreaNode()?.offsetHeight);
	});

	it('keeps the highlight backdrop the same height as the editor for a wrapped token', async () => {
		await page.render(
			<DsCodeInput placeholder="Enter a query" defaultValue={'x'.repeat(400)} defaultExpanded />,
		);
		await expect.element(getCodeArea()).toBeVisible();

		expect(backdropNode()?.offsetHeight).toBe(codeAreaNode()?.offsetHeight);
	});

	it('highlights the collapsed chrome when the field is hovered or focused', async () => {
		await page.render(
			<>
				<button type="button">Before</button>
				<DsCodeInput placeholder="Enter a query" />
			</>,
		);

		const chrome = chromeNode();

		if (!(chrome instanceof HTMLElement)) {
			throw new Error('collapsed chrome is missing');
		}

		const idle = getComputedStyle(chrome).borderColor;

		await getField().hover();
		await expect.poll(() => getComputedStyle(chrome).borderColor).not.toBe(idle);

		await page.getByRole('button', { name: 'Before' }).click();
		await expect.poll(() => getComputedStyle(chrome).borderColor).toBe(idle);

		await userEvent.keyboard('{Tab}');
		await expect.element(getField()).toHaveFocus();
		await expect.poll(() => getComputedStyle(chrome).borderColor).not.toBe(idle);
	});

	it('stretches the collapsed textarea across the field', async () => {
		await page.render(
			<div style={{ width: 420 }}>
				<DsCodeInput placeholder="Enter a query" />
			</div>,
		);

		const textarea = fieldNode();

		expect(textarea?.offsetWidth).toBe(textarea?.parentElement?.clientWidth);
	});

	it('sizes the overlay to the width of the field', async () => {
		await page.render(
			<div style={{ width: 420 }}>
				<DsCodeInput placeholder="Enter a query" defaultValue={query} />
			</div>,
		);

		await getExpand().click();
		await expect.element(getCodeArea()).toBeVisible();

		const field = fieldNode()?.closest('[class]')?.parentElement?.parentElement;
		expect(panelNode()?.offsetWidth).toBe(field?.offsetWidth);
	});

	it('closes the overlay on Escape, returns focus to the editor, and reports the change', async () => {
		const onExpandChange = vi.fn();
		await page.render(
			<DsCodeInput placeholder="Enter a query" defaultValue={query} onExpandChange={onExpandChange} />,
		);

		await getExpand().click();
		expect(onExpandChange).toHaveBeenLastCalledWith(true);

		await userEvent.keyboard('{Escape}');

		await expectPanelClosed();
		await expect.element(getField()).toHaveFocus();
		expect(onExpandChange).toHaveBeenLastCalledWith(false);
	});

	it('does not steal focus back after an outside click', async () => {
		await page.render(
			<>
				<button type="button">Before</button>
				<DsCodeInput placeholder="Enter a query" defaultValue={query} />
			</>,
		);

		await getExpand().click();
		await expect.element(getCodeArea()).toBeVisible();

		await page.getByRole('button', { name: 'Before' }).click();

		await expectPanelClosed();
		await expect.element(page.getByRole('button', { name: 'Before' })).toHaveFocus();
	});

	it('does not steal focus when expanded programmatically', async () => {
		await page.render(
			<>
				<button type="button">Before</button>
				<DsCodeInput placeholder="Enter a query" defaultValue={query} defaultExpanded />
			</>,
		);

		await expect.element(getCodeArea()).toBeVisible();
		await expect.element(getCodeArea()).not.toHaveFocus();
		await expect.element(page.getByRole('button', { name: 'Before' })).not.toHaveFocus();
	});

	it('still opens the overlay when disabled, with a disabled editor', async () => {
		await page.render(<DsCodeInput placeholder="Enter a query" defaultValue={query} disabled />);

		await expect.element(getExpand()).toBeEnabled();
		await expect.element(getField()).toBeDisabled();

		await getExpand().click();

		await expect.element(getCodeArea()).toBeVisible();
		await expect.element(getCodeArea()).toBeDisabled();

		await getSearch().fill('status');
		expect(document.querySelectorAll('mark')).toHaveLength(2);
	});

	it('still opens the overlay when read only, with a read-only editor', async () => {
		await page.render(<DsCodeInput placeholder="Enter a query" defaultValue={query} readOnly />);

		await getExpand().click();

		await expect.element(getCodeArea()).toBeVisible();
		await expect.element(getCodeArea()).toHaveAttribute('readonly');
	});

	it('uses locale strings on the expand button', async () => {
		await page.render(
			<DsCodeInput placeholder="Enter a query" defaultValue={query} locale={{ expand: 'Open editor' }} />,
		);

		await expect.element(page.getByRole('button', { name: 'Open editor' })).toBeVisible();
	});

	it('keeps the form label on the expanded textarea instead of Code', async () => {
		await page.render(
			<DsFormControl label="Query">
				<DsFormControl.CodeInput placeholder="Enter a query" defaultValue={query} />
			</DsFormControl>,
		);

		await getExpand().click();

		await expect.element(page.getByRole('textbox', { name: 'Query' })).toBeVisible();
		await expect.element(page.getByRole('dialog', { name: 'Code' })).toBeVisible();
	});

	it('honours a controlled expanded prop', async () => {
		const onExpandChange = vi.fn();
		await page.render(
			<DsCodeInput
				placeholder="Enter a query"
				defaultValue={query}
				expanded={false}
				onExpandChange={onExpandChange}
			/>,
		);

		await getExpand().click();

		expect(onExpandChange).toHaveBeenLastCalledWith(true);
		await expectPanelClosed();
	});

	it('shows a focused line indicator for a multiline value', async () => {
		await page.render(<DsCodeInput placeholder="Enter a query" defaultValue={multiline} />);

		await getField().click();

		await expect.element(page.getByText('Ln 1/2')).toBeVisible();
	});

	it('keeps the line indicator while Expand is pressed', async () => {
		await page.render(<DsCodeInput placeholder="Enter a query" defaultValue={multiline} />);

		await getField().click();
		await expect.element(page.getByText('Ln 1/2')).toBeVisible();

		const expand = getExpand().element();
		const pointerDown = new PointerEvent('pointerdown', { bubbles: true, cancelable: true, button: 0 });

		expand.dispatchEvent(pointerDown);

		if (!pointerDown.defaultPrevented) {
			expand.focus();
		}

		await expect.element(getField()).toHaveFocus();
		await expect.element(page.getByText('Ln 1/2')).toBeVisible();
		await expect.element(getAdditionalLines(1)).not.toBeInTheDocument();
	});

	it('shows a selection status when a multiline range is selected', async () => {
		await page.render(<DsCodeInput placeholder="Enter a query" defaultValue={multiline} />);

		await getField().click();
		fieldNode()?.setSelectionRange(0, multiline.length, 'forward');
		fieldNode()?.dispatchEvent(new Event('select', { bubbles: true }));

		await expect.element(page.getByText('2 lines selected · 2 total')).toBeVisible();
	});

	it('shows the overlay caret line in the collapsed preview', async () => {
		await page.render(<DsCodeInput placeholder="Enter a query" defaultValue={multiline} />);

		await getExpand().click();
		await expect.element(getCodeArea()).toBeVisible();

		const line2 = multiline.indexOf('FROM devices');
		codeAreaNode()?.setSelectionRange(line2, line2);
		codeAreaNode()?.dispatchEvent(new Event('select', { bubbles: true }));

		await expect.element(page.getByText('FROM devices')).toBeVisible();
		await expect.element(page.getByText('Ln 2/2')).toBeVisible();
	});

	it('shows the caret line indicator after collapsing with Escape', async () => {
		await page.render(<DsCodeInput placeholder="Enter a query" defaultValue={multiline} />);

		await getExpand().click();
		await expect.element(getCodeArea()).toBeVisible();

		const line2 = multiline.indexOf('FROM devices');
		codeAreaNode()?.setSelectionRange(line2, line2);
		codeAreaNode()?.dispatchEvent(new Event('select', { bubbles: true }));

		await userEvent.keyboard('{Escape}');

		await expectPanelClosed();
		await expect.element(getField()).toHaveFocus();
		await expect.element(page.getByText('Ln 2/2')).toBeVisible();
		await expect.element(getAdditionalLines(1)).not.toBeInTheDocument();
	});

	it('does not offer a return-to-cursor control after scrolling off the caret', async () => {
		await page.render(<DsCodeInput placeholder="Enter a query" defaultValue={multiline} />);

		await getField().click();
		await expect.element(page.getByText('Ln 1/2')).toBeVisible();

		fieldNode()?.dispatchEvent(new WheelEvent('wheel', { deltaY: 40, bubbles: true, cancelable: true }));

		await expect.element(page.getByText('Ln 2/2')).toBeVisible();
		await expect.element(page.getByRole('button', { name: 'Return to cursor' })).not.toBeInTheDocument();
	});
});
