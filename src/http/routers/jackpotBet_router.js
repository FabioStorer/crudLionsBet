import express from 'express';
import jackpotBet_controller from '../controllers/jackpotBet_controller.js';
const router = express.Router();

router.post('/', jackpotBet_controller.store);
router.get('/', jackpotBet_controller.index);
router.get('/:id', jackpotBet_controller.show);
router.put('/:id', jackpotBet_controller.update);

export default router;