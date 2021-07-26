import React, { Component } from 'react';
import { Media } from 'reactstrap';
import "./article.css";

const Article = (props) => {

  const { title, created_date: createdDate, abstract, byline, image } = props;
  return (
    <Media>
      <Media left>
        { image && <img className="image" src={ image }/> }
      </Media>
      <Media body className="body">
        <Media heading>{ title }</Media>
        <p>{ createdDate }</p>
        { byline && <p>{ byline }</p> }
        <p>{ abstract }</p>
      </Media>
    </Media>
  )
}

export default Article;
