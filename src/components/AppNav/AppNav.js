import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import {Button, Input, InputGroup, InputGroupAddon, Navbar, NavItem } from 'reactstrap';
import navItems from '../../config/Sections.json';

class AppNav extends Component {
  render() {

    return (
      <Navbar color="light">
          {
            navItems.map((navItem, index) =>
              <Link to={`/sections/${navItem.label.toLowerCase()}`} key={index}>
                | { navItem.label } |
              </Link>
          )}
          <NavItem>
            {/* To do:  */}
            {/* <InputGroup>
              <InputGroupAddon addonType='prepend'><Button>Search</Button></InputGroupAddon>
              <Input onChange={(e) => this.handleSearch(e)} type="text" placeholder="Filter Articles" />
            </InputGroup> */}
          </NavItem>
      </Navbar>
    )
  }
}

export default AppNav;


// Functional solution:
// function AppNav({ handleNavClick }) {
//   return (
//     <Navbar color="light">
//       {navItems.map((navItem) =>
//         <a href="#" onClick={() => handleNavClick( navItem.value )} >
//           { navItem.label } |
//         </a>
//       )}
//     </Navbar>
//   );
// }
