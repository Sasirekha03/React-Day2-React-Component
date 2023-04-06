

import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './logo.svg'

//import { Router, Switch, Route } from "react-router-dom";
//import { BrowserRouter as Router } from 'react-router-dom';

//import Vdart from './Vdart.png';


//import Nav from 'react-bootstrap/Nav';
function Naving() {
  return (
    
    

    <div>
    
      {/*<img src={Vdart}alt="Company Logo" className="logo" ></img>*/}

      <Navbar bg="dark" variant="dark" logo={logo}>
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Featured products</Nav.Link>
            <Nav.Link href="#pricing">About us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}



export default Naving;