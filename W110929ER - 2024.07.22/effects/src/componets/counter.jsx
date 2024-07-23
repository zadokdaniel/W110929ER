function Counter({ value, min, max, onChange }) {
  if (min > max) {
    throw new Error(
      `the props value min (${min}) is bigger than max (${max}). minimum value must be smaller than max value`
    );
  }

  const isMax = value >= max;
  const isMin = value <= min;

  const increment = () => {
    if (isMax) {
      return;
    }

    onChange(value + 1);
  };
  const decrement = () => {
    if (isMin) {
      return;
    }
    onChange(value - 1);
  };

  return (
    <div className="mt-3 d-flex justify-content-center">
      <button
        disabled={isMin}
        onClick={decrement}
        className="btn btn-sm btn-danger"
      >
        -
      </button>
      <span className="mx-3">{value}</span>
      <button
        disabled={isMax}
        onClick={increment}
        className="btn btn-sm btn-success"
      >
        +
      </button>
    </div>
  );
}

export default Counter;
