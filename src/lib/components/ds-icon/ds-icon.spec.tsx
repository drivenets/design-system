import { render } from '@testing-library/react';

import DsIcon from './ds-icon';

describe('DsIcon', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<DsIcon />);
		expect(baseElement).toBeTruthy();
	});
});
