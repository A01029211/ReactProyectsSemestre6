import React from "react";
import "./Capsule.css";

const TYPE_COLORS = {
  fire: "#ff4422",
  water: "#3399ff",
  grass: "#77cc55",
  electric: "#ffcc33",
  psychic: "#ff5599",
  ice: "#66ccff",
  dragon: "#7766ee",
  dark: "#775544",
  fairy: "#ee99ee",
  normal: "#aaaa99",
  fighting: "#bb5544",
  flying: "#8899ff",
  poison: "#aa5599",
  ground: "#ddbb55",
  rock: "#bbaa66",
  bug: "#aabb22",
  ghost: "#6666bb",
  steel: "#aaaabb",
  unknown: "#68a090",
  shadow: "#604e82",
};

const Capsule = ({ label }) => {
  const color = TYPE_COLORS[label?.toLowerCase()] || TYPE_COLORS.normal;

  return (
    <span className="capsule" style={{ background: color }}>
      {label}
    </span>
  );
};

export default Capsule;