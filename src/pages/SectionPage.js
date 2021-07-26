import React, { Component, useEffect, useState } from 'react';
import ArticlesAPI from '../api/ArticlesAPI';
import ArticleList from '../components/ArticleList/ArticleList.js';

const SectionPage = (props) => {
  const [articles, setArticles] = useState([])


  // Helper Methods
  const updateSectionArticles = async () => {
    try {
      
      const sectionID = props.match.params.sectionID
      const sectionArticles = await ArticlesAPI.fetchArticlesBySection(sectionID);
      setArticles(sectionArticles);
    } catch (e) {
      console.error('error fetching section articles: ', e);
    }
  }

  // Life cycles:
  useEffect(() => {
    updateSectionArticles();
  }, [articles, props.filterText])

  return (
    <div>
      <h3>
        {
          props.match.params.sectionID ?
        `${props.match.params.sectionID} page`
        : 'NO SUCH SECTION.'
      }
      </h3>
      {articles ? <ArticleList articles={ articles }/> :
        <span>404: Articles Not Found</span>
      }
    </div>
  );
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
