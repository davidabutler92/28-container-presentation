import React from 'react';
import PropTypes from 'prop-types';

function ArticleItem({ title, author, description }) {
  return (
    <>
      <h1>{title}</h1>
      <p>{author}</p>
      <p>{description}</p>
    </>
  );
}

ArticleItem.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string,
};

export default ArticleItem;
