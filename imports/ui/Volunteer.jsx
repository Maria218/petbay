import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import Navbar from '/imports/ui/Navbar.jsx';
import Footer from '/imports/ui/Footer.jsx';

export default class Volunteer extends Component {
  render(){
    return(
      <div>
        <Navbar getInvolved={'active'}/>
        <br />
        <h1 className="volunteer">WANT TO VOLUNTEER?</h1>
        <h5 className="volunteer">Explore the list of organisations and help save our furry friends</h5>
        <br />
        <br />
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="images/adoptioncenter.jpg" />
            </div>
            <div className="col-md-6">
              <h5 className="top-middle">PetBay</h5>
              <p className="bottom-middle">A pet store with a vision to give every little critter in their store a family can never have too many helping hands. Get in contact with Pet Bay and volunteer with them today.</p>
              <button type="button" className="btn btn-outline-primary">Volunteer</button>
            </div>
          </div>
          <br />
          <br />
          <div className="row">
            <div className="col-md-6">
              <img src="images/adoptioncenter.jpg" />
            </div>
            <div className="col-md-6">
              <h5 className="top-middle">Lusaka Animal Welfare Society</h5>
              <p className="bottom-middle">This organisation has been running since 1993 helping different animals find forever homes and give pet owners information on how to take care of their pets. But they can't do all the work they do alone. Partner with them and offer your voluntary services either part or full time to help them continue their beautiful mission.</p>
              <button type="button" className="btn btn-outline-primary">Volunteer</button>
            </div>
          </div>
          <br />
          <br />
          <div className="row">
            <div className="col-md-6">
              <img src="images/adoptioncenter.jpg" />
            </div>
            <div className="col-md-6">
              <h5 className="top-middle">Lorem ipsum dolor</h5>
              <p className="bottom-middle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum mauris ut diam vulputate, nec scelerisque magna maximus.</p>
              <button type="button" className="btn btn-outline-primary">Volunteer</button>
            </div>
          </div>
          <div className="text-center">
            <i className="fa fa-angle-right fa-4x"></i>
          </div>
        </div>
        <br />
        <br />
        <Footer />
      </div>
    )
  }
}
