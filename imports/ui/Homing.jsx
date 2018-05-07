import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import Navbar from '/imports/ui/Navbar.jsx';
import Footer from '/imports/ui/Footer.jsx';

export default class Homing extends Component {
  render(){
    return(
      <div>
        <Navbar />
        <div className="row justify-content-center">
        <div className="col-md-4">
        <h4>Sign Up To Continue</h4>
          <form onSubmit = {this.getUserData}>






 
          </form>

      </div>
      </div>
        <Footer />
      </div>
    )
  }
}
