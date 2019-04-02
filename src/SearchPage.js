import React, { Component } from 'react';
import './App.css';
import OurNavbar from './OurNavbar'
import SearchResults from './SearchResults'

class SearchPage extends Component {
  render() {
    return (
        <div>
        <OurNavbar></OurNavbar>
        <SearchResults style={{height:"100hv", width:"100hv"}}>
        </SearchResults>
        </div>
        );
    }
}

export default SearchPage;
