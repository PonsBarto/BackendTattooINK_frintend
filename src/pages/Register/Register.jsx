import { useEffect, useState } from "react";
import "./Register.css";
import { LoginInput } from "../../components/LoginInput/LoginInput";
import { bringAllCharacters } from "../../services/apiCalls";

export const Register = () => {
  const [characters, setCharacters] = useState([]);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const inputHandler = (event) => {
    setUserData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const buttonHandler = () => {
    bringAllCharacters()
      .then((characters) => {
        setCharacters(characters);
      })
      .catch((error) => {
        console.error("Error fetching characters:", error);
      });
  };

  return (
    <div className="login">
      <div className="loginDiv">
        <div className="input">
          <div className="inputBox">
            <label>NOMBRE</label>
            <LoginInput
              type="text"
              name="name"
              handler={inputHandler}
            />
            <label>EMAIL</label>
            <LoginInput
              type="email"
              name="email"
              handler={inputHandler}
            />
            <label>CONTRASEÑA</label>
            <LoginInput
              type="password"
              name="password"
              handler={inputHandler}
            />
            <input type="submit" value="Registrarse" onClick={buttonHandler}></input>
            <h1>{userData.name}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
