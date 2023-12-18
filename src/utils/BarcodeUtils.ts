```typescript
import { BarcodeFormat, DecodeHintType, MultiFormatReader } from '@zxing/library';

export interface IBarcodeResult {
  text: string;
  format: BarcodeFormat;
}

export class BarcodeUtils {
  private reader: MultiFormatReader;

  constructor() {
    this.reader = new MultiFormatReader();
    this.reader.setHints({
      [DecodeHintType.POSSIBLE_FORMATS]: [
        BarcodeFormat.QR_CODE,
        BarcodeFormat.CODE_39,
        BarcodeFormat.CODE_128,
        BarcodeFormat.EAN_13,
        BarcodeFormat.EAN_8,
        BarcodeFormat.UPC_A,
        BarcodeFormat.UPC_E,
      ],
    });
  }

  public decode(imageData: ImageData): IBarcodeResult | null {
    try {
      const result = this.reader.decode(imageData, undefined);
      return {
        text: result.getText(),
        format: result.getBarcodeFormat(),
      };
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}
```