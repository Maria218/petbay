import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import Navbar from '/imports/ui/Navbar.jsx';
import Footer from '/imports/ui/Footer.jsx';

export default class Homing extends Component {

  constructor(props){
    super(props);
    this.state = {
      error :"",
      error2 :""
    }
  }
  getUserData =(e) =>{
    e.preventDefault();
    const {target} = e;
    const name = target.fullname.value;
    const email = target.email.value;
    const phoneNumber = target.phone.value;
    const password = target.password.value;
    const password2 = target.password2.value;

   // console.log(name,email,password,password2);
   if(password.trim!==password2.trim ||password.length<=6
   ){
     this.setState({
       error: "Passwords do not match"
     })
     return;
   }
   if(password.length <=6
   ){
     this.setState({
       error2: "Password length should be more than 6 letters"
     })
     return;
   }
   const user = {
     email,
     password,
     phone,
     profile: {
       name,
     },
     createdAt: new Date()
   }
   Accounts.createUser(user,error=>{
     error ? console.log(error.reason) : console.log("Account Created Succesfully")
   })      


  }

  render(){
    return(
      <div>
        <Navbar /><br/>
        <div className="row justify-content-center">
        <div className="col-md-4">
        <div className="text-center">
        <h4>Sign Up To Continue</h4>
        </div>
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
              <div className="text-center">
              <button type="submit" className="btn btn-primary">Sign Up</button>
              </div>
          </form>
          <div className="text-center">
              <p>By Signing Up, You agree to our terms and conditions</p>
          </div>
      </div>
      </div><br/>
        <Footer />
      </div>
    )
  }
}
