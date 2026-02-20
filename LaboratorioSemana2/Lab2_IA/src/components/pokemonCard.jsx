import React from "react";
import Capsule from "./capsule";
import "./PokemonCard.css";

const PokemonCard = ({ data }) => {
  if (!data) return null;

  const sprite = data.sprites?.other?.["official-artwork"]?.front_default || data.sprites?.front_default;

  return (
    <div className="card">
      <p className="card__id">#{String(data.id).padStart(3, "0")}</p>
      <img className="card__img" src={sprite} alt={data.name} />
      <h2 className="card__name">{data.name}</h2>
      <div className="card__types">
        {data.types.map((t) => (
          <Capsule key={t.type.name} label={t.type.name} />
        ))}
      </div>
      <div className="card__stats">
        {data.stats.map((s) => (
          <div key={s.stat.name} className="stat">
            <span className="stat__name">{s.stat.name}</span>
            <div className="stat__bar-bg">
              <div
                className="stat__bar-fill"
                style={{ width: `${Math.min((s.base_stat / 150) * 100, 100)}%` }}
              />
            </div>
            <span className="stat__val">{s.base_stat}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;