import { useMemo, useState } from 'react';
import type { ColumnDef, VisibilityState } from '@tanstack/react-table';
import { getCollapsedColumnVisibility, getInitialCollapsedGroups } from '../utils/column-group';

interface UseColumnGroupsParams<TData, TValue> {
	/**
	 * Consumer-provided columns (before utility columns are injected). Group defs
	 * nest child columns via `columns`.
	 */
	columns: ColumnDef<TData, TValue>[];

	/**
	 * Controlled list of collapsed group ids. When provided, the table no longer
	 * manages collapse state internally.
	 */
	collapsedColumnGroups?: string[];

	/**
	 * Called with the next list of collapsed group ids whenever a group is toggled.
	 */
	onCollapsedColumnGroupsChange?: (collapsedGroupIds: string[]) => void;
}

interface UseColumnGroupsResult {
	/**
	 * The effective list of collapsed group ids (controlled or internal).
	 */
	collapsedColumnGroups: string[];

	/**
	 * Toggles a single group's collapsed state.
	 */
	toggleColumnGroup: (groupId: string) => void;

	/**
	 * Visibility overrides derived from the collapsed groups, to be layered on top
	 * of the consumer's own column visibility.
	 */
	collapsedVisibility: VisibilityState;
}

/**
 * Manages column-group collapse state. Supports both controlled
 * (`collapsedColumnGroups` + `onCollapsedColumnGroupsChange`) and uncontrolled
 * usage (seeded from `meta.group.defaultCollapsed`).
 */
export const useColumnGroups = <TData, TValue>({
	columns,
	collapsedColumnGroups,
	onCollapsedColumnGroupsChange,
}: UseColumnGroupsParams<TData, TValue>): UseColumnGroupsResult => {
	const [internalCollapsed, setInternalCollapsed] = useState<string[]>(() =>
		getInitialCollapsedGroups(columns),
	);

	const isControlled = collapsedColumnGroups !== undefined;
	const collapsed = isControlled ? collapsedColumnGroups : internalCollapsed;

	const toggleColumnGroup = (groupId: string) => {
		const next = collapsed.includes(groupId)
			? collapsed.filter((id) => id !== groupId)
			: [...collapsed, groupId];

		if (!isControlled) {
			setInternalCollapsed(next);
		}

		onCollapsedColumnGroupsChange?.(next);
	};

	const collapsedVisibility = useMemo(
		() => getCollapsedColumnVisibility(columns, collapsed),
		[columns, collapsed],
	);

	return { collapsedColumnGroups: collapsed, toggleColumnGroup, collapsedVisibility };
};
