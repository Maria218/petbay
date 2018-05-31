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
// import moment from 'moment';

export class AllUsers extends Component {

  deleteProfile = (e, id) => {
    Meteor.call('users.delete', id);
  }

  renderAllUsers(users){
	// const users  = Meteor.users.find({}, {sort: {createdAt: 1}}).fetch();
  // console.log(users[0].createdAt);
	return users.map((user) => {
    const createdDate = moment(user.createdAt).format('Do MMM, YYYY');
    const createdTime = moment(user.createdAt).format('HH:mm a');
    return (
      <div key = {user._id} className="card border-primary">
        <div className="card-body">
          <h5 className="card-title"><strong>Name:</strong> {user.profile.name}</h5>
          <h6 className="card-subtitle mb-2"><strong>Email:</strong> {user.emails[0].address}</h6>
          <h6 className="card-subtitle mb-2"><strong>Number:</strong> {user.profile.phone}</h6>
          <h6 className="card-subtitle mb-2"><strong>Date Created:</strong> {createdDate}</h6>
          <h6 className="card-subtitle mb-2"><strong>Time Created:</strong> {createdTime}</h6>
          <br />

          <a href="" className="btn btn-primary edit btn-sm" onClick = {this.editProfile}>Edit <i className="fa fa-edit"></i></a> <a href="" className="btn btn-danger delete btn-sm" data-toggle="modal" data-target="#exampleModal" onClick = {this.warning}>Delete <i className="fa fa-trash"></i></a>

          <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Delete Pet</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  Are you sure you want to delete this file?
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-danger" data-dismiss="modal" onClick = {e => this.deleteProfile(e, pet._id)}>Yes, delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
	})
}

  render() {
    const {users, usersReady} = this.props;
    if (usersReady) {
      return (
        <div>
          <br />
          <p className="h1" style={{ textAlign: "center" }}>Users</p><br />
          <br />
          <br />
          <div className ="container">
            <div className="card-columns">
              {this.renderAllUsers(users)}
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
  const usersHandle = Meteor.subscribe('users');
  return{
    users : Meteor.users.find({}).fetch(),
    usersReady: usersHandle.ready(),
  }
})(AllUsers);
