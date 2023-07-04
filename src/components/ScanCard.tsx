```tsx
import React, { useState, useEffect } from 'react';
import { BarcodeUtils } from '../utils/BarcodeUtils';
import '../styles/ScanCard.css';

interface ScanCardProps {
  onScan: (barcode: string, type: string) => void;
}

const ScanCard: React.FC<ScanCardProps> = ({ onScan }) => {
  const [cameraView, setCameraView] = useState<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (cameraView) {
      BarcodeUtils.startScanning(cameraView, onScan);
    }
    return () => {
      if (cameraView) {
        BarcodeUtils.stopScanning(cameraView);
      }
    };
  }, [cameraView, onScan]);

  return (
    <div className="scan-card">
      <video
        id="camera-view"
        className="camera-view"
        ref={(element) => setCameraView(element)}
        autoPlay
        playsInline
      />
    </div>
  );
};

export default ScanCard;
```