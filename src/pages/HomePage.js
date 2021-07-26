import { useEffect, useState } from 'react';
import ArticleList from '../components/ArticleList/ArticleList.js'
import ArticlesAPI from '../api/ArticlesAPI';
import { Button, Input, InputGroup, InputGroupAddon } from 'reactstrap';

const HomePage = () => {
  
  const [articles, setArticles] = useState([]);
  const [searchText, setSearchText] = useState('');
  // used to track the input field and when search button is clicked, update searchtext:
  const [inputText, setInputText] = useState('');

  async function updateArticles() {
    try {
      console.log('loading articles')
      const json = await ArticlesAPI.fetchArticles(searchText);
      setArticles(json)
    } catch (error) {
      console.error('error found fetching articles: ', error);
    }
  };
  
  // updates based on search text
  useEffect(() => {
    updateArticles();
  }, [searchText]);

  // updates only when inputText is cleared
  useEffect(() =>{
    if (inputText.length === 0) {
      setSearchText(inputText)
    }
  }, [inputText])
  
  const handleInput = (e) => {
    console.log(e.target.value)
    setInputText(e.target.value)
  }
  const handleSearch = async () => {
    setSearchText(inputText)
  }
  return (
    <div>
      <InputGroup>
        <InputGroupAddon addonType='prepend'>
          <Button onClick={() => handleSearch()}>
            Submit Query
          </Button>
        </InputGroupAddon>
        <Input type="text" placeholder="Search" onChange={(e) => handleInput(e)} />
      </InputGroup>
      <ArticleList articles={articles} />
    </div>
  );
}

export default HomePage;

