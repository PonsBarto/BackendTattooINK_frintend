import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Profile/Profile.css";
import {
  getArtistById,
  getProfile,
  updateUser,
} from "../Services/ApiCalls.jsx";
import { LoginInput } from "../../components/LoginInput/LoginInput.jsx";
import { useDispatch, useSelector } from "react-redux";
import { updateUserData, userData } from "../userSlice.js";
import { jwtDecode } from "jwt-decode";
import moment from "moment";
import { CardAppointment } from "../../components/CardAppointments/CardAppointments.jsx";
import { AppointmentCard } from "../../Components/AppointmentsCard/AppointmentsCard.jsx";


export const TatuProfile = () => {
  const userRdxDetail = useSelector(userData);
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const token = userRdxDetail.credentials.token;
  const decodedToken = jwtDecode(token);
  const userId = decodedToken.userId;
  const dispatch = useDispatch();
  const [editableProfileData, setEditableProfileData] = useState({});


  useEffect(() => {
    const fetchData = async () => {
      if (!token) {
        navigate("/register");
      } else {
        const res = await getArtistById(token);
        setProfileData(res);
        setEditableProfileData({

        });
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
  }, [profileData]);

  const inputHandler = (event) => {
    setEditableProfileData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const buttonHandler = () => {
    setIsEditing(!isEditing);
  };

  const saveChanges = async () => {
    if (editableProfileData) {
    
      const updatedData = {
        name: editableProfileData.name,
        username: editableProfileData.username,
        surname: editableProfileData.surname,
        photo: editableProfileData.photo,
      };

      if (token) {
        try {
          updateUser(token, updatedData);
          setProfileData((prevState) => ({
            ...prevState,
            profileUser: {
              ...prevState.profileUser,
              name: updatedData.name,
              username: updatedData.username,
              surname: updatedData.surname,
              photo: updatedData.photo,
            },
          }));
          setIsEditing(false);
        } catch (error) {
          console.error("Error actualizar user: ", error.response);
        }
      } else {
        console.error("error guardar");
      }
    } else {
      console.error("userData is undefined");
    }
  };
  return (
    <>
      <div className="profileDesign">
        <div className="userInfo">
          <img src={profileData.photo}></img>
          <h1 className="">{profileData.username}</h1>
          <button onClick={() => buttonHandler()}>
            {isEditing ? "" : "Edit profile"}
          </button>
        </div>
        <div className="updateData">
          {isEditing ? (
            <>
              <LoginInput
                name="name"
                type="text"
                handler={inputHandler}
                value={editableProfileData.name}
                placeholder="Nombre"
              ></LoginInput>
              <LoginInput
                name="surname"
                type="text"
                handler={inputHandler}
                value={editableProfileData.surname}
                placeholder="surname"
              ></LoginInput>
              <LoginInput
                name="email"
                type="email"
                handler={inputHandler}
                value={editableProfileData.email}
                placeholder="email"
              ></LoginInput>
              <LoginInput
                name="photo"
                type="text"
                handler={inputHandler}
                value={editableProfileData.photo}
                placeholder="Change your picture."
              ></LoginInput>
            </>
          ) : null}
        </div>

        {isEditing ? (
          <button onClick={saveChanges}>Guardar cambios</button>
        ) : null}

        <h2>{profileData.profileUser?.name}</h2>
        <h2>{profileData.profileUser?.surname}</h2>
        <p>{profileData.profileUser?.email}</p>

        <div className="appointmentsUserContainer">
          {profileData.appointments &&
            profileData.userArtistIds.map((userArtistId, index) => (
              <CardAppointment
                key={index}
                artistName={userArtistId}
                date={moment(profileData.appointments[index].date).format(
                  "DD-MM-YYYY"
                )}
                hour={profileData.appointments[index].hour}
              />
            ))}
        </div>
      </div>
    </>
  );
};
