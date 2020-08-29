import React, { Component } from 'react';

import { Card, Row, Col } from 'react-bootstrap';
import Footer from './Footer';

export default class Profile extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#ffffff" }}>
        <Row>
          <Col sm={3}>
            <img src="avatar.svg" style={{ height: "200px", width: "200px", marginLeft: "135px", marginTop: "50px" }} />
            <img src="shapes.svg" style={{ zIndex: "2", position: "absolute", marginLeft: "300px", marginTop: "400px" }} />
          </Col>
          <Col sm={9}>
            <Card style={{ width: "1270px", height: "800px", marginTop: "50px" }}>
              <Card.Header>
                <div style={{ padding: "20px", fontSize: "35px", textTransform: "uppercase", fontFamily: "Tajawal" }}>
                  Name
                </div >
                <div style={{ padding: "0px 0px 20px 20px", fontSize: "25px", fontFamily: "Tajawal" }}>
                  Profession
                </div>
              </Card.Header>
              <Card.Body style={{ padding: "45px" }}>
                <Row style={{ margin: "20px" }}>
                  <Col>
                    Permanent Address :
                  </Col>
                  <Col>
                    Temporary Address :
                  </Col>
                </Row>
                <Row style={{ margin: "40px 20px" }}>
                  <Col>
                    Contact Number :
                  </Col>
                  <Col>
                    Alternative Number :
                  </Col>
                </Row>
                <Col style={{ margin: "40px 20px" }}>
                  Email Address :
                </Col>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Footer />
      </div >
    )
  }
}
