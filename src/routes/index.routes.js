import { Router } from 'express';
import { test } from '../controllers/index.controller.js';
const router = Router();

router.get('/ping', test);

export default router;