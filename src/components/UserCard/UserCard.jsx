import "./UserCard.css"

export const UserCard = ({id, image, name}) => {

    return (
        <div className="user-card" key={id}>
            <div className="card-content">
            <img className="user-img" src={image}></img>
            <h2 di="user-name">{name}</h2>
            </div>
        </div>
    )
}