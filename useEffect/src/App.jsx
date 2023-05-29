import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [render, setRender] = useState(0);

  function sumar() {
    setCount(count + 1);
  }
  // Prueba 2
  // PRUEBA DE GIT VSCODE
  // CICLOS DE VIDA SON 3:
  //                  * Cuando se monta(renderiza) mi componente, sucede 1 sola vez
  //                  * Cuando se actualiza(re-renderiza) mi componente, sucede la cantidad de veces que cambie
  //                  * Cuando se desmonta(Quita) mi componente, sucede 1 sola vez
  // useEffect(function, array)

  // onMounted... Si el array esta vacio le estoy diciendo a React que ejecute el useEffect solo cuando carga el componente
  /*   useEffect(() => {
    setRender(render + 1);
  }, []); */

  //onUpdate... Al array le puedo pasar una dependencia
  /* useEffect(() => {
    setRender(render + 1);
  }, [count]); */

  // onUnmounted... Si tiene un return se ejecuta el return cuando se desmonta el componente
  useEffect(() => {
    setRender(render + 1);
    return () => {
      setRender("DESMONTADO");
    };
  }, [count]);

  return (
    <div className="App">
      <h1>Count {count}</h1>
      <button onClick={sumar}>Sumar 1</button>
      <br></br>
      <br></br>
      <br></br>
      <h1>Cantidad de veces useEfect: {render}</h1>
    </div>
  );
}

export default App;
