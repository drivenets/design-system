import { render } from '@testing-library/react';

import React from 'react';
import DsTable from './ds-table';

describe('DsTable', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<DsTable />);
		expect(baseElement).toBeTruthy();
	});
});
