// Dos tipos de importacion
/* 
  Los que vienen por default, los llamo directamente
*/
import funcionDePrueba from "./export";

/* 
  Los que no vienen de por default, los tengo que desestructurar
*/

import { saludo, numero } from "./export";

//  export const CartContext = ...

// export default CartContextProvider

import CartContextProvider, { CartContext } from "../context/CartContext";
