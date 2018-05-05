import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import Navbar from '/imports/ui/Navbar.jsx'

export default class Home extends Component {
  render(){
    return(
      <div>
        <Navbar />
        <div className="container-fluid">
          <div className="image">
            <img src="/images/homepage.jpg" />
            <h2 id="adopt">Are you ready to adopt a pet?</h2>
          </div>
        </div>
      </div>
    )
  }
}
