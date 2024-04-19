import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const CustomNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="transparent">
      <Container>
        <Navbar.Brand className="white_color" to="/">
          GeoSpotter
        </Navbar.Brand>
        <Navbar.Toggle
          className="white_color"
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse className="white_color" id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link className="white_color" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="white_color" eventKey={2} href="/admin">
              Admin
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
