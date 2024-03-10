import { useEffect, useState } from "react";
import { ArtistCard } from "../../Components/ArtistCard/ArtistCard";
import { bringAllArtists } from "../../Services/apiCalls";
import "./Artists.css";
// import { useNavigate } from "react-router-dom";

export const Artists = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    if (artists.length === 0) {
      bringAllArtists().then((arts) => {
        setArtists(arts);
      });
    }
  }, []);

  return (
    <>
      {/* <div className="body"> */}
        <h1 className="team-title">Meet the team</h1>
        <div className="artistContainer">
          {artists.length > 0 ? (
            artists.map((artist) => {
              return (
                <ArtistCard
                  key={artist.id}
                  name={artist.name}
                  // photo={artist.photo}
                />
              );
            })
          ) : (
            <p>No hay artistas para mostrar.</p>
          )}
        </div>
      {/* </div> */}
    </>
  );
};