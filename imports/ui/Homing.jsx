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
              <div className="form-group">
                  <label className="col-form-label" for="formGroupExampleInput">Organization Name</label>
                  <input type="text" className="form-control" name="name" id="formGroupExampleInput" placeholder="Enter Name" required />
              </div>
              <div className="form-group">
                  <label className="col-form-label" for="formGroupExampleInput2">Email Address</label>
                  <input type="email" className="form-control" name="email" id="formGroupExampleInput2" placeholder="Enter Email Address" required/>
              </div>
              <div className="form-group">
                  <label className="col-form-label" for="formGroupExampleInput2">Contact Number</label>
                  <input type="number" className="form-control" name="phoneNumber" id="formGroupExampleInput2" placeholder="Enter Phone Number" required/>
              </div>
              <div className="form-group">
                  <label className="col-form-label" for="formGroupExampleInput2">Password</label>
                  <input type="password" className="form-control" name="password1" id="formGroupExampleInput2" placeholder="Enter Password" required/>
              </div>
              <div className="form-group">
                  <label className="col-form-label" for="formGroupExampleInput2">Confirm Password</label>
                  <input type="password" className="form-control" name="password2" id="formGroupExampleInput2" placeholder="Enter Password Again" required/>
              </div>
              <div className="form-group">
                  <label className="col-form-label" for="formGroupExampleInput2">Location</label>
                  <input type="text" className="form-control" name="location" id="formGroupExampleInput2" placeholder="Enter Town Name" required/>
              </div><br/>
 
          </form>

      </div>
      </div>
        <Footer />
      </div>
    )
  }
}
