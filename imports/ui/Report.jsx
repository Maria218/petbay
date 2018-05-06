import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import Navbar from '/imports/ui/Navbar.jsx';
import Footer from '/imports/ui/Footer.jsx';

export default class Report extends Component {
  render(){
    return(
      <div className="stray">
        <Navbar />
        <br />
        <br />
        <h1 className="report">SEEN A STRAY?</h1>
        <Footer />
      </div>
    )
  }
}
