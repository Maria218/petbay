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
        <Footer />
      </div>
    )
  }
}
