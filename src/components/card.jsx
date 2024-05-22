import Row from "react-bootstrap/Row";
import { useState } from "react";

const Card = ({
  iconFileName,
  title,
  buttonText,
  href,
  isVisible,
  box,
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
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={() => setOpenBox(false)}>
              &times;
            </span>
            <p>
              Hola, aqui va la informacion bankaria <br /> 123456789 <br />{" "}
              Banco del barrio
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
