import { describe, expect, it, vi } from 'vitest';
import { page, userEvent } from 'vitest/browser';
import { DsPopover, toPlacement } from '../ds-popover';
import type { DsPopoverRootProps } from '../ds-popover.types';

const PLACEHOLDER_IMAGE = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';

type ExampleProps = Pick<
	DsPopoverRootProps,
	'open' | 'defaultOpen' | 'onOpenChange' | 'side' | 'align' | 'modal'
>;

const Example = (props: ExampleProps) => (
	<DsPopover.Root {...props}>
		<DsPopover.Trigger>
			<button type="button">Open details</button>
		</DsPopover.Trigger>
		<DsPopover.Panel>
			<DsPopover.Header>Device details</DsPopover.Header>
			<DsPopover.Content>
				<DsPopover.ContentItem headline="Status">Edge router is online.</DsPopover.ContentItem>
			</DsPopover.Content>
		</DsPopover.Panel>
	</DsPopover.Root>
);

// Ark wires the panel as role="dialog" labelled by DsPopover.Header (the Title).
const getPanel = () => page.getByRole('dialog', { name: /device details/i });
const getTrigger = () => page.getByRole('button', { name: /open details/i });

describe('DsPopover', () => {
	it('opens on trigger click and reveals the panel content', async () => {
		await page.render(<Example />);

		await expect.element(page.getByText(/edge router is online/i)).not.toBeVisible();

		await getTrigger().click();

		await expect.element(getPanel()).toBeVisible();
		await expect.element(getPanel().getByText(/edge router is online/i)).toBeVisible();
	});

	it('fires onOpenChange with true on open and false on close', async () => {
		const onOpenChange = vi.fn();
		await page.render(<Example onOpenChange={onOpenChange} />);

		await getTrigger().click();
		expect(onOpenChange).toHaveBeenCalledWith(true);

		await getTrigger().click();
		expect(onOpenChange).toHaveBeenLastCalledWith(false);
	});

	it('closes on Escape', async () => {
		await page.render(<Example />);

		await getTrigger().click();
		await expect.element(getPanel()).toBeVisible();

		await userEvent.keyboard('{Escape}');

		await expect.element(page.getByText(/edge router is online/i)).not.toBeVisible();
	});

	it('closes when clicking outside the panel', async () => {
		await page.render(
			<div>
				<button type="button">Outside</button>
				<Example />
			</div>,
		);

		await getTrigger().click();
		await expect.element(getPanel()).toBeVisible();

		await page.getByRole('button', { name: 'Outside' }).click();

		await expect.element(page.getByText(/edge router is online/i)).not.toBeVisible();
	});

	it('respects the controlled open prop', async () => {
		const onOpenChange = vi.fn();
		const { rerender } = await page.render(<Example open={false} onOpenChange={onOpenChange} />);

		// Controlled: parent ignores the request, so the trigger cannot self-open the panel.
		await getTrigger().click();
		expect(onOpenChange).toHaveBeenCalledWith(true);
		await expect.element(page.getByText(/edge router is online/i)).not.toBeVisible();

		await rerender(<Example open onOpenChange={onOpenChange} />);
		await expect.element(getPanel()).toBeVisible();
	});
});

describe('DsPopover placement and sizing', () => {
	// Placement is DsPopover's contract; the resulting Ark DOM attribute is not.
	it('maps side and align to a placement string', () => {
		expect(toPlacement('right', 'start')).toBe('right-start');
		expect(toPlacement('top', 'end')).toBe('top-end');
		// align 'center' drops the suffix.
		expect(toPlacement('bottom', 'center')).toBe('bottom');
	});

	it('applies the default panel width', async () => {
		await page.render(<Example defaultOpen />);

		await expect.element(getPanel()).toHaveStyle({ width: '400px' });
	});

	it('applies a custom panel width', async () => {
		await page.render(
			<DsPopover.Root defaultOpen>
				<DsPopover.Trigger>
					<button type="button">Open</button>
				</DsPopover.Trigger>
				<DsPopover.Panel width={520}>
					<DsPopover.Header>Sized panel</DsPopover.Header>
					<DsPopover.Content>
						<DsPopover.ContentItem>Body</DsPopover.ContentItem>
					</DsPopover.Content>
				</DsPopover.Panel>
			</DsPopover.Root>,
		);

		await expect.element(page.getByRole('dialog', { name: /sized panel/i })).toHaveStyle({ width: '520px' });
	});
});

