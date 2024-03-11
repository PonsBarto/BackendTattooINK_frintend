import { useEffect, useState } from "react";
import "./Artists.css";
import { bringAllArtists } from "../../Services/apiCalls";

export const Artists = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    if (artists.length === 0) {
      bringAllArtists().then((data) => {
        setArtists(data);
      });
    }
  }, []);

  return (
    <>
      <h1 className="team-title">Meet the team</h1>
      <div className="artist-container">
        {artists && artists.length > 0 ? (
          artists.map((artist) => {
            return (
              <div key={artist.id} className="artist-card">
                <img src={artist.photo} alt={artist.name} className="artist-img" />
                <div className="artist-info">
                  <p className="artist-name">{artist.name}</p>
                </div>
              </div>
            );
          })
        ) : (
          <p className="no-artists">No hay artistas para mostrar.</p>
        )}
      </div>
    </>
  );
};