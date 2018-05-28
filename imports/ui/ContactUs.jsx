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

   handlePhoneChange = (e) => {
    this.setState({
      phone: e.target.value
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
        <div className="col-md-7">
        <img src="/images/oet.jpeg" className="dog"/>
        <div className="box">
          <h1 className="ti">Get In Touch</h1>
          <h6 className="dets">Pet Connections</h6>
          <h6 className="dets"><i className="fa fa-home"></i>|20 Sianjalika Road, Woodlands,Lusaka, Zambia</h6>
          <h6 className="dets"><i className="fa fa-envelope"></i>| P.O box 38408</h6>
          <h6 className="dets"><i className="fa fa-envelope"></i>| damianochitala@gmail.com</h6>
          <h6 className="dets"><i className="fa fa-phone"></i>|+260 95 4041449</h6>
          </div>
          </div>
      <div className="col-md-5">
        <div className="text-center">
        <h1 className="volunteer">Contact Us</h1>
        <div className="text-center">
          <p>We would love to hear from you, contact us using the details provided or click <a href="" data-toggle="modal" data-target="#exampleModal">here</a>  to send us a direct message on any issue related to this site</p>
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
                <input type="text" className="form-control" onChange={this.handleNameChange} name="name" id="formGroupExampleInput" placeholder="Your Name" required />
            </div>
            <div className="form-group">
                <input type="email" className="form-control" name="email" onChange={this.handleEmailChange} id="formGroupExampleInput2" placeholder="Your Email Address" required/>
            </div>
            <div className="form-group">
                <input type="tel" className="form-control" name="phone" onChange={this.handlePhoneChange} id="formGroupExampleInput2" placeholder="Your Phone Number: Optional"/>
            </div>
            <div className="form-group">
                <textarea className="form-control" id="exampleFormControlTextarea1" name="desc" onChange={this.handleDescChange}placeholder="Message" rows="3"></textarea>
            </div><br/>
        <div className="modal-footer">
        <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-danger" data-dismiss="modal" onClick = {this.sendMessage}>Send</button>
      </div>
        </form>
        <br/>
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
  const currentUserId = Meteor.userId();
  return{
    messages : Messages.find().fetch(),
  }
})(ContactUs);
