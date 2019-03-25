import React, { Component } from 'react';
import './App.css';
import OurNavbar from './OurNavbar'
import EntryPage from './EntryPage'

class App extends Component {
  render() {
    return (
      <div>
      <EntryPage typeNav={0}></EntryPage>
      </div>
    );
  }
}

export default App;
