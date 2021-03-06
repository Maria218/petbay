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

export class Cats extends Component{

  goToProfile = () => {
    route.go('/profile')
  }

  getAllPets=()=>{
    const pets = this.props.pets;
    return pets.map((pet) => {
      const trial = pet.imageId;
      const link = UserFiles.findOne({_id: trial}).link();
      console.log(trial);

      updateTime = () => {
        var time = moment(pet.createdAt).startOf('seconds').fromNow();
        Session.set('timeFromNow', time);
        setTimeout(updateTime, 60000); // 60 seconds
      }
      updateTime()

      const post = Session.get('timeFromNow')

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
          <div className="card-footer poster">
            <h5>Seller Name: {pet.owner}</h5>
            <h5>Email: {pet.email}</h5>
            <h5>Number: {pet.number}</h5>
            <h5>Location: {pet.residence}</h5>
            <hr />
            <h6>Posted: {post}</h6>
          </div>
          <div className="text-center">
            <button className="btn btn-primary btn-block adding" data-toggle="modal" data-target="#exampleModalCenter">Get Pet</button>
          </div>
          <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-body poster">
                <h4>Contact seller using the details below:</h4><br/>
                 <h5>Seller Name: {pet.owner}</h5>
                 <h5>Email: {pet.email}</h5>
                 <h5>Number: {pet.number}</h5>
                 <h5>Location: {pet.residence}</h5>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary adding" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
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
      pets : Pets.find({category: "cat",paid:"true"}).fetch(),
      files : UserFiles.find({}, {sort: {name: 1}}).fetch(),
      isDataReady: isDataReady.ready(),
    }
  })(Cats);
