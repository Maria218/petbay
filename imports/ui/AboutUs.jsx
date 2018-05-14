import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import { withTracker } from 'meteor/react-meteor-data';
import Navbar from '/imports/ui/Navbar.jsx';
import Footer from '/imports/ui/Footer.jsx';


export default class AboutUs extends Component{
    render(){
        return(
          <div>
            <Navbar home={' active'}/>
            <img src="/images/homepage.jpg" class="imgau"/>
              <img src="/images/stray.jpg" class="imgau1"/>
<h1 class="pc">Pet Connections</h1>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />  <br />
              <br />
              <br />
              <br />
              <br />
              <div class="jumbotron">
                <div class="container">
                  <div class="row">
                    <div class="col-md-3"></div>
                <div class="col-md-3">
                <h1 class="my">About Us</h1>
              </div>
              <div class="col-md-3"></div></div></div>
              <p class="py">We are a dedicated pet-Adoption website who generalise in all things sPETacular. We are pet lovers
                hear for you. We offer Services such as,
                Pet-Adoption,Pet Services, Pet Care, Pet Products, Vet Services you name it,we provide it. We love what we do.</p>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-md-3">
                  <figure class="tint t1">
                  <img src="images/dman.png" class="imgab"/></figure>
                  <h1>Damiano SilverHand</h1>
                  <p class="ptext">Am proud to be with pet and to walk with them
                     at my free time!!</p>
                </div>
                <div class="col-md-3">
                  <figure class="tint t2">
                  <img src="images/cat6.jpg" class="imgab"/></figure>
                  <h1>Maria Situmbeko</h1>
                  <p class="ptext">I like to take care of pet and give them food and clean water to drink and to care for them when they sick I take them to vet for help!!!!</p>
                </div>
                <div class="col-md-3">
                  <figure class="tint t3">
                  <img src="images/img.jpg" class="imgab"/></figure>
                  <h1>Munnah Stephanie</h1>
                  <p class="ptext">I like been with pet and they are cool and good animal to be with!!!</p>
                </div>
                <div class="col-md-3">
                  <figure class="tint t4">
                  <img src="images/mary.jpg" class="imgab"/></figure>
                  <h1>Mary Mulunda</h1>
                  <p class="ptext">I love to be with pets and to play with them at my free time because they are cool and fantastic animals to be with and I make sure to keep them safe !!! </p>
                </div>
            </div>

</div>

            <Footer />

          </div>
        )
      }
    }
