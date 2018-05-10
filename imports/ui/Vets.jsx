import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import Navbar from '/imports/ui/Navbar.jsx';
import Footer from '/imports/ui/Footer.jsx';

export default class Vets extends Component {
  render(){
    return(
      <div>
        <Navbar petCare={'active'}/>
        <br />
        <br />
        <h1 className="report">Pet Care</h1>
        <br />
        <br />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img src="/images/pet.jpeg" className="float-left" alt="Ignite Zambia" />
            </div>
            <div className="col-md-4">
              <h4 className = "report">Feed Your Pet a High Quality Diet</h4>
              <p className="care">Pets fed a high quality diet have a shiny hair coat, healthy skin, and bright eyes. A good diet can help strengthen your pet’s immune system, help maintain his or her intestinal health, help increase his or her mental acuity, help keep joints and muscles healthy, and much more.</p>
            </div>
            <aside className ="col-md-3 ml-sm-auto blog-sidebar vertical2">
              <h4>Vets</h4>
              <div className="sidebar-module sidebar-module-inset">
                <div className="card border-secondary mb-3">
                  <img src="/images/best.jpg" className="float-right" alt="Ignite Zambia" />
                  <div className="card-body text-secondary">
                    <h5 className="card-title">Vet</h5>
                    <p className="card-subtitle mb-2">Vet: Mr Patel</p>
                    <p className="card-subtitle mb-2">Company: vetway.com</p>
                    <p className="card-subtitle mb-2">Number: 123456789</p>
                  </div>
                </div>
              </div>
            </aside>
            <div className="col-md-4">
              <img src="/images/pit.jpg" className="float-left" alt="Ignite Zambia" />
            </div>
            <div className="col-md-4">
              <h4 className = "report">Grooming</h4>
              <p className="care">Most cats stay relatively clean and rarely need a bath, but you should brush or comb your cat regularly. Frequent brushing helps keep your cat's coat clean, reduces the amount of shedding and cuts down on the incidence of hairballs.</p>
            </div>
            <aside className ="col-md-3 ml-sm-auto blog-sidebar vertical2">
              <div className="sidebar-module sidebar-module-inset">
                <div className="card border-secondary mb-3">
                  <img src="/images/sar.jpeg" className="float-right" alt="Ignite Zambia" />
                  <div className="card-body text-secondary">
                    <h5 className="card-title">Vet</h5>
                    <p className="card-subtitle mb-2">Vet: Susan Strong</p>
                    <p className="card-subtitle mb-2">Company: healthypaw.com</p>
                    <p className="card-subtitle mb-2">Number: 987654321</p>
                  </div>
                </div>
              </div>
            </aside>
            <div className="col-md-4">
              <img src="/images/bog.jpg" className="float-left" alt="Ignite Zambia" />
            </div>
            <div className="col-md-4">
              <h4 className = "report">How to Care for Pet Birds</h4>
              <p className="care">Provide a bird cage that is suitable to the size and number of your pet birds. If you have small birds at home but multiple in numbers, it will require a large cage to house them. There must have enough room for them to fly around and move from one place to another. Do not overcrowd the cage. There are species that are aggressive even with their own kind and when too many of them are in one place, they have the tendency to hurt or kill each other. Some of these species include parrots such as the ringnecks and sun conures.</p>
            </div>
            <aside className ="col-md-3 ml-sm-auto blog-sidebar vertical2">
              <div className="sidebar-module sidebar-module-inset">
                <div className="card border-secondary mb-3">
                  <img src="/images/pre.jpeg" className="float-right" alt="Ignite Zambia" />
                  <div className="card-body text-secondary">
                    <h5 className="card-title">Pet Nutritionist</h5>
                    <p className="card-subtitle mb-2">Vet: Finn Mertins</p>
                    <p className="card-subtitle mb-2">Company: finn&jake.org</p>
                    <p className="card-subtitle mb-2">Number: 24681012</p>
                  </div>
                </div>
              </div>
            </aside>
        </div>
      </div>
        <br />
        <br />
        <Footer />
      </div>
    )
  }
}
