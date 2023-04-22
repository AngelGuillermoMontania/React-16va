import NavBar from "./components/NavBar";
import ContainCard from "./components/ContainCard";
import Footer from "./components/Footer";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailCard from "./components/DetailCard";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ContainCard />} />
        <Route path="/category/:nameCategory" element={<ContainCard />} />
        <Route path="/detail/:id" element={<DetailCard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
