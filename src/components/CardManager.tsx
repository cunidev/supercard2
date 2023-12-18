import React, { useState } from 'react';
import Card from './Card';
import EditCard from './EditCard';
import './CardManager.css';

interface CardData {
  id: string;
  name: string;
  color: string;
  barcode: string;
}

const CardManager: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>([]);
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);

  const handleOpenCard = (id: string) => {
    const card = cards.find(card => card.id === id);
    setSelectedCard(card);
  };

  const handleEditCard = (id: string, name: string, color: string) => {
    setCards(cards.map(card => card.id === id ? { ...card, name, color } : card));
    setSelectedCard(null);
  };

  const handleDeleteCard = (id: string) => {
    setCards(cards.filter(card => card.id !== id));
    setSelectedCard(null);
  };

  return (
    <div className="card-manager">
      <div className="card-list">
        {cards.map(card => (
          <Card key={card.id} data={card} onOpen={() => handleOpenCard(card.id)} onDelete={() => handleDeleteCard(card.id)} />
        ))}
      </div>
      {selectedCard && (
        <EditCard data={selectedCard} onSave={(name, color) => handleEditCard(selectedCard.id, name, color)} onCancel={() => setSelectedCard(null)} />
      )}
    </div>
  );
};

export default CardManager;