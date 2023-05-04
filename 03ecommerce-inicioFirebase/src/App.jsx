import NavBar from "./components/NavBar";
import ContainCard from "./components/ContainCard";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import DetailCard from "./components/DetailCard";
import CartContextProvider, { CartContext } from "./context/CartContext";
import CartDetailContainer from "./components/Cart/CartDetailContainer";

function App() {
  const { nameCategory } = useParams();

  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ContainCard />} />
          <Route path="/category/:nameCategory" element={<ContainCard />} />
          <Route path="/detail/:id" element={<DetailCard />} />
          <Route path="/cart" element={<CartDetailContainer />} />
        </Routes>
        <Footer />
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
