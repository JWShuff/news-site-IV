import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav } from 'reactstrap';
import navItems from '../../config/Sections.json';
import SearchBar from '../SearchBar/SearchBar';


const AppNav = (props) => {
  
  return (
    <Navbar color="light">
      <NavbarBrand>
        <Link to='/'>Home</Link>
      </NavbarBrand>
        {
          navItems.map((navItem, index) =>
            <Link to={`/sections/${navItem.label.toLowerCase()}`} key={index}>
              | { navItem.label } |
            </Link>
        )}
      <Nav>
        < SearchBar handleFilterText={props.handleFilterText}/>
      </Nav>
    </Navbar>
  )
}

export default AppNav;
