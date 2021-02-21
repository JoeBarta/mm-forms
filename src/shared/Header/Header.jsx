import { Link } from "react-router-dom";

import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar variant="light" bg="light" expand="lg">
      <Navbar.Brand href="#home">Hello!</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/merchant-list" className="nav-link">
            Merchants
          </Link>
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
