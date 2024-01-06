import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../images/logo.svg"

const Header = () => {
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={color ? "header header-bg" : "header"}
    >
      <Container className="justify-content-between">
        <Navbar.Brand>
          <Nav.Link href="#top">
            <img src={logo} width={100} className="d-inline-block align-top" alt="logo" />
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#top" className="nav-link me-2 fw-bolder">/ Home</Nav.Link>

            <Nav.Link href="#Contact" className="nav-link fw-bolder" >/ Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
