import { useState } from "react";
// SI ----> export useState
// NO ----> export default useState

function Count() {
  const [count, setCount] = useState(0);
  const [busqueda, setBusqueda] = useState("");
  const [characters, setCharacters] = useState(null);

  setTimeout(() => {
    setCharacters([{ id: 1 }, { id: 2 }]);
  }, 5000);

  function sumarUno() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={sumarUno}>SUMAR UNO</button>

      <input
        type="text"
        placeholder="Buscar..."
        value={busqueda}
        onChange={(e) => {
          setBusqueda(e.target.value);
        }}
      />

      {characters ? <h1>TENGO PERSONAJES</h1> : <h1>LOADING...</h1>}
    </div>
  );
}

export default Count;
