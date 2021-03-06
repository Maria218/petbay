import React, { Component } from 'react';
import route from '/imports/routing/router.js';

export default class Navbar2 extends Component {

  logUserOut = (e) => {
    e.preventDefault();
    Meteor.logout();
    route.go("/login");
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

  goToDashboard = () => {
    route.go("/dashboard")
  }

  goToAdvertise = () => {
    route.go("/advertise")
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

  goToAbout = () => {
    route.go("/aboutus")
  }

  goToSellerLogin = () => {
    route.go("/login")
  }

  goToAdvertLogin = () => {
    route.go("/login")
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light">
          <span className="navbar-brand mb-0 h1" href="#"><img src="images/logo.png" alt="" />Pet Connections</span>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
                <a className="nav-link" href="" onClick = {this.goToDashboard}>Dashboard</a>
              </li>
              {/* <li className={`nav-item ${this.props.advert}`}>
                <a className="nav-link" href="" onClick = {this.goToAdvertise}>Advertise</a>
              </li> */}
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
              <li className="nav-item">
                <a className="nav-link" href="" onClick={this.logUserOut}>Log Out</a>
              </li>
            </ul>
          </div>
        </nav>

      </div>
    );
  }
}
