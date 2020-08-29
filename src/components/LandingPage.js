import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <div className="searching-text">
          SEARCHING FOR A HOME HELPER ?
        </div>
        <Button style={{ backgroundColor: "#4AAEC1", border: "0px", borderRadius: "0px", fontSize: "22px" }} className="contact-button">Contact us</Button>
        <img style={{ zIndex: "1", position: "absolute", width: "1150px", height: "1000px", marginLeft: "650px", marginTop: "0px" }} src="illustration.svg" />
        <img style={{ zIndex: "2", position: "absolute", width: "1905px", height: "389px", top: "955px" }} src="wave.svg" />
      </div >
    )
  }
}