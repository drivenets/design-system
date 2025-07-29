import { render } from '@testing-library/react';
import DsSystemStatus from './ds-system-status';

describe('DsSystemStatus', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<DsSystemStatus />);
		expect(baseElement).toBeTruthy();
	});
});
