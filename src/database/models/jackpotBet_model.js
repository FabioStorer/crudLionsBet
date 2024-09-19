import db from '../db.js';
import betSchema from '../bet_schema.js';
const Schema = db.Schema;

const jackpotBetSchema = new Schema({
    bet: betSchema,
    numbers: {
        type: [Schema.Types.Number],
        validate: (v) => v.length == 3,
        required: true
    }
});

const JackpotBet = db.model('JackpotBet', jackpotBetSchema);

export default JackpotBet;