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
      view:"current"
    }
  }
  sendMessage =(e) =>{
    e.preventDefault();
    const message = {
      name:this.state.name,
      email:this.state.email,
      desc:this.state.desc,
      createdBy: Meteor.user().profile.name,
      createdAt: new Date(),
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

  renderTouch=()=>{
    this.setState({
      view:'getInTouch'
    })
  }

  renderContacting=()=>{
    this.setState({
      view:'contacting'
    })
  }

  renderThisComponent = ()=>{

      switch(this.state.view) {
          case 'contacting':
              return <div className="col-md-5 col-sm-12 row justify-content-center" id="contacting">
                  <div className="stray">
                    <h1 className="volunteer" style={{paddingTop:10+"px"}}>Contact Us</h1>
                    <div className="" style={{fontSize:20+"px", paddingLeft:15+"px", paddingRight:15+"px", textAlign: "justify"}}>
                      <p>We would love to hear from you, contact us using the details provided or click <a href="" data-toggle="modal" data-target="#exampleModal">here</a>  to send us a direct message on any issue related to this site</p>
                    </div>
                  </div>
              </div>;
              break;
          case 'getInTouch':
              return <div className="col-md-5 col-sm-12 row justify-content-center" id="getInTouch">
                <div className="">
                  <img src="/images/oet.jpeg" className="dog"/>
                   <div className="box" style={{fontWeight:"bold",paddingLeft:10+"px"}}>
                     <h1 className="ti">Get In Touch</h1>
                     <h6 className="dets">Pet Connections</h6>
                     <h6 className="dets"><i className="fa fa-home"></i>|20 Sianjalika Road, Woodlands,Lusaka, Zambia</h6>
                     <h6 className="dets"><i className="fa fa-envelope"></i>| P.O box 38408</h6>
                     <h6 className="dets"><i className="fa fa-envelope"></i>| damianochintala@gmail.com</h6>
                     <h6 className="dets"><i className="fa fa-phone"></i>|+260 95 4041449</h6>
                     </div>
                </div>
              </div>;
              break;
          default:
              return <div style={{}}></div>;
      }
  }

  render(){
    return(
      <div>
        <Navbar contact={'active'}/>
        <br />
        <br />

        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center">
            <li class="page-item"><a onClick={this.renderTouch} class="page-link">Get in Touch</a></li>
            <li class="page-item"><a onClick={this.renderContacting} class="page-link">Contact Us</a></li>
          </ul>
        </nav>

        <div className="container">
          <div className="row justify-content-center">
            {this.renderThisComponent()}

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
        <button type="button" className="btn btn-danger adding" data-dismiss="modal" onClick = {this.sendMessage}>Send</button>
        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
      </div>
        </form>
        <br/>
        </div>
      </div>
    </div>
  </div>
  {/* </div> */}
  </div>
  </div>
  <br/>

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
