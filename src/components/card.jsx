import Row from "react-bootstrap/Row";

const Card = ({
  iconFileName,
  title,
  buttonText,
  href,
  isVisible,
  children,
}) => {
  //la clase "box" es para identificar todo aquello que necesita animacion al hacer scroll
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
          >
            <div className="left"></div>
            {buttonText}
            <div className="right"></div>
          </a>
        </Row>
      </div>
    </>
  );
};

export default Card;
