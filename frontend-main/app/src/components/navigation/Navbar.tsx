import {
  Nav, Navbar as BootstrapNavbar, Container,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <BootstrapNavbar collapseOnSelect expand="sm" bg="primary" variant="dark">
      <Container>
        <BootstrapNavbar.Brand>Multi Koledar</BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="responsive-navbar-nav" />
        <BootstrapNavbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/" as={Link}>Domov</Nav.Link>
            <Nav.Link to="/calendar" as={Link}>Koledar</Nav.Link>
            <Nav.Link to="/about" as={Link}>O nas</Nav.Link>
            <Nav.Link to="/contact" as={Link}>Kontakt</Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}
