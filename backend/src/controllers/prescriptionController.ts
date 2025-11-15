import { Request, Response, NextFunction } from 'express';
import { runOCR, parsePrescriptionText } from '../services/deepseekService';

export async function processPrescription(req: Request, res: Response, next: NextFunction) {
  try {
    const file = (req as Request & { file?: Express.Multer.File }).file;
    const base64Image = req.body?.imageBase64;

    if (!file && !base64Image) {
      return res.status(400).json({ message: 'Provide an image file or imageBase64 payload.' });
    }

    const imagePayload = base64Image ?? file!.buffer.toString('base64');

    const ocrResult = await runOCR(imagePayload);
    const structured = await parsePrescriptionText(ocrResult.rawText);

    return res.status(200).json({
      ocr: ocrResult,
      prescription: structured,
    });
  } catch (error) {
    next(error);
  }
}
