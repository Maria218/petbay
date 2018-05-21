import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';
import {withTracker} from 'meteor/react-meteor-data';
import route from '/imports/routing/router.js';
import Pets from '../api/profiles/collections.js';
import Items from '../api/advertiser/collections.js';
import {UserFiles} from '../api/upload/collections.js';
import Uploads from '/imports/ui/Upload.jsx';
import Uploads2 from '/imports/ui/Upload2.jsx';
import FileUploadComponent from './uploadFile.jsx';
import $ from 'jquery';

export class Dashboard extends Component {

  // componentDidMount(){
  //   if (id = "petDash") {
  //     console.log("Well, that was a flop")
  //   }
  //   else if (id = "itemDash") {
  //     console.log("Holy cow, this actually worked!")
  //   }
  // }

  // switch = () => {
  //   const box = document.getElementById("box");
  //   const petDash = document.getElementById("petDash");
  //   const itemDash = document.getElementById("itemDash");
  //
  //   petDash.onClick = () => {
  //     box = this.getAllPets()
  //   }
  //   itemDash.onClick = () => {
  //     box = this.getAllItems()
  //   }
  // }

  logUserOut = (e) => {
    e.preventDefault();
    Meteor.logout();
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

  deleteProfile = (e, id) => {
    Meteor.call('pets.delete', id);
  }

  deleteItem = (e, id) => {
    Meteor.call('items.delete', id);
  }

  getAllItems=()=>{
    const items = this.props.items;
    return items.map((item) => {
      const trial = item.imageId;
      console.log(trial);
      const link = UserFiles.findOne({_id: trial}).link();
      return (
        <div key = {item._id} className="card border-primary">
        <img className="card-img-top" src={link} style={{width: 100 + "%",height:200 + "px"}} alt="Card image cap"/>
        <div className="card-body">
            <h5 className="card-title"><strong>Product Name:</strong> {item.itemName}</h5>
            <h6 className="card-subtitle mb-2"><strong>Condition:</strong> {item.itemCondition}</h6>
            <h6 className="card-subtitle mb-2"><strong>Price:</strong>K {item.price}</h6>
            <h6 className="card-subtitle mb-2"><strong>Description:</strong> {item.description}</h6>
            <a href="" className="btn btn-primary edit" onClick = {this.editProfile}>Edit <i className="fa fa-edit"></i></a> <a href="" className="btn btn-danger delete" data-toggle="modal" data-target="#exampleModal" onClick = {this.warning}>Delete <i className="fa fa-trash"></i></a>

            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Delete Item</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    Are you sure you want to delete this file?
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-danger" data-dismiss="modal" onClick = {e => this.deleteItem(e, item._id)}>Yes, delete</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="card-footer">
            <small className="text-muted">Posted 3 mins ago</small>
          </div>
        </div>
      )
    }
  )
}

  getAllPets=()=>{
    const pets = this.props.pets;
    return pets.map((pet) => {
      const trial = pet.imageId;
      console.log(trial);
      const link = UserFiles.findOne({_id: trial}).link();
      return (
        <div key = {pet._id} className="card border-primary">
          <img className="card-img-top" src={link} style={{width: 100 + "%",height:200 + "px"}} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title"><strong>Name:</strong> {pet.petName}</h5>
            <h6 className="card-subtitle mb-2"><strong>Age:</strong> {pet.age}</h6>
            <h6 className="card-subtitle mb-2"><strong>Gender:</strong> {pet.gender}</h6>
            <h6 className="card-subtitle mb-2"><strong>Breed:</strong> {pet.breed}</h6>
            <h6 className="card-subtitle mb-2"><strong>Health:</strong> {pet.health}</h6>
            <h6 className="card-subtitle mb-2"><strong>Price:</strong> {pet.price}</h6>
            <h6 className="card-subtitle mb-2"><strong>Location:</strong> {pet.location}</h6>
            <h6 className="card-subtitle mb-2"><strong>Description:</strong> {pet.description}</h6>
            <a href="" className="btn btn-primary edit" onClick = {this.editProfile}>Edit <i className="fa fa-edit"></i></a> <a href="" className="btn btn-danger delete" data-toggle="modal" data-target="#exampleModal" onClick = {this.warning}>Delete <i className="fa fa-trash"></i></a>

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
          <div className="card-footer">
            <small className="text-muted">Posted 3 mins ago</small>
          </div>
        </div>
      )
    }
  )
}

  render(){
    if (this.props.isDataReady) {
      return(
        <div>
          <nav className="navbar navbar-expand-lg">
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
                  <a className="nav-link" href="" onClick={this.logUserOut}>Log Out</a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="dash">
            <br />
            <br />
            <h3 className="hello">Welcome {this.welcome()}</h3>
          </div><br />

          <h2 className="report">Upload Your Merchandise</h2>
          <br />
          <div className="text-center">
            <button type="button" className="btn btn-primary btn-lg adding" onClick={this.goToUpload}>Add A Pet</button> <button type="button" className="btn btn-primary btn-lg adding" onClick={this.goToUpload2}>Add Store Item</button>
          </div>
          <br />
          <br />
          {/* <div className="text-center">
            <button id="petDash">Pet Uploads</button>
            <button id="itemDash">Item Uploads</button>
          </div> */}
          <br />
          <br />
          {/* <FileUploadComponent fileName = {this.petName}/> */}
          <div className="container">
            <div id="box" className="card-columns">
              {this.getAllPets()}
              {this.getAllItems()}
              {/* {this.switch()} */}
            </div>
          </div>
        </div>
      );
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
  Meteor.subscribe('pets');
  Meteor.subscribe('items');
  let isDataReady = Meteor.subscribe('files.all');
  const currentUserId = Meteor.userId();
  return{
    pets : Pets.find({ createdBy: currentUserId }).fetch(),
    items : Items.find({ createdBy: currentUserId }).fetch(),
    files : UserFiles.find({createdBy: currentUserId}, {sort: {name: 1}}).fetch(),
    isDataReady: isDataReady.ready(),
  }

})(Dashboard);
