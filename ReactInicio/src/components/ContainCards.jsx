import Card from "./Card";

export default function ContainCards() {
  const productos = [
    {
      id: "1",
      nombre: "Nike",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYdjzYPPSsERvwhXjcajfzgJabD5NYO2HCwQ&usqp=CAU",
      precio: "$5000",
    },
    {
      id: "2",
      nombre: "Adidas",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBYKIQqVG3DrTXKRTuT-NxdKimB4h2IpGMiQ",
      precio: "$7500",
    },
    {
      id: "3",
      nombre: "Puma",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoht6iemKbX4gLIEevV15oMpzf7PEoiBqjcg&usqp=CAU",
      precio: "$16700",
    },
  ];

  const ver = true;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {/* {productos.map((producto) => (
        <Card key={producto.id} zapato={producto} />
      ))} */}

      {ver &&
        productos.map((producto) => (
          <Card key={producto.id} zapato={producto} />
        ))}

      {/* {ver ? 
        <>
          <Card zapato={productos[0]} />
          <Card zapato={productos[1]} />
          <Card zapato={productos[2]} />
        </>
        : ""
      }  */}
    </div>
  );
}

// En el padre tengo la declaracion de la funcion
// El padre le envia al hijo la declaracion de la funcion
// El hijo ejecuta esa funcion en algun momento
// La variable que se encuentra en el padre se ve modificada

// ver = true
// ver && <Card zapato={productos[0]} />;

// if (ver) {
//   <Card zapato={productos[0]} />;
// }

// {
//   <Card zapato={productos[0]} /> === true
// }
