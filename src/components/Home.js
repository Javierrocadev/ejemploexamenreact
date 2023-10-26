import React, { Component } from 'react'
import background from '../assets/images/background.jpg'
export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Casa de apuestas deportivas</h1>
        <img src={background} alt='background'/>
      </div>
    )
  }
}
