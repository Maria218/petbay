import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import Navbar from '/imports/ui/Navbar.jsx';
import Footer from '/imports/ui/Footer.jsx';

export default class Vets extends Component {
  render(){
    return(
      <div>
        <Navbar petCare={'active'}/>
        <Footer />
      </div>
    )
  }
}
