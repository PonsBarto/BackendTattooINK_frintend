import { useEffect, useState } from "react";
import { ArtistCard } from "../../Components/ArtistCard/ArtistCard";
import { bringAllArtist } from "../../Services/ApiCalls";
import "./Tatuadores.css";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
export const Tatuadores = () => {
  const [artists, setArtists] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };
  const buttonHandler = () => {
    let personajeSeleccionado = {};
    artists.forEach((artist) => {
      if (inputValue === artist.name) {
        personajeSeleccionado = artist;
        localStorage.setItem("details", JSON.stringify(artist));
        navigate("/characterdetail");
      }
    });
  };
  useEffect(() => {
    if (artists.length === 0) {
      bringAllArtist().then((arts) => {
        setArtists(arts);
      });
    }
  }, []);

  return (
    <>
      <div className="topTatu">
        <h1 className="tituloTatus">
          Conoce a <br />
          nuestro equipo
        </h1>
      </div>
      <div className="apiCallButton" onClick={buttonHandler}></div>

      <div className="artistContainer">
        {artists &&
        artists.userArtistIds &&
        artists.userArtistIds.length > 0 ? (
          artists.userArtistIds.map((artist) => {
            return (
              <ArtistCard
                key={artist.id}
                name={artist.name}
                photo={artist.photo}
              />
            );
          })
        ) : (
          <p>No hay artistas para mostrar.</p>
        )}
      </div>
    </>
  );
};
