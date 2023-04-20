function Card({ personaje, click }) {
  return (
    <div
      onClick={click}
      style={{
        height: "400px",
        width: "200px",
        margin: "50px 15px",
        border: "1px solid black",
      }}
    >
      <img
        src={personaje.imageUrl}
        style={{ height: "200px", width: "100%" }}
      />
      <h5>{personaje.fullName}</h5>
      <p>Titulo: {personaje.title}</p>
      <p>
        Familia:
        {personaje.family === "" || personaje.family === "Unkown"
          ? "Honguito"
          : personaje.family}
      </p>
    </div>
  );
}

export default Card;
