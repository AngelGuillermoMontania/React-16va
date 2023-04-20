import { Link, NavLink } from "react-router-dom";

export default function Home() {
  const products = [
    {
      nombre: "VASO VIDRIO",
      id: 1,
    },
    {
      nombre: "CARGADOR CELULAR",
      id: 2,
    },
  ];

  return (
    <div>
      <h1 style={{ color: "yellow" }}>COMPONENTE HOME</h1>
      {products.map((product) => (
        <Link key={product.id} to={`/detail/${product.id}/${product.nombre}`}>
          <div style={{ backgroundColor: "blue" }}>
            <h2 style={{ color: "black" }}>{product.nombre}</h2>
          </div>
        </Link>
      ))}

      {/* VASO VIDRIO  <Link to="/detail/1"> */}
      {/* CARGADOR CELULAR  <Link to="/detail/2"> */}
    </div>
  );
}
