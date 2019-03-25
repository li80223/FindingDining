import React, { Component } from 'react';

import './App.css';
import StartPageNavbar from './StartPageNavbar'
import { Container,Form,Button, Row, ButtonGroup, Collapse,Dropdown, SplitButton,ButtonToolbar } from 'react-bootstrap';
import mainBackground from './Images/GoodBackground2.png'


class EntryPage extends Component {
  
  constructor(props) {
    super(props)
    this.state = { collapseSearch: true}

    this.toggleSearch = this.toggleSearch.bind(this);
  }

  toggleSearch = () => {
    this.setState(prevState => ({
        collapseSearch : !prevState.collapseSearch
    }));
}

  render() {
    return (
      <div style={{backgroundImage:'url('+mainBackground +')'}}>
        <StartPageNavbar></StartPageNavbar>
          <Container fluid style={{ height:"100vh"}}>
          <Row className="row"style={{height:100}}></Row>
            <div className="row justify-content-center">
            <div className="center-block" style={{width:600, backgroundColor:"#e6e6e6", padding:100, borderRadius:25}}>
              <div>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="address" placeholder="123 somewhere avenue" />
                </Form.Group>
                <Collapse in={this.state.collapseSearch}>
                <Container>
                  <Row>
                  <ButtonToolbar>
                            <SplitButton title="None" >
                                <Dropdown.Item>None</Dropdown.Item>
                                <Dropdown.Item>Chinese</Dropdown.Item>
                                <Dropdown.Item>Japanese</Dropdown.Item>
                                <Dropdown.Item>French</Dropdown.Item>
                            </SplitButton>
                            <div style={{width:50}}></div>
                            <SplitButton title="None">
                                <Dropdown.Item>None</Dropdown.Item>
                                <Dropdown.Item>BBQ</Dropdown.Item>
                                <Dropdown.Item>All-You-Can-Eat</Dropdown.Item>
                                <Dropdown.Item>omakase</Dropdown.Item>
                            </SplitButton >
                            <div style={{width:50}}></div>
                            <SplitButton title="None">
                                <Dropdown.Item>None</Dropdown.Item>
                                <Dropdown.Item>Cozy</Dropdown.Item>
                                <Dropdown.Item>Chiche</Dropdown.Item>
                                <Dropdown.Item></Dropdown.Item>
                            </SplitButton>
                        </ButtonToolbar>
                        </Row>
                        <Row style={{height:25}}>

                        </Row>
                      </Container>
                </Collapse>
                <ButtonGroup >
                  <Button variant="primary" type="submit" style={{width:300}}>
                    Submit
                  </Button>
                  <Button variant="secondary" type="submit" onClick={this.toggleSearch}>
                    Advanced
                  </Button>
                </ButtonGroup>
              </div>
            </div>
            </div>
          </Container>
        </div>
    );
  }
}

export default EntryPage;
