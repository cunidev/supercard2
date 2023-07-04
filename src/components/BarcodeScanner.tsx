```tsx
import React, { useState, useEffect } from 'react';
import { BarcodeScanner as Scanner } from '@ionic-native/barcode-scanner';
import { BarcodeUtils } from '../utils/BarcodeUtils';

const BarcodeScanner: React.FC = () => {
  const [barcodeData, setBarcodeData] = useState<string | null>(null);

  useEffect(() => {
    const scanBarcode = async () => {
      try {
        const data = await Scanner.scan();
        if (data.cancelled) {
          return;
        }
        const barcodeType = BarcodeUtils.identifyBarcodeType(data.text);
        setBarcodeData(barcodeType);
      } catch (error) {
        console.log('Error scanning barcode', error);
      }
    };
    scanBarcode();
  }, []);

  return (
    <div id="barcode-scanner">
      {barcodeData ? (
        <div>
          <h2>Scanned Barcode</h2>
          <p>{barcodeData}</p>
        </div>
      ) : (
        <p>Scanning...</p>
      )}
    </div>
  );
};

export default BarcodeScanner;
```