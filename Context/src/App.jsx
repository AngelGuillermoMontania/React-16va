import { useContext, useState } from "react";
import "./App.css";
import ContainCard from "./components/ContainCard";
import { BrowserRouter } from "react-router-dom";
import CountContextProvider from "./context/CountContext";

function App() {
  return (
    <>
      <CountContextProvider>
        <ContainCard />
      </CountContextProvider>
    </>
  );
}

export default App;
