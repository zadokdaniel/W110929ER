import { useState } from "react";

export function useLocalStorage({
  key = null,
  initialValue = null,
  reviver,
  replacer,
} = {}) {
  const [state, _setState] = useState(() => {
    const _initialValue =
      typeof initialValue === "function" ? initialValue() : initialValue;

    if (!key) {
      return _initialValue;
    }

    const ls_state = localStorage.getItem(key);
    return ls_state ? JSON.parse(ls_state, reviver) : _initialValue;
  });

  const setState = (newState) => {
    _setState((state) => {
      const newValue =
        typeof newState === "function" ? newState(state) : newState;

      if (key) {
        localStorage.setItem(key, JSON.stringify(newValue, replacer));
      }
      return newValue;
    });
  };

  const clear = () => {
    const _initialValue =
      typeof initialValue === "function" ? initialValue() : initialValue;

    setState(_initialValue);
    localStorage.removeItem(key);
  };

  return [state, setState, { clear }];
}

export default useLocalStorage;
