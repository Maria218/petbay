import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import Navbar from '/imports/ui/Navbar.jsx'

export default class Home extends Component {
  render(){
    return(
      <div>
        <Navbar />
        <img src="/images/homepage.jpg" />
      </div>
    )
  }
}
