import db from './db.js';
const Schema = db.Schema;

const betSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    paymentStatus: {
        type: Schema.Types.String,
        enum: ['Finished.', 'Pending', 'Refused', 'Cancelled'],
        default: 'Pending'
    },
    status: {
        type: Schema.Types.String,
        enum: ['Winner', 'Loser', 'Draw'],
        required: true
    },
    value: {
        type: Schema.Types.Number,
        min: 25,
        required: true
    },
    date: {
        type: Schema.Types.Date,
        required: true
    }
}, {
    timestamps: true
});

export default Bet;