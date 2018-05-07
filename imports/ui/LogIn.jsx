import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import { withTracker } from 'meteor/react-meteor-data';
import Navbar from '/imports/ui/Navbar.jsx';
import Footer from '/imports/ui/Footer.jsx';


export default class LogIn extends Component{
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
            <div>
            <Navbar /><br/>
            <div className="row justify-content-center">
              <div className="col-md-4">
              <h4>Enter Your Details To Log In</h4>
                <form>
                    <div className="form-group">
                        <label className="col-form-label" htmlFor="formGroupExampleInput2">Email Address</label>
                        <input type="email" className="form-control" name="email" id="formGroupExampleInput2" placeholder="Enter Email Address" required/>
                    </div>
                    <div className="form-group">
                        <label className="col-form-label" htmlFor="formGroupExampleInput2">Password</label>
                        <input type="password" className="form-control" name="password1" id="formGroupExampleInput2" placeholder="Enter Password" required/>
                    </div>
                    <br/>
                    <div className="text-center">
                    <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                </form>
                <div>
                </div>
            </div>
            </div><br/>
            <Footer />
            </div>
        )
    }
}