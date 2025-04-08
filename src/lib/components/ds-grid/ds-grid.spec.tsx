import { render } from '@testing-library/react';

import { DsGrid } from './ds-grid';

describe('DsGrid', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DsGrid />);
    expect(baseElement).toBeTruthy();
  });
});
