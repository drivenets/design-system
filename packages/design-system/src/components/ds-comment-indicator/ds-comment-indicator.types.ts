import type { CSSProperties, Ref } from 'react';

export type CommentIndicatorType = 'placeholder' | 'default' | 'action-required';

export interface DsCommentIndicatorProps {
	/**
	 * Visual state of the indicator:
	 * - `placeholder`: dashed outline for "click here to add a comment" affordances
	 * - `default`: filled pin showing an existing comment
	 * - `action-required`: emphasized pin for comments flagged as requiring action
	 * @default default
	 */
	type?: CommentIndicatorType;
	/**
	 * Optional URL to the author's avatar image shown inside the pin
	 */
	avatarSrc?: string;
	/**
	 * Author display name used to derive fallback avatar initials when `avatarSrc`
	 * is not provided
	 */
	avatarName?: string;
	/**
	 * Called when the indicator is clicked (e.g., to open the comment bubble)
	 */
	onClick?: () => void;
	/**
	 * Ref forwarded to the indicator root button element
	 */
	ref?: Ref<HTMLButtonElement>;
	/**
	 * Additional CSS class name applied to the indicator root
	 */
	className?: string;
	/**
	 * Inline styles applied to the indicator root
	 */
	style?: CSSProperties;
}
