import { render } from '@testing-library/react';

import DnIcon from './dn-icon';

describe('DnIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DnIcon />);
    expect(baseElement).toBeTruthy();
  });
});
