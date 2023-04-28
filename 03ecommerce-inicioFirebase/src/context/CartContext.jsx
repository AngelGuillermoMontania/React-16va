import { useState, createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // agregar Carrito
  // eliminar del carrito
  // el precio total del carrito
  // ver el total de productos agregados (Para verlo en la burbuja del carrito en el nav)

  // limpiar carrito
  // comprar
  // Mejorar el carrito
  // control para no agregar mas que el stock

  const addProductCart = (product) => {
    setCart([...cart, product]);
  };

  const getTotalProducts = () => {
    const totalProducts = cart.reduce((acc, product) => {
      return acc + product.cantidad;
    }, 0);
    return totalProducts;
  };

  // [
  //   {
  //     marca: "adidas",
  //     ...,
  //     cuantidad: 2
  //   },
  //   {
  //     marca: "Acme",
  //     ...,
  //     cantidad: 6
  //   }
  // ]

  const data = {
    cart,
    addProductCart,
    getTotalProducts,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
