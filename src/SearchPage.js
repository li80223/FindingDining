import React, { Component } from 'react';
import './App.css';
import OurNavbar from './OurNavbar'

class SearchPage extends Component {
  render() {
    return (
        <div>
        <h1>SearchPage</h1>
        <OurNavbar addresses={[{value:"123 somewhere street", selected: true},
        {value:"223 highway 8 west", selected: false},
        {value:"222 executor avenue",selected: false}]}></OurNavbar>
        </div>
        );
    }
}

export default SearchPage;
