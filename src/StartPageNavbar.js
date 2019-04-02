import React, { Component } from 'react';
import { Navbar,Nav,NavDropdown,Form,Button,FormControl,Modal,ModalBody, ButtonGroup } from "react-bootstrap";
import './App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import RestaurantPage from './RestaurantPage'
import SearchPage from './SearchPage'
import ModalHeader from 'react-bootstrap/ModalHeader';

class StartPageNavbar extends Component {

    constructor(props) {
        super(props)

        this.state = {loginModal: false,
                    registerModal: false}
        
        this.toggleLogin = this.toggleLogin.bind(this)
        this.hideLogin = this.hideLogin.bind(this)
        this.toggleRegister = this.toggleRegister.bind(this)
        this.hideRegister = this.hideRegister.bind(this)
    }

    
    toggleLogin(){
        this.setState({loginModal:true})
    }
    hideLogin() {
        this.setState({loginModal:false})
    }
    toggleRegister(){
        this.setState({registerModal:true})
    }
    hideRegister(){
        this.setState({registerModal:false})
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
                    <ButtonGroup>
                        <Button variant="secondary" onClick={this.toggleRegister}>Register</Button>
                        <Button onClick={this.toggleLogin}>Login</Button>
                    </ButtonGroup>
                    </Nav>
                </Navbar.Collapse>
                <Modal centered show={this.state.loginModal} onHide={this.hideLogin}>
                <ModalHeader>Login To FindingDining</ModalHeader>
                    <ModalBody>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    </ModalBody>
                </Modal>
                    <Modal centered show={this.state.registerModal} onHide={this.hideRegister}>
                    <ModalHeader>Regsiter An Account</ModalHeader>
                    <ModalBody>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Re-Enter Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    </ModalBody>
                </Modal>
                </Navbar>);
  }
}

export default StartPageNavbar;
