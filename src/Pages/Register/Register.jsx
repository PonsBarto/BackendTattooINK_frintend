import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { login, userData } from "../userSlice";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { userSignUp, userLogin } from "../../Services/apiCalls";

export const Register = () => {
  const [signUpData, setSignUpData] = useState({
    name: "",
    last_name: "",
    address: "",
    email: "",
    password: "",
    phone_number: "",
  });

  const inputHandler = (event) => {
    setSignUpData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const dispatch = useDispatch();
  const userRdxData = useSelector(userData);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await userSignUp(signUpData);
      const credentials = {
        email: signUpData.email,
        password: signUpData.password,
      };
      const token = await userLogin(credentials);
      if (!token) {
        navigate("/login");
        return;
      }
      const decodedToken = jwtDecode(token);
      const data = {
        token: token,
        userData: decodedToken,
      };
      dispatch(login({ credentials: data }));
      setTimeout(() => {
        navigate("/profile");
      });
    } catch (error) {
      console.error("Ha ocurrido un error", error);
    }
  };

  return (
    <div className="container mt-3" id="signUpBox">
      <h1>Register</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="name"
            value={signUpData.name}
            onChange={inputHandler}
            required
          />
        </Form.Group>
        <Form.Group controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter last name"
            name="last_name"
            value={signUpData.last_name}
            onChange={inputHandler}
            required
          />
        </Form.Group>
        <Form.Group controlId="formAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter address"
            name="address"
            value={signUpData.address}
            onChange={inputHandler}
            required
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={signUpData.email}
            onChange={inputHandler}
            required
          />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            name="password"
            value={signUpData.password}
            onChange={inputHandler}
            required
          />
        </Form.Group>
        <Form.Group controlId="formPhoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter phone number"
            name="phone_number"
            value={signUpData.phone_number}
            onChange={inputHandler}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
};