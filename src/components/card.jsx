import Row from "react-bootstrap/Row";

const Card = ({ iconFileName, title, children }) => {
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
          <a href="https://www.google.com.ec" className="boton">
            CÓMO LLEGAR
          </a>
        </Row>
      </div>
    </>
  );
};

export default Card;
