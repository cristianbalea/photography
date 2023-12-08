import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MainNavigation.scss";

function MainNavigation() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/">Cristian Foto&Video</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link href="/shop">Magazin</Nav.Link>
            <Nav.Link href="/services">Servicii foto</Nav.Link>
            <Nav.Link href="/about">Despre noi</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavigation;
