import type { CSSProperties, MouseEvent, ReactNode, Ref } from 'react';

export interface DsToggleFilterDataProps {
	ref?: Ref<HTMLButtonElement>;
	/**
	 * Emphasized leading segment naming the data the pill filters on. Rendered with no separator
	 * before `value`.
	 */
	label: ReactNode;
	/**
	 * Secondary-colored trailing segment, typically the count or datum the `label` refers to.
	 */
	value: ReactNode;
	/**
	 * Whether the pill is toggled on. Controlled — the pill keeps no state of its own, so pair it
	 * with `onActiveChange` and re-render with the next value. Surfaced as `aria-pressed`, which
	 * stays exposed while `disabled`.
	 */
	active: boolean;
	/**
	 * Whether the pill is disabled. Renders the greyed treatment and removes the pill from pointer
	 * and keyboard interaction, so neither callback fires.
	 * @default false
	 */
	disabled?: boolean;
	className?: string;
	style?: CSSProperties;
	/**
	 * Called on click and on keyboard activation with the **next** `active` value.
	 */
	onActiveChange?: (active: boolean) => void;
	/**
	 * Called with the raw click event, before `onActiveChange`. Only needed for consumers that read
	 * modifier keys or the event target; prefer `onActiveChange` for toggling.
	 *
	 * Observational only — it cannot veto the toggle. `onActiveChange` still fires even if this
	 * handler calls `event.preventDefault()`. Gate on the parent's side instead, or pass `disabled`.
	 */
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
