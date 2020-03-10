import React, { Component } from 'react';


export default class Child extends Component {
  render()
{ const {handleOnClick} = this.props
  return(
    <div>
      <button onClick={handleOnClick}>Change color</button>
    </div>
  )
}}