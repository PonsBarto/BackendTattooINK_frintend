import "./Home.css";
import { Container, Row, Col } from "react-bootstrap";

export const Home = () => {
  return (
    <>
      <div className="body">
        <h1 className="title">
          <div className="miDiv"></div>Welcome to Backend Tattoo INK <br />
          Where Art Meets Skin
        </h1>
      </div>
      <div className="content">
        <Container className="container-bg">
          <Row className="align-items-center">
            <Col md={6}>
              <div className="text-box1">
                Embark on a journey where creativity knows no bounds and
                self-expression finds its canvas in the art of tattoos. At
                Tattoink, we believe in the power of ink to tell stories, evoke
                emotions, and celebrate individuality. From intricate designs to
                bold statements, our talented artists are here to turn your
                vision into reality. Explore our gallery, unleash your
                imagination, and let your skin become the ultimate masterpiece.
              </div>
            </Col>
            <Col md={6} className="image-column">
              <img
                className="main-img"
                src="https://i.pinimg.com/originals/0d/b4/00/0db4003e0a5753e5dc0bd00fa96ac9c1.gif"
                alt="Tattoo"
              />
            </Col>
          </Row>
        </Container>
        <Container className="container-bg">
          <Row>
            <Col md={6} className="image-column">
              <img
                className="main-img2"
                src="https://i.pinimg.com/564x/65/47/dd/6547dda7b4defc4cc4afd2bcab204a52.jpg"
                alt="Tattoo"
              />
            </Col>
            <Col>
              <div className="text-box1">
                At Tattoink, passion is our ink. We're not just a tattoo parlor;
                we're a sanctuary for self-expression, a haven for creativity,
                and a canvas for stories waiting to be told. Our team of skilled
                artists pours their heart and soul into every design, infusing
                each stroke with passion and purpose. Whether you're looking to
                make a bold statement, commemorate a milestone, or simply
                explore the endless possibilities of body art, we're here to
                bring your vision to life. Step into our world, where passion
                meets pigment, and let your skin become the masterpiece it was
                meant to be. 
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};