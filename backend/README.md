# RXVision Backend

Node.js + Express API powering OCR processing and prescription normalization.

## Scripts
- `npm run dev` – start development server with hot reload.
- `npm run build` – compile TypeScript to `dist/`.
- `npm start` – run compiled JavaScript (requires prior build).

## Environment Variables
Configure via root `.env` or per-environment configuration.

| Variable | Description |
| --- | --- |
| `PORT` | Port for the HTTP server (default `4000`). |
| `DEEPSEEK_API_KEY` | Secret token for DeepSeek Vision API. |
| `DEEPSEEK_OCR_URL` | Optional override for DeepSeek OCR endpoint. |

## API Outline
- `POST /api/prescriptions/process` – Accepts multipart upload (`image`) or JSON with `imageBase64`.
- `GET /api/health` – Returns service health metadata.

## Next Steps
- Implement secure auth and rate limiting.
- Persist OCR results in PostgreSQL via Prisma.
- Integrate DeepSeek Vision streaming APIs for faster feedback.
