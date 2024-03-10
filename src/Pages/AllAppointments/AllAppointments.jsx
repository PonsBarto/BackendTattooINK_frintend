import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { bringAllAppointments } from "../../Services/apiCalls";


export const AllAppointments =  () => {
    const [appointments, setAppointments] = useState([]);
    const userRdxData = useSelector(userData);
    const token = userRdxData.credentials.token;

    useEffect(() => {
            bringAllAppointments(token, appointments)
                .then((appointments) => {
                    setAppointments(appointments);
                })
                .catch((error) => {
                    console.error("Error fetching appointments:", error);
                });

    }, [token]);
    console.log(appointments)



    return ('appointments aqui')
}