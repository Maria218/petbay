import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import Navbar from '/imports/ui/Navbar.jsx';
import Footer from '/imports/ui/Footer.jsx';

export default class Volunteer extends Component {
  render(){
    return(
      <div>
        <Navbar getInvolved={'active'}/>
        <br />
        <h1 className="volunteer">WANT TO VOLUNTEER?</h1>
        <h5 className="volunteer">Explore the list of organisations and help save our furry friends</h5>
        <br />
        <br />
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="images/adoptioncenter.jpg" />
            </div>
            <div className="col-md-6">
              <h5 className="top-middle">Lusaka Animal Welfare Society</h5>
              <p className="bottom-middle">This organisation has been running since 1993 helping different animals find forever homes and give pet owners information on how to take care of their pets. But they can't do all the work they do alone. Partner with them and offer your voluntary services either part or full time to help them continue their beautiful mission.</p>
              <div className="text-center">
                <button className="btn btn-outline-primary adding" data-toggle="modal" data-target="#exampleModalCenter4">Volunteer</button>
              </div>

              {/* Modal */}
              <div className="modal fade" id="exampleModalCenter4" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalCenterTitle">Lusaka Animal Welfare Society Details</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <strong>Address:</strong> Sadzu Road, Behind Levy Junction, Lusaka, Zambia <br />
                      <strong>Phone Number 1:</strong> +260 977 610 857, Jenny Gordon <br />
                      <strong>Phone Number 2:</strong> +260 977 770 940, Liza Oparacha
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary adding" data-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="row">
            <div className="col-md-6">
              <img src="images/adoptioncenter.jpg" />
            </div>
            <div className="col-md-6">
              <h5 className="top-middle">Lusaka Kennel Club</h5>
              <p className="bottom-middle">Need help training your dog? The Lusaka Kennel Club handles obedience and skills training for dogs of all kinds. They are located at the Lusaka Showgrounds and provide a hugely beneficial experience for both dog and owner. They need all the help they can get, so why don't you go and volunteer today?</p>
              <div className="text-center">
                <button className="btn btn-outline-primary adding" data-toggle="modal" data-target="#exampleModalCenter3">Volunteer</button>
              </div>

              {/* Modal */}
              <div className="modal fade" id="exampleModalCenter3" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalCenterTitle">Lusaka Kennel Club Details</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <strong>Address:</strong> Lusaka Showgrounds
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary adding" data-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="row">
            <div className="col-md-6">
              <img src="images/adoptioncenter.jpg" />
            </div>
            <div className="col-md-6">
              <h5 className="top-middle">Spoiled Pets</h5>
              <p className="bottom-middle">It is strongly recommended that your pet wears an identity tag so its family can easily be contacted should it ever stray away from home. What better place to find tags than Spoiled Pets? Spoiled Pets makes custom tags for your furry friends so why not go and help them out?</p>
              <div className="text-center">
                <button className="btn btn-outline-primary adding" data-toggle="modal" data-target="#exampleModalCenter2">Volunteer</button>
              </div>

              {/* Modal */}
              <div className="modal fade" id="exampleModalCenter2" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalCenterTitle">Spoiled Pets Details</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <strong>Address:</strong> Next to Showgrounds Vet <br />
                      <strong>Phone Number:</strong> +260 0977 772 622
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary adding" data-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>
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
