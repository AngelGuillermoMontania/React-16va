import { createStore } from "redux";

import rootReducer from "../reducers/index";

const store = createStore(rootReducer);

export default store;

// const data = {
//     cart,
//     addProductCart,
//     getTotalProducts,
//     getTotalPrice,
//     deleteProduct,
//     clearCart,
//     controlStock,
//   };

//   return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
