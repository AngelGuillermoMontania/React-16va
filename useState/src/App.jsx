import "./App.css";
import Characters from "./data";
import ContainCards from "./components/ContainCards";
import Count from "./components/Count";

function App() {
  return (
    <div className="App">
      {/* <ContainCards characters={Characters} /> */}
      <Count />{" "}
    </div>
  );
}

export default App;
