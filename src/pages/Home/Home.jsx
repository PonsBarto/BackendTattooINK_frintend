import { useEffect, useState } from "react";
import "./Home.css"
import { CustomInput } from "../../components/CustomInput/CustomInput.JSX";
import { bringAllCharacters } from "../../services/apiCalls";

export const Home = () => {

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const inputHandler = (event) => {
    setUserData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  }

  const buttonHamdler = () => {
    bringAllCharacters()
  };

  useEffect(() => {
        console.table(userData)
  }, [userData])


  return (
    <div className="miDiv">
      <CustomInput type={"text"} name={"name"} handler={inputHandler}></CustomInput>
      <CustomInput type={"email"} name={"email"} handler={inputHandler}></CustomInput>
      <CustomInput type={"password"} name={"password"} handler={inputHandler}></CustomInput>
      <div className="apiCallButton" onClick={buttonHamdler}></div>
    </div>
  );
};
