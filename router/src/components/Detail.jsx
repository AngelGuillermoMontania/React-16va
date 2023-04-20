import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function Detail() {
  const { id, nombre } = useParams();

  return (
    <div>
      <h1 style={{ color: "yellow" }}>
        COMPONENTE DETAIL, recibi el id {id} con nombre {nombre}
      </h1>
      <Link to="/">
        <h5 style={{ color: "white" }}>Ir a Home</h5>
      </Link>
    </div>
  );
}
