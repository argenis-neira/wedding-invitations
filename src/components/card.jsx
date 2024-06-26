import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";

const Card = ({
  iconFileName,
  title,
  buttonText,
  href,
  isVisible,
  box,
  popUpCont,
  xl,
  children,
}) => {
  //la clase "box" es para identificar todo aquello que necesita animacion al hacer scroll
  const [openBox, setOpenBox] = useState(false);

  const handleClick = (e) => {
    if (box) {
      e.preventDefault();
      setOpenBox(true);
    }
  };

  return (
    <>
      <div
        className={`card-slot box ${isVisible ? "visible" : "hidden"}`}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            className="card-icon"
            alt={title}
            src={`/images/${iconFileName}.svg`}
            loading="lazy"
          />
        </Row>
        <br />
        <Row
          style={{ display: "flex", justifyContent: "center" }}
          className="card-title"
        >
          {title}
        </Row>
        <Row
          style={{ display: "flex", justifyContent: "center" }}
          className="card-info"
        >
          {children}
        </Row>
        <br />
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "auto",
          }}
        >
          <a
            className="button"
            style={{ "--content": "'" + buttonText + "'" }}
            href={href}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => handleClick(e)}
          >
            <div className="left"></div>
            {buttonText}
            <div className="right"></div>
          </a>
        </Row>
      </div>
      {openBox && (
        // <div className="popup">
        //   <div className="popup-content">
        //     <span className="close" onClick={() => setOpenBox(false)}>
        //       &times;
        //     </span>
        //     {popUpCont}
        //   </div>
        // </div>
        <Row className="popup">
          <Col></Col>
          <Col xl={xl || 4} lg={5} md={6} sm={8} xs={10}>
            <div className="popup-content">
              <span
                style={{ zIndex: "2", position: "relative" }}
                className="close"
                onClick={() => setOpenBox(false)}
              >
                &times;
              </span>
              {popUpCont}
            </div>
          </Col>
          <Col></Col>
        </Row>
      )}
    </>
  );
};

export default Card;
