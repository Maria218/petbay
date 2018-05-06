import React, { Component } from 'react';
import route from '/imports/routing/router.js';

export default class Footer extends Component {
  render(){
    return(
      <div>
        <footer className="">
          <div className="container">
            <div className="col-md-3 col-lg-4 col-xl-3 mb-4">
              <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">Footer Content</h5>
              <p>Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}
