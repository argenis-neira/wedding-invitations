import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Text from "../components/text";
import Reproductor from "../components/player";
import Timer from "../components/timer";
import { useEffect } from "react";

const Home = () => {
  let flowerStyle = {
    backgroundRepeat: "repeat-y",
    backgroundImage: 'url("/images/flower.svg")',
    backgroundSize: "contain",
    position: "fixed",
    height: "700px",
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const parallaxElements = document.querySelectorAll(".parallax");

      parallaxElements.forEach((element) => {
        const translateY = -scrollPosition / 10; // Ajusta la velocidad de paralaje según sea necesario
        element.style.backgroundPositionY = translateY + "px";
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="parallax" style={flowerStyle}></div>
      <div className="parallax" style={{ ...flowerStyle, right: "0" }}></div>
      <div className="background-video-first-loading">
        <img
          src="images/first-image-while-loading.JPG"
          alt="Sea"
          className="background-video-first-loading"
          style={{ filter: "blur(5px)", scale: "1.05" }}
        />
      </div>
      <video autoPlay muted loop className="background-video">
        <source src="/videos/sea.mp4" type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>
      <div className="video-textura-overlay"></div>

      <Container>
        <Row style={{ paddingTop: "50px" }}>
          <Reproductor />
        </Row>

        <Row>
          <Col></Col>
          <Col
            md={6}
            xs={10}
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "30px",
            }}
          >
            <img
              className="main-image"
              src="/images/main-image.JPG"
              alt="Wedding"
            />
          </Col>
          <Col></Col>
        </Row>

        <Row>
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "35px",
            }}
          >
            26-10-2024
          </h1>
        </Row>

        <Row>
          <Timer />
        </Row>

        <Row>
          <Col></Col>
          <Col md={8} xs={10}>
            <Text />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
