import db from '../db.js';
const Schema = db.Schema;

const matchSchema = new Schema({
    competitors: {
        type: Schema.Types.ObjectId,
        ref: 'Competitor',
        min: 2,
        max: 2,
        required: true
    },
    start: {
        type: Schema.Types.Date,
        required: true
    }
});

const Match = db.model('Match', matchSchema);

export default Match;