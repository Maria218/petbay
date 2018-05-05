import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import { withTracker } from 'meteor/react-meteor-data';
import Navbar from '/imports/ui/Navbar.jsx'

export default class Home extends Component {
  render(){
    return(
      <div>
        <Navbar />
      </div>
    )
  }
}
//
// export default withTracker(() => {
//   return {}
// })(Home);
