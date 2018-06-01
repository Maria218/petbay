import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import Navbar from '/imports/ui/Navbar.jsx';
import Footer from '/imports/ui/Footer.jsx';
import { withTracker } from 'meteor/react-meteor-data';
import Messages from '../api/messages/collections.js';
import {UserFiles} from '../api/upload/collections.js';
import FileUploadComponent from './uploadFile.jsx';

export class Feedback extends Component {


  deleteMessage = (e, id) => {
    Meteor.call('messages.delete', id);
  }


  getAllMessages=()=>{
    const messages = this.props.messages;
    // console.log(JSON.stringify(messages))
     return messages.map((message) => {
      return (
        <div key = {message._id} className="card border-primary">
         <div className="card-body">
         <div style={{backgroundColor:'',height: 5 +'em'}}>
            <h5 className="card-title"><strong>Sender:</strong> {message.name}</h5>

         </div>
         <div style={{backgroundColor:'',height: 5 +'em'}}>
            <h6 className="card-subtitle mb-2"><strong>Email:</strong> {message.email}</h6>
         </div>
         <div>
            <h6 className="card-subtitle mb-2"><strong>Message:</strong> {message.desc}</h6>
         </div>
         <div>
            <h6 className="card-subtitle mb-2"><strong>By:</strong> {message.createdBy}</h6>
         </div>
           <a href="" className="btn btn-danger delete" data-toggle="modal" data-target="#exampleModal" onClick = {this.warning}>Delete <i className="fa fa-trash"></i></a>
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
                    <button type="button" className="btn btn-danger" data-dismiss="modal" onClick = {e => this.deleteMessage(e, message._id)}>Yes, delete</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        )
    }
  )
  }

  render() {
  console.log(this.getAllMessages() + " This data is ready")

    if (this.props.isDataReady) {
      console.log("Trying out")
      return (
        <div>
          <br />
          <p className="h1" style={{ textAlign: "center" }}>Messages</p><br />
          <br />
          <br />
          <div className="container">
            <div className="card-columns">
              {this.getAllMessages()}
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
  Meteor.subscribe('messages');
  let isDataReady = Meteor.subscribe('files.all');
  return{
    messages : Messages.find({}, {sort: {createdAt: -1}}).fetch(),
    files : UserFiles.find({}, {sort: {name: 1}}).fetch(),
    isDataReady: isDataReady.ready(),
  }
})(Feedback);
