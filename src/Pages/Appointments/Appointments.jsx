import { useState } from "react";
import "./Appointments.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createAppointment } from "../../Services/apiCalls";
import { userData } from "../userSlice";
import { CustomInput } from "../../Components/CustomInput/CustomInput";
import { jwtDecode } from "jwt-decode";

export const Appointments = () => {
  const userRdxData = useSelector(userData);

  const myId = userRdxData.credentials.userData.userId;
  const [newAppointment, setNewAppointment] = useState({
    user_id: myId,
    artist_id: "",
    date: "",
    time: "",
  });
  console.log(myId)

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const inputHandler = (event) => {
    setNewAppointment((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  console.table(event.target.value)
// const token = userRdxData.credentials.token
const buttonHandler = () => {
  const token = userRdxData.credentials.token;
  console.log(newAppointment)
  if (!token) {
    // Si el token no está presente, maneja el caso apropiadamente, por ejemplo, redireccionando al usuario a la página de inicio de sesión
    // navigate("/login");
    return;
  }

  createAppointment(token, newAppointment)
    .then((res) => {
      console.log(res)
      const decodedToken = jwtDecode(token);
      const data = {
        token: token,
        userData: decodedToken,
      };

      // Asegúrate de despachar la acción correcta, si es necesario
      // dispatch(Appointments({}));

      setTimeout(() => {
        navigate("/profile");
      });
    })
    .catch((err) => {
      console.error("Ha ocurrido un error", err);
      // Aquí podrías proporcionar retroalimentación al usuario o realizar otras acciones según el error
    });
};

    return (
        <div className="body">
        <div className="requiredFields">
          {/* <CustomInput
            placeholder={"user_id"}
            type={"number"}
            name={"user_id"}
            handler={inputHandler}
          ></CustomInput> */}
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