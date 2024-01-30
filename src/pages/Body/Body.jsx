import { Route, Routes } from "react-router-dom"
import { Home } from "../Home/Home";
import { Register } from "../Resgister/Register";

export const Body = () => {

    return(
        <>
            <Routes>
                <Route path="/" element = {<Home />}/>
                <Route path="/register" element = {<Register/>}/>
            </Routes>
        </>
    )
}