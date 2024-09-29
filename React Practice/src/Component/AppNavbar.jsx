import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const AppNavbar = () => {
  return (
    <Navbar expand="sm" width="100%" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React Practice</Navbar.Brand>
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/dog">Dog Api</Nav.Link>
        <Nav.Link href="/jsonPlaceholderApi">JSON Placeholder</Nav.Link>
      </Container>
    </Navbar>
  );
};
