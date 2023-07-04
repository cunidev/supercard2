import React from 'react';
import { Card } from './Card';
import '../styles/SupercardLight.css';

interface SupercardLightProps {
  cards: Card[];
}

export const SupercardLight: React.FC<SupercardLightProps> = ({ cards }) => {
  return (
    <div className="supercard-light">
      {cards.map((card, index) => (
        <div key={index} className="card-container">
          <img src={card.barcode} alt="barcode" className="barcode" />
          <p className="card-name">{card.name}</p>
        </div>
      ))}
    </div>
  );
};