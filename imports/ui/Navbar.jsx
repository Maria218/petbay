import React, { Component } from 'react';
import route from '/imports/routing/router.js';

export default class Navbar extends Component {
  render(){
    return(
      <div>
        <nav className="navbar navbar-expand-lg">
          <span className="navbar-brand mb-0 h1" href="#"><img src="/images/logo.svg" />Pet Connection</span>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pets</a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="/categories">Dogs</a>
                  <a className="dropdown-item" href="/categories">Cats</a>
                  <a className="dropdown-item" href="/categories">Birds</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pet Care</a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="#">Vet Services</a>
                  <a className="dropdown-item" href="#">Pet Supplies</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Home a Pet</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Advertise</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Get Involved</a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="#">Report a Stray</a>
                  <a className="dropdown-item" href="#">Volunteer</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
