import React, { Component } from 'react';
import { Navbar, Form, Button, FormControl, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#E8F3FF" }}>
        <Navbar collapseOnSelect expand="lg" className="navbar" style={{ zIndex: "5", color: "black", padding: "20px" }}>
          <Navbar.Brand href="/" style={{ marginLeft: "135px" }}><b>HOME HELPER</b></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Nav style={{ marginRight: "135px" }}>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/category">Category</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
              <Button as={Link} to="/signup" style={{ marginLeft: "30px", border: "0px", borderRadius: "0px", background: "#4AAEC1" }}>Sign Up</Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
