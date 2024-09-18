import db from '../db.js';
const Schema = db.Schema;

const jackpotBetSchema = new Schema({
    bet: {
        type: Schema.Types.ObjectId,
        ref: 'Bet',
        required: true
    },
    numbers: {
        type: Schema.Types.Number,
        min: 1,
        max: 9,
        required: true
    }
});

const Jackpot = db.model('JackpotBet', jackpotBetSchema);

export default Jackpot;