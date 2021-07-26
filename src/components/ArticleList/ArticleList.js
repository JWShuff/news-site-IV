import React, { Component } from 'react';
import ArticleTeaser from '../ArticleTeaser/ArticleTeaser.js';
import { ListGroup, ListGroupItem } from 'reactstrap';

const ArticleList = (props) => {
  
  const { articles } = props;
  return (
    <ListGroup>
      { articles.map((article, index) => (
        <ListGroupItem key={index}>
          <ArticleTeaser { ...article } id={ article.id } />
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}

export default ArticleList;


// Functional solution:
// function ArticleList({ articles }) {
//   return (
//     <ListGroup>
//       {articles.map((article, index) => (
//         <ListGroupItem>
//           <ArticleTeaser {...article} id={ index + 1 } />
//         </ListGroupItem>
//       ))}
//     </ListGroup>
//   );
// }
