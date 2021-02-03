import React from 'react';
import { render, cleanup } from '@testing-library/react';
import SearchForm from './SearchForm';

describe('SearchForm component', () => {
  afterEach(() => cleanup());
  it('it should render a search form', () => {
    const { asFragment } = render(<SearchForm />);
    expect(asFragment()).toMatchSnapshot();
  });
});
