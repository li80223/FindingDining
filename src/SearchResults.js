import React, { Component } from 'react';
import OurNavbar from './OurNavbar'
import { Container,Row,Col, Carousel, CarouselItem,Image } from 'react-bootstrap';
import RestaurantResult from './RestaurantResult'
import BeefBurgerImage from './Images/McDonaldsMain.png'
import HamburgerSpecial from './Images/McDonalds-Jolly-Burger-800x445.jpg'
import ArbysPng from './Images/arbys.png'
import GoogleMapReact from 'google-map-react';

const Schedule1 = [{day:"Sun", Opening:"11:00am", Closing:"11:00pm"},
{day:"Mon", Opening:"11:00am", Closing:"3:00am"},
{day:"Tue", Opening:"11:00am", Closing:"3:00am"},
{day:"Wed", Opening:"11:00am", Closing:"3:00am"},
{day:"Thur", Opening:"11:00am", Closing:"3:00am"},
{day:"Fri", Opening:"11:00am", Closing:"3:00am"},
{day:"Sat", Opening:"11:00am", Closing:"3:00am"}]
const Schedule2 = [{day:"Sun", Opening:"8:00am", Closing:"12:00am"},
{day:"Mon", Opening:"7:30am", Closing:"2:00am"},
{day:"Tue", Opening:"7:30am", Closing:"2:00am"},
{day:"Wed", Opening:"7:30am", Closing:"2:00am"},
{day:"Thur", Opening:"7:30am", Closing:"2:00am"},
{day:"Fri", Opening:"7:30am", Closing:"2:00am"},
{day:"Sat", Opening:"7:30am", Closing:"1:00am"}]
const Schedule3 = [{day:"Sun", Opening:"11:00am", Closing:"11:00pm"},
{day:"Mon", Opening:"11:00am", Closing:"3:00am"},
{day:"Tue", Opening:"11:00am", Closing:"3:00am"},
{day:"Wed", Opening:"11:00am", Closing:"3:00am"},
{day:"Thur", Opening:"11:00am", Closing:"3:00am"},
{day:"Fri", Opening:"11:00am", Closing:"3:00am"},
{day:"Sat", Opening:"11:00am", Closing:"3:00am"}]

const Schedulearray = [Schedule1,Schedule2,Schedule3]

const McDonaldsCarousel = ["/Images/McDonaldsMain.png","/Images/McDonalds-Jolly-Burger-800x445.jpg","/Images/McDonaldsInterior.jpg"]
const FNSCarousel = ["/Images/FatherNSonsLocation.png","/Images/FNSBreakFeast.png","/Images/FNSBurger.jpg"]
const FancyCarousel = ["/Images/arbys.png", "/Images/ArbysHamburger.png","/Images/arby-s-beef-n-cheddar-meal.jpg" ]

const CarouselItems = [McDonaldsCarousel, FNSCarousel, FancyCarousel]

const restaurantAddresses = ["60 George St", "112 Osgoode St", "51 nowhere avenue"]

const directionLink = ["https://www.google.com/maps/dir//McDonald's,+60+George+St,+Ottawa,+ON+K1N+1J4/@45.4268062,-75.7621646,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x4cce0501891f24ed:0x5237c4d92db3f1bc!2m2!1d-75.6921248!2d45.4268276",
                        "https://www.google.com/maps/dir//Father+%26+Sons+Restaurant,+Osgoode+Street,+Ottawa,+ON/",
                    "https://www.google.com/maps/dir//Arby's,+474+Hazeldean+Rd+Unit+%2314,+Kanata,+ON+K2L+4E5/"]

const McDonaldsDesc = {cuisine:["American"],type:["fast-food"], ambience:["Family-Friendly"]}
const fnsDesc = {cuisine:["American"],type:["Pub"], ambience:["Cozy","up-beat"]}
const arbysDesc = {cuisine:["American"],type:["fast-food"], ambience:["Family-Friendly",]}

const descriptionArray = [McDonaldsDesc, fnsDesc, arbysDesc]

class SearchResults extends Component {

