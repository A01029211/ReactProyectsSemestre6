import { useState, useCallback } from "react";

const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => setCount((c) => c + 1), []);
  const decrement = useCallback(() => setCount((c) => Math.max(0, c - 1)), []);
  const reset = useCallback(() => setCount(initialValue), [initialValue]);
  const set = useCallback((val) => setCount(val), []);

  return { count, increment, decrement, reset, set };
};

export default useCounter;