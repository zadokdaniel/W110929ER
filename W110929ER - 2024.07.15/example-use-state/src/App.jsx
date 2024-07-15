import "./App.css";
import ColorInput from "./components/ColorInput";
import ColorPicker from "./components/colorPicker";
import Counter from "./components/Counter";

import { useInput } from "./hooks/useInput";
import { useWindowSize } from "./hooks/useWindowSize";

function App() {
  const [min, { handleInputChange: minHandleInputChange }] = useInput(0);
  const [max, { handleInputChange: maxHandleInputChange }] = useInput(10);

  const { innerHeight, innerWidth, outerHeight, outerWidth } = useWindowSize();
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

        <input type="number" value={min} onInput={minHandleInputChange} />
        <input type="number" value={max} onInput={maxHandleInputChange} />
        <Counter min={min} max={max} />
        <Counter min={-5} max={5} initialCounter={-5} />
        <Counter min={-5} max={5} />
        <Counter min={-10} max={0} />
        <Counter />
      </div>

      <div>
        <ul>
          <li>
            innerHeight: <b>{innerHeight}</b>
          </li>
          <li>
            innerWidth: <b>{innerWidth}</b>
          </li>
          <li>
            outerHeight: <b>{outerHeight}</b>
          </li>
          <li>
            outerWidth: <b>{outerWidth}</b>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
