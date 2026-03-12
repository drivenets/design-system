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
	slotProps?: {
		content?: {
			className?: string;
			style?: CSSProperties;
		};
	};
}
