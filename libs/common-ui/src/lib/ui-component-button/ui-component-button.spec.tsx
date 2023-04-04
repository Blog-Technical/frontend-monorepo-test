import { render } from '@testing-library/react';

import UiComponentButton from './ui-component-button';

describe('UiComponentButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiComponentButton />);
    expect(baseElement).toBeTruthy();
  });
});
