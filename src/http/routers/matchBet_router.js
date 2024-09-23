import express from 'express';
import matchBet_controller from '../controllers/matchBet_controller.js';
const router = express.Router();

router.post('/', matchBet_controller.store);
router.get('/', matchBet_controller.index);
router.get('/:id', matchBet_controller.show);
router.put('/:id', matchBet_controller.update);

export default router;