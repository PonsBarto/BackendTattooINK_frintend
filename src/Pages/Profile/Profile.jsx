import "./Profile.css";
import { bringProfile, updateProfile } from "../../Services/apiCalls";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

export const Profile = () => {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState({});
  const userRdxData = useSelector(userData);
  const token = userRdxData.credentials.token;
  const myId = userRdxData.credentials.userData.userId;

  const [editMode, setEditMode] = useState(false);
  const [editableData, setEditableData] = useState({});

  useEffect(() => {
    if (!token) {
      navigate("/register");
    } else {
      bringProfile(token, myId).then((res) => {
        setProfileData(res);
        setEditableData(res); // Inicializar los datos editables con los datos del perfil
      });
    }
  }, []);

  const inputHandler = (event) => {
    setEditableData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const buttonHandler = () => {
    if (editMode) {
      // Pasamos el ID del usuario junto con los datos actualizados
      updateProfile(token, myId, editableData).then((updatedProfile) => {
        setProfileData(updatedProfile);
        setEditMode(false);
      }).catch((error) => {
        console.error("Error updating profile:", error);
        // Manejar errores, por ejemplo, mostrar un mensaje de error al usuario
      });
    } else {
      setEditMode(true);
    }
  };
  

  return (
    <>
      <div className="body">
        {!!profileData.phone_number ? (
          <>
            <Container className="mt-5">
              <Card.Title className="profile-card-title">
                Welcome {profileData.name} {profileData.last_name}
              </Card.Title>{" "}
              {/* Aplica la clase CSS al título */}
              <Row>
                {/* Lado Izquierdo: Imagen */}
                <Col md={5} className="mt-md-4 text-center mx-auto">
                  <img
                    src={profileData.photo}
                    className="img-fluid"
                    alt="Imagen de perfil"
                  />
                </Col>
                {/* Lado Derecho: Detalles del perfil */}
                <Col md={7} className="mt-md-4">
                  <Card className="profile-card">
                    {" "}
                    {/* Aplica la clase CSS al componente Card */}
                    <Card.Body>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          Name: {editMode ? (
                            <Form.Control
                              type="text"
                              name="name"
                              value={editableData.name}
                              onChange={inputHandler}
                            />
                          ) : (
                            profileData.name
                          )}
                        </li>
                        <li className="list-group-item">
                          Last Name: {editMode ? (
                            <Form.Control
                              type="text"
                              name="last_name"
                              value={editableData.last_name}
                              onChange={inputHandler}
                            />
                          ) : (
                            profileData.last_name
                          )}
                        </li>
                        <li className="list-group-item">
                          Email: {profileData.email}
                        </li>
                        <li className="list-group-item">
                          Phone number: {editMode ? (
                            <Form.Control
                              type="text"
                              name="phone_number"
                              value={editableData.phone_number}
                              onChange={inputHandler}
                            />
                          ) : (
                            profileData.phone_number
                          )}
                        </li>
                        <li className="list-group-item">
                          Address: {editMode ? (
                            <Form.Control
                              type="text"
                              name="address"
                              value={editableData.address}
                              onChange={inputHandler}
                            />
                          ) : (
                            profileData.address
                          )}
                        </li>
                      </ul>
                      <Button
                        variant="primary"
                        className="mt-3"
                        onClick={buttonHandler}
                      >
                        {editMode ? "Save" : "Update details"}
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </>
        ) : (
          <p>Cargando datos de perfil...</p>
        )}{" "}
      </div>
    </>
  );
};