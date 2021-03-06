import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';
import route from '/imports/routing/router.js';
import { withTracker } from 'meteor/react-meteor-data';
import Navbar from '/imports/ui/Navbar.jsx';
import Footer from '/imports/ui/Footer.jsx';
import Dashboard2 from '/imports/ui/Dashboard2.jsx';

export default class LogIn2 extends Component {
    // bind this function to the form to prevent it from reloading the page
  constructor(props){
    super(props)
  }

  logUserIn = (e) => {
    e.preventDefault();
    const {target} = e;
    const email = target.email.value;
    const password = target.password.value;

    Meteor.loginWithPassword(email, password, err => {
      err ? console.log(err.reason) : route.go('/dashboard2');
    })
  }

  render() {
    return (
      <div>
        <Navbar login={'active'}/><br />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <h4>Enter Your Details To Log In</h4>
              <form onSubmit = {this.logUserIn}>
                <div className="form-group">
                  <label className="col-form-label" htmlFor="formGroupExampleInput">Email Address</label>
                  <input type="email" className="form-control" name="email" id="formGroupExampleInput1" placeholder="Enter Email Address" required />
                </div>
                <div className="form-group">
                  <label className="col-form-label" htmlFor="formGroupExampleInput2">Password</label>
                  <input type="password" className="form-control" name="password" id="formGroupExampleInput2" placeholder="Enter Password" required />
                </div>
                <br />
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <br />
        <Footer />
      </div>
    )
  }
}
