import React, { useState } from 'react';
import { Card } from './Card';
import { SupercardPDF } from './SupercardPDF';
import { SupercardLight } from './SupercardLight';
import { SupercardDark } from './SupercardDark';
import './Supercard.css';

interface SupercardProps {
  cards: Card[];
}

export const Supercard: React.FC<SupercardProps> = ({ cards }) => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const handleModeChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setMode(event.target.value as 'light' | 'dark');
  };

  return (
    <div className="supercard">
      <div className="mode-selector">
        <label>Mode:</label>
        <select value={mode} onChange={handleModeChange}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
      {mode === 'light' ? (
        <SupercardLight cards={cards} />
      ) : (
        <SupercardDark cards={cards} />
      )}
      <SupercardPDF cards={cards} mode={mode} />
    </div>
  );
};