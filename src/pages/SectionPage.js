import React, { Component, useEffect, useState } from 'react';
import ArticlesAPI from '../api/ArticlesAPI';
import ArticleList from '../components/ArticleList/ArticleList.js';

const SectionPage = (props) => {
  const [articles, setArticles] = useState([])


  // Helper Methods
  const updateSectionArticles = async () => {
    try {
      // Load articles that match the section
      const sectionID = props.match.params.sectionID
      const sectionArticles = await ArticlesAPI.fetchArticlesBySection(sectionID);
      setArticles(sectionArticles);
    } catch (e) {
      console.error('error fetching section articles: ', e);
    }
  }

  const filterSectionArticles = async () => {
    try {
      // Load articles that match the section
      const sectionID = props.match.params.sectionID
      const sectionArticles = await ArticlesAPI.fetchArticlesBySection(sectionID);
      if(props.filterText == '') {
        updateSectionArticles();
      }
      else {
        const filterArticles = []
        for (let i=0; i < sectionArticles.length; i++) {
          if (sectionArticles[i].title.includes(props.filterText)) {
            filterArticles.push(sectionArticles[i])
          }
        }
        setArticles(filterArticles)
      }
    } catch (e) {
      console.error('error fetching section articles: ', e);
    }
  }

  // Life cycles:
  useEffect(() => {
    updateSectionArticles();
  }, [])

  useEffect(() => {
    updateSectionArticles();
  }, [props.match.params.sectionID])

  // Filters the section's articles by the text using a helper function.
  useEffect(() => {
    filterSectionArticles();
  }, [props.filterText])

  return (
    <div>
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
