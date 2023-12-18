```tsx
import React from 'react';
import './Card.css';

interface CardProps {
  id: string;
  name: string;
  color: string;
  barcode: string;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const Card: React.FC<CardProps> = ({ id, name, color, barcode, onEdit, onDelete }) => {
  return (
    <div className="card" style={{ backgroundColor: color }}>
      <div className="card-header">
        <h2>{name}</h2>
        <div className="card-actions">
          <button onClick={() => onEdit(id)}>Edit</button>
          <button onClick={() => onDelete(id)}>Delete</button>
        </div>
      </div>
      <div className="card-body">
        <img src={barcode} alt="barcode" />
      </div>
    </div>
  );
};

export default Card;
```