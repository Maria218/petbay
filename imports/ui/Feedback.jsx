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

  goToProfile = () => {
    route.go('/profile')
  }

  getAllMessages=()=>{
    const messages = this.props.messages;
    return messages.map((message) => {
        <div key = {message._id} className="card border-primary">
          <div className="card-body">
            <h5 className="card-title"><strong>Name:</strong> {message.name}</h5>
            <h6 className="card-subtitle mb-2"><strong>Age:</strong> {message.email}</h6>
            <h6 className="card-subtitle mb-2"><strong>Gender:</strong> {message.desc}</h6>
          </div>
          <div className="card-footer">
            <small className="text-muted">Posted 3 mins ago</small>
          </div>
        </div>
    }
  )
  }

  render() {
    if (this.props.isDataReady) {
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
    messages : Messages.find().fetch(),
    files : UserFiles.find({}, {sort: {name: 1}}).fetch(),
    isDataReady: isDataReady.ready(),
  }
})(Feedback);
