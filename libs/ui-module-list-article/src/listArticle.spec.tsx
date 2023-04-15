import React from 'react';
import { render } from '@testing-library/react';

import { ListArticle } from './listArticle';

describe('ListArticle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ListArticle listContents={[]} />);
    expect(baseElement).toBeTruthy();
  });
});
