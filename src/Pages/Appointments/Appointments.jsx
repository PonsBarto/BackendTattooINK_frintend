import React, { useEffect, useState } from "react";
import "./Appointments.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createAppointment, bringAllArtists } from "../../Services/apiCalls"; // Asegúrate de importar bringAllArtists desde tus apiCalls
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

  const [artists, setArtists] = useState([]);
  
  useEffect(() => {
    if (artists.length === 0) {
      bringAllArtists().then((arts) => {
        console.log("Artists:", arts); // Imprime los datos de artists
        setArtists(arts);
      });
    }
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputHandler = (event) => {
    setNewAppointment((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const buttonHandler = () => {
    const token = userRdxData.credentials.token;
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
        <label htmlFor="artist_id">Select Artist:</label>
        <select
          name="artist_id"
          value={newAppointment.artist_id}
          onChange={inputHandler}
        >
          <option value="">Select an artist</option>
          {artists.map((artist) => (
            <option key={artist.id} value={artist.id}>
              {artist.name}
            </option>
          ))}
        </select>
        <CustomInput
          placeholder={"date"}
          type={"date"}
          name={"date"}
          handler={inputHandler}
        />
        <CustomInput
          placeholder={"time"}
          type={"time"}
          name={"time"}
          handler={inputHandler}
        />
        <input type="submit" onClick={buttonHandler} value="Register" />
      </div>
    </div>
  );
};