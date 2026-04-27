import type * as Collapsible from '@radix-ui/react-collapsible';

import type { ResponsiveValue } from '../../utils/responsive';

export type DsPanelVariant = 'docked' | 'floating';

export type DsPanelBaseProps = Omit<Collapsible.CollapsibleProps, 'onOpenChange'> & {
	/**
	 * Visual treatment of the panel:
	 * - `docked`: sits flush within the surrounding layout (default)
	 * - `floating`: elevated card with shadow, detached from the layout
	 * @default docked
	 */
	variant?: DsPanelVariant;
	/**
	 * Width of the panel in pixels when expanded.
	 */
	width?: number;
	/**
	 * Whether the panel edge can be dragged to resize its width.
	 * @default false
	 */
	draggable?: boolean;
	/**
	 * Disable the default inner padding so the panel content can bleed to the edges.
	 * @default false
	 */
	disablePadding?: boolean;
	/**
	 * Props forwarded to nested sub-components.
	 */
	slotProps?: {
		/**
		 * Props forwarded to the collapse/expand button shown on the panel edge.
		 */
		collapseButton?: DsPanelCollapseButtonProps;
	};
	/**
	 * Called when the panel's open (expanded) state changes. Receives the next
	 * boolean state.
	 */
	onOpenChange?: (open: boolean) => void;
};

export type DsPanelProps = Omit<DsPanelBaseProps, 'width'> & {
	/**
	 * Width of the panel when expanded. Accepts a single number (px) or a
	 * `ResponsiveValue` to vary width by breakpoint.
	 */
	width?: ResponsiveValue<number>;
};

export type DsPanelCollapseButtonProps = {
	/**
	 * Called when the collapse button is clicked.
	 */
	onClick?: () => void;
	/**
	 * Whether the panel is currently collapsed. Drives the button's chevron
	 * orientation and aria-label.
	 * @default false
	 */
	collapsed?: boolean;
};
