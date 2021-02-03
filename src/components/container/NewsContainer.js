import React, { useState } from 'react';
import ArticleList from '../ArticleList/ArticleList';
import SeachForm from '../SearchForm/SearchForm';

export default function NewsContainer() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <main>
      <SeachForm setArticles={setArticles} setLoading={setLoading} />
      {loading ? <div>loading</div> : <ArticleList articles={articles} />}
    </main>
  );
}
