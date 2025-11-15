import axios from 'axios';

export interface OCRResult {
  rawText: string;
  confidence: number;
  metadata?: Record<string, unknown>;
}

export interface ParsedPrescription {
  medicines: Array<{
    name: string;
    dosage: string;
    frequency: string;
    notes?: string;
  }>;
  instructions: string;
  warnings: string[];
  doctor?: string;
  patient?: string;
}

const deepseekApiKey = process.env.DEEPSEEK_API_KEY;
const deepseekEndpoint = process.env.DEEPSEEK_OCR_URL || 'https://api.deepseek.com/v1/vision/ocr';

if (!deepseekApiKey) {
  console.warn('DEEPSEEK_API_KEY is not set. OCR requests will fail until configured.');
}

export async function runOCR(base64Image: string): Promise<OCRResult> {
  if (!deepseekApiKey) {
    throw new Error('DeepSeek API key missing. Set DEEPSEEK_API_KEY in environment.');
  }

  const response = await axios.post(
    deepseekEndpoint,
    { image: base64Image },
    {
      headers: {
        Authorization: `Bearer ${deepseekApiKey}`,
        'Content-Type': 'application/json',
      },
      timeout: 30000,
    }
  );

  return {
    rawText: response.data?.text ?? '',
    confidence: response.data?.confidence ?? 0,
    metadata: response.data?.metadata,
  };
}

export async function parsePrescriptionText(rawText: string): Promise<ParsedPrescription> {
  // TODO: Replace with actual NLP parsing step.
  // For now return a mocked structure to unblock frontend integration.
  return {
    medicines: [
      {
        name: 'Medication A',
        dosage: '500mg',
        frequency: '2x daily',
      },
    ],
    instructions: rawText,
    warnings: [],
  };
}
