export const UserCard = ({id, name, last_name, email, phone_number}) => {

    return (

        <div className="artistCard" key={id}>
        <div className="cardContent">
          <div id="userName">{name}</div>
          <div id="userLastName">{last_name}</div>
          <div id="userEmail">{email}</div>
          <div id="userPhoneNumber">{phone_number}</div>
        </div>
      </div>
    );
}