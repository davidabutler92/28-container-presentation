const API_KEY = '41017015a71940b4ba704da832324264';

export const fetchNewsArticle = (search) => {
  return fetch(
    `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`,
  )
    .then((data) => data.json())
    .then((json) => json.articles);
};
