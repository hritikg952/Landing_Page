import React, { useState } from "react";
import "./header.css";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
function Header() {
  const [navBar, setNavbar] = useState(false);

  const changeNavbarBG = () => {
    if (window.scrollY >= 618) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeNavbarBG);
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className={navBar ? "color-nav active" : "color-nav"}
      variant="light"
      fixed="top"
    >
      <Container>
        <Navbar.Brand
          href="#home"
          style={{ fontSize: "1.7rem", fontWeight: "600" }}
        >
          Unice
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <NavDropdown title="HOME" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#">Agency</NavDropdown.Item>
              <NavDropdown.Item href="#">App Landing 1</NavDropdown.Item>
              <NavDropdown.Item href="#">App Landing 2</NavDropdown.Item>
              <NavDropdown.Item href="#">Event</NavDropdown.Item>
              <NavDropdown.Item href="#">Gym</NavDropdown.Item>
              <NavDropdown.Item href="#">Music</NavDropdown.Item>
              <NavDropdown.Item href="#">Resume</NavDropdown.Item>
              <NavDropdown.Item href="#">Saas1</NavDropdown.Item>
              <NavDropdown.Item href="#">Saas2</NavDropdown.Item>
              <NavDropdown.Item href="#">Wedding</NavDropdown.Item>
              <NavDropdown.Item href="#">Yoga</NavDropdown.Item>
              <NavDropdown.Item href="#">Ecommerce</NavDropdown.Item>
              <NavDropdown.Item href="#">Portfolio-Metro</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="BLOG" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#">Blog</NavDropdown.Item>
              <NavDropdown.Item href="#">Blog page</NavDropdown.Item>
              <NavDropdown.Item href="#">Blog domain</NavDropdown.Item>
              <NavDropdown.Item href="#">Blog front</NavDropdown.Item>
              <NavDropdown.Item href="#">Blog end</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="PAGES" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#">404</NavDropdown.Item>
              <NavDropdown.Item href="#">About Us</NavDropdown.Item>
              <NavDropdown.Item href="#">Dashboard</NavDropdown.Item>
              <NavDropdown.Item href="#">Contact Up</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Element" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#">Alert</NavDropdown.Item>
              <NavDropdown.Item href="#">Accordation</NavDropdown.Item>
              <NavDropdown.Item href="#">Box shadow</NavDropdown.Item>
              <NavDropdown.Item href="#">Button</NavDropdown.Item>
              <NavDropdown.Item href="#">Alert</NavDropdown.Item>
              <NavDropdown.Item href="#">Accordation</NavDropdown.Item>
              <NavDropdown.Item href="#">Box shadow</NavDropdown.Item>
              <NavDropdown.Item href="#">Button</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="PORTFOLIO" id="collasible-nav-dropdown">
              <NavDropdown.Item>Portfolio</NavDropdown.Item>
              <NavDropdown.Item href="#">Portfolio Details</NavDropdown.Item>
              <NavDropdown.Item href="#">Trending Layouts</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="SHOP" id="collasible-nav-dropdown">
              <NavDropdown.Item>Shop Categories</NavDropdown.Item>
              <NavDropdown.Item>Shop Categories</NavDropdown.Item>
              <NavDropdown.Item href="#">Product pages</NavDropdown.Item>
              <NavDropdown.Item href="#">Product pages</NavDropdown.Item>
              <NavDropdown.Item href="#">Shop Pages</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="FEATURE" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#">Header Options</NavDropdown.Item>
              <NavDropdown.Item href="#">Breadcrumb Option</NavDropdown.Item>
              <NavDropdown.Item href="#">Footer Options</NavDropdown.Item>
              <NavDropdown.Item href="#">Gallery Types</NavDropdown.Item>
              <NavDropdown.Item href="#">Shop Pages</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
