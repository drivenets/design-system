import { BUILTIN_COLUMN_IDS } from './constants';

export type ColumnDefNode = {
	id?: string;
	accessorKey?: unknown;
	header?: unknown;
	columns?: ColumnDefNode[];
};

/** Same id TanStack derives for a column def: `id`, then `accessorKey` (dots → `_`), then a string header. */
export const getColumnDefId = (def: ColumnDefNode): string | undefined => {
	if (def.id !== undefined) {
		return def.id;
	}

	if (typeof def.accessorKey === 'string') {
		return def.accessorKey.replaceAll('.', '_');
	}

	return typeof def.header === 'string' ? def.header : undefined;
};

const getDefLeafIds = (def: ColumnDefNode): string[] => {
	if (!def.columns?.length) {
		const id = getColumnDefId(def);
		return id === undefined ? [] : [id];
	}

	return def.columns.flatMap(getDefLeafIds);
};

export const getColumnDefLeafIds = (columnDefs: readonly ColumnDefNode[]): string[] =>
	columnDefs.flatMap(getDefLeafIds);

/**
 * Sorts columns by the first of their leaves listed in `columnOrder`; unlisted columns
 * go last, keeping their own order.
 */
export const sortByColumnOrder = <T>(
	items: readonly T[],
	columnOrder: readonly string[],
	getLeafIds: (item: T) => readonly string[],
): T[] => {
	const positions = new Map<string, number>();
	columnOrder.forEach((id, index) => {
		if (!positions.has(id)) {
			positions.set(id, index);
		}
	});
	const rank = (item: T) =>
		Math.min(columnOrder.length, ...getLeafIds(item).map((id) => positions.get(id) ?? columnOrder.length));

	return items
		.map((item) => ({ item, rank: rank(item) }))
		.toSorted((a, b) => a.rank - b.rank)
		.map(({ item }) => item);
};

// Ranked per sibling list like the Columns popover, so an unlisted leaf lands at the end of its own group
export const resolveColumnOrder = (
	columnOrder: readonly string[] | undefined,
	columnDefs: readonly ColumnDefNode[],
): string[] => {
	const order = (defs: readonly ColumnDefNode[]): string[] =>
		sortByColumnOrder(defs, columnOrder ?? [], (def) => getColumnDefLeafIds([def])).flatMap((def) =>
			def.columns?.length ? order(def.columns) : getColumnDefLeafIds([def]),
		);

	return order(columnDefs).filter((id) => !BUILTIN_COLUMN_IDS.has(id));
};

/**
 * TanStack `columnOrder` for every leaf, utility columns included: utility
 * columns stay in their definition slots and the consumer slots follow `order`.
 */
export const toTableColumnOrder = (order: readonly string[], allLeafIds: readonly string[]): string[] => {
	let next = 0;

	return allLeafIds.map((id) => (BUILTIN_COLUMN_IDS.has(id) ? id : (order[next++] ?? id)));
};

// Newly sticky leaves join the end of the sticky block and unpinned ones the start of the rest
export const getPinnedColumnOrder = (
	order: string[],
	previousSticky: readonly string[],
	nextSticky: readonly string[],
): string[] => {
	const previous = new Set(previousSticky);
	const next = new Set(nextSticky);
	const added = order.filter((id) => next.has(id) && !previous.has(id));
	const removed = order.filter((id) => previous.has(id) && !next.has(id));

	if (added.length === 0 && removed.length === 0) {
		return order;
	}

	const kept = order.filter((id) => previous.has(id) && next.has(id));
	const moved = new Set([...kept, ...added, ...removed]);

	return [...kept, ...added, ...removed, ...order.filter((id) => !moved.has(id))];
};
