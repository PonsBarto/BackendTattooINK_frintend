import "./Profile.css";
import { bringProfile } from "../../Services/apiCalls";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";


export const Profile = () => {
  const navigate = useNavigate();

  const [profileData, setProfileData] = useState({});

  const userRdxData = useSelector(userData);
  const token = userRdxData.credentials.token;

  const myId = userRdxData.credentials.userData.userId;
  console.log(userRdxData);

  useEffect(() => {
    if (!token) {
      navigate("/register");
    } else {
      setTimeout(() => {
        // setTimeout para hacer más amable el acceso a los datos de perfil
        bringProfile(token, myId).then((res) => {
          console.log(res, "soy la respuesta del server");
          setProfileData(res);
        });
      }, 2000);
    }
  }, []);

  useEffect(() => {
    console.log(profileData);
  }, [profileData]);

  return (
    <>
      <div className="body">
          {!!profileData.phone_number ? (
            <>
    <Container className="mt-5">
    <Card.Title className="profile-card-title">Welcome {profileData.name} {profileData.last_name}</Card.Title> {/* Aplica la clase CSS al título */}
      <Row>
        {/* Lado Izquierdo: Imagen */}
        <Col md={5} className="mt-md-4 text-center mx-auto">
          <img src={profileData.photo} className="img-fluid" alt="Imagen de perfil" />
        </Col>
        {/* Lado Derecho: Detalles del perfil */}
        <Col md={7} className="mt-md-4">
          <Card className="profile-card"> {/* Aplica la clase CSS al componente Card */}
            <Card.Body>
              <ul className="list-group list-group-flush">
              <li className="list-group-item">Name: {profileData.name}</li>
              <li className="list-group-item">Last Name: {profileData.last_name}</li>
              <li className="list-group-item">Email: {profileData.email}</li>
              <li className="list-group-item">Phone number: {profileData.phone_number}</li>
              <li className="list-group-item">Address: {profileData.address}</li>
              </ul>
              <Button variant="primary" className="mt-3">Editar</Button>
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