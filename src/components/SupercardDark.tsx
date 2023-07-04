import React from 'react';
import { Card } from './Card';
import '../styles/SupercardDark.css';

interface SupercardDarkProps {
  cards: Card[];
}

const SupercardDark: React.FC<SupercardDarkProps> = ({ cards }) => {
  return (
    <div className="supercard-dark">
      {cards.map((card, index) => (
        <div key={index} className="card-container">
          <img src={card.barcode} alt="barcode" className="barcode" />
          <p className="card-name">{card.name}</p>
        </div>
      ))}
    </div>
  );
};

export default SupercardDark;