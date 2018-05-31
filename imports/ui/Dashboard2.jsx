import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';
import {withTracker} from 'meteor/react-meteor-data';
import route from '/imports/routing/router.js';
import Pets from '../api/profiles/collections.js';
import Footer from '/imports/ui/Footer.jsx';
import AllPets from '/imports/ui/AllPets.jsx';
import AllUsers from '/imports/ui/AllUsers.jsx';
import PaidPets from '/imports/ui/PaidPets.jsx';
import PendingPets from '/imports/ui/PendingPets.jsx';
import Messages from '../api/messages/collections.js';
import AllItems from '/imports/ui/AllItems.jsx';
import Feedback from '/imports/ui/Feedback.jsx';
import PaidItems from '/imports/ui/PaidItems.jsx';
import PendingItems from '/imports/ui/PendingItems.jsx';
import Navbar from '/imports/ui/Navbar.jsx';
import Items from '../api/advertiser/collections.js';
import {UserFiles} from '../api/upload/collections.js';
import FileUploadComponent from './uploadFile.jsx';
import $ from 'jquery';

export class Dashboard2 extends Component {

    constructor(props){
    super(props);
    this.state={
      view:"current"

    }
  }



renderAllPets=()=>{
  this.setState({
    view:'allPets'
  })
}

renderUsers=()=>{
  this.setState({
    view:'users'
  })
}

renderUserFeedback=()=>{
  this.setState({
    view:'feedback'
  })
}

renderAllItems=()=>{
  this.setState({
    view:'allItems'
  })
}

renderPaidItems=()=>{
  this.setState({
    view:'PaidItems'
  })
}

renderUnPaidItems=()=>{
  this.setState({
    view:'UnPaidItems'
  })
}

renderPaidPets=()=>{
  this.setState({
    view:'PaidPets'
  })
}

renderUnPaidPets=()=>{
  this.setState({
    view:'UnPaidPets'
  })
}



renderComponent = ()=>{

    switch(this.state.view) {
        case 'users':
            return <AllUsers />;
            break;
        case 'feedback':
            return <Feedback />;
            break;
        case 'allPets':
            return <AllPets />;
            break;
        case 'PaidPets':
            return <PaidPets />;
            break;
        case 'UnPaidPets':
            return <PendingPets />;
            break;
        case 'allItems':
            return <AllItems />;
            break;
        case 'PaidItems':
            return <PaidItems />;
            break;
        case 'UnPaidItems':
            return <PendingItems />;
            break;
        default:
            return <div></div>;
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

  render(){
    if (Meteor.user()) {
      if (this.props.isDataReady) {
        if (Meteor.user().emails[0].address === "admin@master.com") {
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
                <h3 className="hello"  style={{fontFamily: "Courgette", fontSize: 37 + "px"}}>Welcome, {this.welcome()}</h3>
              </div><br />
              <h2 className="report">Upload Your Merchandise</h2>
              <br />
              <div className="text-center">
                <button type="button" className="btn btn-primary btn-lg adding" onClick={this.goToUpload}>Add A Pet</button> <button type="button" className="btn btn-primary btn-lg adding" onClick={this.goToUpload2}>Add Store Item</button>
              </div>
              <br />
              <br />
              <hr />
              <br />
              <br />
              <div className="text-center" style={{fontFamily: "Courgette"}}>
                <h2>Admin Dashboard</h2>
              </div>
              <br />
              <br />
              <div className="dashTable container btn-group">
                <button className="btn btn-primary btn-lg adding " onClick={this.renderUsers}>Users</button>
                <button className="btn btn-primary btn-lg adding " onClick={this.renderUserFeedback}>User Feedback</button>
                <button className="btn btn-primary btn-lg adding " onClick={this.renderAllPets}>All Pets</button>
                <button className="btn btn-primary btn-lg adding " onClick={this.renderPaidPets}>Pets Paid</button>
                <button className="btn btn-primary btn-lg adding " onClick={this.renderUnPaidPets}>Pets Pending</button>
                <button className="btn btn-primary btn-lg adding " onClick={this.renderAllItems}>All Items</button>
                <button className="btn btn-primary btn-lg adding " onClick={this.renderPaidItems}>Items Paid</button>
                <button className="btn btn-primary btn-lg adding " onClick={this.renderUnPaidItems}>Items Pending</button>
              </div>
              <br />
              <br />
              <br />
              <div className="container">
                <div  className="from-props">
                  {this.renderComponent()}
                </div>
              </div>
            </div>
          );
        }
        else {
          return (
            <div className="text-center">
              <Navbar />
              <br />
              <br />
              <br />
              <br />
              <i className="fa fa-user-times fa-4x"></i>
              <h1> This page is for administrators only! </h1>
              <br />
              <br />
              <br />
              <br />
              <Footer />
            </div>
          )
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
  Meteor.subscribe('messages');
  let isDataReady = Meteor.subscribe('files.all');
  const currentUserId = Meteor.userId();
  return{
    pets : Pets.find().fetch(),
    messages : Messages.find({}, {sort: {name: 1}}).fetch(),
    items : Items.find().fetch(),
    files : UserFiles.find({}, {sort: {name: 1}}).fetch(),
    isDataReady: isDataReady.ready(),
  }

})(Dashboard2);
