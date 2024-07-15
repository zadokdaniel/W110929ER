import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <Counter />
      <Counter min={-5} max={5} />
      <Counter min={-2} max={2} initialCounter={1} />
    </>
  );
}

export default App;
