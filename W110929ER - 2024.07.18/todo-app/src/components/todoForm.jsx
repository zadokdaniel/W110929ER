import { useState } from "react";

function TodoForm({ onSubmit = () => {} }) {
  const [input, setInput] = useState("");
  const resetInput = () => setInput("");

  const isValid = input.length > 2;

  const [error, setError] = useState(null);
  const resetError = () => setError(null);

  const handleInputChange = (e) => {
    if (isValid) {
      resetError();
    }
    setInput(e.target.value);
  };
  const handleAddClick = () => {
    if (!isValid) {
      setError("The input's text must be at least 2 characters long.");
      return;
    }

    onSubmit(input);
    resetInput();
    resetError();
  };

  return (
    <div className="row form">
      <div className="input-group mb-3">
        <span className="input-group-text">I need to</span>
        <input
          value={input}
          onInput={handleInputChange}
          onKeyDown={(e) => {
            if (e.code === "Enter") handleAddClick();
          }}
          type="text"
          className={["form-control", error ? "is-invalid" : ""]
            .filter(Boolean)
            .join(" ")}
          placeholder="Buy Milk"
        />
        <button
          onClick={handleAddClick}
          className="btn btn-primary"
          type="button"
        >
          Add
        </button>

        <div className="invalid-feedback">{error}</div>
      </div>
    </div>
  );
}

export default TodoForm;
