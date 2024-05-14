import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Text from "../components/text";
import Reproductor from "../components/player";
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
      <Reproductor />

      <div className="parallax" style={flowerStyle}></div>
      <div className="parallax" style={{ ...flowerStyle, right: "0" }}></div>

      <Container>
        <Row>
          <Col></Col>
          <Col md={8} xs={6} style={{ paddingTop: "35px" }}>
            <Text />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
