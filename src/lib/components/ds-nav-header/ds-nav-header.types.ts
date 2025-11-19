import { CSSProperties, ReactNode } from 'react';

export interface DsNavHeaderProps {
	/**
	 * Additional CSS class names
	 */
	className?: string;
	/**
	 * Additional inline styles
	 */
	style?: CSSProperties;
	/**
	 * Child components (Start, Content, End)
	 */
	children: ReactNode;
}

export interface DsNavHeaderSectionProps {
	/**
	 * Additional CSS class names
	 */
	className?: string;
	/**
	 * Additional inline styles
	 */
	style?: CSSProperties;
	/**
	 * Section content
	 */
	children: ReactNode;
}
