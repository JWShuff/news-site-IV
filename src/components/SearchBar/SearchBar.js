import { Component } from 'react'
import {Button, Input, InputGroup, InputGroupAddon, NavItem } from 'reactstrap' 

class SearchBar extends Component {
  state = {
    inputValue: '',
    }
  handleSearch = () => {
    console.log('searching')
    this.props.handleFilterText(this.state.inputValue)
  }

  render() { 
    return (
      <InputGroup>
        <InputGroupAddon addonType='prepend' onClick={this.handleSearch}><Button>Search</Button></InputGroupAddon>
        <Input onChange={(e) => {
          this.setState({
            inputValue: e.target.value
          })
          if(this.state.inputValue.length === 0) {
            this.handleSearch()
          }
          } 
        }
        type="text" placeholder="Filter Articles" />
      </InputGroup>
      );
  }
}
 
export default SearchBar;