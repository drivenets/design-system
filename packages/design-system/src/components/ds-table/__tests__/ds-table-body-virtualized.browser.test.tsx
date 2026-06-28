import type { RefObject } from 'react';
import { describe, expect, it } from 'vitest';
import { page } from 'vitest/browser';
import type { Row, RowSelectionState } from '@tanstack/react-table';
import type { Virtualizer } from '@tanstack/react-virtual';
import { DsTableBody } from '../components/ds-table-body-virtualized';

type BodyVirtualizer = Virtualizer<HTMLTableSectionElement, HTMLTableRowElement>;

// Reproduce the frame the real virtualizer produces mid re-measure after a
// `data` swap: count > 0 but getVirtualItems() returns []. See AR-71791.
function createEmptyItemsVirtualizer(): BodyVirtualizer {
	return {
		getVirtualItems: () => [],
		getTotalSize: () => 0,
	} as unknown as BodyVirtualizer;
}

const baseProps = {
	ref: { current: null } as RefObject<HTMLTableSectionElement | null>,
	rowsMapRef: { current: new Map() } as RefObject<Map<string, HTMLTableRowElement>>,
	rowHeightsMapRef: { current: new Map() } as RefObject<Map<string, number>>,
	rowSelection: {} as RowSelectionState,
	emptyState: <div>EMPTY_STATE_MARKER</div>,
};

describe('DsTableBody (virtualized)', () => {
	it('does not render the empty state while data exists but no virtual rows are ready', async () => {
		await page.render(
			<table>
				<DsTableBody
					{...baseProps}
					rowVirtualizer={createEmptyItemsVirtualizer()}
					// data present (count > 0) — row content is never read in this branch
					rowsAndExpandedRowContent={[{ row: {} as Row<unknown> }]}
				/>
			</table>,
		);

		await expect.element(page.getByText('EMPTY_STATE_MARKER')).not.toBeInTheDocument();
	});

	it('renders the empty state only when there is genuinely no data', async () => {
		await page.render(
			<table>
				<DsTableBody
					{...baseProps}
					rowVirtualizer={createEmptyItemsVirtualizer()}
					rowsAndExpandedRowContent={[]}
				/>
			</table>,
		);

		await expect.element(page.getByText('EMPTY_STATE_MARKER')).toBeVisible();
	});
});
