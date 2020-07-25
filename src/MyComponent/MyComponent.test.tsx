import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import React from 'react';
import MyComponent from './index';

describe('MyComponent', () => {
  it('renders without crashing', () => {
    const {container } = render(<MyComponent />)
    expect(container).toBeTruthy();
  });
});
