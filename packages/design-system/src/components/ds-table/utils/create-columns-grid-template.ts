import type { ColumnDef } from '@tanstack/react-table';

type Args = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	columns: ColumnDef<any, any>[];
	selectable?: boolean;
	expandable?: boolean;
};

// In virtualized tables, the rows should all be positioned at the top with a `translateY` offset.
// We're using a Grid for this rather than `position: absolute` to ensure that each cell aligns with
// other cells in the same column (mimicking the native table behavior).
export function createColumnsGridTemplate({ columns, selectable, expandable }: Args): string {
	const template = [];
	if (selectable) {
		template.push('max-content');
	}

	if (expandable) {
		template.push('auto');
	}

	for (const col of columns) {
		template.push(col.size ? `${String(col.size)}px` : 'auto');
	}

	return template.join(' ');
}
