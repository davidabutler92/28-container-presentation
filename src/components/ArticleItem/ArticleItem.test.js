import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ArticleItem from './ArticleItem';

describe('ArticelItem component', () => {
  afterEach(() => cleanup());
  it('renders a single article', () => {
    const { asFragment } = render(
      <ArticleItem 
        title="hello" 
        author="some author"
        description="something else described.."
      />);
    expect(asFragment()).toMatchSnapshot();
  });
});
