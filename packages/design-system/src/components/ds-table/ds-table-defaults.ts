import type { DsDataTableProps } from './ds-table.types';

type DefaultedDsTableProp =
	| 'virtualized'
	| 'stickyHeader'
	| 'bordered'
	| 'fullWidth'
	| 'rowSize'
	| 'loading'
	| 'expandable'
	| 'selectable'
	| 'showSelectAllCheckbox'
	| 'primaryRowActions'
	| 'actions'
	| 'reorderable'
	| 'resizableColumns';

export type DsTablePropsWithDefaults<TData, TValue> = DsDataTableProps<TData, TValue> &
	Required<Pick<DsDataTableProps<TData, TValue>, DefaultedDsTableProp>>;

/**
 * Applies the documented `DsTable` prop defaults. Call once at the table
 * boundary so orchestration and context see the same resolved values.
 */
export const applyDsTableDefaults = <TData, TValue>(
	props: DsDataTableProps<TData, TValue>,
): DsTablePropsWithDefaults<TData, TValue> => ({
	...props,
	virtualized: props.virtualized ?? false,
	stickyHeader: props.stickyHeader ?? true,
	bordered: props.bordered ?? true,
	fullWidth: props.fullWidth ?? true,
	rowSize: props.rowSize ?? 'medium',
	loading: props.loading ?? false,
	expandable: props.expandable ?? false,
	selectable: props.selectable ?? false,
	showSelectAllCheckbox: props.showSelectAllCheckbox ?? true,
	primaryRowActions: props.primaryRowActions ?? [],
	actions: props.actions ?? [],
	reorderable: props.reorderable ?? false,
	resizableColumns: props.resizableColumns ?? false,
});
