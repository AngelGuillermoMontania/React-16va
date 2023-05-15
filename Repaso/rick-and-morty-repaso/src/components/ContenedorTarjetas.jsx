import axios from "axios";
import { useEffect, useState, useId } from "react";
import Tarjeta from "./Tarjeta";
import { Grid } from "@mui/material";
import Paginado from "./Paginado";

function ContenedorTarjetas() {
  /* useEffect recibe dos parametro
      - EL primero una funcion que se va a ejecutar en cierto ciclo de vida
      - El segundo es una dependendia (Sirve para el onUpdate o actualizacion)
  */

  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    // axios === fetch   / Excepto que ya no hacemos el paso de... data => data.json()
    axios(`https://rickandmortyapi.com/api/character?page=${page}`).then(
      (data) => {
        setTotalPages(data.data.info.pages);
        setCharacters(data.data.results);
      }
    );
  }, [page]);

  /* 
  fetch("url", {
    method: "POST"
  }) 
  axios.post("url")
  */

  // El useEffect se ejecuta SIEMPRE una vez en onMounted, al montarte o crearse
  // El useEffect se ejcuta en la actualizacion si la dependencia cambia
  // El useEffect va la ejecutar la funcion que retorna cuando se desmonte o destruya

  return (
    <Grid
      container
      paddingTop={"5rem"}
      direction="row"
      justifyContent="space-around"
      alignItems="center"
    >
      {characters
        ? characters.map((elem) => (
            <Grid
              key={elem.id}
              item
              xs={4}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Tarjeta
                image={elem.image}
                name={elem.name}
                species={elem.species}
              />
            </Grid>
          ))
        : ""}
      <Paginado page={page} setPage={setPage} totalPages={totalPages} />
    </Grid>
  );
}

/* 
  image: "URL://",
  name: "NOMBRE DE CADA UNO",
  species: "ESPECIE"
*/

// PROPS   son datos que paso a un componente
// PROPIEDADES, ARGUMENTOS o PARAMETRO me refiero a una opcion que puedo pasar en una funcion

export default ContenedorTarjetas;

// onMounted   ---->   Despues de Creacion

// onUpdate   ----> Actualizacion

// onUnmounted ----> Destruccion

// DEPENDE DE COMO ESCRIBA EL USEEFFECT ES EL CICLO DE VIDA QUE VOY A EJECUTAR
