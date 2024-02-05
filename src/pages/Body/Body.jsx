import { Navigate, Route, Routes } from "react-router-dom"
import { Home } from "../Home/Home";
import { Register } from "../Resgister/Register";
import { Users } from "../Users/Users";

export const Body = () => {

    return(
        <>
            <Routes>
                <Route path="*" element = {<Navigate to="/" />}/>
                <Route path="/" element = {<Home />}/>
                <Route path="/register" element = {<Register/>}/>
                <Route path="/users" element = {<Users/>}/>
            </Routes>
        </>
    )
}