import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../Home/Home";
import { Register } from "../Resgister/Register";
import { Tatuadores } from "../Tatuadores/Tatuadores";
import { Login } from "../Login/Login";
import { Profil } from "../Profile/Profile";

export const Body = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/tatuadores" element={<Tatuadores />} />
        <Route path="/profil" element={<Profil />} />
      </Routes>
    </>
  );
};
