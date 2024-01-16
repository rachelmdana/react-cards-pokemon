import React from "react";
import useFlip from "./hooks/useFlip";
import backOfCard from "./back.png";
import "./PlayingCard.css";

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard, stat }) {
  const [isFlipped, toggleFlip] = useFlip();

  return (
    <div onClick={toggleFlip} className={`PlayingCard Card ${isFlipped ? 'flipped' : ''}`}>
      {isFlipped ? (
        <div className="PlayingCard-back">
          <img src={back} alt="card back" />
        </div>
      ) : (
        <div className="PlayingCard-front">
          <img src={front} alt="card front" />
          {stat && (
            <div className="PlayingCard-stat">
              <p>
                <em>{stat.name}</em>: {stat.value}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default PlayingCard;