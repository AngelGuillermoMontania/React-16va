import { useState } from "react";
// SI ----> export useState
// NO ----> export default useState

function Count() {
  let valorInput = "";
  let [character, setCharacter] = useState(null);

  const search = () => {
    fetch(`https://rickandmortyapi.com/api/character/?name=${valorInput}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacter(data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar algo..."
        onChange={(e) => {
          valorInput = e.target.value;
        }}
      />
      <button type="button" onClick={search}>
        Buscar
      </button>

      <div>{character ? character.results[0].name : "Loading..."}</div>
    </div>
  );
}

export default Count;
