import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';
import {withTracker} from 'meteor/react-meteor-data';
import route from '/imports/routing/router.js';
import Messages from '../api/messages/collections.js';
import Pets from '../api/profiles/collections.js';
import Footer from '/imports/ui/Footer.jsx';
import Navbar from '/imports/ui/Navbar.jsx';
import Items from '../api/advertiser/collections.js';
import {UserFiles} from '../api/upload/collections.js';
import Uploads from '/imports/ui/Upload.jsx';
import Uploads2 from '/imports/ui/Upload2.jsx';
import Dashboard2 from '/imports/ui/Dashboard2.jsx';
import FileUploadComponent from './uploadFile.jsx';
import UserPets from '/imports/ui/UserPets.jsx';
import UserItems from '/imports/ui/UserItems.jsx';
import $ from 'jquery';

export class Dashboard extends Component {

constructor(props){
    super(props);
    this.state={
      desc:"",
      view:"current"

    }
  }

renderUserPets=()=>{
  this.setState({
    view:'userPets'
  })
}

renderUserItems=()=>{
  this.setState({
    view:'userItems'
  })
}


renderThisComponent = ()=>{

    switch(this.state.view) {
        case 'userPets':
            return <UserPets />;
            break;
        case 'userItems':
            return <UserItems />;
            break;
        default:
            return <div style={{}}></div>;
    }
}


  goToLogin = () => {
    route.go("/login")
  }

  navChange = () => {
    if (Meteor.userId()) {
      $('#loggedOut').hide();
      $('#loggedIn').show();
      console.log("you're now logged in")
    }
    else {
      $('#loggedOut').show();
      $('#loggedIn').hide();
      console.log("you're now logged out")
    }
  }

  logUserOut = (e) => {
    e.preventDefault();
    Meteor.logout(err => {
      this.navChange();
    });
    route.go("/login");
  }

  goToUpload = () => {
    route.go('/upload')
  }

  goToUpload2 = () => {
    route.go('/upload2')
  }

  welcome = () => {
    if (Meteor.user()){
      const name = Meteor.user().profile.name
      return(name);
    }
  }

  sendMessage =(e) =>{
    e.preventDefault();
    const message = {
      desc:this.state.desc,
      createdBy: Meteor.user().profile.name,
      createdAt: new Date(),
    }
    Meteor.call('messages.create',message);
    alert("Message Sent");
    console.log(message);
    route.go('/dashboard');
  }

  handleDescChange = (e) => {
    this.setState({
      desc: e.target.value
    })
  }

  render(){
    if (Meteor.user()) {
      if (this.props.isDataReady) {
        if (Meteor.user().emails[0].address === "admin@master.com") {
          route.go('/dashboard2')
        }
        else {
          return(
            <div>
              <nav className="navbar navbar-expand-lg navbar-light">
                <span className="navbar-brand mb-0 h1" href="#"><img src="images/logo.png" alt="" />Pet Connections</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pets</a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <a className="dropdown-item" href="/dogs">Dogs</a>
                      <a className="dropdown-item" href="/cats">Cats</a>
                      <a className="dropdown-item" href="/birds">Birds</a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/petcare">Pet Supplies<span className="sr-only">(current)</span></a>
                  </li>
                    <li className="nav-item">
                      <a className="nav-link" href="" onClick={this.logUserOut}>Log Out</a>
                    </li>
                  </ul>
                </div>
              </nav>
              <div className="dash">
                <br />
                <br />
                <button className="btn btn-outline-primary hello2" style={{fontFamily: "Courgette", fontSize: 20 + "px", color: "black"}} data-toggle="modal" data-target="#exampleModal">Contact Admin</button>

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


                <h3 className="hello"  style={{fontFamily: "Courgette", fontSize: 37 + "px"}}>Welcome, {this.welcome()}</h3>
              </div><br />
              <h2 className="report">Upload Your Merchandise</h2>
              <br />
              <div className="text-center">
                <button type="button" className="btn btn-primary btn-lg adding" onClick={this.goToUpload}>Add A Pet</button> <button type="button" className="btn btn-primary btn-lg adding" onClick={this.goToUpload2}>Add Store Item</button>
              </div>
              <br />
              <br />
            <br />
            <br />
            <hr />
            <br />
            <br />
            <div className="justify-content-center">
            <div className="text-center" style={{fontFamily: "Courgette"}}>
              <h2>Your Dashboard</h2>
            </div>
            <br />
            <br />
            <div className=" container text-center">
              <button className="btn btn-primary btn-lg adding" onClick={this.renderUserPets}>Your Pets</button> <button className="btn btn-primary btn-lg adding" onClick={this.renderUserItems}>Your Items</button>
            </div>
            </div>
            <br />
            <br />
            <div className="container">
              <div  className="from-props">
                {this.renderThisComponent()}
              </div>
            </div>
          </div>
          );
        }

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
    else {
      return (
        <div>
          <Navbar />
          <div className="text-center" style={{marginTop: 5 + "%", marginBottom: 5 + "%", fontFamily: "Courgette"}}>
            <h1><i className="fa fa-paw"></i> Please, <a href="" onClick={this.goToLogin}> login here </a> to continue <i className="fa fa-paw"></i></h1>
          </div>
          <Footer />
        </div>
      )
    }
  }
}

export default withTracker(() =>{
  Meteor.subscribe('pets');
  Meteor.subscribe('items');
  let isDataReady = Meteor.subscribe('files.all');
  const currentUserId = Meteor.userId();
  return{
    pets : Pets.find({ createdBy: currentUserId}).fetch(),
    items : Items.find({ createdBy: currentUserId }).fetch(),
    files : UserFiles.find({createdBy: currentUserId}, {sort: {name: 1}}).fetch(),
    isDataReady: isDataReady.ready(),
  }

})(Dashboard);
