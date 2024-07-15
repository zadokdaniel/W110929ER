import { useState } from "react";

function useCounter({
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER,
  initialCounter = 0,
  step = 1,
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

  const increment = () => {
    if (isMax) {
      return;
    }

    setCounter((counter) => counter + 1);
  };
  const decrement = () => {
    if (isMin) {
      return;
    }

    setCounter((counter) => counter - 1);
  };

  return [
    counter,
    {
      isMin,
      isMax,
      setCounter,
      increment,
      decrement,
      reset: () => setCounter(initialCounter),
    },
  ];
}

function Counter(counterOptions) {
  const [counter, isMin, isMax, increment, decrement] =
    useCounter(counterOptions);

  return (
    <div className="mt-3 d-flex justify-content-center">
      <button
        disabled={isMin}
        onClick={increment}
        className="btn btn-sm btn-danger"
      >
        -
      </button>
      <span className="mx-3">{counter}</span>
      <button
        disabled={isMax}
        onClick={decrement}
        className="btn btn-sm btn-success"
      >
        +
      </button>
    </div>
  );
}

export default Counter;
