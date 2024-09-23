import JackpotBet from '../../database/models/jackpotBet_model.js';

const store = async (req, res) => {
    try {
        const number1 = Math.floor(Math.random() * 9);
        const number2 = Math.floor(Math.random() * 9);
        const number3 = Math.floor(Math.random() * 9);

        number1 === number2 && number2 === number3
            ? req.body.bet.status = 'Win!'
            : req.body.bet.status = 'Lost!'

        req.body.numbers = [number1, number2, number3]

        const content = await JackpotBet.create(req.body);

        res.status(201).json(content);
    } catch (error) {
        console.log(error)
        res.status(400).json(error);
    }
};

const index = async (req, res) => {
    try {
        const content = await JackpotBet.find(req.query).exec();
        res.json(content);
    } catch (error) {
        res.status(400).json(error)
    }
};

const show = async (req, res) => {
    try {
        const content = await JackpotBet.findById(req.params.id).exec();
        res.json(content);
    } catch (error) {
        res.status(400).json(error);
    }
};

const update = async (req, res) => {
    try {
        const content = await JackpotBet.findByIdAndUpdate(req.params.id, req.body).exec();
        res.json(content);
    } catch (error) {
        res.status(400).json(error);
    }
};

export default {
    store,
    index,
    show,
    update
};