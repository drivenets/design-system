import { render } from '@testing-library/react';
import DsSelect from './ds-select';

describe('DsSelect', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<DsSelect />);
		expect(baseElement).toBeTruthy();
	});
});
