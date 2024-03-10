import { CustomInput } from "../../Components/CustomInput/CustomInput";
import "./Register.css";
import { useEffect, useState } from "react";
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

  // instancio redux en modo lectura
  const userRdxData = useSelector(userData);

  const navigate = useNavigate();

  console.table(signUpData);

  const buttonHandler = () => {
    //definimos las credenciales para el futuro login con los datos de registro
    const credentials = {
      email: signUpData.email,
      password: signUpData.password,
    };
    userSignUp(signUpData).then(() => {
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
    <>
      <div className="body">
        <div className="requiredFields">
          <CustomInput
            placeholder={"name"}
            type={"text"}
            name={"name"}
            handler={inputHandler}
          ></CustomInput>
          <CustomInput
            placeholder={"last_name"}
            type={"text"}
            name={"last_name"}
            handler={inputHandler}
          ></CustomInput>
          <CustomInput
            placeholder={"address"}
            type={"text"}
            name={"address"}
            handler={inputHandler}
          ></CustomInput>
          <CustomInput
            placeholder={"email"}
            type={"email"}
            name={"email"}
            handler={inputHandler}
          ></CustomInput>
          <CustomInput
            placeholder={"password"}
            type={"password"}
            name={"password"}
            handler={inputHandler}
          ></CustomInput>
          <CustomInput
            placeholder={"phone_number"}
            type={"phone_number"}
            name={"phone_number"}
            handler={inputHandler}
          ></CustomInput>
          <input type="submit" onClick={buttonHandler} value="Register"></input>
        </div>
      </div>
    </>
  );
};