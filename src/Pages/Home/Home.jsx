import "./Home.css";
import { Container, Row, Col } from "react-bootstrap";

export const Home = () => {
  return (
    <>
      <div className="body">
        <h1 className="title">
          <div className="miDiv"></div>Welcome<br />
          Backend Tattoo INK
        </h1>
      </div>
      <div className="content">
        <Container className="container-bg">
          <Row className="align-items-center">
          <Col md={6} className="image-column">
              <img
                className="main-img"
                src="https://i.ibb.co/FK1ZCFx/Logo.png"
                alt="Tattoo"
              />
              
            </Col>
            <Col>
              <div className="text-box1">
              Backend Tattoo INK, Menorca’s premier destination for exceptional tattoo artistry. 
              Here, your stories and visions transform into living art. Our studio merges traditional
              techniques with cutting-edge technology, ensuring each tattoo is a masterpiece. 
              Our passionate artists specialize in various styles, from the intricate to the 
              avant-garde, making every piece a personalized expression of your identity. 
              With attention to detail, commitment to quality, and a warm, inviting atmosphere, 
              we invite you to embark on a journey of creativity and self-discovery. 
              Let your journey begin with us, where every ink tells a story.
              </div>
            </Col>
          </Row>
        </Container>

      </div>
    </>
  );
};
