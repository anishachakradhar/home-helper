import React, { Component } from 'react';

import { Form, Button } from 'react-bootstrap';
import Footer from './Footer';

export default class Login extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#E8F3FF", paddingTop: "50px" }}>
        <div className="login-box">
          <p style={{ marginLeft: "285px", marginTop: "50px", fontSize: "25px" }}><b>Login</b></p>
          <Form style={{ padding: "80px" }}>
            <Form.Group controlId="formGridAddress1">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>

            <Button type="submit" style={{ margin: "30px 145px", background: "#4AAEC1", border: "0px", borderRadius: "0px", width: "200px", height: "40px" }}>
              Login
          </Button>
          </Form>
        </div>
        <Footer />
      </div>
    )
  }
}
