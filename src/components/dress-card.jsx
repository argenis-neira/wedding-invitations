import Row from "react-bootstrap/Row";

const DressCard = ({ iconFileName, title, isVisible, children }) => {
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
            style={{ width: "250px", height: "180px", paddingLeft: "35px" }}
            alt={title}
            src={`/images/${iconFileName}.png`}
            loading="lazy"
          />
        </Row>
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
      </div>
    </>
  );
};

export default DressCard;
