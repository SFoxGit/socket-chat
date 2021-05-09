import React from "react";
import { Navbar, Nav } from 'react-bootstrap'

function Header() {

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top" className="bg-dark" style={{height: '6vh'}}>
      <Navbar.Brand className="brand" href="/">SocketChat</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          <Nav.Link href="/login">Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;