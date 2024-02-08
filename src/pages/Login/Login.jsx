import { useEffect, useState } from "react";
import "./Login.css";
import { InputLogin } from "../../Components/InputLogin/inputLogin";
import { userLogin } from "../../services/apiCalls";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { login, userData } from "../userSlice";
import { useDispatch, useSelector } from "react-redux";
export const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  // redux en modo escritura
  const dispatch = useDispatch();
  // redux en modo lectura
  const userRdxData = useSelector(userData);
  const navigate = useNavigate();
  const inputHandler = (event) => {
    setCredentials((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const buttonHandler = () => {
    userLogin(credentials)
      .then((token) => {
        const decodedToken = jwtDecode(token);
        const data = {
          token: token,
          userData: decodedToken,
        };
        dispatch(login({ credentials: data }));
      })
      .catch((err) => console.error("error en linea 36", err));
  };

  useEffect(() => {
    if (userRdxData) {
      // navigate("/");
    }
  }, [userRdxData, navigate]);
  return (
    <div className="login">
      <div className="loginDiv">
        <div className="input">
          <div className="inputBox">
            <label>EMAIL</label>
            <InputLogin
              type={"email"}
              name={"email"}
              handler={inputHandler}
            ></InputLogin>
            <label>CONTRASEÑA</label>
            <InputLogin
              type={"password"}
              name={"password"}
              handler={inputHandler}
            ></InputLogin>
            <input
              type="submit"
              name=""
              onClick={buttonHandler}
              value="Entrar"
            ></input>
            {/* <h1>{userData.name}</h1> */}
          </div>
        </div>
      </div>
    </div>
  );
};
