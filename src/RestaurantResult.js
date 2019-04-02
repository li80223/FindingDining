import React, { Component } from 'react';
import { Row, Container, Image,Col } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import ArbysPng from './Images/arbys.png'

class RestaurantResult extends Component {

    constructor(props) {
        super(props)

    }

  render() {
      if (this.props.selected) {
          return (
            <Row style={{ border:"#66ff33",padding:20, border:"2px solid #66ff33"}}>
            <Col>
             <Image src={this.props.symbol} style={{height:100,width:100}} fluid/>
            </Col>
            <Col md={6}>
            <h2>{this.props.restaurantName}</h2>
            <p>{this.props.RestaurantDiscription}</p>
            </Col>
            <Col md = {2}>
            <Row>
                Distance: {this.props.Distance}
            </Row>
            <Row>
                <p>Cost: </p>
                <p>{this.props.price}</p>
            </Row>
            <Row>
                <Link to={this.props.redirectTo}>More Details</Link>
            </Row>
            </Col>
         </Row>);
      }
       return ( 
           <Row style={{ borderBottom:"#262626",padding:20, borderBottom:"2px solid"}}>
               <Col>
                <Image src={this.props.symbol} style={{height:100,width:100}} fluid/>
               </Col>
               <Col md={6}>
               <h2>{this.props.restaurantName}</h2>
               <p>{this.props.RestaurantDiscription}</p>
               </Col>
               <Col md = {2}>
               <Row>
                Distance: {this.props.Distance}
                </Row>
               <Row>
                   <p>Cost: </p>
                   <p>{this.props.price}</p>
               </Row>
               <Row>
                   <Link to={this.props.redirectTo}>More Details</Link>
               </Row>
               </Col>
            </Row>);
    }
}

export default RestaurantResult;