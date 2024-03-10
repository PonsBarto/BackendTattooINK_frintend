import "./ArtistCard.css"
export const ArtistCard = ({id, name}) => {

    return (

        <div className="artistCard" key={id}>
        <div className="cardContent">
          {/* <img className="artist-img" src={photo}></img> */}
          <div id="artist-name">{name}</div>
        </div>
      </div>

    );
}