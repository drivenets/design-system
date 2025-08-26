import React, { ReactNode } from 'react';
import { IconType } from '../ds-icon';

export const controlStatuses = ['info', 'success', 'error', 'warning'] as const;
export type ControlStatus = (typeof controlStatuses)[number];

export interface DsFormControlProps extends React.PropsWithChildren {
	/**
	 * Unique identifier for the control
	 */
	id?: string;
	/**
	 * Visual status
	 */
	status?: ControlStatus;
	/**
	 * Label text
	 */
	label: string;
	/**
	 * Marks the field as required
	 */
	required?: boolean;
	/**
	 * Show help icon next to the label
	 */
	showHelpIcon?: boolean;
	/**
	 * Callback when help icon is clicked
	 */
	onHelpClick?: () => void;
	/**
	 * Message under the control
	 */
	message?: string;
	/**
	 * Icon shown next to message
	 */
	messageIcon?: IconType;
	/**
	 * Additional CSS class names
	 */
	className?: string;
	/**
	 * Additional styles to apply to the component
	 */
	style?: React.CSSProperties;
}

export interface DsFormControlDescriptionProps {
	/**
	 * The description content
	 */
	children: ReactNode;
	/**
	 * Additional CSS class names
	 */
	className?: string;
}
