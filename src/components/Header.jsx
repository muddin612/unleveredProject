import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/logo-no-background.png";
import "./Header.css";

export default function Header() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container className="justify-content-center">
        <Navbar.Brand className="mx-auto">
          <img
            src={Logo}
            className="d-inline-block align-top logo"
            alt="Logo"
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
