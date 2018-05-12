import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import Pets from '../api/profiles/collections.js';

import Cats from '/imports/ui/Cats.jsx';
import {withTracker} from 'meteor/react-meteor-data';
import {Dashboard} from '/imports/ui/Dashboard.jsx';



export class Uploads extends Component {
  constructor(props){
    super(props);
    this.state = {
      image:'',
      petName:'',
      age:'',
      gender:'',
      breed:'',
      location:'',
      health:'',
      price:'',
      description:'',
      category:''
    }
  }



  handleSubmit=(e)=>{
    e.preventDefault();
    const currentUserId = Meteor.userId()
    const pet = {
      // image:this.state.image,
      petName:this.state.petName,
      age:this.state.age,
      gender:this.state.gender,
      breed:this.state.breed,
      category: this.state.category,
      location:this.state.location,
      health:this.state.health,
      price:this.state.price,
      description:this.state.description,
      createdAt: new Date(),
      createdBy:currentUserId

    }
    Meteor.call('pets.create',pet);
    console.log('pet created')
    route.go('/dashboard');
  }


  handleNameChange = (e) => {
    this.setState({
      petName: e.target.value
    })
  }

  handleAgeChange = (e) => {
    this.setState({
      age: e.target.value
    })
  }

  handlePriceChange = (e) => {
    this.setState({
      price: e.target.value
    })
  }

  handleGenderChange = (e) => {
    this.setState({
      gender: e.target.value
    })
  }

  handleBreedChange = (e) => {
    this.setState({
      breed: e.target.value
    })
  }

  handleCategoryChange = (e) => {
    this.setState({
      category: e.target.value
    })
  }

  handleHealthChange = (e) => {
    this.setState({
      health: e.target.value
    })
  }

  handleLocationChange = (e) => {
    this.setState({
      location: e.target.value
    })
  }

  handleDescriptionChange = (e) => {
    this.setState({
      description: e.target.value
    })
  }



  render(){
    return(
        <div>
          <nav className="navbar navbar-expand-lg navbar-light">
            <span className="navbar-brand mb-0 h1" href="#"><h3>TELL US ABOUT YOUR PET</h3></span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/">Back Home <span className="sr-only">(current)</span></a>
                </li>
              </ul>
            </div>
          </nav>
          <br />
          <h4 className="report">EDIT YOUR PET INFORMATION</h4>
        <div className="container">
          <form onSubmit={this.handleSubmit} className="upload">
            {/* <div className="form-group">
              <label htmlFor="exampleFormControlFile1">Upload Pet Image</label>
              <input type="file" name="image" className="form-control-file" id="exampleFormControlFile1" />
            </div> */}
          <div className="row">
            <div className="col">
              <label htmlFor="inputEmail4">Pet Name</label>
              <input onChange={this.handleNameChange} type="text" className="form-control" name="petName"  placeholder="Pet name" required/>
            </div>
            <div className="col">
            <label htmlFor="inputEmail4">Pet Age</label>
              <input onChange={this.handleAgeChange} type="text" className="form-control" name="age"  placeholder="Pet age" required/>
            </div>
          </div><br />
        <div className="row">
          <div className="col">
          <label className="mr-sm-2" htmlFor="inlineFormCustomSelect">Pet Gender</label>
          <select onChange={this.handleGenderChange} className="custom-select mr-sm-2" id="inlineFormCustomSelect" name="gender"  required>
            <option defaultValue>Select Gender</option>
            <option value="female">female</option>
            <option value="male">male</option>
          </select>
          </div>
          <div className="col">
          <label htmlFor="inputEmail4">Pet Breed</label>
            <input onChange={this.handleBreedChange} type="text" className="form-control" name="breed"  placeholder="Breed" required/>
          </div>
        </div><br />
        <div className="row">
          <div className="col">
            <label className="mr-sm-2" htmlFor="inlineFormCustomSelect">Pet Category</label>
            <select onChange={this.handleCategoryChange} className="custom-select mr-sm-2" id="inlineFormCustomSelect" name="catgory"  required>
              <option defaultValue>Category</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="bird">Bird</option>
            </select>
          </div>
          <div className="col">
          <label htmlFor="inputEmail4">Health</label>
            <input onChange={this.handleHealthChange} type="text" className="form-control" name="health" placeholder="Health status" required/>
          </div>
        </div><br />
        <div className="row">
          <div className="col">
            <label htmlFor="inputEmail4">Pet Location</label>
            <input onChange={this.handleLocationChange} type="text" className="form-control" name="location"  placeholder="Pet location" required/>
          </div>
          <div className="col">
            <label htmlFor="inputEmail4">Price</label>
            <input onChange={this.handlePriceChange} type="text" className="form-control" name="price" placeholder="Enter price" required/>
          </div>
        </div><br />
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6 form-group describe">
            <label htmlFor="exampleFormControlTextarea1">PET DESCRIPTION</label>
            <textarea onChange={this.handleDescriptionChange} className="form-control" id="exampleFormControlTextarea1" name="description"  rows="5"></textarea>
          </div>
          <div className="col-md-3"></div>
        </div>
        <br />
        <div className="text-center">
          <button type="submit" className="btn btn-primary">Upload</button>
        </div>
      </form>
        </div>
        <br />
        <br />
        </div>
    );
  }

}
export default withTracker(() =>{
  Meteor.subscribe('pets')

  return{
    pets : Pets.find().fetch(),
  }

})(Uploads);
