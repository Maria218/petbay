import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import { withTracker } from 'meteor/react-meteor-data';
import Navbar from '/imports/ui/Navbar.jsx';
import Footer from '/imports/ui/Footer.jsx';
import Pets from '../api/profiles/collections.js';
import {UserFiles} from '../api/upload/collections.js';
import FileUploadComponent from './uploadFile.jsx';
import { Mongo } from 'meteor/mongo';

export class Birds extends Component{
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
          </div>
          <button><a href="/profile">Buy</a></button>
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
          <Navbar pets={'active'}/>
          <br/>
          <p className="h1" style={{textAlign: "center"}}>PICK YOUR PET</p><br />
          <div className ="container">
            <div className="card-columns">
              {this.getAllPets()}
            </div>
          </div>

          <br /><br />
          <Footer />
        </div>
      )
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
    Meteor.subscribe('files.all');
    let isDataReady = Meteor.subscribe('files.all');
    return{
      pets : Pets.find({category: "bird"}).fetch(),
      files : UserFiles.find({}, {sort: {name: 1}}).fetch(),
      isDataReady: isDataReady.ready(),
    }
  })(Birds);
