import React, { Component } from 'react';
import route from '/imports/routing/router.js';

export default class Footer extends Component {

  goToSupplies = () => {
    route.go("/petcare")
  }

  goToHoming = () => {
    route.go("/homing")
  }

  goToAdvertise = () => {
    route.go("/advertising")
  }

  goToVolunteer = () => {
    route.go("/volunteer")
  }

  goToReportStray = () => {
    route.go("/report")
  }

  goToVets = () => {
    route.go("/vets")
  }

  render(){
    return(
      <div>
        {/* Footer */}
        <footer className="page-footer">
          <br />
          {/* Footer Links */}

          <div className="container mt-5 mb-4 text-center text-md-left">
            <div className="row mt-3">

              {/* Column 1 */}
              <div className="col-md-3 col-lg-4 col-xl-3 mb-4">
                <h5 className="title">PET CONNECTIONS</h5>
                <hr className="deep-purple1 accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                <p className="align">We are a site for all things pet! Connect to veterinary services, adoption centres, pet care information and all your furry friends on our platform today.</p>
              </div><hr className="vertical"/>

              {/* Column 2 */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h5 className="title">LINKS</h5>
                <hr className="deep-purple2 accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                <p><a href="" className="align" onClick={this.goToSupplies}> Pet Supplies</a></p>
                <p><a href="" className="align" onClick={this.goToHoming}>Home a Pet</a></p>
                <p><a href="" className="align" onClick={this.goToAdvertise}>Advertise</a></p>
                <p><a href="" className="align" onClick={this.goToVolunteer}>Volunteer</a></p>
                <p><a href="" className="align" onClick={this.goToReportStray}>Report a Stray</a></p>
                <p><a href="" className="align" onClick={this.goToVets}>Vet Services</a></p>
              </div><hr className="vertical"/>

              {/* Column 3 */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h5 className="title">AFFILIATES</h5>
                <hr className="deep-purple3 accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                <p className="align">Lusaka Animal Welfare Society</p>
                <p className="align">Adopt-a-Pet</p>
                <p className="align">PetBay</p>
                <p className="align">Pet Zone</p>
              </div><hr className="vertical"/>

              {/* Column 4 */}
              <div className="col-md-4 col-lg-3 col-xl-3">
                <h5 className="title">CONTACT</h5>
                <hr className="deep-purple4 accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                <p className="align"><i className="fa fa-home"></i> Hackers Guild</p>
                <p className="align"><i className="fa fa-envelope"></i> damianochintala@gmail.com</p>
                <p className="align"><i className="fa fa-envelope"></i> mariasitumbeko@gmail.com</p>
                <p className="align"><i className="fa fa-envelope"></i> marymulunda@gmail.com</p>
                <p className="align"><i className="fa fa-phone"></i> 0123 456 789</p>
              </div>
            </div>
          </div>

          {/* /Footer Links */}

          <hr />
          {/* Social Media Buttons */}
          <div className="text-center">
            <ul className="list-unstyled list-inline">
              <li className="list-inline-item">
                <a href="https://facebook.com" target="_blank" className="btn-floating btn-sm btn-fb mx-1">
                  <i className="fa fa-facebook fa-lg" style={{color:"White"}}> </i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://twitter.com" target="_blank" className="btn-floating btn-sm btn-tw mx-1">
                  <i className="fa fa-twitter fa-lg" style={{color:"White"}}> </i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://github.com/Maria218/petbay" target="_blank" className="btn-floating btn-sm btn-gplus mx-1">
                  <i className="fa fa-github fa-lg" style={{color:"White"}}></i>
                </a>
              </li>
            </ul>
          </div>
          {/* /Social Media Links */}

          {/* Copyright */}

          <div className="copyright">
            © 2018 Copyright:
            <a href="https://localhost:3000/">
              <strong className="align"> PetConnections.com</strong>
            </a>
          </div>
          {/* /Copyright */}

        </footer>
      </div>
    )
  }
}
