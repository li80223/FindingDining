import React, { Component } from 'react';
import { withRouter, Route} from 'react-router-dom'
import './App.css';
import StartPageNavbar from './StartPageNavbar'
import { Container,Form,Button, Row, ButtonGroup, Collapse, Col,Dropdown, SplitButton,ButtonToolbar } from 'react-bootstrap';
import mainBackground from './Images/GoodBackground2.png'
import Select from 'react-select'

const cuisines = [
  { label: "Middle Eastern", value:1},
  { label: "Chinese", value: 2 },
  { label: "Japanese", value: 3 },
  { label: "French", value: 4 },
  { label: "Spanish", value: 5 },
  { label: "American South", value: 6 },
  { label: "Greek", value: 7 }
];

const types = [
  { label: "Food Truck", value:1},
  { label: "Fast-Food", value: 2 },
  { label: "All You Can Eat", value: 3 },
  { label: "Omakase", value: 4 },
  { label: "BBQ", value: 5 },
  { label: "A la Carte", value: 6 },
  { label: "Pub", value: 7 }
];

const ambience = [
  { label: "Low-Key", value:1},
  { label: "Chiche", value: 2 },
  { label: "Up-Beat", value: 3 },
  { label: "Cozy", value: 4 },
  { label: "Black-Tie", value: 5 },
  { label: "Family-Friendly", value: 6 },
  { label: "Exclusive", value: 7 }
];

class EntryPage extends Component {
  
  constructor(props) {
    super(props)
    this.state = { collapseSearch: false}

    this.toggleSearch = this.toggleSearch.bind(this);
    this.goToSearchPage = this.goToSearchPage.bind(this);
  }

  toggleSearch = () => {
    this.setState(prevState => ({
        collapseSearch : !prevState.collapseSearch
    }));
}
  goToSearchPage = () => {
    let path = `/SearchPage`;
    this.props.history.push(path);
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
                  <Form.Control type="address" placeholder="e.g. 123 somewhere avenue" />
                  <Form.Label>Restaurant Name</Form.Label>
                  <Form.Control type="Name" placeholder="e.g. McDonald" />
                </Form.Group>
                <Collapse in={this.state.collapseSearch} unmountOnExit>
                <div>
                <Container>
                  <Row>
                    <Col style={{padding:10}}>
                      <Select isMulti options={cuisines} placeholder="Cuisine" ></Select>
                    </Col>
                  </Row>
                  <Row>
                  <Col style={{padding:10}}>
                      <Select isMulti options={types} placeholder="Type" ></Select>
                  </Col>
                  </Row>
                  <Row>                    
                    <Col style={{padding:10}}>
                      <Select isMulti options={ambience} placeholder="Ambience" ></Select>
                    </Col>
                  </Row>
                        <Row style={{height:25}}>
                  </Row>
                </Container>
                </div>
                </Collapse>
                <ButtonGroup >
                  <Route render={({ history}) => (
                    <Button variant="primary" type="submit" style={{width:300}} onClick={() => { history.push('/SearchPage') }}>
                    Submit
                    </Button>
                  )}/>
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
