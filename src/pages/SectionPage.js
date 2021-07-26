import React, { Component } from 'react';
import ArticlesAPI from '../api/ArticlesAPI';
import ArticleList from '../components/ArticleList/ArticleList.js';

class SectionPage extends Component {
  state = {
    articles: [],
  };

  // Helper Methods

  async updateSectionArticles() {
    try {
      const sectionID = this.props.match.params.sectionID
      const sectionArticles = await ArticlesAPI.fetchArticlesBySection(sectionID);
      this.setState({
        articles: sectionArticles
      });
    } catch (e) {
      console.error('error fetching section articles: ', e);
    }
  }

  // Life cycles:
  componentDidMount() {
    this.updateSectionArticles();
  }

  componentDidUpdate(prevProps) {
    if(prevProps.match.params.sectionID !== this.props.match.params.sectionID) {
      this.updateSectionArticles();
    }
  }
  
  render() {
    return (
      <div>
        <h3>
          {
            this.props.match.params.sectionID ?
          `${this.props.match.params.sectionID} page`
          : 'NO SUCH SECTION.'
        }
        </h3>
        {this.state.articles ? <ArticleList articles={ this.state.articles }/> :
          <span>404: Article Not Found</span>
        }
      </div>
    );
  }
}

export default SectionPage;


// Functional solution:
// function ArticlePage(props) {
//   const [ article, setArticle ] = React.useState(null);

//   React.useEffect(() => {
//     const fetchArticleAsync = async () => {
//       try {
//         const articlesJson = await fetchArticleByID(props.match.params.articleID);
//         setArticle(articlesJson);
//       } catch (e) {
//         console.error('error fetching article: ', e);
//       }
//     };

//     if (article === null) {
//       fetchArticleAsync();
//     }
//   }, [article]);

//   return (
//     <div>
//       {article ? <Article {...article} /> :
//         <span>404: Article Not Found</span>
//       }
//     </div>
//   );
// }