describe('DsPopover content composition', () => {
	it('renders the header icon and exposes the title as the accessible name', async () => {
		await page.render(
			<DsPopover.Root defaultOpen>
				<DsPopover.Trigger>
					<button type="button">Open</button>
				</DsPopover.Trigger>
				<DsPopover.Panel>
					<DsPopover.Header icon={<img alt="severity high" src={PLACEHOLDER_IMAGE} />}>
						Incident summary
					</DsPopover.Header>
					<DsPopover.Content>
						<DsPopover.ContentItem>Body</DsPopover.ContentItem>
					</DsPopover.Content>
				</DsPopover.Panel>
			</DsPopover.Root>,
		);

		const panel = page.getByRole('dialog', { name: /incident summary/i });
		await expect.element(panel).toBeVisible();
		await expect.element(panel.getByRole('img', { name: /severity high/i })).toBeVisible();
	});

	it('renders every content item, including raw text children', async () => {
		await page.render(
			<DsPopover.Root defaultOpen>
				<DsPopover.Trigger>
					<button type="button">Open</button>
				</DsPopover.Trigger>
				<DsPopover.Panel>
					<DsPopover.Header>Items</DsPopover.Header>
					<DsPopover.Content>
						<DsPopover.ContentItem>One</DsPopover.ContentItem>
						<DsPopover.ContentItem>Two</DsPopover.ContentItem>
						<DsPopover.ContentItem>Three</DsPopover.ContentItem>
					</DsPopover.Content>
				</DsPopover.Panel>
			</DsPopover.Root>,
		);

		const panel = page.getByRole('dialog', { name: /items/i });
		await expect.element(panel.getByText('One')).toBeVisible();
		await expect.element(panel.getByText('Two')).toBeVisible();
		await expect.element(panel.getByText('Three')).toBeVisible();
	});

	it('renders ContentItem status, headline, and body', async () => {
		await page.render(
			<DsPopover.Root defaultOpen>
				<DsPopover.Trigger>
					<button type="button">Open</button>
				</DsPopover.Trigger>
				<DsPopover.Panel>
					<DsPopover.Header>Details</DsPopover.Header>
					<DsPopover.Content>
						<DsPopover.ContentItem status={<span>Active</span>} headline="Last version 2.3.4">
							Releases a physical lock.
						</DsPopover.ContentItem>
						<DsPopover.ContentItem>
							<img alt="map preview" src={PLACEHOLDER_IMAGE} />
						</DsPopover.ContentItem>
					</DsPopover.Content>
				</DsPopover.Panel>
			</DsPopover.Root>,
		);

		const panel = page.getByRole('dialog', { name: /details/i });
		await expect.element(panel.getByText('Active')).toBeVisible();
		await expect.element(panel.getByText(/last version 2\.3\.4/i)).toBeVisible();
		await expect.element(panel.getByText(/releases a physical lock/i)).toBeVisible();
		await expect.element(panel.getByRole('img', { name: /map preview/i })).toBeVisible();
	});

	it('keeps footer actions interactive', async () => {
		const onConfirm = vi.fn();
		await page.render(
			<DsPopover.Root defaultOpen>
				<DsPopover.Trigger>
					<button type="button">Open</button>
				</DsPopover.Trigger>
				<DsPopover.Panel>
					<DsPopover.Header>Footer demo</DsPopover.Header>
					<DsPopover.Content>
						<DsPopover.ContentItem>Body</DsPopover.ContentItem>
					</DsPopover.Content>
					<DsPopover.Footer>
						<button type="button" onClick={onConfirm}>
							Confirm
						</button>
					</DsPopover.Footer>
				</DsPopover.Panel>
			</DsPopover.Root>,
		);

		await page.getByRole('button', { name: /confirm/i }).click();
		expect(onConfirm).toHaveBeenCalledOnce();
	});
});

