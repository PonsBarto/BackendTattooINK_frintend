import { useEffect, useState } from "react";
import { ArtistCard } from "../../Components/ArtistCard/ArtistCard";
import { bringAllArtists } from "../../Services/apiCalls";
import "./Artists.css";

export const Artists = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    if (artists.length === 0) {
      bringAllArtists().then((data) => {
        setArtists(data); // Establece los datos directamente
      });
    }
  }, []);

  return (
    <>
      <h1 className="team-title">Meet the team</h1>
      <div className="artistContainer">
        {artists && artists.length > 0 ? (
          artists.map((artist) => {
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