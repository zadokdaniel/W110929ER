import { useState } from "react";
import Child from "./child";

function Parent() {
  const [counter, setCounter] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <h1>Parent</h1>
      <button
        className="btn btn-primary"
        onClick={() => setCounter((counter) => counter + 1)}
      >
        {counter}
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => setIsVisible((isVisible) => !isVisible)}
      >
        {isVisible ? "hide" : "show"}
      </button>

      <hr />

      <div className="border bg-secondary">
        {isVisible && <Child parentCounter={counter} />}
      </div>
    </div>
  );
}

export default Parent;
