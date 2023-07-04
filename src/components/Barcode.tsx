import React from 'react';
import { Barcode as BarcodeType } from '../utils/BarcodeUtils';

interface BarcodeProps {
  barcode: BarcodeType;
}

const Barcode: React.FC<BarcodeProps> = ({ barcode }) => {
  return (
    <div className="barcode">
      <img src={barcode.data} alt={barcode.type} />
      <p>{barcode.type}</p>
    </div>
  );
};

export default Barcode;