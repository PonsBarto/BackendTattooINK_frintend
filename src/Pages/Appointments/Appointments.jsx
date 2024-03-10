import { useState } from "react";
import "./Appointments.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createAppointment } from "../../Services/apiCalls";
import { userData } from "../userSlice";
import { CustomInput } from "../../Components/CustomInput/CustomInput";
import { jwtDecode } from "jwt-decode";

export const Appointments = () => {
  const [newAppointment, setNewAppointment] = useState({
    user_id: "",
    artist_id: "",
    date: "",
    time: "",
  });
  const dispatch = useDispatch();
  const userRdxData = useSelector(userData);

  const navigate = useNavigate();

  const inputHandler = (event) => {
    setNewAppointment((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
// const token = userRdxData.credentials.token
  const buttonHandler = () => {
    //definimos las credenciales para el futuro login con los datos de registro
    createAppointment(newAppointment, userRdxData)
        .then((res) => {


          // if (!token) {
          //   // navigate("/login");
          //   return null;
          // // }
          // const decodedToken = jwtDecode(token);

          // const data = {
          //   token: token,
          //   userData: decodedToken,
          // };
          dispatch(Appointments({  }));
          setTimeout(() => {
            navigate("/profile");
          });
        })
        .catch((err) => console.error("Ha ocurrido un error", err));
    };
    return (
        <div className="body">
        <div className="requiredFields">
          <CustomInput
            placeholder={"user_id"}
            type={"number"}
            name={"user_id"}
            handler={inputHandler}
          ></CustomInput>
          <CustomInput
            placeholder={"artist_id"}
            type={"number"}
            name={"artist_id"}
            handler={inputHandler}
          ></CustomInput>
          <CustomInput
            placeholder={"date"}
            type={"date"}
            name={"date"}
            handler={inputHandler}
          ></CustomInput>
          <CustomInput
            placeholder={"time"}
            type={"time"}
            name={"time"}
            handler={inputHandler}
          ></CustomInput>
          <input type="submit" onClick={buttonHandler} value="Register"></input>
        </div>
      </div>
    );

  };