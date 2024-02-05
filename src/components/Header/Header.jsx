import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const Header = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/home">Backend Tattoo INK</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Nosotros</Nav.Link>
            <Nav.Link href="/Users">Users</Nav.Link>
            <Nav.Link href="#pricing">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};