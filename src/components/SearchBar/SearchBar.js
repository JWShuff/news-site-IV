import { Component } from 'react'
import {Button, Input, InputGroup, InputGroupAddon, NavItem } from 'reactstrap' 

class SearchBar extends Component {
  state = {  }
  handleSearch = (e) => {
    let inputValue = e.target.value
    this.props.handleFilterText(inputValue)
  }
  render() { 
    return (
      <InputGroup>
        <InputGroupAddon addonType='prepend' onClick><Button>Search</Button></InputGroupAddon>
        <Input onChange={(e) => this.handleSearch(e)} type="text" placeholder="Filter Articles" />
      </InputGroup>
      );
  }
}
 
export default SearchBar;