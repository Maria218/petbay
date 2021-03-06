import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import Navbar from '/imports/ui/Navbar.jsx';
import Footer from '/imports/ui/Footer.jsx';
import { withTracker } from 'meteor/react-meteor-data';
import Items from '../api/advertiser/collections.js';
import {UserFiles} from '../api/upload/collections.js';
import FileUploadComponent from './uploadFile.jsx';

export class AllItems extends Component{
   constructor(props){
    super(props);
    this.state={
      editing:null,
      price:'',
      paid:''
    }
  }

  deleteProfile = (e, _id) => {
    Meteor.call('items.delete', _id);
  }

  toggleEditing=( itemId )=>{
    this.setState( { editing: itemId } );
  }

  handleEditField=( event )=>{
    if ( event.keyCode === 13 ) {
      let target = event.target,
      update = {};
      update._id = this.state.editing;
      update[ target.name ] = target.value;
      this.handleItemUpdate( update );
    }
  }

  handleEditItem=()=>{
    let itemId = this.state.editing;
    this.handleItemUpdate({
      _id: itemId,
      price: this.refs[ `price_${ itemId }` ].value,
      paid: this.refs[ `paid_${ itemId }` ].value
    });
  }

  handleItemUpdate=( update )=>{
    Meteor.call( 'updateItem', update, ( error, response ) => {
      if ( error ) {
        alert( error.reason, 'danger' );
      }
      else {
        this.setState( { editing: null } );
        alert( 'Record updated!', 'success' );
      }
    });
  }

  renderItemOrEditField=( item )=>{
    if ( this.state.editing === item._id ) {
      return <table key={ `editing-${ item._id }` } className="list-group-item">
        <tbody>
          <tr>
            <td className="">
              <input
                onKeyDown={ this.handleEditField }
                type="number"
                className="form-control"
                ref={ `price_${ item._id }` }
                name="price"
                defaultValue={ item.price}
              />
            </td>
            <td className="">
              <input
                onKeyDown={ this.handleEditField }
                type="text"
                className="form-control"
                ref={ `paid_${ item._id }` }
                name="paid"
                defaultValue={ item.paid }
              />
            </td>
            <td className="">
              <button className="btn btn-primary adding" onClick={ this.handleEditItem }>"Update Item" </button>
            </td>
          </tr>
        </tbody>
        </table>;
    }
    else {
        const trial = item.imageId;
        const link = UserFiles.findOne({_id: trial}).link();
        return (
          <div key={ item._id } className="card border-primary">
              <img className="card-img-top" src={link} style={{width: 100 + "%",height:200 + "px"}} alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title"> { `Name: ${ item.itemName }`} </h5>
                <h6 className="card-subtitle mb-2">{ `Condition: ${ item.itemCondition }`}</h6>
                <h6 className="card-subtitle mb-2">{ `Price: ${ item.price }`}</h6>
                <h6 className="card-subtitle mb-2">{ `Description: ${ item.description }`}</h6>
                <br />
                <a href="" className="btn btn-primary edit" onClick={this.toggleEditing.bind(null, item._id)}>Edit <i className="fa fa-edit"></i></a>
                <a href="" className="btn btn-danger delete" data-toggle="modal" data-target="#exampleModal">Delete <i className="fa fa-trash"></i></a>

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
                        <button type="button" className="btn btn-danger" data-dismiss="modal" onClick = {e => this.deleteProfile(e, item._id)}>Yes, delete</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        )
      }
    }

  render() {
    if (this.props.isDataReady) {
      return (<div className="card-columns">
        {this.props.items.map( ( item ) => {
          return this.renderItemOrEditField( item);
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
  Meteor.subscribe('items')
  let isDataReady = Meteor.subscribe('files.all');
  return{
    items : Items.find().fetch(),
    files : UserFiles.find({}, {sort: {name: 1}}).fetch(),
    isDataReady: isDataReady.ready(),
  }
})(AllItems);
