import db from '../db.js';
const Schema = db.Schema;

const matchBetSchema = new Schema({
    bet: {
        type: Schema.Types.String,
        ref: 'Bet',
        required: true
    },
    match: {
        type: Schema.Types.String,
        ref: 'Match',
        required: true
    },
    odd: {
        type: Schema.Types.Number,
        required: true
    },
    competitor: {
        type: Schema.Types.ObjectId,
        ref: 'Competitor',
        required: true
    }
});

const matchBet = db.model('MatchBet', matchBetSchema);

export default matchBet;