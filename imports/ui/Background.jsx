import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import Cats from '/imports/ui/Cats.jsx';


export default class Background extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <div className="container-fluid" style={{width:100+"%",height:50+"em",backgroundColor:"cyan"}}>
        <Cats/>
        </div>
        <div>

        </div>

      </div>
    );
  }
}
