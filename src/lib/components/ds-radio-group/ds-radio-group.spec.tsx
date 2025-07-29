import { render } from '@testing-library/react';
import DsRadioGroup from './ds-radio-group';

describe('DsRadioGroup', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<DsRadioGroup />);
		expect(baseElement).toBeTruthy();
	});
});
