import "./ArtistCard.css"

export const ArtistCard = ({id, photo, name}) => {

    return (
        <div className="artist-card" key={id}>
            <div className="card-content">
            <img className="artist-img" src={photo}></img>
            <h2 di="artist-name">{name}</h2>
            </div>
        </div>
    )
}