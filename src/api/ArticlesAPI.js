

const BASE_URL = 'http://localhost:3001/api/articles'

const tryFetch = async (url) => {
  try {
    let response = await fetch(url)
    if (!response.ok) {
      throw response.statusText
    }
    let data = await response.json();
    return data
  } catch (error) {
    console.error(error)
  }
}

const fetchArticleByID = async (articleID) => {
  return await tryFetch(BASE_URL + `/${articleID}`)
}

const fetchArticlesBySection = async (section) => {
  let url = BASE_URL
  url += `?filter={"where":{"section":"${section}"}}`
  return await tryFetch(url)
};

const fetchArticles = async (filters = null) => {
  const url = filters ? `${BASE_URL}?filter={"where":${filters}}`
  : BASE_URL
  return await tryFetch(url)
};

const searchArticles = async (query) => {
  const url = `${BASE_URL}?filter={"where":{"title":{"ilike":"${query}"}}}`;
  return await tryFetch(url)
}

export default {
  fetchArticleByID,
  fetchArticles,
  fetchArticlesBySection,
  searchArticles
};
