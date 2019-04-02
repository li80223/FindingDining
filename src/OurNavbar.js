import React, { Component } from 'react';
import { Navbar,Nav,NavDropdown,Form,Button,FormControl,Collapse, ButtonToolbar, SplitButton,Dropdown, Container, Row, Col, ButtonGroup, Modal, ModalBody } from "react-bootstrap";
import './App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Select from 'react-select'
import ModalHeader from 'react-bootstrap/ModalHeader';

const addresses = [{label:"123 somewhere street", value: 1},
{label:"223 highway 8 west", value: 2},
{label:"222 executor avenue",value: 3}]

const cuisines = [
    { label: "Middle Eastern", value:1},
    { label: "Chinese", value: 2 },
    { label: "Japanese", value: 3 },
    { label: "French", value: 4 },
    { label: "Spanish", value: 5 },
    { label: "American", value: 6 },
    { label: "Greek", value: 7 },
  ];
  
  const types = [
    { label: "Food Truck", value:1},
    { label: "Fast-Food", value: 2 },
    { label: "All-You-Can-Eat", value: 3 },
    { label: "Omakase", value: 4 },
    { label: "BBQ", value: 5 },
    { label: "A-la-Carte", value: 6 },
    { label: "Pub", value: 7 },
  ];
  
  const ambience = [
    { label: "Low-Key", value:1},
    { label: "Chiche", value: 2 },
    { label: "Up-Beat", value: 3 },
    { label: "Cozy", value: 4 },
    { label: "Black-Tie", value: 5 },
    { label: "Family-Friendly", value: 6 },
    { label: "Exclusive", value: 7 },
  ];

class OurNavbar extends Component {

    constructor(props) {
        super(props)
        this.state = { collapseSearch: false,
                        loginModal: false,
                        registerModal: false,
                        NewAddress: false};

        this.changeName = this.changeName.bind(this);
        this.toggleSearch = this.toggleSearch.bind(this);

        this.toggleLogin = this.toggleLogin.bind(this)
        this.hideLogin = this.hideLogin.bind(this)
        this.toggleRegister = this.toggleRegister.bind(this)
        this.hideRegister = this.hideRegister.bind(this)
        this.confirmRegister = this.confirmRegister.bind(this)
        this.newAddressToggle = this.newAddressToggle.bind(this)
        this.newAddressHide = this.newAddressHide.bind(this)
    }

    newAddressToggle() {
        this.setState({NewAddress: true})
    }
    newAddressHide() {
        this.setState({NewAddress: false})
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

    confirmRegister(){
        alert("Account has been created")
    }



  render() {
       return ( 
           <div>
            <div>  
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Route render={({ history}) => (
                    <Navbar.Brand onClick={()=>history.push("/")}>FindingDining</Navbar.Brand>
                  )}/>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Col md={3}></Col>
                    <Col>
                    <Nav.Item>            
                    <Form inline style={{width:550}}>
                        <Form.Control type="text" placeholder="Restaurant Name" className="mr-lg-2" style={{paddingRight:10,width:300}}/>
                        <Button variant="outline-primary" style={{width:100}}>
                        
                        Search</Button>
                        <Button variant="outline-secondary" onClick={this.toggleSearch} style={{width:100}}>Advanced</Button>
                    </Form>
                    </Nav.Item>
                    </Col>
                    <Col md={2} style={{padding:0}}>
                        <Row style={{padding:0}}>
                        <Col style={{padding:0}}>
                            <Select options={addresses} style={{width:"500"}} placeholder="Address"></Select>
                        </Col>
                        <Col sm={2} style={{padding:0}}>
                            <Button variant="primary" onClick={this.newAddressToggle}>+</Button>
                        </Col>
                        </Row>
                        </Col>
                    <Col>
                    </Col>
                    <Col md={2} style={{padding:0}}>
                    <ButtonGroup>
                        <Button variant="secondary" onClick={this.toggleRegister}>Register</Button>
                        <Button onClick={this.toggleLogin}>Login</Button>
                    </ButtonGroup>
                    </Col>
                </Navbar.Collapse>
                </Navbar>
            </div>
            <Collapse in={this.state.collapseSearch} unmountOnExit>
            <div>
                <Container fluid={true} style={{backgroundColor: '#262626', height:"auto"}}>
                <Row style={{height:"auto"}}></Row>
                    <Row>
                        <Col></Col>
                        <Col style={{padding:10}}>
                            <Select isMulti options={cuisines} placeholder="Cuisine" ></Select>
                        </Col>
                        <Col style={{padding:10}}>
                            <Select isMulti options={types} placeholder="Type" ></Select>
                        </Col>
                        <Col style={{padding:10}}>
                            <Select isMulti options={ambience} placeholder="Ambience" ></Select>
                        </Col>
                        <Col></Col>
                        <Row style={{height:25}}></Row>     
                    </Row>
                </Container>
            </div>
            </Collapse>
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
                        Login
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
                    <Button variant="primary" type="submit" onClick={this.confirmRegister}>
                        Register
                    </Button>
                </Form>
                </ModalBody>
            </Modal>
            <Modal centered show={this.state.NewAddress} onHide={this.newAddressHide}>
                <ModalHeader>Add New Address</ModalHeader>
                <ModalBody>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="Address" placeholder="123 Somewhere Street" />
                        <Form.Text className="text-muted">
                        Enter Your Address
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Add New Address
                    </Button>
                </Form>
                </ModalBody>
            </Modal>
            </div>);
    }
}

export default OurNavbar;
