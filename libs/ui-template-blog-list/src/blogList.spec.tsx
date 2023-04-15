import React from 'react';
import { render } from '@testing-library/react';

import { BlogList } from './blogList';

describe('BlogList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BlogList />);
    expect(baseElement).toBeTruthy();
  });
});
