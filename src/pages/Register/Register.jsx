import { useEffect, useState } from "react";
import "./Register.css";
import { LoginInput } from "../../components/LoginInput/LoginInput";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createNewUser, userLogin } from "../Services/apiCalls";
import { login, userData } from "../userSlice";
import { jwtDecode } from "jwt-decode";

export const Register = () => {
  const [characters, setCharacters] = useState([]);
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const inputHandler = (event) => {
    setRegisterData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const dispatch = useDispatch();
  const userRdxData = useSelector(userData);

  const navigate = useNavigate();

  const buttonHandler = () => {
    const credentials = {
      email: registerData.email,
      password: registerData.password,
    };
    createNewUser(registerData).then(() => {
      userLogin(credentials)
        .then((token) => {
          if (!token) {
            navigate("/login");
            return null;
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
        })
        .catch((err) => console.error("Ha ocurrido un error", err));
    });
  };

  return (
    <div className="login">
      <div className="loginDiv">
        <div className="input">
          <div className="inputBox">
            <label>NOMBRE</label>
            <LoginInput type="text" name="name" handler={inputHandler} />
            <label>EMAIL</label>
            <LoginInput type="email" name="email" handler={inputHandler} />
            <label>CONTRASEÑA</label>
            <LoginInput
              type="password"
              name="password"
              handler={inputHandler}
            />
            <input
              type="submit"
              value="Registrarse"
              onClick={buttonHandler}
            ></input>
            <h1>{userData.name}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};