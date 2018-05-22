import React, { Component } from 'react';
import {moment} from 'moment';


export default ({main, routeProps}) => {
  return(
    <div id='app'>
      {React.createElement(main, routeProps)}
    </div>
  )
}
