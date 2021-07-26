import { useEffect, useState } from 'react';
import ArticleList from '../components/ArticleList/ArticleList.js'
import ArticlesAPI from '../api/ArticlesAPI';
import { Button, Input, InputGroup, InputGroupAddon } from 'reactstrap';

const HomePage = (props) => {
  
  const [articles, setArticles] = useState([]);
  const [searchText, setSearchText] = useState('');


  async function updateArticles() {
    try {
      setSearchText(props.filterText)
      const json = await ArticlesAPI.fetchArticles(searchText);
      setArticles(json)
    } catch (error) {
      console.error('error found fetching articles: ', error);
    }
  };
  
  // updates based on search text
  useEffect(() => {
    updateArticles();
  }, [searchText, props.filterText]);


  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  );
}

export default HomePage;

