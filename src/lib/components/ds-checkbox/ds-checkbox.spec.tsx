import { render } from '@testing-library/react';
import DsCheckbox from './ds-checkbox';

describe('DsCheckbox', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<DsCheckbox />);
		expect(baseElement).toBeTruthy();
	});
});
