import React from "react";
import "./Loading.css";

const Loading = ({ message = "Cargando..." }) => {
  return (
    <div className="loading-wrapper">
      <div className="pokeball">
        <div className="pokeball__top" />
        <div className="pokeball__middle">
          <div className="pokeball__button" />
        </div>
        <div className="pokeball__bottom" />
      </div>
      <p className="loading-text">{message}</p>
    </div>
  );
};

export default Loading;