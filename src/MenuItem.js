import React, { Component } from 'react';
import { Row,Image, Container,Col,Modal, Button } from 'react-bootstrap';
import MenuItemModal from "./MenuItemModal"
import BigMac from "./Images/80_Big-Mac.jpg"

const BeefBurgerOptions = [{name:"pickles", cost:0},
{name:"Tomatoes", cost:"0"},
{name:"Lettuce", cost:"0"},
{name:"SpecialSauce", cost:"0"},
{name:"Ketchup", cost:"0"},
{name:"Mustard", cost:"0"},
{name:"Extra Patty", cost:"1.50"},
{name:"Bacon", cost:"0.5"},
{name:"Cheese", cost:"0.5"}]
    
 
const ChickenBurgerOptions = [{name:"pickles", cost:0},
{name:"Tomatoes", cost:"0"},
{name:"Lettuce", cost:"0"},
{name:"SpecialSauce", cost:"0"},
{name:"Ketchup", cost:"0"},
{name:"Mustard", cost:"0"},
{name:"Extra Patty", cost:"1.50"},
{name:"Bacon", cost:"0.5"},
{name:"Cheese", cost:"0.5"}]
    

const DessertOptions = [{name:"Smarties", cost:0},
{name:"Oreo", cost:0},
{name:"Up-size to Medium", cost:1.00}
]
const OptionsArray = [BeefBurgerOptions, ChickenBurgerOptions, DessertOptions]
class MenuItem extends Component {

    constructor(props) {
        super(props)

        this.state = {show: false}

        this.handleClose = this.handleClose.bind(this)
        this.handleShow = this.handleShow.bind(this)
    }

    handleClose() {
        this.setState({show:false})
    }

    handleShow() {
        this.setState({show:true})
    }

  render() {
    var items
      if (this.props.type == "BeefBurger") {
        items = OptionsArray[0].map((Entry) => <Row>
        <Col>
        <p>{Entry.name}</p>
        </Col>
        <Col>
        <p>{Entry.cost}</p>
        </Col>
    </Row>)
  } else {
    items = OptionsArray[2].map((Entry) => <Row>
    <Col>
    <p>{Entry.name}</p>
    </Col>
    <Col>
    <p>{Entry.cost}</p>
    </Col>
</Row>)
  }

       return ( 
           <Row style={{ borderBottom:"#262626", borderBottom:"2px solid"}}>
               <Col>    
                <Image src={this.props.img} key={this.props.menuItemName} fluid></Image>
               </Col>
               <Col md={8}>
               <Row><h2>{this.props.menuItemName}</h2></Row>
               <Row><p>{this.props.menuDescription}</p></Row>
               <Row><p>type: </p><p>{this.props.type}</p><p style={{width:20}}></p><p>Class: </p><p>{this.props.class}</p></Row>
               </Col>
               <Col>
               <Row style={{height:25}}></Row>
               <Row>
                   <p>${this.props.menuPrice}</p>
               </Row>
               <Row onClick= {this.handleShow} ><p style={{color:"#0000ff"}}>Options</p></Row>
               </Col>
        <Modal centered show={this.state.show} onHide={this.handleClose}>
            <Container>
                <Row style={{ borderBottom:"#262626", borderBottom:"2px solid"}}>
                    <Col sm={3}>    
                        <Image style={{height:80,width:80}} src={this.props.img} key={this.props.menuItemName} fluid></Image>
                    </Col>
                    <Col md={7}>
                    <Row><h2>{this.props.menuItemName}</h2></Row>
                    <Row><p>{this.props.menuDescription}</p></Row>
                    <Row><p>type: </p> </Row>
                    </Col>
                    <Col>
                    <Row style={{height:25}}></Row>
                    
                    <Row>
                        <p>${this.props.menuPrice}</p>
                    </Row>
                    <Row></Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Row>                    
                        <Col>
                        <p>OptionName</p>
                        </Col>
                        <Col>
                        <p>Cost</p>
                    </Col></Row>
                        {items}
                    </Col>
                </Row>
                <Modal.Footer>
                    <Button type="primary" onClick={this.handleClose}>Close</Button>
                </Modal.Footer>
            </Container>
        </Modal>
            </Row>);
    }
}

export default MenuItem;