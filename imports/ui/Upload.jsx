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
          <label for="inputEmail4">Email</label>
            <input type="text" class="form-control" placeholder="First name"/>
          </div>
          <div class="col">
          <label for="inputEmail4">Email</label>
            <input type="text" class="form-control" placeholder="Last name"/>
          </div>
        </div>
      <div class="row">
        <div class="col">
        <label for="inputEmail4">Email</label>
          <input type="text" class="form-control" placeholder="First name"/>
        </div>
        <div class="col">
        <label for="inputEmail4">Email</label>
          <input type="text" class="form-control" placeholder="Last name"/>
        </div>
      </div>
    </form>
        </div>
    );
  }
}
