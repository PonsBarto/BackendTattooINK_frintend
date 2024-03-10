import "./ArtistCard.css"
export const ArtistCard = ({id,photo, name}) => {

    return (

        <div className="artistCard" key={id}>
        <div className="cardContent">
          <img className="artist-img" src={photo}></img>
          <div id="artistName">{name}</div>
        </div>
      </div>

    );
}