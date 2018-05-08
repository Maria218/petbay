import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import Navbar from '/imports/ui/Navbar.jsx';
import Footer from '/imports/ui/Footer.jsx';

export default class Volunteer extends Component {
  render(){
    return(
      <div>
        <Navbar />
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
              <h5 className="top-middle">Lorem ipsum dolor</h5>
              <p className="bottom-middle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum mauris ut diam vulputate, nec scelerisque magna maximus.</p>
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
          <br />
          <br />
          <div className="row">
            <div className="col-md-6">
              <img src="images/adoptioncenter.jpg" />
            </div>
            <div className="col-md-6">
              <h5 className="top-middle">Lorem ipsum dolor</h5>
              <p className="bottom-middle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum mauris ut diam vulputate, nec scelerisque magna maximus.</p>
              <button type="button" className="btn btn-outline-primary text-center">Volunteer</button>
            </div>
          </div>
          <i class="fa fa-angle-right text-center"></i>
        </div>
        <br />
        <br />
        <Footer />
      </div>
    )
  }
}
