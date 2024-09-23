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
        enum: ['Win!', 'Lost!', 'Draw'],
        required: true
    },
    value: {
        type: Schema.Types.Number,
        min: 25,
        required: true
    }
}, {
    timestamps: true
});

export default betSchema;