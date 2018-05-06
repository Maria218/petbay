import React, { Component } from 'react';
import route from '/imports/routing/router.js';

export default class Footer extends Component {
  render(){
    return(
      <div>
        <footer className="page-footer">
          <br />
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-lg-4 col-xl-3 mb-4">
                <h5 className="title">PET CONNECTIONS</h5>
                <hr className="deep-purple1" />
                <p className="align">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div><hr className="vertical"/>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h5 className="title">LINKS</h5>
                <hr className="deep-purple2" />
                <p className="align"><a href="/pet-things"> Pet Supplies</a></p>
                <p className="align"><a href="/sell">Home a Pet</a></p>
                <p className="align"><a href="/advertise">Advertise</a></p>
                <p className="align"><a href="/volunteer">Volunteer</a></p>
                <p className="align"><a href="/report">Report a Stray</a></p>
                <p className="align"><a href="/vets">Vet Services</a></p>
              </div><hr className="vertical"/>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h5 className="title">AFFILIATES</h5>
                <hr className="deep-purple3" />
                <p className="align">Lusaka Animal Welfare Society</p>
                <p className="align">Adopt-a-Pet</p>
                <p className="align">PetBay</p>
                <p className="align">Pet Zone</p>
              </div><hr className="vertical"/>
              <div className="col-md-4 col-lg-3 col-xl-3">
                <h5 className="title">CONTACT</h5>
                <hr className="deep-purple4" />
                <p className="align"><i className="fa fa-home"></i> Hackers Guild</p>
                <p className="align"><i className="fa fa-envelope"></i> damianochintala@gmail.com</p>
                {/* <p className="align"><i className="fa fa-envelope"></i> mariasitumbeko@gmail.com</p>
                <p className="align"><i className="fa fa-envelope"></i> marymulunda@gmail.com</p> */}
                <p className="align"><i className="fa fa-phone"></i> 0123 456 789</p>
              </div>
            </div>
          </div>

          <div className="copyright">
            © 2018 Copyright:
            <a href="https://localhost:3000/">
              <strong> PetConnections.com</strong>
            </a>
          </div>
        </footer>
      </div>
    )
  }
}
