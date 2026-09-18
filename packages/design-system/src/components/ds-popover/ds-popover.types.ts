import type { CSSProperties, ReactNode, Ref } from 'react';

export const popoverSides = ['top', 'right', 'bottom', 'left'] as const;
export type DsPopoverSide = (typeof popoverSides)[number];

export const popoverAligns = ['start', 'center', 'end'] as const;
export type DsPopoverAlign = (typeof popoverAligns)[number];

export const popoverOpenTriggers = ['click', 'hover'] as const;
export type DsPopoverOpenTrigger = (typeof popoverOpenTriggers)[number];

export interface DsPopoverRootProps {
	/** Controlled open state. Pair with `onOpenChange`. */
	open?: boolean;
	/** Initial open state when uncontrolled. */
	defaultOpen?: boolean;
	/**
	 * Preferred side of the trigger to render the panel against.
	 * @default 'bottom'
	 */
	side?: DsPopoverSide;
	/**
	 * Alignment of the panel along the trigger edge.
	 * @default 'center'
	 */
	align?: DsPopoverAlign;
	/**
	 * Gap in pixels between the trigger and the panel.
	 * @default 8
	 */
	gutter?: number;
	/**
	 * Trap focus and block interaction with elements outside the panel.
	 * @default false
	 */
	modal?: boolean;
	/**
	 * Size the panel to the positioning reference (Anchor, or the trigger).
	 * An explicit `DsPopover.Panel` `width` wins over this.
	 * @default false
	 */
	matchAnchorWidth?: boolean;
	/**
	 * Whether to restore focus to the previously focused element on close.
	 * @default true
	 */
	restoreFocus?: boolean;
	/**
	 * Trigger open method - click / hover
	 * @default 'click'
	 */
	openOn?: DsPopoverOpenTrigger;
	/**
	 * Milliseconds the pointer must rest on the trigger before the panel opens.
	 * Ignored unless `openOn` is `'hover'`.
	 * @default 200
	 */
	openDelay?: number;
	/**
	 * Milliseconds after the pointer leaves the trigger or the panel before it
	 * closes. Ignored unless `openOn` is `'hover'`.
	 * @default 150
	 */
	closeDelay?: number;
	/**
	 * Returns the element the panel should position against.
	 * When provided, the panel anchors to this element instead of the trigger —
	 * useful when the trigger lives in one place (e.g. a sidebar) and the panel
	 * should appear relative to a different reference point. Prefer `DsPopover.Anchor`
	 * when the reference is in the tree.
	 */
	getAnchorElement?: () => HTMLElement | null;
	children: ReactNode;
	/**
	 * Called when focus is about to move into the panel as it opens.
	 * Call `event.preventDefault()` to stop the default move to the first focusable
	 * control; focus another node in the same handler if needed.
	 */
	onOpenAutoFocus?: (event: Event) => void;
	/**
	 * Called when focus is about to leave the panel as it closes.
	 * Call `event.preventDefault()` to stop restoring focus to the trigger;
	 * focus another node in the same handler if needed.
	 * Still runs when `restoreFocus` is false.
	 */
	onCloseAutoFocus?: (event: Event) => void;
	/**
	 * Called when the user interacts outside the panel.
	 * Call `event.preventDefault()` to keep the panel open. Clicks on
	 * `DsPopover.Anchor` already do not dismiss.
	 */
	onInteractOutside?: (event: Event) => void;
	/** Fires when the popover opens or closes. */
	onOpenChange?: (open: boolean) => void;
}

export interface DsPopoverTriggerProps {
	/** Single focusable element that toggles the popover. */
	children: ReactNode;
	className?: string;
}

export interface DsPopoverAnchorProps {
	/** Single element the panel positions against. Wraps the trigger when they share a field. */
	children: ReactNode;
	className?: string;
}

export interface DsPopoverPanelProps {
	/**
	 * Panel width in pixels.
	 * @default 400
	 */
	width?: number;
	className?: string;
	style?: CSSProperties;
	children: ReactNode;
	ref?: Ref<HTMLDivElement>;
	id?: string;
	'aria-label'?: string;
}

export interface DsPopoverHeaderProps {
	/** Leading visual (e.g. a colored task-type icon) rendered before the title. */
	icon?: ReactNode;
	className?: string;
	style?: CSSProperties;
	/** Title content, exposed as the popover's accessible name. */
	children: ReactNode;
}

export interface DsPopoverContentProps {
	className?: string;
	style?: CSSProperties;
	/** Ordered `DsPopover.ContentItem` children. Compose `DsDivider` between them for visual separation. */
	children: ReactNode;
}

export interface DsPopoverContentItemProps {
	/** Status badge shown in the item's header row. */
	status?: ReactNode;
	/** Bold headline text shown in the item's header row. */
	headline?: ReactNode;
	className?: string;
	style?: CSSProperties;
	/** Item body — text, avatar rows, icons, images, etc. */
	children?: ReactNode;
}

export interface DsPopoverFooterProps {
	className?: string;
	style?: CSSProperties;
	/** Footer actions, typically a single secondary CTA button. */
	children: ReactNode;
}

/**
 * Props for the legacy single-element call form (`<DsPopover trigger=… />`).
 * @deprecated Use the compound API: `DsPopover.Root` + `DsPopover.Trigger` + `DsPopover.Panel`.
 */
export interface DsPopoverProps {
	/** Element that toggles the popover. */
	trigger: ReactNode;
	/** Panel content. */
	children: ReactNode;
	/** Forwarded to the panel. */
	className?: string;
	/** @default 'center' */
	align?: DsPopoverAlign;
	/** @default 'top' */
	side?: DsPopoverSide;
}
