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
      name: "",
      email: "",
      phone: "",
      location: "",
    }
  }

    goToLogin = () => {
    route.go("/login")
  }

  getUserData =(e) =>{
    e.preventDefault();
    const {target} = e;
    const name = target.name.value;
    const email = target.email.value;
    const phone = target.phone.value;
    const location = target.location.value;
    const password = target.password.value;
    const password2 = target.password2.value;

   if(password.trim()!==password2.trim()){
     this.setState({
       error: "Passwords do not match"
     })
     return;
   };
   if(password.length <= 6){
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
       location
     },
   }

   Accounts.createUser(user,error=>{
     error ? alert(error.reason) : console.log("Account Created Successfully");
   }) ;
  route.go('/dashboard');
  }

  handleLocationChange = (e) => {
    this.setState({
      location: e.target.value
    })
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handlePhoneChange = (e) => {
    this.setState({
      phone: e.target.value
    })
  }

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  render(){
    return(
      <div>
        <Navbar homePet={'active'}/>
        <br />
        <br />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img src="/images/pethom2.jpg" className="pethom"/>
            </div>
            <div className="col-md-8" className="spc">
              <div className="text-center">
                <h4>Sign UP To Continue</h4>
              </div>
              <div className="text-center">
               <h6>Already have have an account? Please login <a href="" onClick={this.goToLogin}><strong>here</strong></a></h6>
             </div> 
              <form onSubmit = {this.getUserData} className="needs-validation">
                <div className="form-group">
                  <label className="col-form-label" htmlFor="formGroupExampleInput">Individual or Organization Name</label>
                  <input onChange={this.handleNameChange} type="text" className="form-control" name="name" id="formGroupExampleInput" placeholder="Enter Name" required />
                  <div className="invalid-feedback">
                    Please provide a valid name.
                  </div>
                </div>
                <div className="form-group">
                    <label className="col-form-label" htmlFor="formGroupExampleInput2">Email Address</label>
                    <input onChange={this.handleEmailChange} type="email" className="form-control" name="email" id="formGroupExampleInput2" placeholder="Enter Email Address" required/>
                    <div className="invalid-feedback">
                      Please provide a valid email address.
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-form-label" htmlFor="formGroupExampleInput2">Contact Number</label>
                    <input onChange={this.handlePhoneChange} type="tel" className="form-control" name="phone" id="formGroupExampleInput2" placeholder="Enter Phone Number" required/>
                    <div className="invalid-feedback">
                      Please provide a phone number.
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-form-label" htmlFor="formGroupExampleInput2">Password</label>
                    <input type="password" className="form-control" name="password" id="formGroupExampleInput2" placeholder="Choose Password" required/>
                  <p style={{color:"red"}}>{this.state.error2}</p>
                    <div className="invalid-feedback">{this.state.error2}</div>
                  </div>
                  <div className="form-group">
                    <label className="col-form-label" htmlFor="formGroupExampleInput2">Confirm Password</label>
                    <input type="password" className="form-control" name="password2" id="formGroupExampleInput2" placeholder="Enter Password Again" required/>
                  <p style={{color:"red"}}>{this.state.error}</p> *
                    <div className="invalid-feedback">{this.state.error}</div>
                  </div>
                  <div className="form-group">
                    <label className="col-form-label" htmlFor="formGroupExampleInput2">Location</label>
                    <input onChange={this.handleLocationChange} type="text" className="form-control" name="location" id="formGroupExampleInput2" placeholder="Enter Town Name" required/>
                    <div className="invalid-feedback">
                      Please provide a location
                    </div>
                  </div><br/>
                  <div className="text-center">
                    <p>NOTE: The information on this form will be used as a contact reference for anyone wanting to buy from you. <br />Please, put correct information about yourself</p>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary adding">Sign Up</button>
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
