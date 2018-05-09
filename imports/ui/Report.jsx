import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import Navbar from '/imports/ui/Navbar.jsx';
import Footer from '/imports/ui/Footer.jsx';

export default class Report extends Component {
  render(){
    return(
      <div className="stray">
        <Navbar getInvolved={'active'}/>
        <br />
        <br />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <h1 className="report">SEEN A STRAY?</h1>
              <br />
              <br />
              <div className="text-center">
                <img src="images/stray.jpg" className="rounded mx-auto d-block" style={{width: 300 + "px"}}/>
                <br /><br />
                <p className="report">Get in touch with the Lusaka Animal welfare Society to report any stray animals in your neighborhood using any of the contact details listed below</p>
                <br />
                <br />
                <br />
              </div>
            </div>
          </div>
          <div>
           <p>Website: <span className="info">http://www.lawszambia.org</span></p>
           <p>Address: <span className="info">Sadzu Road, Next to Levy Junction, Lusaka, Zambia.</span></p>
           <p>Phone Number: <span className="info">+260 966 005 297</span></p>
           <br />
           <br />
         </div>
        </div>
        <Footer />
      </div>
    )
  }
}
