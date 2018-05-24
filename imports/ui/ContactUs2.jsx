import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { Mongo } from 'meteor/mongo';
import route from '/imports/routing/router.js';
import { withTracker } from 'meteor/react-meteor-data';
import Navbar from '/imports/ui/Navbar.jsx';
import Footer from '/imports/ui/Footer.jsx';
import Messages from '../api/messages/collections.js';

export class ContactUs extends Component {
  constructor(props){
    super(props);
    this.state = {
      name:'',
      email:'',
      messg:'',
    }
  }

  sendMessage = (e) => {
    e.preventDefault();
    const message = {
      name: this.state.name,
      email: this.state.email,
      messg: this.state.messg,
    }
    Meteor.call('messages.create',message);
    console.log('pet created')
    route.go('/dashboard');
  }

  handleNameChange = (e) => {
    this.setState({
      petName: e.target.value
    })
  }

  handleEmailChange = (e) => {
    this.setState({
      age: e.target.value
    })
  }

  handleMessgChange = (e) => {
    this.setState({
      price: e.target.value
    })
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
    return (
      <div>
        <Navbar />
        <br />
        <br />

        <div className="text-center">
          <h2>Contact Us</h2>
        </div>
        <div className="text-center">
          <h3>Connect with us by filling in the form below</h3>
        </div>
        <br />
        <br />

        <div className="container">
          <div className="justify-content-center">
            <div className="col-md-6">
              <form onSubmit={this.sendMessage} className="needs-validation" novalidate>
                <div className="form-group">
                  <input onChange={this.handleNameChange} type="text" className="form-control" name="name" id="validationCustom01" placeholder="Your Name" required />
                  <div className="valid-feedback">
                    Looks good!
                  </div>
                  <div className="invalid-feedback">
                    Please type your name
                  </div>
                </div>
                <div className="form-group">
                  <input onChange={this.handleEmailChange} type="text" className="form-control" id="validationCustom02" placeholder="Your email address" name="email" required />
                  <div className="valid-feedback">
                    Looks good!
                  </div>
                  <div className="invalid-feedback">
                    Please type your email
                  </div>
                </div>
                <div className="form-group">
                  <label for="exampleFormControlTextarea1">Your Message</label>
                  <textarea onChange={this.handleMessgChange} className="form-control" name="messg" id="exampleFormControlTextarea1" rows="3"></textarea>
                  <div className="valid-feedback">
                    Looks good!
                  </div>
                  <div className="invalid-feedback">
                    Please type out your message
                  </div>
                </div>
                <div className="text-center">
                  <button className="btn btn-primary adding" type="submit">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className ="container">
          <div className="card-columns">
            {this.getAllMessages()}
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}

export default withTracker(() =>{
  Meteor.subscribe('messages');
  return{
    messages : Messages.find().fetch(),
  }
})(ContactUs);
