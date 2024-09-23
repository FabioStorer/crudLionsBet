import express from 'express';
import rouletteBet_controller from '../controllers/rouletteBet_controller.js';
const router = express.Router();

router.post('/', rouletteBet_controller.store);
router.get('/', rouletteBet_controller.index);
router.get('/:id', rouletteBet_controller.show);
router.put('/:id', rouletteBet_controller.update);

export default router;