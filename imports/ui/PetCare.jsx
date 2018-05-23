import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import Navbar from '/imports/ui/Navbar.jsx';
import Footer from '/imports/ui/Footer.jsx';
import { withTracker } from 'meteor/react-meteor-data';
import Items from '../api/advertiser/collections.js';
import Details from '../api/seller/collections.js';
import {UserFiles} from '../api/upload/collections.js';
import FileUploadComponent from './uploadFile.jsx';

export class PetCare extends Component {

  goToProfile = () => {
    route.go('/profile')
  }

  getAllItems=()=>{
    const items = this.props.items;
    return items.map((item) => {
      const trial = item.imageId;
      console.log(trial);
      const link = UserFiles.findOne({_id: trial}).link();
      const profile = item.owner;
      const sellerName = Details.findOne({name: profile})
      return (
        <div key = {item._id} className="card border-primary">
        <img className="card-img-top" src={link} style={{width: 100 + "%",height:200 + "px"}} alt="Card image cap"/>
        <div className="card-body">
            <h5 className="card-title"><strong>Product Name:</strong> {item.itemName}</h5>
            <h6 className="card-subtitle mb-2"><strong>Condition:</strong> {item.itemCondition}</h6>
            <h6 className="card-subtitle mb-2"><strong>Price:</strong>K {item.price}</h6>
            <h6 className="card-subtitle mb-2"><strong>Description:</strong> {item.description}</h6>
          </div>
          <div className="card-footer text-center poster">
            <h5>Posted by {profile}</h5>
          </div>
          <div className="text-center">
            <button className="btn btn-primary btn-block adding" onClick={this.goToProfile}>Buy Item</button>
          </div>
        </div>
      )
    }
  )
}

  render() {
    if (this.props.isDataReady) {
      return (
        <div>
          <Navbar petCare={'active'}/>
          <br />
          <p className="h1" style={{ textAlign: "center" }}>PAMPER YOUR PET</p><br />
          <h4 className="volunteer"> Explore these different pet supplies sold by your favorite brands</h4>
          <br />
          <br />
          <div className="container">
            <div className="card-columns">
              {this.getAllItems()}
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
  Meteor.subscribe('files.all');
  Meteor.subscribe('details');
  Meteor.subscribe('items')
  let isDataReady = Meteor.subscribe('files.all');
  return{
    items : Items.find().fetch(),
    files : UserFiles.find({}, {sort: {name: 1}}).fetch(),
    details : Details.find().fetch(),
    isDataReady: isDataReady.ready(),
  }
})(PetCare);
