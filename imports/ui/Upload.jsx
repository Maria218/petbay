import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import Cats from '/imports/ui/Cats.jsx';


export default class Uploads extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
        <div>
        <form>
        <div class="row">
          <div class="col">
          <label for="inputEmail4">Pet Name</label>
            <input type="text" class="form-control" placeholder="First name"/>
          </div>
          <div class="col">
          <label for="inputEmail4">Age</label>
            <input type="text" class="form-control" placeholder="Last name"/>
          </div>
        </div>
      <div class="row">
        <div class="col">
        <label class="mr-sm-2" for="inlineFormCustomSelect">Gender</label>
        <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
          <option selected>Select Gender</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        </div>
        <div class="col">
        <label for="inputEmail4">Breed</label>
          <input type="text" class="form-control" placeholder="Last name"/>
        </div>
      </div>
    </form>
        </div>
    );
  }
}
