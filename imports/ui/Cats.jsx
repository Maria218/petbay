import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import { withTracker } from 'meteor/react-meteor-data';
import Navbar from '/imports/ui/Navbar.jsx'


export default class Cats extends Component{
    render(){
        return(
            <div className="">
            <Navbar/>
            <br/>
            <p className="h1" style={{textAlign: "center"}}>PICK YOUR PET</p><br />
            <div className ="container">
                <div className="card-deck">
                <div className ="row">
  <div className="card border-primary col-md-4">
    <img className="card-img-top" src="/images/cat1.jpg" style={{width: 100 + "%"}} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Name: Ginger</h5>
      <h6 className="card-subtitle mb-2">Age: 2 years</h6>
      <h6 className="card-subtitle mb-2">Price: 300</h6>
      <h6 className="card-subtitle mb-2">Center: Home-A-Pet</h6>
       <p className="card-text">Sweet, loving cat.</p>
       <a href="#" className="btn btn-primary">Buy</a>
    </div>
    <div className="card-footer">
      <small className="text-muted">Posted 3 mins ago</small>
    </div>
  </div>
  <div className="card border-primary col-md-4">
    <img className="card-img-top" src="/images/cat2.jpg" style={{width: 100 + "%"}} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Name: Toothless</h5>
      <h6 className="card-subtitle mb-2">Age: 2 years</h6>
      <h6 className="card-subtitle mb-2">Price: Free</h6>
      <h6 className="card-subtitle mb-2">Center: Home-A-Pet</h6>
      <p className="card-text">Harmless Night Fury breed, needs new tail.</p>
      <a href="#" className="btn btn-primary">Adopt</a>
    </div>
    <div className="card-footer">
      <small className="text-muted">Posted 3 mins ago</small>
    </div>
  </div>
  <div className="card border-primary col-md-4">
    <img className="card-img-top" src="/images/cat6.jpg" style={{width: 100 + "%"}} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Name: Ikki</h5>
      <h6 className="card-subtitle mb-2">Age: 1 year</h6>
      <h6 className="card-subtitle mb-2">Price: 350</h6>
      <h6 className="card-subtitle mb-2">Center: Home-A-Pet</h6>
      <p className="card-text">Loves milk, enjoys reading Death Note.</p>
      <a href="#" className="btn btn-primary">Buy</a>
    </div>
    <div className="card-footer">
      <small className="text-muted">Posted: 3 mins ago</small>
    </div>
  </div>
  </div>
  <div className="row" style={{marginTop: 2 + "em"}}>
  <div className="card border-primary col-md-4">
    <img className="card-img-top" src="/images/cat3.jpg" style={{width: 100 + "%"}} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Name: Jade</h5>
      <h6 className="card-subtitle mb-2">Age: 2 years</h6>
      <h6 className="card-subtitle mb-2">Price: Free</h6>
      <h6 className="card-subtitle mb-2">Center: Home-A-Pet</h6>
       <p className="card-text">Extremely judgemental, but full of love.</p>
       <a href="#" className="btn btn-primary">Adopt</a>
    </div>
    <div className="card-footer">
      <small className="text-muted">Posted 3 mins ago</small>
    </div>
  </div>
  <div className="card border-primary col-md-4">
    <img className="card-img-top" src="/images/cat9.jpg" style={{width: 100 + "%"}} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Name: Fluffy</h5>
      <h6 className="card-subtitle mb-2">Age: 2 years</h6>
      <h6 className="card-subtitle mb-2">Price: Free</h6>
      <h6 className="card-subtitle mb-2">Center: Home-A-Pet</h6>
       <p className="card-text">A good, friendly, HEALTHY, cat.</p>
       <a href="#" className="btn btn-primary">Adopt</a>
    </div>
    <div className="card-footer">
      <small className="text-muted">Posted 3 mins ago</small>
    </div>
  </div>
  <div className="card border-primary col-md-4">
    <img className="card-img-top" src="/images/cat4.jpg" style={{width: 100 + "%"}} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Name: Tabby</h5>
      <h6 className="card-subtitle mb-2">Age: 2 years</h6>
      <h6 className="card-subtitle mb-2">Price: 200</h6>
      <h6 className="card-subtitle mb-2">Center: Home-A-Pet</h6>
       <p className="card-text">Gentle, thoughtful kitty.</p>
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


            </div>
        )

    }
}
