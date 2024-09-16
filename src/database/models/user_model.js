import db from '../db.js';

const Schema = db.Schema

const rechargeSchema = new Schema({
    valor: {
        type: Schema.Types.Number,
        min: 10
    },
    status: {
        type: Schema.Types.String,
        enum: ['Finalizada', "Pendente", 'Recusada', 'Cancelada'],
        default: 'Pendente'
    }
});

const walletSchema = new Schema({
    balance: {
        type: Schema.Types.Number,
        default: 0,
        min: 0
    },
    password: {
        type: Schema.Types.String,
        minLength: 4,
        maxLength: 4
    },
    recharges: [rechargeSchema]
});

const userSchema = new Schema({
    email: {
        type: Schema.Types.String,
        required: true
    },
    cpf: {
        type: Schema.Types.String,
        minLength: 11,
        maxLength: 11,
        validate: {
            validator: function (v) {
                return /^\d+$/.test(v);
            },
        },
        required: true
    },
    nickname: {
        type: Schema.Types.String,
        required: true
    },
    password: {
        type: Schema.Types.String,
        required: true
    },
    wallet: walletSchema,
    acceptedTerms: {
        type: Schema.Types.Boolean,
        required: true
    }
});

const User = db.model('User', userSchema);

export default User;