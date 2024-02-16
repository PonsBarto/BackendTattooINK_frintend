import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";
import { getProfile } from "../../services/apiCalls";
import { LoginInput } from "../../components/LoginInput/LoginInput";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { jwtDecode } from "jwt-decode";
import moment from "moment";

export const Profile = () => {
  const userRdxDetail = useSelector(userData);
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const token = userRdxDetail.credentials.token;

  useEffect(() => {
    const fetchData = async () => {
      if (!token) {
        navigate("/register");
      } else {
        const res = await getProfile(token);
        setProfileData(res);
      }
    };
    fetchData();
  }, [getProfile, token, navigate]);
  const inputHandler = (event) => {
    setProfileData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  const buttonHandler = () => {
    setIsEditing(!isEditing);
  };
  useEffect(() => {}, [profileData]);
  return (
    <div className="profileDesign">
      <img src={profileData.profileUser?.photo}></img>
      <h1 className="">{profileData.profileUser?.username}</h1>
      <button onClick={() => buttonHandler()}></button>
      {isEditing ? (
        <InputLogin
          name="firstName"
          type="text"
          handler={inputHandler}
        ></InputLogin>
      ) : null}

      <h2>{profileData.profileUser?.name}</h2>
      <h2>{profileData.profileUser?.surname}</h2>
      <p>{profileData.profileUser?.email}</p>

      {profileData.userArtistProfiles &&
        profileData.userArtistProfiles.map((userArtistProfiles) => (
          <div key={userArtistProfiles.id}>
            <p>{userArtistProfiles.name}</p>
          </div>
        ))}
      {profileData.appointments &&
        profileData.appointments.map((appointment) => (
          <div key={appointment.id}>
            {appointment.date ? (
              <p>{moment(appointment.date).format("DD-MM-YYYY")}</p>
            ) : null}
            <p>{appointment?.hour}</p>
          </div>
        ))}
    </div>
  );
};
