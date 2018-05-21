import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { Mongo } from 'meteor/mongo';
import route from '/imports/routing/router.js';
import { withTracker } from 'meteor/react-meteor-data';
import Navbar from '/imports/ui/Navbar.jsx';
import Footer from '/imports/ui/Footer.jsx';
import Pets from '../api/profiles/collections.js';
import {UserFiles} from '../api/upload/collections.js';
import FileUploadComponent from './uploadFile.jsx';

export class Dogs extends Component{

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
            <p className="card-text"><strong>Description:</strong> {pet.description}</p>
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
      <div className="">
        <Navbar pets={'active'}/>
        <br/>
        <p className="h1" style={{textAlign: "center"}}>PICK YOUR PET</p><br />
        <div className ="container">
          <div className="card-columns">
            {this.getAllPets()}
          </div>
          {/* <div className="card-deck">
            <div className ="row">
              <div className="card border-primary col-md-4">
                <img className="card-img-top" src="/images/dog2.jpg" style={{width: 100 + "%"}} alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title">Name: Bingo</h5>
                  <h6 className="card-subtitle mb-2">Age: 2 years</h6>
                  <h6 className="card-subtitle mb-2">Price: 300</h6>
                  <h6 className="card-subtitle mb-2">Center: Home-A-Pet</h6>
                  <p className="card-text">A good friendly dog.</p>
                  <a href="#" className="btn btn-primary">Buy</a>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Posted 3 mins ago</small>
                </div>
              </div>
              <div className="card border-primary col-md-4">
                <img className="card-img-top" src="/images/dog3.jpg" style={{width: 100 + "%"}} alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title">Name: Scooby</h5>
                  <h6 className="card-subtitle mb-2">Age: 2 years</h6>
                  <h6 className="card-subtitle mb-2">Price: Free</h6>
                  <h6 className="card-subtitle mb-2">Center: Home-A-Pet</h6>
                  <p className="card-text">Strong Guard dog</p>
                  <a href="#" className="btn btn-primary">Adopt</a>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Posted 3 mins ago</small>
                </div>
              </div>
              <div className="card border-primary col-md-4">
                <img className="card-img-top" src="/images/dog4.jpg" style={{width: 100 + "%"}} alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title">Name: Mulla</h5>
                  <h6 className="card-subtitle mb-2">Age: 2 years</h6>
                  <h6 className="card-subtitle mb-2">Price: 350</h6>
                  <h6 className="card-subtitle mb-2">Center: Home-A-Pet</h6>
                  <p className="card-text">A nice dog</p>
                  <a href="#" className="btn btn-primary">Buy</a>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Posted: 3 mins ago</small>
                </div>
              </div>
            </div>
            <div className="row" style={{marginTop: 2 + "em"}}>
              <div className="card border-primary col-md-4">
                <img className="card-img-top" src="/images/dog5.jpg" style={{width: 100 + "%"}} alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title">Name: Strider</h5>
                  <h6 className="card-subtitle mb-2">Age: 2 years</h6>
                  <h6 className="card-subtitle mb-2">Price: Free</h6>
                  <h6 className="card-subtitle mb-2">Center: Home-A-Pet</h6>
                  <p className="card-text">A good friendly dog.</p>
                  <a href="#" className="btn btn-primary">Adopt</a>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Posted 3 mins ago</small>
                </div>
              </div>
              <div className="card border-primary col-md-4">
                <img className="card-img-top" src="/images/dog1.jpg" style={{width: 100 + "%"}} alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title">Name: Mars</h5>
                  <h6 className="card-subtitle mb-2">Age: 2 years</h6>
                  <h6 className="card-subtitle mb-2">Price: Free</h6>
                  <h6 className="card-subtitle mb-2">Center: Home-A-Pet</h6>
                  <p className="card-text">A good friendly dog.</p>
                  <a href="#" className="btn btn-primary">Adopt</a>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Posted 3 mins ago</small>
                </div>
              </div>
              <div className="card border-primary col-md-4">
                <img className="card-img-top" src="/images/dog6.jpg" style={{width: 100 + "%"}} alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title">Name: Blaze</h5>
                  <h6 className="card-subtitle mb-2">Age: 2 years</h6>
                  <h6 className="card-subtitle mb-2">Price: 200</h6>
                  <h6 className="card-subtitle mb-2">Center: Home-A-Pet</h6>
                  <p className="card-text">A good friendly dog.</p>
                  <a href="#" className="btn btn-primary">Buy</a>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Posted 3 mins ago</small>
                </div>
              </div>
            </div>
          </div> */}
        </div>

        <br /><br />
        <Footer />
    </div>
    )

  }
}

export default withTracker(() =>{
  Meteor.subscribe('pets');
  Meteor.subscribe('files.all');
  return{
    pets : Pets.find({}).fetch(),
    files : UserFiles.find({}, {sort: {name: 1}}).fetch(),
  }

})(Dogs);
