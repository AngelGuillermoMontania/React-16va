import React, { useState } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";

// FIREBASE
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export default function ContainCard() {
  const [products, setProducts] = useState([]);
  let [loading, setLoading] = useState(true);

  function chargeProducts() {
    const items = collection(db, "Zapatos");
    getDocs(items).then((data) => {
      const allitems = data.docs.map((item) => {
        return {
          ...item.data(),
          id: item.id,
        };
      });
      setProducts(allitems);
      setLoading(false);
    });
  }

  return (
    <div style={{ paddingTop: "5rem" }}>
      <button type="button" onClick={chargeProducts}>
        HACER PETICION
      </button>
      {products[0] &&
        products.map((product) => <div>{product.descripcion}</div>)}
      <PacmanLoader
        color="#FF0000"
        loading={loading}
        size={75}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
