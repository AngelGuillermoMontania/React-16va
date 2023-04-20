import NavBar from "./components/NavBar";
import ContainCard from "./components/ContainCard";
import Footer from "./components/Footer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const toogleColorMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <button onClick={() => toogleColorMode}>CAMBIAR</button>
      <NavBar />
      <ContainCard />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
