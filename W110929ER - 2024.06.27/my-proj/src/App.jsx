import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Product({ title, price }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>price {price}</p>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      hello
      <h1>bye</h1>
      <Product title="Product 1" price="44"></Product>
      <Product title="Product 2" price="44"></Product>
      <Product title="Product 3" price="44"></Product>
      <Product title="Product 4" price="44"></Product>
    </div>
  );
}

export default App;
