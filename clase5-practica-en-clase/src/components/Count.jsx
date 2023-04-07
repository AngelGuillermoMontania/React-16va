import { useState } from "react";
import axios from "axios";

function Count() {
  let valorInput = "";
  let [characters, setCharacters] = useState([]);
  let [errors, setErrors] = useState({
    errorSearch: "",
    errorEdad: "",
    errorNombre: "",
  });
  let [errorInput, setErrorInput] = useState("");

  const validate = (e) => {
    if (e.target.name === "search") {
      if (e.target.value === "") {
        setErrors({ ...errors, errorSearch: "No debe estar vacio" });
      } else if (!/^[a-z]+$/i.test(e.target.value)) {
        setErrors({ ...errors, errorSearch: "No pueden ser numeros" });
      } else {
        valorInput = e.target.value;
      }
    }

    if(e.target.name === "apellido") {
      
    }
  };

  const apiKey = process.env.REACT_APP_API_KEY;

  const search = (e) => {
    e.preventDefault();
    if (errorInput === "") {
      setErrorSubmit("");
      axios(
        `http://api.openweathermap.org/data/2.5/weather?q=${valorInput}&appid=${apiKey}&units=metric`
      )
        .then((data) => {
          console.log(data);
        })
        .catch((error) => console.log(error));
    } else {
      setErrorSubmit("ERROR EN EL FORMULARIO");
    }
  };

  return (
    <div>
      <form onSubmit={search}>
        <input
          type="text"
          name="search"
          placeholder="Buscar algo..."
          onChange={(e) => {
            validate(e);
          }}
        />
        <input
          type="text"
          name="apellido"
          placeholder="Buscar algo..."
          onChange={(e) => {
            validate(e);
          }}
        />
        <button type="submit">Buscar</button>
        <div>
          <span style={{ color: "red" }}>{errors.errorSearch}</span>
        </div>
      </form>
      <span>{errorSubmit}</span>

      <div>{characters && characters.map((elem) => <h5>{elem}</h5>)}</div>
    </div>
  );
}

export default Count;
