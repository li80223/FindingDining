import React, { Component } from 'react';
import './App.css';
import OurNavbar from './OurNavbar'

class RestaurantPage extends Component {
  render() {
    return (
        <div>
        <OurNavbar addresses={[{value:"123 somewhere street", selected: true},
        {value:"223 highway 8 west", selected: false},
        {value:"222 executor avenue",selected: false}]}></OurNavbar>
        
        </div>
        );
    }
}

export default RestaurantPage;
