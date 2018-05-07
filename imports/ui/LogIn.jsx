import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import { withTracker } from 'meteor/react-meteor-data';
import Navbar from '/imports/ui/Navbar.jsx'


export default class Login extends Component{
    logUserIn = (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        Meteor.loginWithPassword(email,password,err=>{
          err? console.log(err.reason): console.log("Logged In Successfully");
          
        })
      }
    render(){
        return(
            <div className="row justify-content-center">
              <div className="col-md-4">
              <h4>Enter Your Details To Log In</h4>
                <form>
                    <div className="form-group">
                        <label className="col-form-label" for="formGroupExampleInput2">Email Address</label>
                        <input type="email" className="form-control" name="email" id="formGroupExampleInput2" placeholder="Enter Email Address" required/>
                    </div>
                    <div className="form-group">
                        <label className="col-form-label" for="formGroupExampleInput2">Password</label>
                        <input type="password" className="form-control" name="password1" id="formGroupExampleInput2" placeholder="Enter Password" required/>
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
                <div>
                </div>
            </div>
            </div>
        )
    }
}