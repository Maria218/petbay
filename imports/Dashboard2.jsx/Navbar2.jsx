import React, { Component } from 'react';
import route from '/imports/routing/router.js';

export default class Navbar2 extends Component {

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
                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className={`nav-item ${this.props.dashboard}`} >
                <a className="nav-link" href="/dashboard">Dashboard<span className="sr-only">(current)</span></a>
              </li>
              <li className={`nav-item dropdown ${this.props.pets}`}>
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pets</a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="/dogs">Dogs</a>
                  <a className="dropdown-item" href="/cats">Cats</a>
                  <a className="dropdown-item" href="/birds">Birds</a>
                </div>
              </li>
              <li className={`nav-item dropdown ${this.props.petCare}`}>
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pet Care</a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="/vets">Vet Services</a>
                  <a className="dropdown-item" href="/petcare">Pet Supplies</a>
                </div>
              </li>
              <li className={`nav-item ${this.props.homePet}`}>
                <a className="nav-link" href="/homing">Home a Pet</a>
              </li>
              <li className={`nav-item ${this.props.advert}`}>
                <a className="nav-link" href="/advertise">Advertise</a>
              </li>
              <li className={`nav-item dropdown ${this.props.getInvolved}`}>
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Get Involved</a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="/report">Report a Stray</a>
                  <a className="dropdown-item" href="/volunteer">Volunteer</a>
                </div>
              </li>
              <li className={`nav-item ${this.props.contact}`}>
                <a className="nav-link" href="/contactus">Contact Us</a>
              </li>
              <li className={`nav-item ${this.props.login}`}>
                <a className="nav-link" href="/login">Log out</a>
              </li>
            </ul>
          </div>
        </nav>

      </div>
    );
  }
}
