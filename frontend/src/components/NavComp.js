import React, { Component } from "react";
import { Navbar, Nav} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import '../styles/NavComp.css';
import HomeScreen from "../screens/home";
import PostScreen from "../screens/post";
import BrowseScreen from "../screens/browse";

export default class NavbarComp extends Component {
  render() {
    return (        
    <div>
      <Router>
      <div>
          <Navbar className="color-nav" variant={"dark"} expand="sm">
              <Navbar.Brand href="#home">QXR</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link href="/browse">Browse</Nav.Link>
                  <Nav.Link href="/signup">Sign Up</Nav.Link>
                </Nav>
              </Navbar.Collapse>
          </Navbar>
      </div>
      <div>
        <Routes>
          <Route exact path="/home" element={<HomeScreen/>}/>
          <Route exact path="/browse" element={<BrowseScreen/>}/>
          <Route exact path="/post" element={<PostScreen/>}/>
        </Routes>
      </div>
      </Router>
    </div>
    )
  }
}