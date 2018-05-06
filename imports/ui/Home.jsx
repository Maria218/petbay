import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import Navbar from '/imports/ui/Navbar.jsx';
import Footer from '/imports/ui/Footer.jsx';

export default class Home extends Component {
  render(){
    return(
      <div>
        <Navbar />
        <img src="/images/homepage.jpg" />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="container">
          <div className="row">
            <div className = "col-md-4">
              <img src="/images/dog-homepage.jpg" />
              <br />
              <br />
              <h4 className="top-middle">Lorem ipsum dolor</h4>
              <p className="bottom-middle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum mauris ut diam vulputate, nec scelerisque magna maximus. Suspendisse sit amet ex vestibulum, semper nunc quis, consequat arcu. Pellentesque feugiat molestie enim a aliquam.</p>
            </div>
            <div className = "col-md-4">
              <img src="/images/cat-homepage.jpg" />
              <br />
              <br />
              <h4 className="top-middle">Lorem ipsum dolor</h4>
              <p className="bottom-middle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum mauris ut diam vulputate, nec scelerisque magna maximus. Suspendisse sit amet ex vestibulum, semper nunc quis, consequat arcu. Pellentesque feugiat molestie enim a aliquam.</p>
            </div>
            <div className = "col-md-4">
              <img src="/images/parrots-homepage.jpg" />
              <br />
              <br />
              <h4 className="top-middle">Lorem ipsum dolor</h4>
              <p className="bottom-middle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum mauris ut diam vulputate, nec scelerisque magna maximus. Suspendisse sit amet ex vestibulum, semper nunc quis, consequat arcu. Pellentesque feugiat molestie enim a aliquam.</p>
            </div>
          </div>
        </div>
        <br />
        <br />

        <Footer />

      </div>
    )
  }
}
