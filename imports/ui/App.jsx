import React, { Component } from 'react'

export default ({main, routeProps}) => {
  return(
    <div id='app'>
      {React.createElement(main, routeProps)}
    </div>
  )
}
