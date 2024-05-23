import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Reproductor from "../components/player";
import Timer from "../components/timer";
import { useEffect, useState, useRef } from "react";
import Card from "../components/card";
import DressCard from "../components/dress-card";

const Home = () => {
  let flowerStyle = {
    backgroundRepeat: "repeat-y",
    backgroundImage: 'url("/images/flower.svg")',
    backgroundSize: "contain",
    position: "fixed",
    height: "100vh",
  };

  const [visibleBoxes, setVisibleBoxes] = useState([]);
  const visibleBoxesRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      //Paralax lento
      const scrollPosition = window.scrollY;
      const parallaxElements = document.querySelectorAll(".parallax");

      parallaxElements.forEach((element) => {
        const translateY = -scrollPosition / 10; // Ajusta la velocidad de paralaje según sea necesario
        element.style.backgroundPositionY = translateY + "px";
      });

      // Fading when scroll
      const windowHeight = window.innerHeight;
      const boxes = document.querySelectorAll(".box");

      boxes.forEach((box, index) => {
        const { top } = box.getBoundingClientRect();
        if (top < windowHeight && !visibleBoxesRef.current.includes(index)) {
          visibleBoxesRef.current = [...visibleBoxesRef.current, index];
          setVisibleBoxes([...visibleBoxesRef.current]);
        }
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
      <video autoPlay muted loop playsInline className="background-video">
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
              src="/images/main-image.jpg"
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
        <Row style={{ display: "flex", justifyContent: "center" }}>
          <Col
            className={`order-1 order-md-1 img-oval box ${
              visibleBoxes.includes(0) ? "visible zoom-in" : "hidden"
            }`}
            style={{ display: "flex", justifyContent: "center" }}
            lg={5}
            md={4}
            // sm={4}
            xs={8}
          >
            <img alt="img_1" src="images/1.jpg" />
          </Col>
          <Col
            className={`order-2 order-md-2 img-rect box ${
              visibleBoxes.includes(1) ? "visible zoom-in" : "hidden"
            }`}
            style={{ display: "flex", justifyContent: "center" }}
            lg={5}
            md={4}
            // sm={4}
            xs={8}
          >
            <img alt="img_2" src="images/2.jpg" />
          </Col>
        </Row>
        <br />
        <Row style={{ display: "flex", justifyContent: "center" }}>
          <Col
            className={`order-4 order-md-3 img-rect box ${
              visibleBoxes.includes(2) ? "visible zoom-in" : "hidden"
            }`}
            style={{ display: "flex", justifyContent: "center" }}
            lg={5}
            md={4}
            // sm={4}
            xs={8}
          >
            <img alt="img_2" src="images/3.jpg" />
          </Col>
          <Col
            className={`order-3 order-md-4 img-oval box ${
              visibleBoxes.includes(3) ? "visible zoom-in" : "hidden"
            }`}
            style={{ display: "flex", justifyContent: "center" }}
            lg={5}
            md={4}
            // sm={4}
            xs={8}
          >
            <img alt="img_1" src="images/4.jpg" />
          </Col>
        </Row>
        <br />
        <Row
          className="gap-3"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Col
            lg={4}
            md={4}
            // sm={4}
            xs={8}
          >
            <Card
              iconFileName={"iglesia"}
              title={"Ceremonia"}
              buttonText={"CÓMO LLEGAR"}
              href={"https://maps.app.goo.gl/pmSspoRZph4RSjL77"}
              isVisible={visibleBoxes.includes(4)}
            >
              26 de Octubre 2024 <br />
              15:00 <br /> Iglesia Católica Sagrado Corazón de Jesús
              <br /> La Entrada, Santa Elena
            </Card>
          </Col>
          <Col
            lg={4}
            md={4}
            // sm={4}
            xs={8}
          >
            <Card
              iconFileName={"celebration"}
              title={"Recepción"}
              buttonText={"CÓMO LLEGAR"}
              href={"https://maps.app.goo.gl/WnysuqovptRbwgNRA"}
              isVisible={visibleBoxes.includes(5)}
            >
              26 de Octubre 2024 <br />
              18:30 <br /> VistaMar Centro de Eventos
              <br />
              Capaes, Ballenita
            </Card>
          </Col>
        </Row>
        <br />
        <Row
          className="gap-3"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Col
            lg={4}
            md={4}
            // sm={4}
            xs={8}
          >
            <Card
              iconFileName={"gift-icon"}
              title={"Obsequio"}
              buttonText={"VER DATOS"}
              href={""}
              isVisible={visibleBoxes.includes(6)}
              box={true}
            >
              Para nosotros lo más importante es poder compartir con vos nuestro
              gran día. Y si deseas ayudarnos con la Luna de Miel podés hacerlo
              a la siguiente cuenta
            </Card>
          </Col>
          <Col
            lg={4}
            md={4}
            // sm={4}
            xs={8}
          >
            <DressCard
              title="Dress Code"
              isVisible={visibleBoxes.includes(7)}
              iconFileName={"dress-code"}
            >
              ELEGANTE
            </DressCard>
          </Col>
        </Row>
        <br />
        <Row style={{ display: "flex", justifyContent: "center" }}>
          <Col
            lg={4}
            md={4}
            // sm={4}
            xs={8}
          >
            <Card
              iconFileName={"checklist"}
              title={"Confirmación de asistencia"}
              buttonText={"CONFIRMA AQUÍ"}
              href={
                "https://docs.google.com/forms/d/e/1FAIpQLSctBffRDX1F3IsH9Ou5ragsUvXkn_r3FpC6qTRgy2zRy2Itzg/viewform"
              }
              isVisible={visibleBoxes.includes(8)}
            >
              Para nosotros es muy importante que confirmes esta invitación, o
              que nos cuentes si no nos puedes acompañar
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col></Col>
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
            className="card-title"
            lg={8}
            md={8}
            sm={10}
            xs={10}
          >
            Coincidir es un lujo pero conectar es un milagro
          </Col>
          <Col></Col>
        </Row>
        <br />
        <Row
          style={{ display: "flex", justifyContent: "center" }}
          className="card-title"
        >
          ¡Te esperamos!{" "}
        </Row>{" "}
        <br />
        <Row>
          <h1
            className="title"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            Christian y Mafer
          </h1>
        </Row>
      </Container>
      <br />
      <div className="contact-section">
        <Row style={{ "--bs-gutter-x": 0, width: "100%" }}>
          <Col></Col>
          <Col lg={8} md={8} sm={10} xs={10}>
            Invitación digital creada por Carlos Neira{" "}
          </Col>
          <Col></Col>
        </Row>
      </div>
      <br />
    </>
  );
};

export default Home;
