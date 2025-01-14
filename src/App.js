import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router";
import Checkout from "./checkout";
import Landing from "./landing";
import Products from "./products";
import Navigation from "./navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<Products />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
