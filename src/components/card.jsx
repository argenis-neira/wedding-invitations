import Row from "react-bootstrap/Row";

const Card = ({ iconFileName, title, buttonText, href, children }) => {
  return (
    <>
      <div
        className="card-slot"
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
          <a href={href} className="boton" target="_blank" rel="noreferrer">
            {buttonText}
          </a>
        </Row>
      </div>
    </>
  );
};

export default Card;
