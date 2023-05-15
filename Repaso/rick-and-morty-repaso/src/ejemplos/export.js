/* 

2 Formas de exportar

* Por default    - 1 sola cosa y una sola vez
* Sin default    - Muchas cosas y la cantidad de veces que quiera

*/

/*   Una cosa es Declarar la funcion y otra cosa distinta es ejecutar la funcion    */

const funcionDePrueba = () => {
  return "HOLA";
};

export default funcionDePrueba; // Cuando se exporta se exporta tal cual lo escribi

export const numero = 5;
export const saludo = "Hola";
export const letra = "Z";

/* {
  numero: 5,
  saludo: "Hola",
  letra: "Z"
} */
