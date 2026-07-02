import type { CSSProperties, Ref } from 'react';

export const taskBarStatuses = ['completed', 'running', 'failed'] as const;
export type TaskBarStatus = (typeof taskBarStatuses)[number];

export interface DsProgressTaskBarLocale {
	/** @default 'Completed' */
	completed?: string;
	/** @default 'Running' */
	running?: string;
	/** @default 'Failed' */
	failed?: string;
	/**
	 * Builds the trailing total label from the already-formatted total value.
	 * @default (total) => `of ${total}`
	 */
	total?: (total: string) => string;
}

export interface DsProgressTaskBarProps {
	/**
	 * Number of completed tasks.
	 * @default 0
	 */
	completed?: number;

	/**
	 * Number of running tasks.
	 * @default 0
	 */
	running?: number;

	/**
	 * Number of failed tasks.
	 * @default 0
	 */
	failed?: number;

	/**
	 * Total task count used as the denominator for segment widths and shown as
	 * the trailing "of {total}" label. Defaults to the sum of the status counts
	 * (fully filled bar).
	 */
	total?: number;

	/**
	 * Localized strings (status tooltips and total label).
	 */
	locale?: DsProgressTaskBarLocale;

	/**
	 * Additional CSS class names
	 */
	className?: string;

	/**
	 * Additional styles to apply to the component
	 */
	style?: CSSProperties;

	/**
	 * Ref to the root element
	 */
	ref?: Ref<HTMLDivElement>;
}
