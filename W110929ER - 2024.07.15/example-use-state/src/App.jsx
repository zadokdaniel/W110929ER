import { useState } from "react";
import "./App.css";
import ColorInput from "./components/ColorInput";
import ColorPicker from "./components/colorPicker";
import Counter from "./components/Counter";

function App() {
  const [range, setRange] = useState({
    min: 0,
    max: 10,
  });

  return (
    <>
      <div>
        <h1>Color Picker</h1>

        <ColorPicker />
      </div>

      <div>
        <h1>Color Input</h1>

        <ColorInput />
      </div>

      <div>
        <h1>Counter</h1>

        <input
          type="number"
          value={range.min}
          onInput={(e) =>
            setRange((range) => ({ ...range, min: e.target.value }))
          }
        />
        <input
          type="number"
          value={range.max}
          onInput={(e) =>
            setRange((range) => ({ ...range, max: e.target.value }))
          }
        />
        <Counter min={range.min} max={range.max} />
        <Counter min={-5} max={5} initialCounter={-5} />
        <Counter min={-5} max={5} />
        <Counter min={-10} max={0} />
        <Counter />
      </div>
    </>
  );
}

export default App;