    constructor(props) {
        super(props)

        this.state = {
            active1: false,
            active2: false,
            active3: false,
            RestaurantIndex: -1,
            center: {lat:50.23, lng:30.33}
        }
    }

    setMcDonaldsActive(event) {
        this.setState({active1 : true,
        active2: false,
        active3: false,
        RestaurantIndex:0})
    }
    setArbysActive(event) {
        this.setState({active1 : false,
        active2: true,
        active3: false,
        RestaurantIndex:1})
    }
    setFancyActive(event) {
        this.setState({active1 : false,
        active2: false,
        active3: true,
        RestaurantIndex:2})
    }

  render() {
    var carouselItemDiv
    var FinalCarouselDiv
    var OpeningHours
    var FinalDescript
    if (this.state.RestaurantIndex != -1) {
        OpeningHours = Schedulearray[this.state.RestaurantIndex].map((day)=> <p>{day.day + ": " + day.Opening + "-" + day.Closing}</p>);
        
        carouselItemDiv = CarouselItems[this.state.RestaurantIndex].map(Entry => <CarouselItem>
        <Image src={Entry} style={{width:"100%", height: 300}} fluid/>
        </CarouselItem>);

        FinalCarouselDiv =<Carousel>
                            {carouselItemDiv}
                        </Carousel>;

        var descObject = descriptionArray[this.state.RestaurantIndex];

        var cuisines = descObject.cuisine.map(entry => <p>{entry}</p>)
        var types = descObject.type.map(entry => <p>{entry}</p>)
        var ambiences = descObject.ambience.map(entry => <p>{entry}</p>)

        FinalDescript = <Row>
            <Col><p style={{}}>Cuisine:</p>{cuisines}</Col>
            <Col><p style={{}}>Type:</p>{types}</Col>
            <Col><p style={{}}>Ambience:</p>{ambiences}</Col>
        </Row>

    } else {
        OpeningHours = <div>Please Select A Restaurant</div>
        FinalCarouselDiv = <div></div>
    }

    

    return (
        
        <Container fluid={true}>
        <Row>
            <Col>
                {FinalCarouselDiv}
            </Col>
            <Col md={6}>
                    <Row><h1 style={{margin:"auto",borderBottomColor:"#262626", borderBottom:"3px solid"}}>Results</h1></Row>
                    <div onClick={this.setMcDonaldsActive.bind(this)}><RestaurantResult price={"$"} symbol={"/Images/McDonaldsMain.png"} selected={this.state.active1} restaurantName="McDonalds" RestaurantDiscription="Can you imagine a world without the Big Mac®, Quarter Pounder® sandwich or the Happy Meal®?" Distance="1.2KM" redirectTo="/RestaurantPage/McDonalds"></RestaurantResult></div>
                    <div onClick={this.setArbysActive.bind(this)}><RestaurantResult price={"$$"} selected={this.state.active2} symbol={"/Images/FatherNSonLogo.png"} restaurantName="Father N Sons" RestaurantDiscription=" Father & Sons has been a staple to the University of Ottawa since 1967." Distance="300m"  redirectTo="/RestaurantPage/NotArbys"></RestaurantResult></div>
                    <div onClick={this.setFancyActive.bind(this)}><RestaurantResult price={"$"} selected={this.state.active3} symbol={ArbysPng} restaurantName="Arby's" RestaurantDiscription="Arby's sandwich shops are known for slow roasted roast beef, turkey, and premium Angus beef sandwiches, sliced fresh every day." Distance="10KM" redirectTo="/RestaurantPage/NotArbys" ></RestaurantResult></div>
            </Col>

            <Col>
                <h3>Hours</h3>
                {OpeningHours}
                <h3>Details</h3>
                {FinalDescript}
                <div style={{height:300}}>
                <h3>Address</h3>
                <p><a href={directionLink[this.state.RestaurantIndex]}>{restaurantAddresses[this.state.RestaurantIndex]}</a></p>
                <GoogleMapReact
                          defaultCenter={this.state.center}
                          yesIWantToUseGoogleMapApiInternals
                          defaultZoom={11}>
                </GoogleMapReact>
                </div>
            </Col>
        </Row>
        </Container>
        );
    }
}

export default SearchResults;