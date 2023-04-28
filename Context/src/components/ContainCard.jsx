import React, { useContext } from "react";
import Card from "./Card";

// Importaciones de Context
import { CountContext } from "../context/CountContext";

export default function ContainCard() {
  const { count } = useContext(CountContext);

  return (
    <div>
      <h1>{count}</h1>
      <Card />
    </div>
  );
}
