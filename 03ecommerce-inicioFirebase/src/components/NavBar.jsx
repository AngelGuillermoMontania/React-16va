import React from "react";
import Cart from "./Cart";

export default function NavBar() {
  return (
    <header
      style={{
        backgroundColor: "gray",
        height: "4rem",
        width: "100%",
        position: "fixed",
      }}
    >
      <h1>Zapas</h1>
      <Cart />
    </header>
  );
}
