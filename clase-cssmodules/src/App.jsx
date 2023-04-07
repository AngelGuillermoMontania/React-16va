import ContainCard from "./Components/ContainCard";
import { useState } from "react";
import style from "./App.module.css";
import { FcIdea, FcNoIdea } from "react-icons/fc";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  /* let darkMode = false;
  function setDarkMode(newValor) {
    console.log("ENTRE EN LA FUNCION CREADA MANUALMENTE");
    darkMode = newValor;
    console.log(darkMode);
  } */

  const changeDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? style.darkMode : style.ligthMode}>
      {darkMode ? (
        <FcIdea onClick={changeDarkMode} />
      ) : (
        <FcNoIdea onClick={changeDarkMode} />
      )}
      <h5 className={style.title}>Soy el h5 de app</h5>
      <ContainCard />
    </div>
  );
}

export default App;
