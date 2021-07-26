import React, { useState, useEffect } from 'react';
import Article from '../components/Article/Article.js'
import ArticlesAPI from '../api/ArticlesAPI';


const ArticlePage = (props) => {

  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        console.log('trying to load json')
        const json = await ArticlesAPI.fetchArticleByID(props.match.params.articleID)
        setArticle(json);
      } catch (error) {
        console.error('Error occurred fetching data: ', error);
      }
    };
    if (article === null) {
      fetchDataAsync();
    }
  }, [article]);
  console.log(article)
  return ( <Article {...article} /> );
}

export default ArticlePage;

