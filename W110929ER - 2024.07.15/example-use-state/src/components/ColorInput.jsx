import { useInput } from "../hooks/useInput";

function ColorInput() {
  const [color, { handleInputChange }] = useInput();

  return (
    <div className="mt-3">
      <div className="input-group mb-3">
        <span className="input-group-text">Color</span>
        <input
          onInput={handleInputChange}
          value={color}
          type="text"
          className="form-control"
          placeholder="red"
        />
      </div>

      <div
        className="rounded-circle mx-auto mt-2"
        style={{ width: 50, height: 50, backgroundColor: color }}
      ></div>
    </div>
  );
}

export default ColorInput;
