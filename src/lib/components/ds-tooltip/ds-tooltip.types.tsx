import React from 'react';

export interface DsTooltipProps {
	/**
	 * Tooltip content
	 */
	content: string | React.ReactNode;
	/**
	 * The content to be rendered inside the tooltip
	 */
	children: React.ReactNode;
}
