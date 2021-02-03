import React from 'react';
import { render, cleanup } from '@testing-library/react';
import NewsContainer from './NewsContainer';

describe('NewsContainer component', () => {
  afterEach(() => cleanup());
  it('renders SearchForm and ArticleList', () => {
    const { asFragment } = render(<NewsContainer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
