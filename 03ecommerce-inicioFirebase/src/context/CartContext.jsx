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
    const exist = cart.find((item) => item.id === product.id);

    if (exist) {
      const newCart = cart.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            cantidad: item.cantidad + product.cantidad,
          };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, product]);
    }
  };

  const controlStock = (id, count, stock) => {
    const exist = cart.find((item) => item.id === product.id);
    if (exist) {
      cart.forEach((item) => {
        if (item.id === id) {
          return item.stock <= count + item.cantidad;
        }
      });
    } else {
      if (stock <= count) {
        return true;
      } else {
        return false;
      }
    }
  };

  const getTotalProducts = () => {
    const totalProducts = cart.reduce((acc, product) => {
      return acc + product.cantidad;
    }, 0);
    return totalProducts;
  };

  const getTotalPrice = () => {
    const totalPrice = cart.reduce((acc, product) => {
      return acc + product.cantidad * product.precio;
    }, 0);
    return totalPrice;
  };

  const deleteProduct = (id) => {
    const newCart = cart.filter((product) => product.id !== id);
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const data = {
    cart,
    addProductCart,
    getTotalProducts,
    getTotalPrice,
    deleteProduct,
    clearCart,
    controlStock,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