describe('DsPopover legacy call form', () => {
	// The deprecated single-element API must keep working (non-breaking).
	it('opens on click, closes on outside click, and reopens', async () => {
		await page.render(
			<div>
				<button type="button">Outside</button>
				<DsPopover trigger={<button type="button">Open popover</button>}>
					<DsPopover.Header>Legacy details</DsPopover.Header>
					<DsPopover.Content>
						<DsPopover.ContentItem>ID: 123456, Dallas, USA</DsPopover.ContentItem>
					</DsPopover.Content>
				</DsPopover>
			</div>,
		);

		const panel = page.getByRole('dialog', { name: /legacy details/i });
		const trigger = page.getByRole('button', { name: /open popover/i });

		await expect.element(page.getByText(/dallas/i)).not.toBeVisible();

		await trigger.click();
		await expect.element(panel).toBeVisible();
		await expect.element(panel.getByText(/dallas/i)).toBeVisible();

		await page.getByRole('button', { name: 'Outside' }).click();
		await expect.element(page.getByText(/dallas/i)).not.toBeVisible();

		await trigger.click();
		await expect.element(panel).toBeVisible();
	});
});

const OPEN_DELAY = 300;
// A real pointer crosses the gutter in a few milliseconds; Playwright's hover
// actionability checks take much longer, so the test window is generous.
const CLOSE_DELAY = 800;

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Synthetic pointer entry, so the touch guard can be exercised without a touch device.
const pointerEnterTrigger = (pointerType: 'mouse' | 'touch') =>
	getTrigger()
		.element()
		.dispatchEvent(new PointerEvent('pointerover', { pointerType, bubbles: true }));

type HoverExampleProps = Pick<DsPopoverRootProps, 'open' | 'onOpenChange' | 'openDelay' | 'closeDelay'>;

const HoverExample = (props: HoverExampleProps) => (
	<DsPopover.Root openOn="hover" openDelay={OPEN_DELAY} closeDelay={CLOSE_DELAY} side="right" {...props}>
		<DsPopover.Trigger>
			<button type="button">Open details</button>
		</DsPopover.Trigger>
		<DsPopover.Panel width={200}>
			<DsPopover.Header>Device details</DsPopover.Header>
			<DsPopover.Content>
				<DsPopover.ContentItem>
					<a href="#status">Edge router is online.</a>
				</DsPopover.ContentItem>
			</DsPopover.Content>
		</DsPopover.Panel>
	</DsPopover.Root>
);

describe('DsPopover openOn="hover"', () => {
	it('opens after the open delay, not immediately', async () => {
		await page.render(<HoverExample />);

		await getTrigger().hover();
		await expect.element(page.getByText(/edge router is online/i)).not.toBeVisible();

		await expect.element(getPanel()).toBeVisible();
	});

	it('keeps the panel open while the pointer travels from the trigger onto it', async () => {
		await page.render(<HoverExample />);

		await getTrigger().hover();
		await expect.element(getPanel()).toBeVisible();

		// Leave the trigger (starting the close timer), cross the gutter, land on the panel.
		await getTrigger().unhover();
		await getPanel().hover();

		// Well past the close delay: entering the panel must have cancelled the pending close.
		await wait(CLOSE_DELAY + OPEN_DELAY);
		await expect.element(getPanel()).toBeVisible();
		await expect.element(getPanel().getByRole('link', { name: /edge router is online/i })).toBeVisible();
	});

	it('closes after the close delay once the pointer leaves the panel', async () => {
		await page.render(<HoverExample />);

		await getTrigger().hover();
		await expect.element(getPanel()).toBeVisible();

		await getPanel().hover();
		await getPanel().unhover();

		await expect.element(page.getByText(/edge router is online/i)).not.toBeVisible();
	});

	it('still opens and closes on click', async () => {
		await page.render(<HoverExample />);

		// Click resolves immediately — it must not wait for, or be swallowed by, hover intent.
		await getTrigger().click();
		await expect.element(getPanel()).toBeVisible();

		await getTrigger().click();
		await expect.element(page.getByText(/edge router is online/i)).not.toBeVisible();
	});

	it('ignores touch pointers so a tap stays a plain click', async () => {
		await page.render(<HoverExample />);
		// The physical cursor may still be parked on the trigger from a previous test.
		await getTrigger().unhover();

		pointerEnterTrigger('touch');

		await wait(OPEN_DELAY * 2);
		await expect.element(page.getByText(/edge router is online/i)).not.toBeVisible();

		// The same synthetic path with a mouse pointer does open it — the guard is on
		// `pointerType`, not on the test's events failing to reach the handler at all.
		pointerEnterTrigger('mouse');
		await expect.element(getPanel()).toBeVisible();
	});

	it('still closes on Escape', async () => {
		await page.render(<HoverExample />);

		await getTrigger().hover();
		await expect.element(getPanel()).toBeVisible();

		await userEvent.keyboard('{Escape}');

		await expect.element(page.getByText(/edge router is online/i)).not.toBeVisible();
	});

	it('lets a controlled open prop win over hover intent', async () => {
		const onOpenChange = vi.fn();
		await page.render(<HoverExample open={false} onOpenChange={onOpenChange} />);

		await getTrigger().hover();

		// Hover reports intent, but the parent owns the state and said no.
		await vi.waitFor(() => expect(onOpenChange).toHaveBeenCalledWith(true));
		await expect.element(page.getByText(/edge router is online/i)).not.toBeVisible();
	});
});

