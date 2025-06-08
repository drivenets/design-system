import { render } from '@testing-library/react';
import DsDropdownMenu from './ds-dropdown-menu';

describe('DsDropdownMenu', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DsDropdownMenu />);
    expect(baseElement).toBeTruthy();
  });
});
