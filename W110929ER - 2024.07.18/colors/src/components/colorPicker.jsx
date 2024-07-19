import { useState } from "react";

function useColors({
  intialColorSelector = "",
  initialFavoriteColors = [],
} = {}) {
  const [selectedColor, setSelectedColor] = useState(intialColorSelector);
  const [favoriteColors, setFavoriteColors] = useState(initialFavoriteColors);

  const addToFavorites = (_color) => {
    const color = _color ?? selectedColor;

    if (favoriteColors.includes(color)) {
      throw new Error("color already exists");
    }

    if (!CSS.supports("color", color)) {
      throw new Error("not valid css color");
    }

    setFavoriteColors((favoriteColors) => [...favoriteColors, color]);
  };

  const resetSelectedColor = () => setSelectedColor("");

  return {
    selectedColor,
    favoriteColors,
    setSelectedColor,
    addToFavorites,
    resetSelectedColor,
  };
}

function ColorPicker() {
  const {
    selectedColor,
    favoriteColors,
    setSelectedColor,
    addToFavorites,
    resetSelectedColor,
  } = useColors();

  const handleInputChange = (e) => setSelectedColor(e.target.value);
  const handleInputEnter = (e) => {
    if (e.key !== "Enter") {
      return;
    }

    handleAddToFavorite();
  };
  const handleAddToFavorite = () => {
    addToFavorites();
    resetSelectedColor();
  };

  return (
    <div className="m-auto w-75 mt-5">
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Color
        </span>
        <input
          value={selectedColor}
          onInput={handleInputChange}
          onKeyDown={handleInputEnter}
          type="text"
          className="form-control"
          placeholder="Red"
        />
        <button
          onClick={handleAddToFavorite}
          className="btn btn-secondary"
          type="button"
        >
          <i className="bi bi-heart"></i>
        </button>
      </div>

      <div
        className="d-flex gap-2 flex-wrap justify-content-center overflow-y-auto"
        style={{ maxHeight: 80 }}
      >
        {favoriteColors.map((color) => (
          <div
            key={color}
            onClick={() => setSelectedColor(color)}
            style={{ height: 20, minWidth: 50, backgroundColor: color }}
          ></div>
        ))}
      </div>

      <div
        className="mt-5 border rounded-4 d-flex align-items-center justify-content-center fs-1 fw-bold"
        style={{ height: 150, backgroundColor: selectedColor }}
      >
        {selectedColor}
      </div>
    </div>
  );
}

export default ColorPicker;
