import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import Navbar from '/imports/ui/Navbar.jsx';
import Footer from '/imports/ui/Footer.jsx';

export default class Homing extends Component {

  constructor(props){
    super(props);
    this.state = {
      error :"",
      error2 :"",

    }
  }

  getUserData =(e) =>{
    e.preventDefault();
    const {target} = e;
    const name = target.name.value;
    const email = target.email.value;
    const phone = target.phone.value;
    const password = target.password.value;
    const password2 = target.password2.value;

   if(password.trim()!==password2.trim()){
     this.setState({
       error: "Passwords do not match"
     })
     return;
   };
   if(password.length <=6){
     this.setState({
       error2: "Password too short"
     })
     return;
   }
   const user = {
     email,
     password,

     profile: {
       name,
       phone,
       createdAt: new Date()
     },
   }
   Accounts.createUser(user,error=>{
     error ? console.log(error.reason) : console.log("Account Created Successfully");
   }) ;

  route.go('/dashboard');

  }

  render(){
    return(
      <div>
        <Navbar homePet={'active'}/><br/>
        <div className="container">
        <div className="row justify-content-center">
        <div className="col-md-4">
        <div className="text-center">
        <h4>Sign Up To Continue</h4>
        </div>
          <form onSubmit = {this.getUserData} className="needs-validation">
              <div className="form-group">
                  <label className="col-form-label" htmlFor="formGroupExampleInput">Individual or Organization Name</label>
                  <input type="text" className="form-control" name="name" id="formGroupExampleInput" placeholder="Enter Name" required />
              </div>
              <div className="form-group">
                  <label className="col-form-label" htmlFor="formGroupExampleInput2">Email Address</label>
                  <input type="email" className="form-control" name="email" id="formGroupExampleInput2" placeholder="Enter Email Address" required/>
              </div>
              <div className="form-group">
                  <label className="col-form-label" htmlFor="formGroupExampleInput2">Contact Number</label>
                  <input type="number" className="form-control" name="phone" id="formGroupExampleInput2" placeholder="Enter Phone Number" required/>
              </div>
              <div className="form-group">
                  <label className="col-form-label" htmlFor="formGroupExampleInput2">Password</label>
                  <input type="password" className="form-control" name="password" id="formGroupExampleInput2" placeholder="Choose Password"  required/>
                  <p style={{color:"red"}}>{this.state.error2}</p>
              </div>
              <div className="form-group">
                  <label className="col-form-label" htmlFor="formGroupExampleInput2">Confirm Password</label>
                  <input type="password" className="form-control" name="password2" id="formGroupExampleInput2" placeholder="Enter Password Again"required/>
                  <p style={{color:"red"}}>{this.state.error}</p>
              </div>
              <div className="form-group">
                  <label className="col-form-label" htmlFor="formGroupExampleInput2">Location</label>
                  <input type="text" className="form-control" name="location" id="formGroupExampleInput2" placeholder="Enter Town Name" required/>
              </div><br/>
              <div className="text-center">
                <button type="submit" className="btn btn-primary">Sign Up</button>
              </div>
          </form><br/>
          <div className="text-center">
              <p>By Signing Up, You agree to our terms and conditions</p>
          </div>

      </div>
      </div>
      </div><br/>
        <Footer />
      </div>
    )
  }
}
