import React from 'react';
import { render, screen } from '@testing-library/react';
import MyComponent from './index';

describe('MyComponent', () => {
  test('renders the component', () => {
    const headingElement =""
    expect(headingElement).toBeInTheDocument();
  });
});
