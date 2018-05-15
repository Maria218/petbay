import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import Navbar from '/imports/ui/Navbar.jsx';
import Footer from '/imports/ui/Footer.jsx';
import Categories from '/imports/ui/Categories.jsx';


export default class Advertise extends Component {
  render(){
    return(
      <div>
        <Navbar advert={' active'}/>
        <Categories/>
        <Footer />
      </div>
    )
  }
}
