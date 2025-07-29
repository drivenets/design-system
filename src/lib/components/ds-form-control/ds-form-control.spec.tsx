import { render } from '@testing-library/react';
import DsFormControl from './ds-form-control';

describe('DsFormControl', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<DsFormControl />);
		expect(baseElement).toBeTruthy();
	});
});
