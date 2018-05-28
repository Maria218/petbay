import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';
import route from '/imports/routing/router.js';
import { withTracker } from 'meteor/react-meteor-data';
import Navbar from '/imports/ui/Navbar.jsx';
import Footer from '/imports/ui/Footer.jsx';
import Dashboard from '/imports/ui/Dashboard.jsx';

export default class LogIn extends Component {
    // bind this function to the form to prevent it from reloading the page
    constructor(props){
      super(props)
    }

      goToHoming = () => {
    route.go("/homing")
  }

    logUserIn = (e) => {
        e.preventDefault();
        const {target} = e;
        const email = target.email.value;
        const password = target.password.value;

        Meteor.loginWithPassword(email, password, err => {
          if (email === "admin@master.com" && password === "master1") {
            route.go('/dashboard2')
          }
          else {
            err ? alert(err.reason) : route.go('/dashboard');
          }
        })
    }

  render() {
    return (
      <div>
        <Navbar login={'active'}/><br />
          <div className="container">              
              <div className="text-center">
               <h4>Enter Your Login Details to Proceed</h4>
              </div>

            <div className="row justify-content-center">
              <div className="col-md-4 stray text-center">
                <h4><i className="fa fa-user-circle " style={{fontSize:48+"px",paddingTop:10+"px"}}></i></h4>
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
                    <div className="text-center"  style={{fontSize:20+"px",paddingBottom:10+"px"}}>
                      <button type="submit" className="btn btn-primary adding">Login <i class="fa fa-sign-in"></i></button>
                    </div>
                  </form>
            </div>
          </div>
          <div className="text-center">
            <h6>If you don't have an account, please Sign Up <a href="" onClick={this.goToHoming}><strong>here</strong></a></h6>
          </div>        
        </div>
        <br />
        <Footer />
      </div>
    )
  }
}
