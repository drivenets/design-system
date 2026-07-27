import { describe, expect, it } from 'vitest';
import { page } from 'vitest/browser';
import DsTable from '../ds-table';
import { columns, defaultData } from '../stories/common/story-data';

describe('DsTable controls', () => {
	it('renders controls content above the header', async () => {
		await page.render(
			<DsTable
				columns={columns}
				data={defaultData.slice(0, 5)}
				controls={<button type="button">Export</button>}
			/>,
		);

		const controlsButton = page.getByRole('button', { name: 'Export' });
		await expect.element(controlsButton).toBeVisible();

		const columnHeader = page.getByText('First Name');
		await expect.element(columnHeader).toBeVisible();

		expect(
			controlsButton.element().compareDocumentPosition(columnHeader.element()) &
				Node.DOCUMENT_POSITION_FOLLOWING,
		).toBeTruthy();
	});

	it('does not render a controls bar when controls is omitted', async () => {
		await page.render(<DsTable columns={columns} data={defaultData.slice(0, 5)} />);

		await expect.element(page.getByRole('button', { name: 'Export' })).not.toBeInTheDocument();
	});
});
