import type React from 'react';
import type { semanticElementMap } from './ds-typography.config';

export type SemanticVariant = keyof typeof semanticElementMap;

export interface DsTypographyProps {
	/**
	 * The semantic variant of the component
	 */
	variant: SemanticVariant;
	/**
	 * Additional CSS class names
	 */
	className?: string;
	/**
	 * Additional styles to apply to the typography component
	 */
	style?: React.CSSProperties;
	/**
	 * When true, renders as Slot component for composition without extra DOM nodes
	 */
	asChild?: boolean;
	/**
	 * The content of the component
	 */
	children: React.ReactNode;
}
