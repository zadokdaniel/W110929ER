import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState("red");

  const [input, setInput] = useState("");
  const [select, setSelect] = useState("");
  const [checkBox, setCheckbox] = useState(true);

  console.log("render");

  const handleReset = () => setInput("");

  return (
    <>
      <div>
        {color}

        <button
          onClick={(e) => {
            console.log(e);

            setColor("blue");
          }}
        >
          blue
        </button>
      </div>

      <div>
        <button
          onClick={() => {
            // setCounter(counter + 1); // BAD!

            setCounter((counter) => counter + 1);
          }}
        >
          {counter}
        </button>
      </div>

      <div>
        <input
          onInput={(e) => setInput(e.target.value)}
          value={input}
          type="text"
        />
        <button onClick={handleReset}>Reset</button>
        <select onChange={(e) => setSelect(e.target.value)} value={select}>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>

        <input
          type="checkbox"
          checked={checkBox}
          onChange={(e) => setCheckbox(e.target.checked)}
        />
      </div>
    </>
  );
}

export default App;
