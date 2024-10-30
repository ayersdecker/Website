import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

import logo from '../../assets/ficus.png';

function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <img src={logo} className="App-logo" alt="logo"  />
        <Navbar.Brand className='Navbar-Title' href="#home">Decker Ayers</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#art">Art</Nav.Link>
            <NavDropdown title="Links" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Github</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">LinkedIn</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Instagram</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
