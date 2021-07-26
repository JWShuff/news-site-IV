import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import AppNav from './components/AppNav/AppNav.js';
import HomePage from './pages/HomePage.js';
import ArticlePage from './pages/ArticlePage.js';
import SectionPage from './pages/SectionPage';

const App = () => {

  const [filterText, setFilterText] = useState('')

  const renderHomePage = (routerProps) => {
    return (
      <HomePage {...routerProps} filterText = {filterText} />
    )
  }

   const renderSectionPage = (routerProps) => {
    return (
      <SectionPage {...routerProps} filterText = {filterText} />
    )
  }


  return (
    <div>
      <Router>
        <AppNav 
          handleNavClick={(clickedItem) => console.log(clickedItem)}
          handleFilterText={(newFilterText) => {
            setFilterText(newFilterText)
            console.log(newFilterText)
          }} 
        />
        <div>
          <Route exact path="/" render={renderHomePage} filterText={filterText}/>
          <Route exact path="/articles/:articleID" component={ArticlePage} />
          <Route exact path='/sections/:sectionID' render={renderSectionPage} filterText={filterText} />
        </div>
      </Router>
    </div>
  );
}

export default App;