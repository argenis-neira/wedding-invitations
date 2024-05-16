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
    height: "100vh",
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
          <Col lg={8} md={8} sm={10} xs={10}>
            <div className="main-text">
              El amor te da esa oportunidad de elegir, de sentirte viva, te da
              esa seguridad y unas ganas de estar juntos siempre, de ver a esa
              persona como si fuera el primer día y el último día de tu vida
            </div>
          </Col>
          <Col></Col>
        </Row>

        <Row>
          <h1
            className="title"
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "35px",
            }}
          >
            Galería de fotos
          </h1>
        </Row>

        <Row
          className="g-3"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Col
            style={{ display: "flex", justifyContent: "center" }}
            lg={5}
            md={4}
            // sm={4}
            xs={8}
          >
            <img className="img-oval" alt="img_1" src="images/img_1.JPG" />
          </Col>
          <Col
            style={{ display: "flex", justifyContent: "center" }}
            lg={5}
            md={4}
            // sm={4}
            xs={8}
          >
            <img className="img-rect" alt="img_2" src="images/img_2.JPG" />
          </Col>
        </Row>
        <br />
        <Row
          className="g-3"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Col
            style={{ display: "flex", justifyContent: "center" }}
            lg={5}
            md={4}
            // sm={4}
            xs={8}
          >
            <img className="img-rect" alt="img_2" src="images/img_2.JPG" />
          </Col>
          <Col
            style={{ display: "flex", justifyContent: "center" }}
            lg={5}
            md={4}
            // sm={4}
            xs={8}
          >
            <img className="img-oval" alt="img_1" src="images/img_1.JPG" />
          </Col>
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
