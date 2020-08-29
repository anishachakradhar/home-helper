import React, { Component } from 'react';

import { Form, Col, Button, Row } from 'react-bootstrap';
import Footer from './Footer';

export default class Signup extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#E8F3FF", paddingTop: "50px" }}>
        <div className="signup-box">
          <p style={{ marginLeft: "285px", marginTop: "50px", fontSize: "25px" }}><b>Sign-up</b></p>
          <Form style={{ padding: "80px" }}>
            <Form.Group controlId="formGridAddress2">
              <Form.Label>Name</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Permanent Address</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Temporary Address</Form.Label>
                <Form.Control />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress2">
              <Form.Label>Occupation</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group>
              <Form.Label>
                Association
              </Form.Label>
              <Row style={{ marginTop: "7px", marginLeft: "90px" }}>
                <Col sm={5}>
                  <Form.Check
                    type="radio"
                    label="Company"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                  />
                </Col>
                <Col sm={5}>
                  <Form.Check
                    type="radio"
                    label="Individual"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                  />
                </Col>
              </Row>
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control type="number" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Alternative Number</Form.Label>
                <Form.Control type="number" />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>


            <Button type="submit" style={{ margin: "30px 145px", background: "#4AAEC1", border: "0px", borderRadius: "0px", width: "200px", height: "40px" }}>
              Sign-up
          </Button>
            <p style={{ margin: "0px 100px", fontSize: "20px" }}>Already have an account? <a href="/login" style={{ color: "#4AAEC1" }}><b>Login</b></a></p>
          </Form>
        </div>
        <Footer />
      </div>
    )
  }
}
