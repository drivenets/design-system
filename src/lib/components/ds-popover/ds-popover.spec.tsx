import { render } from '@testing-library/react';
import DsPopover from './ds-popover';

describe('DsPopover', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<DsPopover />);
		expect(baseElement).toBeTruthy();
	});
});
