import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import Navbar from './Navbar.jsx';
import Footer from '/imports/ui/Footer.jsx';

export default class Home extends Component {

  goToHoming = () => {
    route.go("/homing")
  }

  render(){
    return(
      <div>

        <Navbar home={'active'}/>
        <div className="holder">
          <img src="/images/homepage.jpg" />
          <div className = "signUpHere">
            <br />
            <br />
            <h5>Want to sell your pet or put it up for adoption?</h5>
            <h5>Want to sell your pet related goods?</h5>
            <h5>Want to advertise your services?</h5>
            <button className="btn btn-outline-light" onClick={this.goToHoming}>Sign up here!</button>
            <br />
            <br />
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="container">
          <div className="row">
            <div className = "col-md-4">
              <img src="/images/dog-homepage.jpg" />
              <br />
              <br />
              <h4 className="top-middle">Get Yourself a Furry Friend</h4>
              <p className="bottom-middle">Check out the different categories of pets put up for adoption by different centres and individuals. Connect with adoption centers, pet stores and others to find these wonderful pets forever homes.</p>
            </div>
            <div className = "col-md-4">
              <img src="/images/cat-homepage.jpg" />
              <br />
              <br />
              <h4 className="top-middle">Talk to a Vet</h4>
              <p className="bottom-middle">Visit our Vet Services page to read through helpful information on all things pet care from registered veterinarians and dietitians. Connect to these vets directly with their contact information and ask questions, set appointments, or talk about the general health of a pet.</p>
            </div>
            <div className = "col-md-4">
              <img src="/images/parrots-homepage.jpg" />
              <br />
              <br />
              <h4 className="top-middle">Give a Pet for Adoption</h4>
              <p className="bottom-middle">Have a pet you want to give up for adoption? Create an account, upload information about your pet and set a price and your pet will be added to our list of pets for adoption for any potential buyer to see. Give your pet a good home today.</p>
            </div>
          </div>
        </div>
        <br />
        <br />

        <Footer />

      </div>
    )
  }
}
