import React, { Component } from 'react';
import { Navbar,Nav,NavDropdown,Form,Button,FormControl } from "react-bootstrap";
import './App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import RestaurantPage from './RestaurantPage'
import SearchPage from './SearchPage'

class StartPageNavbar extends Component {

    constructor(props) {
        super(props)
    }


  render() {
        return (
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">FindingDining</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                    <Router>
                    <Nav.Link>
                        Register
                    </Nav.Link>
                    <Nav.Link href="RestaurantPage">
                        Login
                    </Nav.Link>
                    <Route path="/RestaurantPage" component={RestaurantPage} />
                    </Router>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>);
  }
}

export default StartPageNavbar;
