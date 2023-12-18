import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import './EditCard.css';

interface Card {
  id: string;
  name: string;
  color: string;
  barcode: string;
}

interface EditCardProps {
  card: Card;
  onSave: (card: Card) => void;
}

const EditCard: React.FC<EditCardProps> = ({ card, onSave }) => {
  const [name, setName] = useState(card.name);
  const [color, setColor] = useState(card.color);

  const handleSave = () => {
    onSave({ ...card, name, color });
  };

  return (
    <div className="edit-card">
      <TextField
        id="card-name"
        label="Card Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        id="card-color"
        label="Card Color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSave}>
        Save
      </Button>
    </div>
  );
};

export default EditCard;