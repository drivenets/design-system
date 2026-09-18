import type { CSSProperties, MouseEvent, ReactNode, Ref } from 'react';

export interface DsToggleFilterDataProps {
	/**
	 * Ref to the pill element
	 */
	ref?: Ref<HTMLButtonElement>;
	/**
	 * Emphasized leading segment naming the data the pill filters on
	 */
	label: ReactNode;
	/**
	 * Secondary-colored trailing segment, typically the count the `label` refers to
	 */
	value: ReactNode;
	/**
	 * Whether the pill is toggled on. Controlled — pair it with `onActiveChange` and re-render with
	 * the next value. Surfaced as `aria-pressed`, which stays exposed while `disabled`.
	 */
	active: boolean;
	/**
	 * Whether the pill is disabled. Neither callback fires while set.
	 * @default false
	 */
	disabled?: boolean;
	/**
	 * Additional CSS class names
	 */
	className?: string;
	/**
	 * Additional styles to apply
	 */
	style?: CSSProperties;
	/**
	 * Called on click and on keyboard activation with the next `active` value
	 */
	onActiveChange?: (active: boolean) => void;
	/**
	 * Called with the raw click event, before `onActiveChange`. Observational only — it cannot veto
	 * the toggle.
	 */
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
