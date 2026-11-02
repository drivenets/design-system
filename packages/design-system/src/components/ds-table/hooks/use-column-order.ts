import { useEffect, useMemo, useState } from 'react';
import type { ColumnDef, ColumnOrderState, ColumnPinningState, Updater } from '@tanstack/react-table';
import type { DsTableStickyColumns } from '../ds-table.types';
import { resolveColumnPinning, toStickyColumns } from '../utils/sticky-columns';
import {
	getColumnDefLeafIds,
	getPinnedColumnOrder,
	resolveColumnOrder,
	toTableColumnOrder,
} from '../utils/column-order';
import { BUILTIN_COLUMN_IDS } from '../utils/constants';

interface PendingPin {
	from: readonly string[];
	to: readonly string[];
	/** The order the pin moves within; a later order change supersedes the pin */
	baseOrderKey: string;
}

const getStickyLeafIds = ({ left = [] }: ColumnPinningState) =>
	left.filter((id) => !BUILTIN_COLUMN_IDS.has(id));

const isSameIdSet = (a: readonly string[], b: readonly string[]) =>
	a.length === b.length && a.every((id) => b.includes(id));

const isSameOrder = (a: readonly string[], b: readonly string[]) =>
	a.length === b.length && a.every((id, index) => b[index] === id);

const resolveUpdater = <T>(updater: Updater<T>, current: T): T =>
	typeof updater === 'function' ? (updater as (old: T) => T)(current) : updater;

export interface UseColumnOrderOptions<TData, TValue> {
	columnDefs: ColumnDef<TData, TValue>[];
	/** The column defs the table renders, utility columns included */
	tableColumnDefs: ColumnDef<TData, TValue>[];
	columnOrder?: string[];
	onColumnOrderChange?: (columnOrder: string[]) => void;
	stickyColumns?: DsTableStickyColumns;
	onStickyColumnsChange?: (stickyColumns: DsTableStickyColumns) => void;
	/** Sticky columns follow `columnOrder`, and pinning moves a column between the sticky and scrolling blocks */
	reorderEnabled: boolean;
}

export const useColumnOrder = <TData, TValue>({
	columnDefs,
	tableColumnDefs,
	columnOrder: externalColumnOrder,
	onColumnOrderChange,
	stickyColumns: externalStickyColumns,
	onStickyColumnsChange,
	reorderEnabled,
}: UseColumnOrderOptions<TData, TValue>) => {
	const [internalStickyColumns, setInternalStickyColumns] = useState<DsTableStickyColumns>({});
	const [internalColumnOrder, setInternalColumnOrder] = useState<string[]>();

	const baseColumnOrder = externalColumnOrder ?? internalColumnOrder;
	const hasColumnOrder = baseColumnOrder !== undefined;
	const baseColumnOrderKey = JSON.stringify(baseColumnOrder ?? null);
	const resolvedColumnOrder = useMemo(
		() => resolveColumnOrder(baseColumnOrder, columnDefs),
		// Keyed on content so an inline `columnOrder` array doesn't re-resolve every render.
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[baseColumnOrderKey, columnDefs],
	);
	const stickyColumns = externalStickyColumns ?? internalStickyColumns;
	const stickyColumnsKey = JSON.stringify([stickyColumns.left, stickyColumns.right]);
	const stickyLeafIds = useMemo(
		() => getStickyLeafIds(resolveColumnPinning(stickyColumns, columnDefs)),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[stickyColumnsKey, columnDefs],
	);
	const [pendingPin, setPendingPin] = useState<PendingPin | null>(null);

	// A pin may land renders later, but not once the order or the sticky columns have moved on without it
	if (
		pendingPin &&
		(pendingPin.baseOrderKey !== baseColumnOrderKey ||
			(!isSameIdSet(stickyLeafIds, pendingPin.from) && !isSameIdSet(stickyLeafIds, pendingPin.to)))
	) {
		setPendingPin(null);
	}

	// A pin moves its column once the consumer's sticky columns match it, however many renders later
	const landedPin =
		pendingPin?.baseOrderKey === baseColumnOrderKey && isSameIdSet(stickyLeafIds, pendingPin.to)
			? pendingPin
			: null;
	const columnOrder = useMemo(
		() =>
			landedPin
				? getPinnedColumnOrder(resolvedColumnOrder, landedPin.from, landedPin.to)
				: resolvedColumnOrder,
		[landedPin, resolvedColumnOrder],
	);
	const tableColumnOrder = useMemo(
		() =>
			hasColumnOrder || landedPin
				? toTableColumnOrder(columnOrder, getColumnDefLeafIds(tableColumnDefs))
				: [],
		[hasColumnOrder, landedPin, columnOrder, tableColumnDefs],
	);
	const handleColumnOrderChange = (updater: Updater<ColumnOrderState>) => {
		const nextOrder = resolveUpdater(updater, tableColumnOrder).filter((id) => !BUILTIN_COLUMN_IDS.has(id));

		if (externalColumnOrder === undefined) {
			setInternalColumnOrder(nextOrder);
		}

		onColumnOrderChange?.(nextOrder);
	};

	// Only a commit shows that the consumer applied the pin, so the landed move is reported from there, once
	useEffect(() => {
		if (!landedPin) {
			return;
		}

		setPendingPin(null);

		if (!isSameOrder(columnOrder, resolvedColumnOrder)) {
			handleColumnOrderChange(columnOrder);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [landedPin]);

	const columnPinning = useMemo(
		() => resolveColumnPinning(stickyColumns, columnDefs, reorderEnabled ? columnOrder : undefined),
		// Keyed on content so an inline `stickyColumns` object doesn't re-pin every render.
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[stickyColumnsKey, columnDefs, reorderEnabled, columnOrder],
	);
	const handleColumnPinningChange = (updater: Updater<ColumnPinningState>) => {
		const nextStickyColumns = toStickyColumns(
			resolveUpdater(updater, columnPinning),
			stickyColumns,
			columnDefs,
		);

		if (externalStickyColumns === undefined) {
			setInternalStickyColumns(nextStickyColumns);
		}

		onStickyColumnsChange?.(nextStickyColumns);

		const nextStickyLeafIds = getStickyLeafIds(resolveColumnPinning(nextStickyColumns, columnDefs));

		if (reorderEnabled && !isSameIdSet(stickyLeafIds, nextStickyLeafIds)) {
			setPendingPin({ from: stickyLeafIds, to: nextStickyLeafIds, baseOrderKey: baseColumnOrderKey });
		}
	};

	return {
		columnOrder,
		tableColumnOrder,
		columnPinning,
		onColumnOrderChange: handleColumnOrderChange,
		onColumnPinningChange: handleColumnPinningChange,
	};
};
