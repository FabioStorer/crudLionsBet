import db from '../db.js';
import betSchema from '../bet_schema.js';
const Schema = db.Schema;

const rouletteBetSchema = new Schema({
    bet: betSchema,
    betNumber: {
        type: Schema.Types.Number,
        min: 1,
        max: 100,
        required: true
    },
    drawnNumber: {
        type: Schema.Types.Number,
        min: 1,
        max: 100,
        required: true
    }
});

const Roulette = db.model('RouletteBet', rouletteBetSchema);

export default Roulette;