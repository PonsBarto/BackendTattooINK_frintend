import { useEffect, useState } from "react";
import "./Home.css";
import { InputLogin } from "../../components/LoginInput/LoginInput";
import { bringAllCharacters } from "../../services/apiCalls";
import { ArtistCard } from "../../components/ArtistCard/ArtistCard";

export const Home = () => {
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
      <InputLogin
        type={"text"}
        name={"name"}
        handler={inputHandler}
      ></InputLogin>
      <InputLogin
        type={"email"}
        name={"email"}
        handler={inputHandler}
      ></InputLogin>
      <InputLogin
        type={"password"}
        name={"password"}
        handler={inputHandler}
      ></InputLogin>
      <h1>{userData.name}</h1>
      <div className="apiCallButton" onClick={buttonHamdler}></div>
      <div className="UserContainer">
        {characters.length > 0 ? (
          <>
            {characters.map((char) => {
              return (
                <ArtistCard
                  id={char.id}
                  image={char.image}
                  name={char.name}
                ></ArtistCard>
              );
            })}
          </>
        ) : null}
      </div>
    </div>
  );
};
