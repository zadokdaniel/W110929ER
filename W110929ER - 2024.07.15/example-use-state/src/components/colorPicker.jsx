import { useState } from "react";

const COLORS = [
  {
    btn: {
      text: "Red",
      color: "red",
    },
    divColor: "red",
  },
  {
    btn: {
      text: "Green",
      color: "green",
    },
    divColor: "green",
  },
  {
    btn: {
      text: "Blue",
      color: "blue",
    },
    divColor: "blue",
  },
];

function ColorPicker() {
  const [color, setColor] = useState();

  return (
    <div className="mt-2">
      <div className="d-flex justify-content-center gap-2">
        {COLORS.map(({ btn, divColor }) => (
          <button
            key={btn.text}
            onClick={() => setColor(divColor)}
            className="btn"
            style={{ backgroundColor: btn.color, color: "white" }}
          >
            {btn.text}
          </button>
        ))}
      </div>

      {/* {color ? ( */}
      <div
        className="rounded-circle mx-auto mt-3"
        style={{ width: 50, height: 50, backgroundColor: color }}
      ></div>
      {/* ) : null} */}
    </div>
  );
}

export default ColorPicker;
