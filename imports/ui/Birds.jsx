import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import { withTracker } from 'meteor/react-meteor-data';
import Navbar from '/imports/ui/Navbar.jsx';
import Footer from '/imports/ui/Footer.jsx';


export default class Birds extends Component{
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
    <img className="card-img-top" src="/images/bird1.jpg" style={{width: 100 + "%"}} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Name: Rodrigo</h5>
      <h6 className="card-subtitle mb-2">Age: 2 years</h6>
      <h6 className="card-subtitle mb-2">Price: 300</h6>
      <h6 className="card-subtitle mb-2">Center: Home-A-Pet</h6>
       <p className="card-text">A good friendly bird.</p>
       <a href="#" className="btn btn-primary">Buy</a>
    </div>
    <div className="card-footer">
      <small className="text-muted">Posted 3 mins ago</small>
    </div>
  </div>
  <div className="card border-primary col-md-4">
    <img className="card-img-top" src="/images/bird2.jpg" style={{width: 100 + "%"}} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Name: Perry</h5>
      <h6 className="card-subtitle mb-2">Age: 2 years</h6>
      <h6 className="card-subtitle mb-2">Price: Free</h6>
      <h6 className="card-subtitle mb-2">Center: Home-A-Pet</h6>
      <p className="card-text">Cheeky, hilarious, enjoys nuts</p>
      <a href="#" className="btn btn-primary">Adopt</a>
    </div>
    <div className="card-footer">
      <small className="text-muted">Posted 3 mins ago</small>
    </div>
  </div>
  <div className="card border-primary col-md-4">
    <img className="card-img-top" src="/images/bird4.jpg" style={{width: 100 + "%"}} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Name: Khalid</h5>
      <h6 className="card-subtitle mb-2">Age: 2 years</h6>
      <h6 className="card-subtitle mb-2">Price: 350</h6>
      <h6 className="card-subtitle mb-2">Center: Home-A-Pet</h6>
      <p className="card-text">Young, dumb and broke (probably high)</p>
      <a href="#" className="btn btn-primary">Buy</a>
    </div>
    <div className="card-footer">
      <small className="text-muted">Posted: 3 mins ago</small>
    </div>
  </div>
  </div>
  <div className="row" style={{marginTop: 2 + "em"}}>
  <div className="card border-primary col-md-4">
    <img className="card-img-top" src="/images/bird5.jpg" style={{width: 100 + "%"}} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Name: Stormy</h5>
      <h6 className="card-subtitle mb-2">Age: 2 years</h6>
      <h6 className="card-subtitle mb-2">Price: Free</h6>
      <h6 className="card-subtitle mb-2">Center: Home-A-Pet</h6>
       <p className="card-text">A good friendly bird.</p>
       <a href="#" className="btn btn-primary">Adopt</a>
    </div>
    <div className="card-footer">
      <small className="text-muted">Posted 3 mins ago</small>
    </div>
  </div>
  <div className="card border-primary col-md-4">
    <img className="card-img-top" src="/images/bird6.jpg" style={{width: 100 + "%"}} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Name: Ari</h5>
      <h6 className="card-subtitle mb-2">Age: 2 years</h6>
      <h6 className="card-subtitle mb-2">Price: Free</h6>
      <h6 className="card-subtitle mb-2">Center: Home-A-Pet</h6>
       <p className="card-text">A great companion.</p>
       <a href="#" className="btn btn-primary">Adopt</a>
    </div>
    <div className="card-footer">
      <small className="text-muted">Posted 3 mins ago</small>
    </div>
  </div>
  <div className="card border-primary col-md-4">
    <img className="card-img-top" src="/images/bird3.jpg" style={{width: 100 + "%"}} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Name: Zazu</h5>
      <h6 className="card-subtitle mb-2">Age: 2 years</h6>
      <h6 className="card-subtitle mb-2">Price: 200</h6>
      <h6 className="card-subtitle mb-2">Center: Home-A-Pet</h6>
       <p className="card-text">A loyal steward, sings very well.</p>
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
