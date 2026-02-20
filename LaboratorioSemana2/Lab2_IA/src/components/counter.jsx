import React from "react";
import "./Counter.css";
import useCounter from "../hooks/useCounter";

const Counter = ({ total, onSearch }) => {
  const { count, increment, decrement, reset } = useCounter(1);

  const handleSearch = () => {
    onSearch(count);
  };

  return (
    <div className="counter">
      <p className="counter__label">Pokémon #</p>
      <div className="counter__controls">
        <button className="counter__btn" onClick={decrement} disabled={count <= 1}>−</button>
        <span className="counter__value">{count}</span>
        <button className="counter__btn" onClick={increment} disabled={count >= total}>+</button>
      </div>
      <div className="counter__actions">
        <button className="counter__search" onClick={handleSearch}>Buscar</button>
        <button className="counter__reset" onClick={() => { reset(); onSearch(1); }}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;