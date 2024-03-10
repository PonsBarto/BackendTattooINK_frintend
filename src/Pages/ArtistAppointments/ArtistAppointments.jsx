import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { bringArtistAppointments } from "../../Services/apiCalls";

export const ArtistAppointments = () => {
    const [myAppointments, setMyAppointments] = useState([]);
    const userRdxData = useSelector(userData);
    const token = userRdxData.credentials.token;
    const artistId = userRdxData.credentials.userData.artistId;

    useEffect(() => {
        if (token && artistId) {
            bringArtistAppointments(token, artistId)
                .then((appointments) => {
                    setMyAppointments(appointments);
                })
                .catch((error) => {
                    console.error("Error fetching appointments:", error);
                });
        }
    }, [token, artistId]);
    console.log(token, artistId);

    return (
        <div>
            {myAppointments.map((appointment) => (
                <div key={appointment.id}>
                    <p>Appointment ID: {appointment.id}</p>
                    <p>Artist ID: {appointment.artist_id}</p>
                    <p>Date: {appointment.date}</p>
                </div>
            ))}
        </div>
    );
}