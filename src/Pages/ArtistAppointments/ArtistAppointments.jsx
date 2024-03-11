import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { bringArtistAppointments } from "../../Services/apiCalls";

export const ArtistAppointments = () => {
    const [myAppointments, setMyAppointments] = useState([]);
    const userRdxData = useSelector(userData);
    const token = userRdxData.credentials.token;
    
    useEffect(() => {
        if (myAppointments.length === 0) {
            bringArtistAppointments(token)
                .then((myAppointments) => {
                    setMyAppointments(myAppointments);
                    console.log("Appointments:", res.results); // Muestra las citas del artista
                })

        }
    }, [token, id]); // Asegúrate de incluir token y id en la lista de dependencias

    console.log("Artist ID:", id); // Muestra el ID del artista en el console.log

    return ('hel'
        // <div>
        //     {myAppointments.map((appointment) => (
        //         <div key={appointment.id}>
        //             <p>Appointment ID: {appointment.id}</p>
        //             <p>Artist ID: {appointment.artist_id}</p>
        //             <p>Date: {appointment.date}</p>
        //         </div>
        //     ))}
        // </div>
    );
}