import React, { Component } from 'react'
import { Button, Row, Col, ListGroup, ListGroupItem, Card, Form, FormControl } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Footer from './Footer';

export default class Category extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <div style={{ textAlign: "center", marginTop: "50px", fontSize: "25px" }}>Categories</div>
        <div>
          <Button id="category-button" as={Link} to="">Electricians</Button>
          <Button id="category-button" as={Link} to="">Plumber</Button>
          <Button id="category-button" as={Link} to="">Cleaner</Button>
          <Button id="category-button" as={Link} to="">Porter</Button>
          <Button id="category-button" as={Link} to="">Painter</Button>
          <Button id="category-button" as={Link} to="">Builder</Button>
        </div>
        <div style={{ margin: "30px 135px 30px 1275px", }}>
          <Form inline>
            <FormControl type="text" placeholder="Search" style={{ width: "400px" }} />
            <Button variant="light"><FontAwesomeIcon icon={faSearch} color="#637EB2" /></Button>
          </Form>
        </div>
        <div style={{ margin: "0px 135px" }}>
          <Row>
            <Col>
              <Card style={{ width: "250px" }}>
                <Card.Img variant="top" src="avatar2.svg" style={{ height: "200px", width: "250px", marginTop: "20px" }} />
                <Card.Body>
                  <Card.Title id="movie-title">Name</Card.Title>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>Profession</ListGroupItem>
                    <ListGroupItem><FontAwesomeIcon icon={faMapMarkerAlt} color="#637EB2" style={{ marginRight: "10px" }} />Location</ListGroupItem>
                  </ListGroup>
                </Card.Body>
                <Card.Body>
                  <Card.Link href="#">View Details</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
        <Footer />
      </div>
    )
  }
}