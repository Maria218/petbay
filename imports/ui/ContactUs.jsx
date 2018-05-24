import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { Mongo } from 'meteor/mongo';
import {withTracker} from 'meteor/react-meteor-data';
import route from '/imports/routing/router.js';
import Navbar from '/imports/ui/Navbar.jsx';
import Footer from '/imports/ui/Footer.jsx';
import Messages from '../api/messages/collections.js';
import Pets from '../api/profiles/collections.js';

export class ContactUs extends Component {
  constructor(props){
    super(props);
    this.state = {
      name:"",
      email:"",
      desc:"",
    }
  }
  sendMessage =(e) =>{
    e.preventDefault();
    const currentUserId = Meteor.userId()
    const message = {
      name:this.state.name,
      email:this.state.email,
      desc:this.state.desc,
    }
    Meteor.call('messages.create',message);
    console.log("Message sent");
    console.log(message);
    route.go('/contactus');
  }

  // getAllMessages=()=>{
  //   const messages = this.props.messages;
  //   return messages.map((message) => {
  //       <div key = {message._id} className="card border-primary">
  //         <div className="card-body">
  //           <h5 className="card-title"><strong>Name:</strong> {message.name}</h5>
  //           <h6 className="card-subtitle mb-2"><strong>Age:</strong> {message.email}</h6>
  //           <h6 className="card-subtitle mb-2"><strong>Gender:</strong> {message.desc}</h6>
  //         </div>
  //         <div className="card-footer">
  //           <small className="text-muted">Posted 3 mins ago</small>
  //         </div>
  //       </div>
  //   }
  // )
  // }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  handleDescChange = (e) => {
    this.setState({
      desc: e.target.value
    })
  }

  render(){
    return(
      <div>
        <Navbar contact={'active'}/>
        <br />
        <br />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="text-center">
                <h1 className="volunteer">Contact Us</h1>
                <div className="text-center">
                  <p>We would love to hear from you, send us feed back on any issue related to this site</p>
                </div>
              </div>
              <form onSubmit = {this.sendMessage} className="needs-validation">
                <div className="form-group">
                  <input onChange={this.handleNameChange} type="text" className="form-control" name="name" id="formGroupExampleInput" maxlength="20" placeholder="Enter Name" required />
                </div>
                <div className="form-group">
                  <input onChange={this.handleEmailChange} type="email" className="form-control" name="email" id="formGroupExampleInput2" placeholder="Enter Email Address" required/>
                </div>
                <div className="form-group">
                  <label className="volunteer" for="exampleFormControlTextarea1">Your Message</label>
                  <textarea onChange={this.handleDescChange} className="form-control" id="exampleFormControlTextarea1" name="desc" maxlength="200" placeholder="Enter Your Message" rows="3"></textarea>
                </div><br/>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary btn-lg contact-btn adding">Send</button>
                </div>
              </form><br/>
            </div>
          </div>
        </div><br/>

        {/* <div className ="container">
          <div className="card-columns">
            {this.getAllMessages()}
          </div>
        </div> */}

        <Footer />
      </div>
    )
  }
}

export default withTracker(() =>{
  Meteor.subscribe('messages');
  const currentUserId = Meteor.userId();
  return{
    messages : Messages.find().fetch(),
  }
})(ContactUs);
