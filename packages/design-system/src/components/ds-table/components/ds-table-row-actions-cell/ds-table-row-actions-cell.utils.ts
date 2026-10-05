import type { RowAction, SecondaryRowAction } from './ds-table-row-actions-cell.types';

type ResolvableAction<TData> = Pick<RowAction<TData>, 'label' | 'tooltip'>;

export const resolveLabel = <TData>(action: ResolvableAction<TData>, row: TData): string =>
	typeof action.label === 'function' ? action.label(row) : action.label;

export const resolveTooltip = <TData>(action: ResolvableAction<TData>, row: TData): string | undefined =>
	typeof action.tooltip === 'function' ? action.tooltip(row) : action.tooltip;

export const isBranchAction = <TData>(
	action: SecondaryRowAction<TData>,
): action is Extract<SecondaryRowAction<TData>, { children: SecondaryRowAction<TData>[] }> =>
	'children' in action && Array.isArray(action.children);

/**
 * Drops hidden actions (recursively) and parents left without visible children.
 */
export const filterVisibleActions = <TData>(
	actions: SecondaryRowAction<TData>[],
	row: TData,
): SecondaryRowAction<TData>[] =>
	actions.flatMap((action): SecondaryRowAction<TData>[] => {
		if (action.hidden?.(row)) {
			return [];
		}

		if (!isBranchAction(action)) {
			return [action];
		}

		const children = filterVisibleActions(action.children, row);

		return children.length ? [{ ...action, children }] : [];
	});
