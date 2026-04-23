import { useCallback, useMemo } from 'react';

export type CheckedState = boolean | 'indeterminate';

export interface UseCheckboxSelectAllOptions<T extends string> {
	/** Currently selected values. */
	value: T[];
	/** Full set of values represented by the group. */
	allValues: readonly T[];
	/** Callback to update selected values. */
	onValueChange: (next: T[]) => void;
	/**
	 * Optional predicate to exclude values from bulk select/deselect.
	 * Non-selectable values that are already in `value` are preserved on toggle.
	 */
	isSelectable?: (value: T) => boolean;
}

export interface UseCheckboxSelectAllResult {
	/** Tri-state value for the select-all checkbox. */
	selectAllState: CheckedState;
	/** Count of selected values that are also selectable. */
	selectedCount: number;
	/** Count of selectable values. */
	selectableCount: number;
	/** Handler for the select-all checkbox's `onCheckedChange`. */
	onSelectAllChange: (checked: CheckedState) => void;
}

/**
 * Headless helper for a "select all" checkbox bound to a checkbox group.
 *
 * - Derives tri-state (`true` / `false` / `'indeterminate'`) from current selection.
 * - Toggling selects or clears only selectable values; preserves any already-selected
 *   non-selectable values so bulk actions don't silently mutate protected items.
 */
export function useCheckboxSelectAll<T extends string>({
	value,
	allValues,
	onValueChange,
	isSelectable,
}: UseCheckboxSelectAllOptions<T>): UseCheckboxSelectAllResult {
	const selectableValues = useMemo(
		() => (isSelectable ? allValues.filter(isSelectable) : [...allValues]),
		[allValues, isSelectable],
	);

	const selectableSet = useMemo(() => new Set(selectableValues), [selectableValues]);

	const selectedCount = useMemo(
		() => value.reduce((count, v) => (selectableSet.has(v) ? count + 1 : count), 0),
		[value, selectableSet],
	);

	const selectableCount = selectableValues.length;

	const selectAllState: CheckedState =
		selectableCount === 0 || selectedCount === 0
			? false
			: selectedCount === selectableCount
				? true
				: 'indeterminate';

	const onSelectAllChange = useCallback(
		(checked: CheckedState) => {
			const preserved = value.filter((v) => !selectableSet.has(v));
			onValueChange(checked === true ? [...preserved, ...selectableValues] : preserved);
		},
		[value, selectableSet, selectableValues, onValueChange],
	);

	return {
		selectAllState,
		selectedCount,
		selectableCount,
		onSelectAllChange,
	};
}
