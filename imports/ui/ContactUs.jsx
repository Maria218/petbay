import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import route from '/imports/routing/router.js';
import Navbar from '/imports/ui/Navbar.jsx';
import Footer from '/imports/ui/Footer.jsx';
import {Messages} from '../api/messages/collections.js';


export class ContactUs extends Component {

  constructor(props){
    super(props);
    this.state = {
      name :"",
      email :"",
      message :"",

    }
  }
  sendMessage =(e) =>{
    e.preventDefault();
    const currentUserId = Meteor.userId()
    const message = {
      name:this.state.name,
      email:this.state.email,
      message:this.state.message,
      createdAt: new Date(),
      createdBy:currentUserId
    }
    Meteor.call('messages.create',message);
    route.go('/contactus');
  }

  render(){
    return(
      <div>
        <Navbar contact={'active'}/>
        <br />
        <br />

        <div className="container">
        <div className="row justify-content-center">
        <div className="col-md-4">
        <div className="text-center">
        <h1 className="volunteer">Contact Us</h1>
        <div className="text-center">
          <p>We would love to hear from you, <a href="" data-toggle="modal" data-target="#exampleModal">send us</a> feed back on any issue related to this site</p>
        </div>
        </div>

        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Enter Your Message</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
            <form onSubmit = {this.sendMessage} className="needs-validation">
            <div className="form-group">
                <input type="text" className="form-control" name="name" id="formGroupExampleInput" placeholder="Enter Name" required />
            </div>
            <div className="form-group">
                <input type="email" className="form-control" name="email" id="formGroupExampleInput2" placeholder="Enter Email Address" required/>
            </div>
            <div className="form-group">
              <label className="volunteer" for="exampleFormControlTextarea1">Your Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" name="message" placeholder="Enter Your Message" rows="3"></textarea>
            </div><br/>
            <div className="text-center">
            <button type="submit" className="btn btn-primary btn-lg contact-btn adding">Send</button>
            </div>
        </form><br/>
        </div>
        <div className="modal-footer">
        <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-danger" data-dismiss="modal" onClick = {this.sendMessage}>Yes, delete</button>
      </div>
          </div>
        </div>
      </div>

      </div>
      </div>
      </div><br/>

        <Footer />
      </div>
    )
  }
}

export default withTracker(() =>{
  Meteor.subscribe('messages');
  Meteor.subscribe('items');
  let isDataReady = Meteor.subscribe('files.all');
  const currentUserId = Meteor.userId();
  return{
    pets : Pets.find({ createdBy: currentUserId }).fetch(),
    messages : Messages.find().fetch(),
    items : Items.find({ createdBy: currentUserId }).fetch(),
    files : UserFiles.find({createdBy: currentUserId}, {sort: {name: 1}}).fetch(),
    isDataReady: isDataReady.ready(),
  }

})(ContactUs);
