import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { fetchNewsArticle } from '../services/newsApi';

function SearchForm({ setArticles, setLoading }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetchNewsArticle(input).then((articles) => {
      setArticles(articles);
      setLoading(false);
    });
  };

  const handleInputChange = ({ target }) => {
    setInput(target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search"
        value={input}
        onChange={handleInputChange}
      ></input>
      <button type="submit">Search</button>
    </form>
  );
}

SearchForm.propTypes = {
  setArticles: PropTypes.func,
  setLoading: PropTypes.func,
};

export default SearchForm;
