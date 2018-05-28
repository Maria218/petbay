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

export default class AllUsers extends Component {

  getAllUsers=()=>{
    // const currentUserId = Meteor.user().profile.name
    // return [
    //   Meteor.users.find( {}, { fields: { "emails.address": 1 } } )
    // ]
  //
    return (
      <div className="card-body">
      <div style={{backgroundColor:'',height: 5 +'em'}}>
         <h5 className="card-title"><strong>Sender:</strong> {Meteor.user().profile.name}</h5>

      </div>
      <div style={{backgroundColor:'',height: 5 +'em'}}>
         <h6 className="card-subtitle mb-2"><strong>Email:</strong> {Meteor.user().emails[0].address}</h6>
      </div>
       </div>
    )
  }

  render() {
      console.log("Trying out")
      return (
        <div>
          <br />
          <p className="h1" style={{ textAlign: "center" }}>Users</p><br />
          <br />
          <br />
          <div className="container">
            <div className="card-columns">
              {this.getAllUsers()}
            </div>
          </div>
          <br /><br />
        </div>
      )
    // else {
    //   return (
    //     <div className="text-center">
    //       <br />
    //       <br />
    //       <br />
    //       <br />
    //       <img src="images/loader.svg" className="App-logo" alt="logo" />
    //       <h3 className="loading">Please wait a moment</h3>
    //     </div>
    //   )
    // }
  }
}

// export default withTracker(() =>{
//   let isDataReady = Meteor.subscribe('files.all');
//   return{
//     isDataReady: isDataReady.ready(),
//   }
// })(AllUsers);
