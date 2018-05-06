import React, { Component } from 'react';
import route from '/imports/routing/router.js';

export default class Footer extends Component {
  render(){
    return(
      <div>
        <footer class="page-footer font-small stylish-color-dark pt-4 mt-4">
          <div class="col-md-4">
            <h5 class="text-uppercase mb-4 mt-3 font-weight-bold">Footer Content</h5>
            <p>Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </footer>
      </div>
    )
  }
}
