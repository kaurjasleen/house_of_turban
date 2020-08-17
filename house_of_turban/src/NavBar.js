import React, { Component } from "react";
import { Link } from '@reach/router';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

class NavBar extends Component {
  render() {
    return (
        <div>
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="#home">put LOGO here</Navbar.Brand>
      <Nav className="mr-auto">
        <Link to='/' className="nav-link">Home</Link>
        <Link to='/ItemPage' className="nav-link">ItemPage</Link>
        <Link to='/Login' className="nav-link">My Account</Link>
        <Link to='/Register' className="nav-link">Register</Link>

      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-primary">Search</Button>
      </Form>
    </Navbar>
  </div>
    );
  }
}
export default NavBar;
