import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { Card } from "../components/Card";

export const generatePDF = (cards: Card[], mode: 'light' | 'dark') => {
  const doc = new jsPDF();

  const columns = ["Name", "Barcode"];
  const rows = cards.map(card => [card.name, card.barcode]);

  doc.autoTable(columns, rows, {
    styles: { fillColor: mode === 'dark' ? [0, 0, 0] : [255, 255, 255] },
    columnStyles: {
      0: { textColor: mode === 'dark' ? 255 : 0 },
      1: { textColor: mode === 'dark' ? 255 : 0 }
    },
    margin: { top: 10 },
  });

  doc.save("supercard.pdf");
};