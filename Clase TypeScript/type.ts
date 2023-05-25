/* 
boolean
number
string
undefined
null
NaN
float
*/

/* EJEMPLO DE USO TYPESCRIPT */
// function ejemplo(algo: number): number {
//   return "joa";
// }

// ejemplo(5);

/* EJemplo con una variable */
const apellido: string = "Montaña";
const edad: number = 30;
const nada: null = null;

/* Ejemplo con funciones */
// const ejemplo2DeFuncion: Function = (): boolean => {
//   return true;
// };

// function ejemplo3DeFuncion(): boolean {
//   return false;
// }

// function ejemplo4DeFuncion(): void {
//   console.log(3 + 3);
// }

/* Ejemplo con parametros en funcion */
function ejemplo5DeFuncion(num1: number, num2: number): number {
  return num1 + num2;
}

/* EJEMPLO CON DOS TIPOS DE DATOS */

let characters: null | Array<Object> = null;
//async axios.get("hdjsgajhdas")
characters = [{}];

/* EJEMPLO CON ARRAY */
const array: Array<number | string | boolean> = [5, 6, 8, 9, "", true];

function ejemploVariosTipos(
  num1: number | string,
  num2: number
): string | number {
  return 5;
}

/* Ejemplo CON ANY       !!!!!!!!!!!!!!!!!PELIGROOOOO!!!!!!!!!!!!!!!!!!!!!!!      */

function con(num1) {
  return num1;
}
