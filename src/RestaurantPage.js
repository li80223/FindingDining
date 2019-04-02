import React, { Component } from 'react';
import OurNavbar from './OurNavbar'
import { Container,Row,Col, Carousel, CarouselItem,Image, FormControl, Form } from 'react-bootstrap';
import RestaurantResult from './RestaurantResult'
import BeefBurgerImage from './Images/McDonaldsMain.png'
import HamburgerSpecial from './Images/McDonalds-Jolly-Burger-800x445.jpg'
import MenuItem from './MenuItem';
import GoogleMapReact from 'google-map-react';

const Schedule1 = [{day:"Sat", Opening:"11:00am", Closing:"11:00pm"},
{day:"Sun", Opening:"11:00am", Closing:"3:00am"},
{day:"Tue", Opening:"11:00am", Closing:"3:00am"},
{day:"Wed", Opening:"11:00am", Closing:"3:00am"},
{day:"Thur", Opening:"11:00am", Closing:"3:00am"},
{day:"Fri", Opening:"11:00am", Closing:"3:00am"},
{day:"Sat", Opening:"11:00am", Closing:"3:00am"}]

const MenuItemList = [
  {name: "Big Mac", Description: "You already know what it is", MenuPrice: "5.00", img:"/Images/80_Big-Mac.jpg", type:"Beef", class:"Main"},
  {name: "Cheesburger", Description: "Cheesy Addition to the classic", MenuPrice: "7.22",img:"/Images/100_Cheeseburger.jpg",type:"Beef", class:"Main"},
  {name: "Quarter Pounder with Cheese", Description: "Quarter Pound of Meat complete with cheese", MenuPrice: 9.31, img:"/Images/100_Quarter-Pounder-With-Cheese.jpg",type:"Beef", class:"Main"},
  {name: "McDouble", Description: "Double Meat Patty Hamburger", MenuPrice:"5.00",img:"/Images/100_McDouble.jpg",type:"Beef", class:"Main"},
  {name: "Hamburger", Description: "Simple Hamburger", MenuPrice: "13.22",img:"/Images/100_Hamburger.jpg",type:"Beef", class:"Main"},
  {name: "McFlurry", Description: "Sweet delectible treat", MenuPrice: "3.49",img:"/Images/100_Oreo-McFlurry.jpg",type:"Ice Cream", class:"Dessert"},
  {name: "Vanilla Cone", Description: "Classic Ice Cream Cone", MenuPrice: "1.00",img:"/Images/100_Vanilla-Cone.jpg",type:"Ice Cream", class:"Dessert"},
]

const McDonaldsDesc = {cuisine:["American"],type:["fast-food"], ambience:["Family-Friendly"]}

class RestaurantPage extends Component {
  constructor(props){
    super(props)



    var MenuDiv = MenuItemList.map(( Entry ) => 
    <MenuItem menuItemName={Entry.name} menuDescription={Entry.Description} menuPrice={Entry.MenuPrice} img={Entry.img} type={Entry.type} class={Entry.class}> </MenuItem>)

    this.state = {nameFilter: "",
      Beef: true,
      Chicken: true,
      side: true,
      main: true,
      dessert: true,
      iceCream: true,
      center: {lat:50.23, lng:30.33}
    }
  }

  updateFilterName(event) {

    this.setState({
      nameFilter: event.target.value.toLowerCase()
    })
  }

  updateFilterCheckboxBeef(event) {
    this.setState(prevState=>({
      Beef: ! prevState.Beef
    }))
  }
  updateFilterCheckboxSide(event) {
    this.setState(prevState=>({
      side: ! prevState.side
    }))
  }
  updateFilterCheckboxMain(event) {
    this.setState(prevState=>({
      main: ! prevState.main
    }))
  }
  updateFilterCheckboxDessert(event) {
    this.setState(prevState=>({
      dessert: ! prevState.dessert
    }))
  }
  updateFilterCheckboxIceCream(event) {
    this.setState(prevState=>({
      iceCream: ! prevState.iceCream
    }))
  }
  updateFilterCheckboxbChicken(event) {
    this.setState(prevState=>({
      Chicken: ! prevState.Chicken
    }))
  }

