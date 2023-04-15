import React from 'react';
import { render } from '@testing-library/react';

import { ArticleCard } from './articleCard';

describe('ArticleCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ArticleCard
        content={{
          title: '',
          description: '',
          url: '',
          image: '',
          category: '',
        }}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
