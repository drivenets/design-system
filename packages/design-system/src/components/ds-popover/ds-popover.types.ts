import type { CSSProperties, ReactNode, Ref } from 'react';

export const popoverSides = ['top', 'right', 'bottom', 'left'] as const;
export type DsPopoverSide = (typeof popoverSides)[number];

export const popoverAligns = ['start', 'center', 'end'] as const;
export type DsPopoverAlign = (typeof popoverAligns)[number];

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
	children: ReactNode;
	/** Fires when the popover opens or closes. */
	onOpenChange?: (open: boolean) => void;
}

export interface DsPopoverTriggerProps {
	/** Single focusable element that toggles the popover. */
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
