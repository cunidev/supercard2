import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { SupercardLight } from './SupercardLight';
import { SupercardDark } from './SupercardDark';
import { Card } from './Card';
import { generatePDFDocument } from '../utils/PDFUtils';

interface SupercardPDFProps {
  cards: Card[];
  mode: 'light' | 'dark';
}

export const SupercardPDF: React.FC<SupercardPDFProps> = ({ cards, mode }) => {
  const SupercardComponent = mode === 'light' ? SupercardLight : SupercardDark;

  return (
    <PDFDownloadLink
      document={generatePDFDocument(cards, SupercardComponent)}
      fileName="supercard.pdf"
    >
      {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : 'Download Supercard'
      }
    </PDFDownloadLink>
  );
};