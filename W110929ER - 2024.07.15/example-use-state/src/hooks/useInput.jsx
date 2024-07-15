import { useState } from "react";

function useInput(initialValue = "") {
  const [input, setInput] = useState(initialValue);

  const handleInputChange = (e) => setInput(e.target.value);

  const reset = () => setInput("");

  return [
    input,
    {
      setInput,
      handleInputChange,
      reset,
    },
  ];
}

export default useInput;
