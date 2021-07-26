import React, { Component } from 'react';
import ArticleList from '../components/ArticleList/ArticleList.js'
import ArticlesAPI from '../api/ArticlesAPI';
import { Input, InputGroup } from 'reactstrap';

class HomePage extends Component {
  state = {
    articles: [],
  };

  async updateArticles() {
    try {
      const articlesJson = await ArticlesAPI.fetchArticles();
      this.setState({
        articles: articlesJson
      });
    } catch (e) {
      console.error('error fetching articles: ', e);
    }
  }

  componentDidMount() {
    this.updateArticles();
  }

  handleSearch = async (e) => {
    let inputValue = e.target.value
    // Returns to unfiltered view using the fetch all articles if search field empty
    if (inputValue.length === 0) {
      return this.updateArticles();
    }
    // Queries articles by search term, and sets page to display those articles.
    const searchedArticles = await ArticlesAPI.searchArticles(inputValue)
    this.setState ({
      articles:searchedArticles,
    })
  }

  render() {
    return (
      <div>
        <InputGroup>
          <Input onChange={(e) => this.handleSearch(e)} type="text" placeholder="Search" />
        </InputGroup>
        <ArticleList articles={this.state.articles} />
      </div>
    );
  }
}

export default HomePage;


// Functional solution:
// function HomePage(props) {
//   const [ articles, setArticles ] = React.useState([]);

//   React.useEffect(() => {
//     const fetchArticlesAsync = async () => {
//       try {
//         const articlesJson = await fetchArticles();
//         setArticles(articlesJson);
//       } catch (e) {
//         console.error('error fetching articles: ', e);
//       }
//     };

//     if (!articles.length) {
//       fetchArticlesAsync();
//     }
//   }, [articles])

//   return (
//     <div>
//       <ArticleList articles={articles} />
//     </div>
//   );
// }
