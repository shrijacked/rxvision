# RXVision Delivery Roadmap

## Phase 0 – Tooling & Foundations
- Set up GitHub CI (GitHub Actions) with frontend lint/test and backend build steps.
- Configure commit linting (Husky + lint-staged) and semantic-release workflow.
- Establish secrets management strategy for DeepSeek keys (GitHub secrets, secure local `.env`).

## Phase 1 – Authentication & Data Layer
- Integrate user auth provider (Clerk or Auth0) in both frontend and backend.
- Provision PostgreSQL (Supabase or RDS) and add Prisma schema for users, prescriptions, medications, reminders.
- Implement migrations and seed scripts, enable connection pooling.

## Phase 2 – OCR Pipeline MVP
- Build image upload flow from React Native to backend (multipart + retry).
- Implement DeepSeek OCR integration with error handling and caching of responses.
- Create NLP parsing micro-service or integrate OpenAI/DeepSeek language model for structuring text.
- Deliver prescription detail API consumed by mobile UI.

## Phase 3 – Mobile Experience
- Style Welcome, Scanner, Prescription Detail, Reminder, Settings, and History screens per provided assets.
- Add React Navigation stacks/tabs, theming, localization scaffold, accessibility audit.
- Implement offline caching (AsyncStorage) and optimistic updates for reminders.

## Phase 4 – Compliance & QA
- Add telemetry (Sentry, Datadog) with PHI scrubbing.
- Run automated tests: Jest unit tests, Detox E2E, supertest for backend.
- Conduct security review (OWASP top 10), add logging/audit trails, finalize HIPAA compliance checklist.

## Phase 5 – Release & Scale
- Automate builds via Fastlane (iOS) and Gradle tasks (Android) in CI.
- Publish beta builds to TestFlight and Play Console internal tracks.
- Monitor runtime usage, implement feedback loop, and iterate on NLP accuracy with human-in-the-loop review.
