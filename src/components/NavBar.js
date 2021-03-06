import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import { Link } from 'react-router-dom';
import imgCurr from '../imges/currency-exchange-emoji.png';

const Navbar = () => (
      <ReactBootStrap.Row>
        <ReactBootStrap.Col>               
            <ReactBootStrap.Navbar 
                  style={{marginBottom: "0", paddingTop: "0",  paddingRight: "0", 
                          paddingLeft:"0", paddingBottom: "0"}} inverse="true" 
                          collapseOnSelect expand="lg" bg="light" variant="light">
            <ReactBootStrap.Navbar.Brand as={Link} to={process.env.PUBLIC_URL + "/"} style={{cursor: 'pointer'}}>
            <img
                  alt=""
                  src={imgCurr}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{' '}
                Trading Center</ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
              <ReactBootStrap.Nav className="mr-auto">
              </ReactBootStrap.Nav>
              <ReactBootStrap.Nav>
                <ReactBootStrap.Nav.Link as={Link} to="/about">About</ReactBootStrap.Nav.Link>
                <ReactBootStrap.Nav.Link as={Link} eventKey={2} to="/contact">
                  Contact Us
                </ReactBootStrap.Nav.Link>
              </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar.Collapse>
          </ReactBootStrap.Navbar>
          </ReactBootStrap.Col>
      </ReactBootStrap.Row>
)

export default Navbar; 