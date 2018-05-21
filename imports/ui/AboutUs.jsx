import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import { withTracker } from 'meteor/react-meteor-data';
import Navbar from '/imports/ui/Navbar.jsx';
import Footer from '/imports/ui/Footer.jsx';


export default class AboutUs extends Component{
  render(){
    return(
      <div>
        <Navbar about={' active'}/>
        <div className="container" style={{marginTop:20+"px"}}>
        <div className="row justify-content-center">
        <div className="col-md-10">
        <h2 style={{textAlign:"center"}}>We Are Pet Lovers Trying To Make A Difference</h2><br/>

        <p>We use the power of the Internet to connect adopters and buyers with pets from shelters, individuals,and stores. And help pets go from alone to having a new home. We're working to help the good people at shelters and rescue groups find homes for their pets as well as allow pet stores and individuals sell their pets on our platform. But we don't stop there. We also provide useful and informative information on the human/companion animal relationship to help keep pets healthy and permanently in their loving homes. Check our <a href="/vets" >Pet Care</a> section for  useful pet related articles</p>
        </div>
        </div>
        <div className="row justify-content-center">
        <div className="col-md-8">
        <h1 style={{textAlign:"center"}}>Meet our Developer Team</h1><br/>
        <p>
        We are a talented team of Emerging Developers with complementary skillsets. In our team you can find  developers,designers, data architects, system administrators and admin stuff.
        </p>
        <p>
        Due to the strong technical background which is in the heart of our team,  All web can practically take over and deliver any technical challenge, ranging from the development of simple web applications to highly demanding web tools, while the team members have the knowledge and business thinking to identify and utilize the value that is generated through the technical capabilities that are provided by existing or newly developed software.
        </p>
        </div>
        </div>
        <div style={{marginTop:20+"px"}}>
        <section class="row  placeholders">
        <div class="col-md-6 col-sm-6 placeholder text-center">
          <img src="images/dman.png" style={{width:200+"px", height:200+"px" }} class="img-fluid rounded-circle" alt="Generic placeholder thumbnail"/>
          <h4>Damiano Chintala</h4>
          <h5 class="text-muted">Web Developer and Designer</h5>
        </div>
        <div class="col-md-6 col-sm-6 placeholder text-center" >
          <img src="images/cat6.jpg" style={{width:200+"px", height:200+"px" }}  class="img-fluid rounded-circle" alt="Generic placeholder thumbnail"/>
          <h4>Maria Situmbeko</h4>
          <h5 class="text-muted">Web Developer and Designer</h5>
          <span class="text-muted">Something else</span>
        </div>
      </section>
      <section class="row text-center placeholders" style={{marginTop:20+"px"}}>
        <div class="col-md-6 col-sm-6 placeholder text-center">
          <img src="images/img.jpg" style={{width:200+"px", height:200+"px" }} class="img-fluid rounded-circle" alt="Generic placeholder thumbnail"/>
          <h4>Munnah Mwelwa</h4>
          <h5 class="text-muted">Web Developer and Data Architect</h5>
          <div class="text-muted">Something else</div>
        </div>
        <div class="col-md-6 col-sm-6 placeholder text-center">
          <img src="images/mary.jpg" style={{width:200+"px", height:200+"px" }} class="img-fluid rounded-circle" alt="Generic placeholder thumbnail"/>
          <h4>Mary Mulunda</h4>
          <h5 class="text-muted">Web Designer</h5>
          <span class="text-muted">Something else</span>
        </div>
      </section>
        </div>
        </div>

          <Footer />
        </div>
      )
    }
  }
