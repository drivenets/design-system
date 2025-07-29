import { render } from '@testing-library/react';
import DsDropdown from './ds-dropdown';

describe('DsDropdown', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<DsDropdown />);
		expect(baseElement).toBeTruthy();
	});
});
