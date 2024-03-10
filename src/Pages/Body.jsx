import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./Home/Home";
import { Register } from "./Register/Register";
import { Login } from "./Login/Login";
import { Profile } from "./Profile/Profile";
import { Artists } from "./Artists/Artists";
import { Appointments } from "./Appointments/Appointments";
import { Users } from "./Users/Users";


export const Body = () => {
    return (
        <>
            <Routes>
                <Route path="*" element={<Navigate to="/" />}/>
                <Route path="/" element={<Home/>} />
                <Route path="/Register" element={<Register/>} />
                <Route path="/Login" element={<Login/>} />
                <Route path="/Profile" element={<Profile/>} />
                <Route path="/Artists" element={<Artists/>} />
                <Route path="/Appointments" element={<Appointments/>} />
                <Route path="/Users" element={<Users/>} />

            </Routes>
        </>
    )
}