import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import Navbar from '/imports/ui/Navbar.jsx';
import Footer from '/imports/ui/Footer.jsx';

export default class Pets extends Component {
  render() {
    return (
      <div>
        <Navbar petCare={'active'}/>
        <br />
        <p className="h1" style={{ textAlign: "center" }}>PAMPER YOUR PET</p><br />
        <p className="volunteer"> With these different pet supplies sold by your favorite brands</p>
        <div className="container">
          <div className="card-deck">
            <div className="row">
              <div className="card border-primary col-md-4">
                <img className="card-img-top" src="/images/bowl.jpg" style={{ width: 100 + "%" }} alt="Ceramic Dog Bowls" />
                <div className="card-body">
                  <h5 className="card-title">Ceramic Dog Bowls</h5>
                  <h6 className="card-subtitle mb-2">Price: K150.00</h6>
                  <h6 className="card-subtitle mb-2">Sold on Amazon</h6>
                  <a href="#" className="btn btn-primary">Buy</a>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Posted 3 mins ago</small>
                </div>
              </div>
              <div className="card border-primary col-md-4">
                <img className="card-img-top" src="/images/birdswing.jpeg" style={{ width: 100 + "%" }} alt="Wooden Bird Swing" />
                <div className="card-body">
                  <h5 className="card-title">Wooden Bird Swing</h5>
                  <h6 className="card-subtitle mb-2">Price: K38.39</h6>
                  <h6 className="card-subtitle mb-2">Sold by PetSmart</h6>
                  <a href="#" className="btn btn-primary">Buy</a>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Posted 3 mins ago</small>
                </div>
              </div>
              <div className="card border-primary col-md-4">
                <img className="card-img-top" src="/images/catbed.jpeg" style={{ width: 100 + "%" }} alt="Cuddler Cat Bed" />
                <div className="card-body">
                  <h5 className="card-title">Cuddler Cat Bed</h5>
                  <h6 className="card-subtitle mb-2">Price: K100.00</h6>
                  <h6 className="card-subtitle mb-2">Sold by PetSmart</h6>
                  <a href="#" className="btn btn-primary">Buy</a>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Posted: 3 mins ago</small>
                </div>
              </div>
            </div>
            <div className="row" style={{ marginTop: 2 + "em" }}>
              <div className="card border-primary col-md-4">
                <img className="card-img-top" src="/images/catcollar.jpeg" style={{ width: 100 + "%" }} alt="Reflective Zebra Cat Collar" />
                <div className="card-body">
                  <h5 className="card-title">Reflective Zebra Cat Collar</h5>
                  <h6 className="card-subtitle mb-2">Price: K80.00</h6>
                  <h6 className="card-subtitle mb-2">Sold by PetSmart</h6>
                  <a href="#" className="btn btn-primary">Buyt</a>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Posted 3 mins ago</small>
                </div>
              </div>
              <div className="card border-primary col-md-4">
                <img className="card-img-top" src="/images/dogtoy1.jpeg" style={{ width: 100 + "%" }} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Tennis Ball Squeaky Toy</h5>
                  <h6 className="card-subtitle mb-2">Price: K19.00</h6>
                  <h6 className="card-subtitle mb-2">Sold by PetSmart</h6>
                  <a href="#" className="btn btn-primary">Buy</a>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Posted 3 mins ago</small>
                </div>
              </div>
              <div className="card border-primary col-md-4">
                <img className="card-img-top" src="/images/birdfood.jpeg" style={{ width: 100 + "%" }} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Small Pellets Bird Food</h5>
                  <h6 className="card-subtitle mb-2">Price: K100.00</h6>
                  <h6 className="card-subtitle mb-2">Sold by PetSmart</h6>
                  <a href="#" className="btn btn-primary">Buy</a>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Posted 3 mins ago</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br /><br />
        <Footer />
      </div>
    )
  }
}
