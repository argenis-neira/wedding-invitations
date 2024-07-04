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

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://rawcdn.githack.com/akzhy/Vara/02d135d2864a976f6c70464aebee0f81647695c8/src/vara.min.js";
    script.async = false;

    // Ejecutar la función cuando el script se haya cargado
    script.onload = () => {
      const startAnimation = () => {
        const vara = new window.Vara(
          "#container",
          "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json",
          [
            {
              text: "Te esperamos!",
              y: 20,
              fromCurrentPosition: { y: true },
              duration: 2000,
            },
          ],
          {
            strokeWidth: 2,
            color: "#fff",
            fontSize: 48,
            textAlign: "center",
          }
        );

        // Agregar el evento 'end' para reiniciar la animación
        vara.animationEnd((i, o) => {
          // Esperar un momento antes de reiniciar
          setTimeout(() => {
            document.getElementById("container").innerHTML = ""; // Limpiar el contenedor
            startAnimation(); // Reiniciar la animación
          }, 1000); // 1000 ms = 1 segundo de espera antes de reiniciar
        });
      };

      // Iniciar la animación por primera vez
      startAnimation();
    };

    document.body.appendChild(script);

    // Limpieza: remover el script cuando el componente se desmonte
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div
        className="parallax"
        style={{
          ...flowerStyle,
          backgroundImage: 'url("/images/borde-izq.png")',
        }}
      ></div>
      <div
        className="parallax"
        style={{
          ...flowerStyle,
          backgroundImage: 'url("/images/borde-der.png")',
          right: "0",
        }}
      ></div>
      <div className="background-video-first-loading">
        <img
          src="images/first-image-while-loading.JPG"
          alt="Sea"
          className="background-video-first-loading"
          style={{ filter: "blur(5px)", scale: "1.05" }}
          loading="lazy"
        />
      </div>
      <video autoPlay muted loop playsInline className="background-video">
        <source src="/videos/sea.mp4" type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>
      <div style={{ opacity: 0, position: "absolute" }}>
        <div className="amatic">c</div>
        <div className="dancing-script">m</div>
      </div>
      <Container>
        <Row style={{ paddingTop: "10px" }}>
          <Reproductor />
        </Row>
        <Row>
          <Col></Col>
          <Col
            style={{ display: "flex", justifyContent: "center" }}
            md={5}
            xs={10}
          >
            <img
              className="main-gif"
              src="/images/nombres-fecha.gif"
              alt="Christian y Mafer"
              loading="lazy"
            />
          </Col>
          <Col></Col>
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
              loading="lazy"
            />
          </Col>
          <Col></Col>
        </Row>
        <br />
        <Row>
          <Col></Col>
          <Col lg={8} md={8} sm={10} xs={10}>
            <div className="main-text">
              ¡Mi amado es para mí y yo para él! <br /> “Grábame como un sello
              sobre tu corazón, como un sello sobre tu brazo. Porque es fuerte
              el amor como la muerte; y la pasión, tenaz como el infierno. Sus
              flechas son dardos de fuego, como llama divina. No apagarán el
              amor ni lo ahogarán océanos ni ríos”.
              <br />
              Cant 8: 6-7
            </div>
          </Col>
          <Col></Col>
        </Row>
        <br />
        <Row>
          <h1
            className="title"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            Con la bendición de Dios y de nuestros padres,
          </h1>
        </Row>
        <Row style={{ display: "flex", justifyContent: "center" }}>
          <Col
            className={`order-1 order-md-1 img-rect box ${
              visibleBoxes.includes(0) ? "visible zoom-in" : "hidden"
            }`}
            style={{ display: "flex", justifyContent: "center" }}
            lg={4}
            md={4}
            // sm={4}
            xs={8}
          >
            <img
              alt="Padres Christian"
              src="images/padres-2.JPG"
              loading="lazy"
            />
          </Col>

          <Col
            className={`order-3 order-md-2 img-rect box ${
              visibleBoxes.includes(1) ? "visible zoom-in" : "hidden"
            }`}
            style={{ display: "flex", justifyContent: "center" }}
            lg={4}
            md={4}
            // sm={4}
            xs={8}
          >
            <img alt="Padres Mafer" src="images/padres-1.JPG" loading="lazy" />
          </Col>

          <Col
            className={`order-2 order-md-3 box ${
              visibleBoxes.includes(2) ? "visible zoom-in" : "hidden"
            }`}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
            lg={6}
            md={6}
            // sm={4}
            xs={12}
          >
            <div className="box-info izq">
              Jorge Armangel Aguilar Crespo <br />&<br />
              Enriqueta Cecilia Coronel Sarmiento
            </div>
          </Col>
          <Col
            className={`order-4 order-md-4 box ${
              visibleBoxes.includes(3) ? "visible zoom-in" : "hidden"
            }`}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
            lg={6}
            md={6}
            // sm={4}
            xs={12}
          >
            <div className="box-info der">
              Alfredo Yasig Curicho
              <br />
              &<br />
              Patricia Janett Tulcanaza Franco
            </div>
          </Col>
        </Row>
        <br />
        <Row>
          <h1
            className="title"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            Tenemos el agrado de invitarte a nuestra boda.
          </h1>
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
              src="/images/boda-familia.png"
              alt="Family Wedding"
              loading="lazy"
            />
          </Col>
          <Col></Col>
        </Row>
        <br />
        <Row>
          <h1
            className="title"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            ¡Cada vez falta menos para el gran “Sí, Acepto”!
          </h1>
        </Row>
        <Row>
          <Timer />
        </Row>
        <br />
        <Row
          className="gap-3"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Col
            lg={4}
            md={5}
            // sm={4}
            xs={8}
            style={{ padding: "0 0" }}
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
              <br /> La Entrada, Santa Elena
            </Card>
          </Col>
          <Col
            lg={4}
            md={5}
            // sm={4}
            xs={8}
            style={{ padding: "0 0" }}
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
              Capaes, Ballenita
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
            md={5}
            // sm={4}
            xs={8}
            style={{ padding: "0 0" }}
          >
            <Card
              iconFileName={"gift-icon"}
              title={"Obsequio"}
              buttonText={"VER DATOS"}
              href={""}
              isVisible={visibleBoxes.includes(6)}
              box={true}
              xl={6}
              popUpCont={
                <>
                  <img
                    src="/images/esquina1.png"
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      width: "75%",
                      height: "auto",
                      zIndex: "1",
                    }}
                    alt="Flowers"
                  ></img>
                  <img
                    src="/images/esquina2.png"
                    style={{
                      position: "absolute",
                      bottom: "0",
                      right: "0",
                      width: "75%",
                      height: "auto",
                      zIndex: "1",
                    }}
                    alt="Flowers"
                  ></img>
                  <div className="p-box">
                    <div id="ne" className="corner"></div>
                    <div id="nw" className="corner"></div>
                    <div id="se" className="corner"></div>
                    <div id="sw" className="corner"></div>
                    <img
                      src="/images/stain.png"
                      style={{
                        position: "absolute",
                        top: "-0.5rem",
                        left: "-1rem",
                        width: "105%",
                        height: "100%",
                      }}
                      alt="Stain"
                    ></img>
                    <Container
                      style={{
                        zIndex: 2,
                        position: "relative",
                        paddingTop: "1rem",
                      }}
                    >
                      <Row className="dancing-script d-flex justify-content-center pb-4">
                        ¡Gracias por tu amor y apoyo!
                      </Row>
                      <Row className="fields amatic">
                        NOMBRE: AGUILAR CORONEL CHRISTIAN ANDREE
                      </Row>
                      <Row className="fields amatic">
                        <Col className="cuenta-ahorro text-xl-end">
                          #CUENTA AHORRO:
                        </Col>
                        <Col
                          xs={12}
                          // sm
                          md={12}
                          lg={12}
                          xl={6}
                          className="d-flex justify-content-center justify-content-xl-start"
                        >
                          <div style={{ paddingRight: "10px" }}>0033363308</div>
                          <div className="d-flex justify-content-center align-items-center">
                            <img
                              src="/images/banco-guayaquil.png"
                              alt="logo banco"
                              style={{ height: "25px", width: "auto" }}
                            ></img>
                          </div>
                        </Col>
                      </Row>
                      <Row className="fields amatic">
                        CORREO: chraagui1005@gmail.com
                      </Row>
                      <Row className="fields amatic">C.I.: 0704719087</Row>
                      <Row className="d-flex justify-content-center amatic nota">
                        Agradecemos el envío de tu obsequio antes de:
                        <br />
                        26-Oct-2024
                        <br />
                        No olvides enviarnos tu comprobante
                        <br />a través del medio por el cual recibiste la
                        invitación.
                      </Row>
                    </Container>
                  </div>
                </>
              }
            >
              Tu presencia es nuestro mejor regalo. Si deseas hacernos un
              obsequio, agradeceríamos mucho tu contribución a nuestra vida
              juntos. Por favor, considera transferir tu regalo a la siguiente
              cuenta.
            </Card>
          </Col>
          <Col
            lg={4}
            md={5}
            // sm={4}
            xs={8}
            style={{ padding: "0 0" }}
          >
            <DressCard
              title="Código de Vestimenta"
              isVisible={visibleBoxes.includes(7)}
              iconFileName={"dress-code"}
            >
              ELEGANTE
              <br />
              ¡Queridas invitadas!
              <br />
              Por favor, reserven el blanco para la novia. 👰🏻‍♀
              <br /> ¡Nos encantará verlas brillar en todos los demás colores
              del arcoíris! ✨
            </DressCard>
          </Col>
        </Row>
        <br />
        <Row
          className="gap-3"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Col
            lg={4}
            md={5}
            // sm={4}
            xs={8}
            style={{ padding: "0 0" }}
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
          <Col
            lg={4}
            md={5}
            // sm={4}
            xs={8}
            style={{ padding: "0 0" }}
          >
            <Card
              iconFileName={"schedule-icon"}
              title={"¡No te pierdas nada!"}
              buttonText={"VER ITINERARIO"}
              href={""}
              isVisible={visibleBoxes.includes(9)}
              box={true}
              popUpCont={
                <>
                  <img
                    style={{ height: "100%", width: "100%" }}
                    alt="Itinerario"
                    src="/images/itinerario.png"
                    loading="lazy"
                  />
                  <Row
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "0.5rem",
                      marginLeft: "3.5rem",
                      marginRight: "3.5rem",
                    }}
                  >
                    <a
                      className="button"
                      style={{ "--content": "'Descargar'" }}
                      href="https://invitacionesdigitalesan.netlify.app/images/Itinerario-Boda.jpg"
                      download="Itinerario-Boda-Aguilar-Pacheco.jpg"
                    >
                      <div className="left"></div>
                      {"Descargar"}
                      <div className="right"></div>
                    </a>
                  </Row>
                </>
              }
            >
              Descubre el itinerario de momentos memorables que hemos preparado
              para ti durante nuestra celebración nupcial
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
            className="title"
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
        <Row style={{ display: "flex", justifyContent: "center" }}>
          <Col
            className={`order-1 order-md-1 img-oval box ${
              visibleBoxes.includes(10) ? "visible zoom-in" : "hidden"
            }`}
            style={{ display: "flex", justifyContent: "center" }}
            lg={5}
            md={4}
            // sm={4}
            xs={8}
          >
            <img alt="img_1" src="images/1.jpg" loading="lazy" />
          </Col>
          <Col
            className={`order-2 order-md-2 img-rect box ${
              visibleBoxes.includes(11) ? "visible zoom-in" : "hidden"
            }`}
            style={{ display: "flex", justifyContent: "center" }}
            lg={5}
            md={4}
            // sm={4}
            xs={8}
          >
            <img alt="img_2" src="images/2.jpg" loading="lazy" />
          </Col>
        </Row>
        <br />
        <Row style={{ display: "flex", justifyContent: "center" }}>
          <Col
            className={`order-4 order-md-3 img-rect box ${
              visibleBoxes.includes(12) ? "visible zoom-in" : "hidden"
            }`}
            style={{ display: "flex", justifyContent: "center" }}
            lg={5}
            md={4}
            // sm={4}
            xs={8}
          >
            <img alt="img_2" src="images/3.jpg" loading="lazy" />
          </Col>
          <Col
            className={`order-3 order-md-4 img-oval box ${
              visibleBoxes.includes(13) ? "visible zoom-in" : "hidden"
            }`}
            style={{ display: "flex", justifyContent: "center" }}
            lg={5}
            md={4}
            // sm={4}
            xs={8}
          >
            <img alt="img_1" src="images/4.jpg" loading="lazy" />
          </Col>
        </Row>
        <br />
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div id="container"></div>
        </Row>
      </Container>
      <div className="contact-section">
        <Row style={{ "--bs-gutter-x": 0, width: "100%" }}>
          <Col></Col>
          <Col lg={8} md={8} sm={10} xs={10}>
            Invitación digital creada por Carlos Neira
          </Col>
          <Col></Col>
        </Row>
      </div>
      <br />
    </>
  );
};

export default Home;
