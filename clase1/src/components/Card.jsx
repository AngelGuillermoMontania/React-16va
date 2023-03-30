const Card = ({ zapato }) => {
  const consologea = (event) => {
    console.log(event);
  };

  return (
    <div
      onMouseMove={(event) => {
        consologea(event);
      }}
      style={{
        backgroundColor: "#00001050",
        height: "300px",
        width: "200px",
        border: "1px solid black",
        boxShadow: "0px 5px 20px black",
      }}
    >
      <img alt={zapato.nombre} src={zapato.img} style={{ width: "100%" }} />
      <h3>Marca: {zapato.nombre}</h3>
      <h5>Precio: {zapato.precio}</h5>
    </div>
  );
};

export default Card;
