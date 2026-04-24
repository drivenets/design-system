import type { CSSProperties, ReactNode } from 'react';

export interface DsTooltipProps {
	/**
	 * Tooltip content
	 */
	content?: string | ReactNode;
	/**
	 * The content to be rendered inside the tooltip
	 */
	children: ReactNode;
	/**
	 * Props forwarded to nested sub-components.
	 */
	slotProps?: {
		/**
		 * Props forwarded to the tooltip content popover (className / inline styles).
		 */
		content?: {
			className?: string;
			style?: CSSProperties;
		};
	};
}
