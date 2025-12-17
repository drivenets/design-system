import type { ColumnDef } from '@tanstack/react-table';

type Args = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	columns: ColumnDef<any, any>[];
	selectable?: boolean;
};

// In virtualized tables, the rows should all be positioned at the top with a `translateY` offset.
// We're using a Grid for this rather than `position: absolute` to ensure that each cell aligns with
// other cells in the same column (mimicking the native table behavior).
export function createColumnsGridTemplate({ columns, selectable }: Args): string {
	return columns
		.reduce<string[]>(
			(acc, col) => {
				acc.push(col.size ? `${col.size}px` : 'auto');

				return acc;
			},
			selectable ? ['max-content'] : [],
		)
		.join(' ');
}
