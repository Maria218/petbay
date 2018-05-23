import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import { withTracker } from 'meteor/react-meteor-data';
import Navbar from '/imports/ui/Navbar.jsx';
import Footer from '/imports/ui/Footer.jsx';
import Details from '../api/seller/collections.js';
import { Mongo } from 'meteor/mongo';

export class SellerProfile extends Component{

  goBack = () => {
    window.history.back();
  }
  
  getAllDetails=()=>{
    const details = this.props.details;
    return details.map((detail) => {
      return (
        <div key = {detail._id} className="card border-primary">
          <div className="card-body">
            <h5 className="card-title"><strong>Name:</strong> {detail.name}</h5>
            <h6 className="card-subtitle mb-2"><strong>Email:</strong> {detail.email}</h6>
            <h6 className="card-subtitle mb-2"><strong>Phone Number:</strong> {detail.phone}</h6>
            <h6 className="card-subtitle mb-2"><strong>Location:</strong> {detail.location}</h6>
          </div>
        </div>
      )
    }
  )
  }

  render(){
    if (this.props.isDataReady) {
      return(
        <div>
          <Navbar pets={'active'}/>
          <br />
          <p className="h1" style={{textAlign: "center"}}>SELLER PROFILE</p><br />
          <br />
          <div className="text-center">
            <button className="btn btn-primary adding" onClick={this.goBack}>Back</button>
          </div>
          <br />
          <br />
          <div className ="container">
            <div className="card-columns">
              {this.getAllDetails()}
            </div>
          </div>
          <br /><br />
          <Footer />
        </div>
      )
    }
    else {
      return (
        <div className="text-center">
          <br />
          <br />
          <br />
          <br />
          <img src="images/loader.svg" className="App-logo" alt="logo" />
          <h3 className="loading">Please wait a moment</h3>
        </div>
      )
    }
  }
  }

  export default withTracker(() =>{
    Meteor.subscribe('details');
    let isDataReady = Meteor.subscribe('details');
    return{
      details : Details.find({}).fetch(),
      isDataReady: isDataReady.ready(),
    }
  })(SellerProfile);
