import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import Items from '../api/advertiser/collections.js';
import {withTracker} from 'meteor/react-meteor-data';
import {Dashboard} from '/imports/ui/Dashboard2.jsx';
import FileUploadComponent from './uploadFile.jsx';
import {UserFiles} from '../api/upload/collections.js';
import { Session } from 'meteor/session';

export class Uploads2 extends Component {
  constructor(props){
    super(props);
    this.state = {
      imageId:'',
      itemName:'',
      itemCondition:'',
      description:'',
      price:'',
      file: '',
      imagePreviewUrl: '',
      paid: ''
    }
  }

  goToDashboard = () => {
    route.go('/dashboard')
  }

  goToHome = () => {
    route.go('/')
  }



  handleSubmit=(e)=>{
    const attempt2 = Session.get('imageId');
    const currentUserId = Meteor.userId()
    const item = {
      imageId: attempt2,
      itemName:this.state.itemName,
      itemCondition:this.state.itemCondition,
      price:this.state.price,
      description:this.state.description,
      createdAt: new Date(),
      createdBy:currentUserId,
      paid: false
    }
    Meteor.call('items.create',item);
    console.log('item created')
    route.go('/dashboard');
    e.preventDefault();

  }


  handleNameChange = (e) => {
    this.setState({
      itemName: e.target.value
    })
  }

  handleConditionChange = (e) => {
    this.setState({
      itemCondition: e.target.value
    })
  }

  handlePriceChange = (e) => {
    this.setState({
      price: e.target.value
    })
  }

  handleDescriptionChange = (e) => {
    this.setState({
      description: e.target.value
    })
  }

  render(){

    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} style={{width:100+"px",height:100+"px"}}/>);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview<br/></div>);
    }

    return(
        <div>
          <nav className="navbar navbar-expand-lg navbar-light">
            <span className="navbar-brand mb-0 h1" href="#"><h3>TELL US ABOUT YOUR PRODUCT</h3></span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="" onClick={this.goToDashboard}>Back to Dashboard <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="" onClick={this.goToHome}>Back Home <span className="sr-only">(current)</span></a>
                </li>
              </ul>
            </div>
          </nav>
          <br />
          <h4 className="report">EDIT YOUR PRODUCT INFORMATION</h4>
         <div className="container">

          <form onSubmit={this.handleSubmit} className="upload">
          <div className="imgPreview">
          <div className="row">
                {$imagePreview}
          </div>
         </div>
         <FileUploadComponent fileName = {this.state.itemName} />
         <div className="row">
            <div className="col">
              <label htmlFor="inputEmail4">Product Name</label>
              <input onChange={this.handleNameChange} type="text" className="form-control" name="itemName"  placeholder="Name of product" required/>
            </div>
            <div className="col">
              <label className="mr-sm-2" htmlFor="inlineFormCustomSelect">PRODUCT CONDITION</label>
              <select onChange={this.handleConditionChange} className="custom-select mr-sm-2" id="inlineFormCustomSelect" name="itemCondition" required>
                <option defaultValue>Condition</option>
                <option value="new">New</option>
                <option value="used">Used, but still good</option>
                <option value="old">Old</option>
              </select>
            </div>
          </div><br />
        <div className="row">
          <div className="col">
            <label htmlFor="inputEmail4">Price</label>
            <input onChange={this.handlePriceChange} type="number" className="form-control" name="price" placeholder="Enter price in Kwacha" required/>
          </div>
        </div><br />
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6 form-group describe">
            <label htmlFor="exampleFormControlTextarea1">PRODUCT DESCRIPTION</label>
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
  Meteor.subscribe('items')

  return{
    items : Items.find().fetch(),
  }

})(Uploads2);
