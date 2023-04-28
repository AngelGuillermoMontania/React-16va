import React, { useContext } from "react";
import { CountContext } from "../context/CountContext";

export default function Buttons() {
  // llamar a la/las funciones que modifican el estado global de context

  const { aumentarCount, restarCount } = useContext(CountContext);

  return (
    <div>
      <button onClick={() => aumentarCount()}>Sumar</button>
      <button onClick={() => restarCount()}>Restar</button>
    </div>
  );
}
