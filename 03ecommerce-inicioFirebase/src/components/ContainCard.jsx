import React, { useState, useEffect } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";

// FIREBASE
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import CardProduct from "./CardProduct";
import { Grid } from "@mui/material";

export default function ContainCard() {
  const [products, setProducts] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
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
  }, []);

  return (
    <Grid
      container
      spacing={5}
      direction="flex-row"
      style={{ justifyContent: "space-around", padding: "50px 0" }}
    >
      {products[0] &&
        products.map((product) => (
          <Grid item>
            <CardProduct
              key={product.id}
              marca={product.marca}
              modelo={product.modelo}
              precio={product.precio}
              img={product.img}
            />
          </Grid>
        ))}
      <PacmanLoader
        color="#FF0000"
        loading={loading}
        size={75}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </Grid>
  );
}
