import { Router } from 'express';
import multer from 'multer';
import { processPrescription } from '../controllers/prescriptionController';

const router = Router();
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 8 * 1024 * 1024 } });

router.post('/process', upload.single('image'), processPrescription);

export default router;
