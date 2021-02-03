import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ArticleList from './ArticleList';

describe('ArticelList component', () => {
  afterEach(() => cleanup());
  it('renders a list of articles', () => {
    const data = [
      { 
        id: 1,
        title: '',
        author: '',
        description: '',
      },
      { 
        id: 2,
        title: '',
        author: '',
        description: '',
      },
      { 
        id: 3,
        title: '',
        author: '',
        description: '',
      },
    ];

    const { asFragment } = render(<ArticleList articles={data} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
