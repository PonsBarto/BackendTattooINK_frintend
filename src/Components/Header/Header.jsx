import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, userData } from "../../Pages/userSlice";
import { useEffect } from "react";

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userRdxData = useSelector(userData);

  const token = userRdxData.credentials ? userRdxData.credentials.token : null;
  const decoded = userRdxData.credentials?.userData;

  const logMeOut = () => {
    dispatch(logout({ credentials: {} }));
    setTimeout(() => {
      navigate();
    });
  };
  return (
    <Navbar
      style={{ backgroundColor: "#101010" }}
      variant="dark"
      expand="lg"
      className="text-light"
      id="navbar"
    >
      <Container className="container">
        <Navbar.Brand href="/" className="ms-auto">
          Tattooink
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="Artists">Artists</Nav.Link>
            <NavDropdown title="My account" id="basic-nav-dropdown">
              {!token ? (
                <>
                  <NavDropdown.Item href="login">Login</NavDropdown.Item>
                  <NavDropdown.Item href="register">Register</NavDropdown.Item>
                </>
              ) : decoded.userRoles === "super_admin" ? (
                <>
                  <NavDropdown.Item href="profile">Profile</NavDropdown.Item>
                  <NavDropdown.Item href="users">
                    Users
                  </NavDropdown.Item>
                  <NavDropdown.Item href="allappointments">
                    all appointments
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/" onClick={() => logMeOut()}>
                    Log out
                  </NavDropdown.Item>
                </>
              ) : decoded.userRoles === "artist" ? (
                <>
                  <NavDropdown.Item href="profile">Profile</NavDropdown.Item>
                  <NavDropdown.Item href="myappointments">
                    My Appointments
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/" onClick={() => logMeOut()}>
                    Log out
                  </NavDropdown.Item>
                </>
              ) : (
                <>
                  <NavDropdown.Item href="profile">Profile</NavDropdown.Item>
                  <NavDropdown.Item href="appointments">
                    Schedule an appointment
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/" onClick={() => logMeOut()}>
                    Log out
                  </NavDropdown.Item>
                </>
              )}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};