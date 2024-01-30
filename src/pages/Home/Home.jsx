import { useEffect, useState } from "react";
import "./Home.css"

export const Home = () => {

  const [userData, setUserData] = useState({
    name: '',
    email: '',
  });

  const inputHandler = (event) => {
    setUserData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  }

  useEffect(() => {
        console.log(userData, 'userdata esta funcionando')
  }, [userData])


  return (
    <div className="miDiv">
      <input type="text" name="name" placeholder="insert your name" onChange={(e) => inputHandler(e)}></input>
      <input type="email" name="email" placeholder="insert your email" onChange={(e) => inputHandler(e)}></input>
    </div>
  );
};
