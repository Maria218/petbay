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
          <label htmlFor="inputEmail4">Pet Name</label>
            <input type="text" class="form-control" placeholder="Pet name" required/>
          </div>
          <div class="col">
          <label htmlFor="inputEmail4">Age</label>
            <input type="text" class="form-control" placeholder="Pet name" required/>
          </div>
        </div>
      <div class="row">
        <div class="col">
        <label class="mr-sm-2" htmlFor="inlineFormCustomSelect">Gender</label>
        <select class="custom-select mr-sm-2" id="inlineFormCustomSelect" required>
          <option selected>Select Gender</option>
          <option value="1">female</option>
          <option value="2">male</option>
        </select>
        </div>
        <div class="col">
        <label htmlFor="inputEmail4">Breed</label>
          <input type="text" class="form-control" placeholder="Last name" required/>
        </div>
      </div>
    </form>
        </div>
    );
  }
}
