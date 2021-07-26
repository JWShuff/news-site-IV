import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import AppNav from './components/AppNav/AppNav.js';
import HomePage from './pages/HomePage.js';
import ArticlePage from './pages/ArticlePage.js';
import SectionPage from './pages/SectionPage';

const App = () => {
  return (
    <div>
      <Router>
      <AppNav handleNavClick={(clickedItem) => console.log(clickedItem)} />
        <div>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/articles/:articleID" component={ArticlePage} />
          <Route exact path='/sections/:sectionID' component={SectionPage} />
        </div>
      </Router>
    </div>
  );
}

export default App;