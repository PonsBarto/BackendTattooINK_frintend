import { useEffect, useState } from "react";
import "./Users.css";
import { CustomInput } from "../../components/CustomInput/CustomInput.JSX";
import { bringAllCharacters } from "../../services/apiCalls";
import { UserCard } from "../../components/UserCard/UserCard";

export const Users = () => {
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

  const buttonHamdler = () => {
    bringAllCharacters().then((characters) => {
      setCharacters(characters);
    });
  };

  useEffect(() => {
    console.log(characters);
  }, [characters]);

  useEffect(() => {
    //console.log(userData)
  }, [userData]);

  return (
    <div className="miDiv">
      <CustomInput
        type={"text"}
        name={"name"}
        handler={inputHandler}
      ></CustomInput>
      <CustomInput
        type={"email"}
        name={"email"}
        handler={inputHandler}
      ></CustomInput>
      <CustomInput
        type={"password"}
        name={"password"}
        handler={inputHandler}
      ></CustomInput>
      <h1>{userData.name}</h1>
      <div className="apiCallButton" onClick={buttonHamdler}></div>
      <div className="UserContainer">
        {characters.length > 0 ? (
          <>
            {characters.map((char) => {
              return (
                <UserCard
                  id={char.id}
                  image={char.image}
                  name={char.name}
                ></UserCard>
              );
            })}
          </>
        ) : null}
      </div>
    </div>
  );
};
