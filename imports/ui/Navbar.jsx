import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import $ from 'jquery';

export default class Navbar extends Component {

  componentDidMount(){
    this.navChange()
  }

  navChange = () => {
    if (Meteor.userId()) {
      $('#loggedOut').hide();
      $('#loggedIn').show();
      console.log("you're now logged in")
    }
    else {
      $('#loggedOut').show();
      $('#loggedIn').hide();
      console.log("you're now logged out")
    }
  }

  logUserOut = (e) => {
    e.preventDefault();
    console.log('you are now logged out');
    Meteor.logout(err => {
      this.navChange();
      window.location.reload()
      console.log("User ID: ", Meteor.userId());
    });
  }

  goHome = () => {
    route.go('/');
  }

  goToDogs = () => {
    route.go("/dogs")
  }

  goToCats = () => {
    route.go("/cats")
  }

  goToBirds = () => {
    route.go("/birds")
  }

  goToVets = () => {
    route.go("/vets")
  }

  goToSupplies = () => {
    route.go("/petcare")
  }

  goToHoming = () => {
    route.go("/homing")
  }

  goToAdvertise = () => {
    route.go("/advertising")
  }

  goToReportStray = () => {
    route.go("/report")
  }

  goToVolunteer = () => {
    route.go("/volunteer")
  }

  goToContact = () => {
    route.go("/contactus")
  }

  goToLogin = () => {
    route.go("/login")
  }

  goToAbout = () => {
    route.go("/aboutus")
  }

  goToDashboard = () => {
    route.go("/dashboard")
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light" id="loggedOut">
          <span className="navbar-brand mb-0 h1"><img onClick = {this.goHome} src="images/logo.png" alt="" />Pet Connections</span>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent1">
            <ul className="navbar-nav ml-auto">
              <li className={`nav-item ${this.props.home}`} >
                <a className="nav-link" href="" onClick = {this.goHome}>Home <span className="sr-only">(current)</span></a>
              </li>
              <li className={`nav-item dropdown ${this.props.pets}`}>
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pets</a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="" onClick = {this.goToDogs}>Dogs</a>
                  <a className="dropdown-item" href="" onClick = {this.goToCats}>Cats</a>
                  <a className="dropdown-item" href="" onClick = {this.goToBirds}>Birds</a>
                </div>
              </li>
              <li className={`nav-item dropdown ${this.props.petCare}`}>
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pet Care</a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="" onClick = {this.goToVets}>Vet Services</a>
                  <a className="dropdown-item" href="" onClick = {this.goToSupplies}>Pet Supplies</a>
                </div>
              </li>
              <li className={`nav-item ${this.props.homePet}`}>
                <a className="nav-link" href="" onClick = {this.goToHoming}>Home a Pet</a>
              </li>
              <li className={`nav-item dropdown ${this.props.getInvolved}`}>
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Get Involved</a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="" onClick = {this.goToReportStray}>Report a Stray</a>
                  <a className="dropdown-item" href="" onClick = {this.goToVolunteer}>Volunteer</a>
                </div>
              </li>
              <li className={`nav-item ${this.props.contact}`}>
                <a className="nav-link" href="" onClick = {this.goToContact}>Contact Us</a>
              </li>
              <li className={`nav-item ${this.props.about}`}>
                <a className="nav-link" href="" onClick = {this.goToAbout}>About Us</a>
              </li>
              <li className={`nav-item ${this.props.login}`}>
                <a href="" onClick={this.goToLogin} className="nav-link">Login</a>
              </li>
            </ul>
          </div>
        </nav>

        <nav className="navbar navbar-expand-lg navbar-light" id="loggedIn">
          <span className="navbar-brand mb-0 h1"><img onClick = {this.goHome} src="images/logo.png" alt="" />Pet Connections</span>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent2" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent2">
            <ul className="navbar-nav ml-auto">
              <li className={`nav-item ${this.props.home}`} >
                <a className="nav-link" href="" onClick = {this.goHome}>Home <span className="sr-only">(current)</span></a>
              </li>
              <li className={`nav-item dropdown ${this.props.pets}`}>
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pets</a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="" onClick = {this.goToDogs}>Dogs</a>
                  <a className="dropdown-item" href="" onClick = {this.goToCats}>Cats</a>
                  <a className="dropdown-item" href="" onClick = {this.goToBirds}>Birds</a>
                </div>
              </li>
              <li className={`nav-item dropdown ${this.props.petCare}`}>
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pet Care</a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="" onClick = {this.goToVets}>Vet Services</a>
                  <a className="dropdown-item" href="" onClick = {this.goToSupplies}>Pet Supplies</a>
                </div>
              </li>
              <li className={`nav-item dropdown ${this.props.getInvolved}`}>
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Get Involved</a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="" onClick = {this.goToReportStray}>Report a Stray</a>
                  <a className="dropdown-item" href="" onClick = {this.goToVolunteer}>Volunteer</a>
                </div>
              </li>
              <li className={`nav-item ${this.props.contact}`}>
                <a className="nav-link" href="" onClick = {this.goToContact}>Contact Us</a>
              </li>
              <li className={`nav-item ${this.props.about}`}>
                <a className="nav-link" href="" onClick = {this.goToAbout}>About Us</a>
              </li>
              <li className={`nav-item`}>
                <a className="nav-link" href="" onClick = {this.goToDashboard}>Dashboard</a>
              </li>
              <li className={`nav-item`}>
                <a href="#" onClick={this.logUserOut} className="nav-link">Log Out</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
