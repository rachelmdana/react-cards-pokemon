import React from "react";
import useFlip from "./hooks/useFlip";
import "./PokemonCard.css";

/* Renders a single pokemon card. */
function PokemonCard({ front, back, name, stats }) {
  const [isFlipped, toggleFlip] = useFlip();

  return (
    <div onClick={toggleFlip} className={`PokemonCard Card ${isFlipped ? 'flipped' : ''}`}>
      {isFlipped ? (
        <div className="PokemonCard-back">
          <img src={back} alt={`${name} back`} />
        </div>
      ) : (
        <div className="PokemonCard-front">
          <img src={front} alt={`${name} front`} />
          <div>
            <p className="PokemonCard-name">{name}</p>
            <ul className="PokemonCard-stats">
              {stats.map(stat => (
                <li key={stat.name}>
                 <em>{stat.name}</em>: {stat.value}
               </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default PokemonCard;
