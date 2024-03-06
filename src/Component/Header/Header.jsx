import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  const style = {
    head: {
      width: "44px",
    },
    Image: {
      width: "100%",
      height: "44px",
      borderRadius: "50%",
    },
  };
  return (
    <>
      <div>
        <Navbar expand="lg" className="bg-primary">
          <Container>
            <Navbar.Brand href="#home">
              {/* <i class="bi bi-bar-chart-fill"></i> */}
              <img src="../../../public/Images/bar-chart-fill.svg" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Online Food Store</Nav.Link>
                <Nav.Link href="#link">Source</Nav.Link>
                <NavDropdown title="Food Type" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Chicken Burger
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Beef Burger
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Fish Burger
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    French Fries
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <div style={style.head}>
                <img style={style.Image} src="../../../public/Images/br4.jpg" />
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