const FocusExample = () => (
	<div>
		<input aria-label="Elsewhere" />
		<DsPopover.Root openOn="hover" openDelay={100} closeDelay={200} side="right">
			<DsPopover.Trigger>
				<button type="button">Open details</button>
			</DsPopover.Trigger>
			<DsPopover.Panel width={200}>
				<DsPopover.Header>Device details</DsPopover.Header>
				<DsPopover.Content>
					<DsPopover.ContentItem>
						<a href="#status">Edge router is online.</a>
					</DsPopover.ContentItem>
				</DsPopover.Content>
			</DsPopover.Panel>
		</DsPopover.Root>
	</div>
);

const getElsewhere = () => page.getByRole('textbox', { name: 'Elsewhere' });
const panelText = () => page.getByText(/edge router is online/i);

describe('DsPopover openOn="hover" focus behavior', () => {
	it('does not pull focus into the panel when hover opens it', async () => {
		await page.render(<FocusExample />);
		await getTrigger().unhover();
		await getElsewhere().click();

		await getTrigger().hover();
		await expect.element(panelText()).toBeVisible();
		await wait(200);

		expect(document.activeElement?.getAttribute('aria-label')).toBe('Elsewhere');
	});

	it('does not steal focus back to the trigger when hover closes it', async () => {
		await page.render(<FocusExample />);
		await getTrigger().unhover();
		await getElsewhere().click();

		await getTrigger().hover();
		await expect.element(panelText()).toBeVisible();

		// "Hover away" — move the pointer off the trigger, as in the reported repro.
		await getTrigger().unhover();
		await expect.element(panelText()).not.toBeVisible();
		await wait(300);

		// Ark restores focus to the trigger on close; under hover the user never
		// asked for it, so their focus must stay where it was.
		expect(document.activeElement?.getAttribute('aria-label')).toBe('Elsewhere');
	});

	it('opens when the trigger is reached by keyboard tab', async () => {
		await page.render(<FocusExample />);
		await getTrigger().unhover();

		await getElsewhere().click();
		await expect.element(panelText()).not.toBeVisible();

		// Tab from the input onto the trigger.
		await userEvent.keyboard('{Tab}');
		await expect.element(panelText()).toBeVisible();
	});

	it('does not open from the focus a mouse click puts on the trigger', async () => {
		await page.render(<FocusExample />);
		await getTrigger().unhover();

		// Click opens, second click closes — focus-opening must not re-open it.
		await getTrigger().click();
		await expect.element(panelText()).toBeVisible();
		await getTrigger().click();
		await expect.element(panelText()).not.toBeVisible();
	});

	it('leaves focus on the trigger when Escape closes a tab-opened panel', async () => {
		await page.render(<FocusExample />);
		await getTrigger().unhover();
		await getElsewhere().click();

		await userEvent.keyboard('{Tab}');
		await expect.element(panelText()).toBeVisible();

		await userEvent.keyboard('{Escape}');
		await expect.element(panelText()).not.toBeVisible();
		await wait(300);

		expect(document.activeElement?.textContent).toBe('Open details');
	});

	it('returns focus to the trigger when Escape closes a panel the user tabbed into', async () => {
		await page.render(<FocusExample />);
		await getTrigger().unhover();
		await getElsewhere().click();

		await userEvent.keyboard('{Tab}');
		await expect.element(panelText()).toBeVisible();

		// Tab again — Ark proxies this into the portalled panel.
		await userEvent.keyboard('{Tab}');
		await wait(200);

		await userEvent.keyboard('{Escape}');
		await expect.element(panelText()).not.toBeVisible();
		await wait(300);

		// Focus was genuinely inside the panel, so it must not be stranded on <body>.
		expect(document.activeElement?.textContent).toBe('Open details');
	});
});
