import React, { Component } from 'react';
import { Navbar,Nav,NavDropdown,Form,Button,FormControl,Collapse, ButtonToolbar, SplitButton,Dropdown, Container, Row, Col } from "react-bootstrap";
import './App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import RestaurantPage from './RestaurantPage'
import SearchPage from './SearchPage'

class OurNavbar extends Component {

    constructor(props) {
        super(props)
        this.state = { collapseSearch: true,
            selectedAddress: props.addresses[0].value,
            AddressList:props.addresses.map((ouraddress) =>
            <NavDropdown.Item key={ouraddress.value} onClick={()=> this.changeName(ouraddress)} active={ouraddress.selected ? true: false}>
            {ouraddress.value}</NavDropdown.Item>
            )};

        this.changeName = this.changeName.bind(this);
        this.toggleSearch = this.toggleSearch.bind(this);
    }

    changeName = (newName) => {
        newName.selected = true;
        this.setState(state => ({selectedAddress: newName.value
        }));
    }

    toggleSearch = () => {
        this.setState(prevState => ({
            collapseSearch : !prevState.collapseSearch
        }));
    }

  render() {
       return ( 
           <div>
            <div>  
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">FindingDining</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav className="justify-content-center">
                    <Nav.Item>            
                    <Form inline style={{width:550}}>
                        <Form.Control type="text" placeholder="Search" className="mr-lg-2" style={{paddingRight:10,width:300}}/>
                        <Button variant="outline-primary" style={{width:100}}>Search</Button>
                        <Button variant="outline-secondary" onClick={this.toggleSearch} style={{width:100}}>Advanced</Button>
                    </Form>
                    </Nav.Item>
                    <NavDropdown title={this.state.selectedAddress} id="collapsible-nav-dropdown" className= "Drop" style={{width:250}} >
                        {this.state.AddressList}
                    </NavDropdown>
                    <Nav.Link sytle={{width:200}}></Nav.Link>
                    </Nav>
                    
                    <Nav>
                    <Nav.Link>Register</Nav.Link>
                    <Nav.Link eventKey={2}>
                        Login
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </div>
            <Collapse in={this.state.collapseSearch} style={{height:100}}>
                <Container fluid={true} style={{backgroundColor: '#262626'}}>
                    <Row style={{height:15}}></Row>
                    <Row>
                        <Col></Col>
                        <Col md={{span:true}} fluid>
                        <ButtonToolbar>
                            <SplitButton title="None" >
                                <Dropdown.Item>None</Dropdown.Item>
                                <Dropdown.Item>Chinese</Dropdown.Item>
                                <Dropdown.Item>Japanese</Dropdown.Item>
                                <Dropdown.Item>French</Dropdown.Item>
                            </SplitButton>
                            <div style={{width:100}}></div>
                            <SplitButton title="None">
                                <Dropdown.Item>None</Dropdown.Item>
                                <Dropdown.Item>BBQ</Dropdown.Item>
                                <Dropdown.Item>All-You-Can-Eat</Dropdown.Item>
                                <Dropdown.Item>omakase</Dropdown.Item>
                            </SplitButton >
                            <div style={{width:100}}></div>
                            <SplitButton title="None">
                                <Dropdown.Item>None</Dropdown.Item>
                                <Dropdown.Item>Cozy</Dropdown.Item>
                                <Dropdown.Item>Chiche</Dropdown.Item>
                                <Dropdown.Item></Dropdown.Item>
                            </SplitButton>
                        </ButtonToolbar>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </Collapse>
            </div>);
    }
}

export default OurNavbar;
