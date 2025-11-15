import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';

import prescriptionRouter from './routes/prescriptions';
import healthRouter from './routes/health';

dotenv.config({ path: path.resolve(process.cwd(), '../.env') });

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

app.use('/api/health', healthRouter);
app.use('/api/prescriptions', prescriptionRouter);

app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ message: 'Unexpected server error' });
});

app.listen(port, () => {
  console.log(`RXVision backend listening on port ${port}`);
});
