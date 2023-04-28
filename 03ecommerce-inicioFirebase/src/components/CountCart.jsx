import React, { useState } from "react";
import { CartContext } from "../context/CartContext";

export default function CountCart({ onAdd }) {
  const [count, setCount] = useState(1);

  function sumar() {
    setCount(count + 1);
  }

  function restar() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  return (
    <div>
      <h2>Cantidad: {count}</h2>
      <div>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </div>
      <div>
        <button onClick={() => onAdd(count)}>Agregar al carrito</button>
      </div>
    </div>
  );
}
