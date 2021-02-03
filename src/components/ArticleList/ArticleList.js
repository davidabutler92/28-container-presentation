import React from 'react';
import ArticleItem from '../ArticleItem/ArticleItem';
import PropTypes from 'prop-types';

function ArticleList({ articles }) {
  const articlesList = articles.map((article) => {
    return (
      <li key={article.id + Date.now()}>
        <ArticleItem
          title={article.title}
          author={article.author}
          description={article.description}
        />
      </li>
    );
  });

  return <ul>{articlesList}</ul>;
}

ArticleList.propTypes = {
  articles: PropTypes.array,
  source: PropTypes.object,
};

export default ArticleList;
