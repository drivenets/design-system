import { render } from '@testing-library/react';
import DsTooltip from './ds-tooltip';

describe('DsTooltip', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<DsTooltip />);
		expect(baseElement).toBeTruthy();
	});
});
