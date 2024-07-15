import { useState } from "react";

function Counter({
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER,
  initialCounter = 0,
}) {
  if (min > max) {
    throw new Error(
      `the props value min (${min}) is bigger than max (${max}). minimum value must be smaller than max value`
    );
  }

  if (initialCounter < min || initialCounter > max) {
    throw new Error(
      `the props initialCounter (${initialCounter}) must be between the values of min (${min}) and max (${max})`
    );
  }

  const [counter, setCounter] = useState(initialCounter);

  const isMax = counter >= max;
  const isMin = counter <= min;

  const handleAdd = () => {
    if (isMax) {
      return;
    }

    setCounter((counter) => counter + 1);
  };
  const handleSub = () => {
    if (isMin) {
      return;
    }

    setCounter((counter) => counter - 1);
  };

  return (
    <div className="mt-3 d-flex justify-content-center">
      <button
        disabled={isMin}
        onClick={handleSub}
        className="btn btn-sm btn-danger"
      >
        -
      </button>
      <span className="mx-3">{counter}</span>
      <button
        disabled={isMax}
        onClick={handleAdd}
        className="btn btn-sm btn-success"
      >
        +
      </button>
    </div>
  );
}

export default Counter;
