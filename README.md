# RXVision

RXVision is an AI-powered mobile and web application that helps patients read handwritten prescriptions. By applying DeepSeek Vision OCR and tailored natural language processing, the app converts doctors’ notes into clear, structured medication guidance with safety checks.

## Tech Stack
- React Native (iOS & Android)
- Node.js + Express backend APIs
- DeepSeek Vision OCR engine
- PostgreSQL (planned) for structured prescription data
- Optional: Redis for caching OCR and NLP results

## Project Goals
1. Capture prescription images via mobile camera or file upload.
2. Run DeepSeek OCR to extract handwritten text with high accuracy.
3. Normalize the text into medicines, dosages, and instructions using NLP.
4. Provide medication reminders, history, and pharmacist-ready summaries.
5. Ensure privacy, security, and auditability for medical data.

## UI References
Design references are available under `stitch_rxvision_app_welcome_screen/`, covering welcome, settings, scanner, prescription details, reminders, and history flows.

## Status
- Repository scaffolding and assets imported.
- Planning and implementation in progress.
- React Native app scaffold (`frontend/`) generated with TypeScript template.
- Pending: remote push blocked by missing GitHub credentials (`fatal: could not read Username for 'https://github.com': Device not configured`).

## Monorepo Structure
- `frontend/`: React Native application (iOS & Android) bootstrapped on React Native 0.73.x with TypeScript.
- `backend/`: Node.js + Express API scaffold prepared for DeepSeek OCR integration.
- `stitch_rxvision_app_welcome_screen/`: Reference UI assets and HTML snippets for key flows.
- `.env.example`: Sample environment variables for backend services.

