import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import Items from '../api/advertiser/collections.js';
import {Uploads2} from '/imports/ui/Upload2.jsx';
import {withTracker} from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Mongo } from 'meteor/mongo';

export class Dashboard2 extends Component {

  logUserOut = (e) => {
    e.preventDefault();
    Meteor.logout();
    route.go("/login2");
  }

  goToUpload = () => {
    route.go('/upload2') // pathDef, params, queryParams
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

  getAllPets=()=>{
    const pets = this.props.pets;
    return pets.map((pet) => {
      return (
        <div key = {pet._id} className="card border-primary">
          <img className="card-img-top" src={pet.image} style={{width: 100 + "%"}} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title"><strong>Name:</strong> {pet.petName}</h5>
            <h6 className="card-subtitle mb-2"><strong>Age:</strong> {pet.age}</h6>
            <h6 className="card-subtitle mb-2"><strong>Gender:</strong> {pet.gender}</h6>
            <h6 className="card-subtitle mb-2"><strong>Breed:</strong> {pet.breed}</h6>
            <h6 className="card-subtitle mb-2"><strong>Health:</strong> {pet.health}</h6>
            <h6 className="card-subtitle mb-2"><strong>Price:</strong> {pet.price}</h6>
            <h6 className="card-subtitle mb-2"><strong>Location:</strong> {pet.location}</h6>
            <p className="card-text"><strong>Description:</strong> {pet.description}</p>
            <a href="" className="btn btn-primary edit" onClick = {this.editProfile}>Edit <i className="fa fa-edit"></i></a>
            <a href="" className="btn btn-danger delete" data-toggle="modal" data-target="#exampleModal" onClick = {this.warning}>Delete <i className="fa fa-trash"></i></a>

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
    return(
      <div>
        <nav className="navbar navbar-expand-lg navbar-light">
          <span className="navbar-brand mb-0 h1" href="#"><img src="images/logo.png" alt="" />Pet Connections</span>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
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
        <div style={{width:100+"%",height:15+"em",backgroundColor:"cyan"}}>
        <h3 style={{textAlign:"left", paddingTop:10+"px"}}>Dashboard</h3>
        <h3 style={{textAlign:"right", paddingRight:10+"px"}}>Welcome, {this.welcome()}</h3>

      </div><br />
      <h2 className="report">Upload Pet Information</h2>
      <br />
        <div className="text-center">
        <button onClick={this.goToUpload}>Add A Pet</button>
        </div>
        <br />
        <br />

        <div className="container">
          <div className="card-columns">
              {this.getAllPets()}
          </div>
        </div>

      </div>
    );
  }
}

export default withTracker(() =>{
  Meteor.subscribe('pets')
  const currentUserId = Meteor.userId();
  return{
    pets : Pets.find({ createdBy: currentUserId }).fetch(),
  }

})(Dashboard2);
