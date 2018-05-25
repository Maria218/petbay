import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import Navbar from '/imports/ui/Navbar.jsx';
import Footer from '/imports/ui/Footer.jsx';
import { withTracker } from 'meteor/react-meteor-data';
import Items from '../api/advertiser/collections.js';
import {UserFiles} from '../api/upload/collections.js';
import FileUploadComponent from './uploadFile.jsx';

export class AllItems extends Component {

  goToProfile = () => {
    route.go('/profile')
  }

    deleteItem = (e, id) => {
    Meteor.call('items.delete', id);
  }

     getAllItems=()=>{
    const items = this.props.items;
    return items.map((item) => {
      const trial = item.imageId;
      console.log(trial);
      const link = UserFiles.findOne({_id: trial}).link();
      return (
        <div key = {item._id} className="card border-primary">
        <img className="card-img-top" src={link} style={{width: 100 + "%",height:200 + "px"}} alt="Card image cap"/>
        <div className="card-body">
            <h5 className="card-title"><strong>Product Name:</strong> {item.itemName}</h5>
            <h6 className="card-subtitle mb-2"><strong>Condition:</strong> {item.itemCondition}</h6>
            <h6 className="card-subtitle mb-2"><strong>Price:</strong>K {item.price}</h6>
            <h6 className="card-subtitle mb-2"><strong>Description:</strong> {item.description}</h6>
            <a href="" className="btn btn-primary edit" onClick = {e => this.editItem(e, item._id)}>Edit <i className="fa fa-edit"></i></a> <a href="" className="btn btn-danger delete" data-toggle="modal" data-target="#exampleModal" onClick = {this.warning}>Delete <i className="fa fa-trash"></i></a>

            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Delete Item</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    Are you sure you want to delete this file?
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-danger" data-dismiss="modal" onClick = {e => this.deleteItem(e, item._id)}>Yes, delete</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="card-footer poster">
            <h5>Posted by: {item.owner}</h5>
            <h5>Email: {item.email}</h5>
            <h5>Location: {item.residence}</h5>
            <h5>Number: {item.number}</h5>
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
          <br />
          <p className="h1" style={{ textAlign: "center" }}>Store Items</p><br />
          <br />
          <br />
          <div className="container">
            <div className="card-columns">
              {this.getAllItems()}
            </div>
          </div>
          <br /><br />
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
  Meteor.subscribe('items')
  let isDataReady = Meteor.subscribe('files.all');
  return{
    items : Items.find().fetch(),
    files : UserFiles.find({}, {sort: {name: 1}}).fetch(),
    isDataReady: isDataReady.ready(),
  }
})(AllItems);
