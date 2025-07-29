import { render } from '@testing-library/react';
import DsBreadcrumb from './ds-breadcrumb';

describe('DsBreadcrumb', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<DsBreadcrumb />);
		expect(baseElement).toBeTruthy();
	});
});
