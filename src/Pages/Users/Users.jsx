import { useEffect, useState } from "react";
import { bringAllUsers, removeUser } from "../../Services/apiCalls";
import { useSelector } from "react-redux";
import { Button, Card } from "react-bootstrap";
import { userData } from "../userSlice";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const userRdxData = useSelector(userData);
  const token = userRdxData.credentials.token;

  useEffect(() => {
    if (users.length === 0) {
      bringAllUsers(token).then((res) => {
        setUsers(res.results);
      });
    }
  }, []);

  const removeButtonHandler = (id) => {
    removeUser(token, id).then(() => {
      setUsers(users.filter((user) => user.id !== id)); // Actualiza el estado excluyendo el usuario eliminado
    });
  };

  console.log(users);
  return (
    <div className="container">
      <h1>Meet the team</h1>
      <div className="row">
        {users && users.length > 0 ? (
          users.map((user) => (
            <div className="col-md-4 mb-4" key={user.id}>
              <Card>
                <Card.Body>
                  <Card.Title>
                    {user.name} {user.last_name}
                  </Card.Title>
                  <Card.Text>{user.email}</Card.Text>
                  <Card.Text>{user.phone_number}</Card.Text>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => removeButtonHandler(user.id)}
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))
        ) : (
          <p>No hay artistas para mostrar.</p>
        )}
      </div>
    </div>
  );
};