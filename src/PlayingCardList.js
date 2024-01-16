import React from "react";
import useAxios from "./hooks/useAxios";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
import ErrorBoundary from './ErrorBoundary';


function CardTable() {
  const [cardsData, addCardData] = useAxios("https://deckofcardsapi.com/api/deck/new/draw/");

  const addCard = async () => {
    addCardData();
  };

  return (
    <ErrorBoundary>
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={addCard}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cardsData.map((cardData) => (
          <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
        ))}
      </div>
      </div>
    </ErrorBoundary>
    
  );
}

export default CardTable;