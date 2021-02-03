const API_KEY = 'f09c7b1f498e4eec8a35aa25da9ac3a1';

export const fetchNewsArticle = (search) => {
  return fetch(
    `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`,
  )
    .then((data) => data.json())
    .then((json) => json.articles);
};