  render() {

    var filteredList = MenuItemList.filter(Entry => 
      {
        var checkboxFilterSwitch;
        switch(Entry.type){
          case "Beef":
            checkboxFilterSwitch = this.state.Beef
          break;
          case "Chicken":
            checkboxFilterSwitch = this.state.Chicken
          break
          case "Ice Cream":
            checkboxFilterSwitch = this.state.iceCream
          break;
        }
      return ((Entry.name.toLowerCase().indexOf(this.state.nameFilter) !== -1) && (checkboxFilterSwitch));
      }
    )

    var MenuDiv = filteredList.map(( Entry ) => <MenuItem menuItemName={Entry.name} menuDescription={Entry.Description} menuPrice={Entry.MenuPrice} img={Entry.img} type={Entry.type} class={Entry.class}> </MenuItem>)

    var OpeningHours = Schedule1.map((day)=> <p>{day.day + ": " + day.Opening + "-" + day.Closing}</p>);


    
    var cuisines = McDonaldsDesc.cuisine.map(entry => <p>{entry}</p>)
    var types = McDonaldsDesc.type.map(entry => <p>{entry}</p>)
    var ambiences = McDonaldsDesc.ambience.map(entry => <p>{entry}</p>)

    var FinalDescript = <Row>
        <Col><p style={{}}>Cuisine:</p>{cuisines}</Col>
        <Col><p style={{}}>Type:</p>{types}</Col>
        <Col><p style={{}}>Ambience:</p>{ambiences}</Col>
    </Row>;

    return (

      
        <div>
        <OurNavbar addresses={[{value:"123 somewhere street", selected: true},
        {value:"223 highway 8 west", selected: false},
        {value:"222 executor avenue",selected: false}]}></OurNavbar>
                
        <Container fluid={true}>
        <Row>
          <Col>
          </Col>
          <Col md={3} >
          <Carousel >
            <CarouselItem >
                <Image src={BeefBurgerImage} style={{height:200, width:"100%"}} fluid/>
            </CarouselItem>
            <CarouselItem >
                <Image src={HamburgerSpecial} style={{height:200, width:"100%"}} fluid/>
            </CarouselItem>
            </Carousel>
            </Col>
            <Col></Col>
        </Row>
        <Row>
          
            <Col style={{ paddingTop:50}} >
            <Row>
            <div>
              <input type="text" style={{width:250, margin:20, marginTop:40}} placeholder="Menu Filter" value={this.state.FilterValue} onChange={ this.updateFilterName.bind(this)}></input>
            </div>
            </Row>
            <Row>
            <Col style={{width:0}}></Col>
            <Col style={{margin:"auto"}} sm={8}>
            <Row>Class Filters</Row>
            <Form.Check type="checkbox" label="Main" onChange={this.updateFilterCheckboxMain.bind(this)} defaultChecked/>
            <Form.Check type="checkbox" label="Side" onChange={this.updateFilterCheckboxSide.bind(this)} defaultChecked/>
            <Form.Check type="checkbox" label="Dessert" onChange={this.updateFilterCheckboxDessert.bind(this)} defaultChecked/>
            <Row>Type Filters</Row>
            <Form.Check type="checkbox" label="Beef" onChange={this.updateFilterCheckboxBeef.bind(this)} defaultChecked/>
            <Form.Check type="checkbox" label="Chicken" onChange={this.updateFilterCheckboxbChicken.bind(this)} defaultChecked/>
            <Form.Check type="checkbox" label="Ice-Cream" onChange={this.updateFilterCheckboxIceCream.bind(this)} defaultChecked/>
            </Col>
            <Col></Col> 
            </Row>
            </Col>


            <Col md={7}>
              <Row><h1 style={{margin:"auto",borderBottomColor:"#262626", borderBottom:"3px solid"}}>McDonalds</h1></Row>
              <Row><h2 style={{margin:"auto",borderBottomColor:"#262626", borderBottom:"3px solid"}}>Menu</h2></Row>
              {MenuDiv}
            </Col>
            <Col>
                <h2> Weekly Hours</h2>
                {OpeningHours}
                <h3>Address</h3>
                <h3>Details</h3>
                {FinalDescript}
                <p><a href="https://www.google.com/maps/dir/45.4198825,-75.6792784/McDonald's,+60+George+St,+Ottawa,+ON+K1N+1J4/@45.4235375,-75.6898007,16z/data=!3m1!4b1!4m17!1m6!3m5!1s0x0:0x5237c4d92db3f1bc!2sMcDonald's!8m2!3d45.4268272!4d-75.6921235!4m9!1m1!4e1!1m5!1m1!1s0x4cce0501891f24ed:0x5237c4d92db3f1bc!2m2!1d-75.6921248!2d45.4268276!3e3">60 George St</a></p>
                <div style={{height:300, width:300}}>
                <GoogleMapReact
                          defaultCenter={this.state.center}
                          yesIWantToUseGoogleMapApiInternals
                          defaultZoom={11}>
                </GoogleMapReact>
                </div>
            </Col>
        </Row>
        </Container>
        </div>
        );
    }
}

export default RestaurantPage;
