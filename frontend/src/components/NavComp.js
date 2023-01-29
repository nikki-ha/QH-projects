import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import '../styles/NavComp.css'

export default class NavbarComp extends Component {
  render() {
    return (        
    <div>
      <div>
          <Navbar className="color-nav" variant={"dark"} expand="sm">
              <Navbar.Brand href="#home">QXR</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link href="#home">Browse</Nav.Link>
                  <Nav.Link href="#about">Sign Up</Nav.Link>
                </Nav>
              </Navbar.Collapse>
          </Navbar>
      </div>
    </div>
    )
  }
}