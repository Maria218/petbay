import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import Navbar from '/imports/ui/Navbar.jsx';
import Footer from '/imports/ui/Footer.jsx';
import { withTracker } from 'meteor/react-meteor-data';
import Pets from '../api/profiles/collections.js';
import {UserFiles} from '../api/upload/collections.js';
import FileUploadComponent from './uploadFile.jsx';

export class Pet extends Component{
   constructor(props){
    super(props);
    this.state={
      editing:null,
      petName:'',
      price:'',
      paid:''
    }
  }

  deleteProfile = (e, _id) => {
    Meteor.call('pets.delete', _id);
  }

  toggleEditing=( petId )=>{
    this.setState( { editing: petId } );
  }

  handleEditField=( event )=>{
    if ( event.keyCode === 13 ) {
      let target = event.target,
      update = {};
      update._id = this.state.editing;
      update[ target.name ] = target.value;
      this.handlePetUpdate( update );
    }
  }

  handleEditPet=()=>{
    let petId = this.state.editing;
    this.handlePetUpdate({
      _id: petId,
      petName: this.refs[ `petName_${ petId }` ].value,
      price: this.refs[ `price_${ petId }` ].value,
      paid: this.refs[ `paid_${ petId }` ].value
    });
  }

  handlePetUpdate=( update )=>{
    Meteor.call( 'updateVinyl', update, ( error, response ) => {
      if ( error ) {
        alert( error.reason, 'danger' );
      }
      else {
        this.setState( { editing: null } );
        alert( 'Record updated!', 'success' );
      }
    });
  }

  renderItemOrEditField=( pet )=>{
    if ( this.state.editing === pet._id ) {
      return <table key={ `editing-${ pet._id }` } className="list-group-item">
        <tbody>
          <tr>
            <td className="">
              <input
                onKeyDown={ this.handleEditField }
                type="text"
                className="form-control"
                ref={ `petName_${ pet._id }` }
                name="petName"
                defaultValue={ pet.petName }
              />
            </td>
            <td className="">
              <input
                onKeyDown={ this.handleEditField }
                type="text"
                className="form-control"
                ref={ `price_${ pet._id }` }
                name="price"
                defaultValue={ pet.price}
              />
            </td>
            <td className="">
              <input
                onKeyDown={ this.handleEditField }
                type="text"
                className="form-control"
                ref={ `paid_${ pet._id }` }
                name="paid"
                defaultValue={ pet.paid }
              />
            </td>
            <td className="">
              <button className="btn btn-primary" onClick={ this.handleEditPet }>"Update Item" </button>
            </td>
          </tr>
        </tbody>
        </table>;
    }
    else {
      // return this.props.pets.map( ( pet ) => {
        const trial = pet.imageId;
        const link = UserFiles.findOne({_id: trial}).link();
        return (
          <div key={ pet._id } className="card border-primary">
              <img className="card-img-top" src={link} style={{width: 100 + "%",height:200 + "px"}} alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title"> { `Name: ${ pet.petName }`} </h5>
                <h6 className="card-subtitle mb-2">{ `Age: ${ pet.age }`}</h6>
                <h6 className="card-subtitle mb-2">{ `Gender: ${ pet.gender }`}</h6>
                <h6 className="card-subtitle mb-2">{ `Breed: ${ pet.breed }`}</h6>
                <h6 className="card-subtitle mb-2">{ `Health: ${ pet.health }`}</h6>
                <h6 className="card-subtitle mb-2">{ `Price: ${ pet.price }`}</h6>
                <h6 className="card-subtitle mb-2">{ `Location: ${ pet.location }`}</h6>
                <h6 className="card-subtitle mb-2">{ `Description: ${ pet.description }`}</h6>
                <br />
                <a href="" className="btn btn-primary edit" onClick={this.toggleEditing.bind(null, pet._id)}>Edit <i className="fa fa-edit"></i></a>
                <a href="" className="btn btn-danger delete" data-toggle="modal" data-target="#exampleModal">Delete <i className="fa fa-trash"></i></a>

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
            </div>
        )
      // })

      }
    }

  render() {
    if (this.props.isDataReady) {
      return (<div className="card-columns">
        {this.props.pets.map( ( pet ) => {
          // const trial = pet.imageId;
          // const link = UserFiles.findOne({_id: trial}).link();
          return this.renderItemOrEditField( pet);
        })}
      </div>);
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
    let isDataReady = Meteor.subscribe('files.all');
    return{
      pets : Pets.find().fetch(),
      files : UserFiles.find({}, {sort: {name: 1}}).fetch(),
      isDataReady: isDataReady.ready(),
    }
  })(Pet);
