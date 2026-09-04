import { describe, expect, it } from 'vitest';
import { page } from 'vitest/browser';

import DsStatusBadge from '../ds-status-badge';

describe('DsStatusBadge', () => {
	it('renders the status text', async () => {
		await page.render(<DsStatusBadge icon="check_circle" status="active" />);

		await expect.element(page.getByText('active')).toBeInTheDocument();
	});
});
