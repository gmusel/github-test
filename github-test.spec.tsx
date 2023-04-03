import React from 'react';
import { render } from '@testing-library/react';
import { BasicGithubTest } from './github-test.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicGithubTest />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
