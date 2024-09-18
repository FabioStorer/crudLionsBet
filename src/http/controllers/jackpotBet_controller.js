import Jackpot from '../../database/models/jackpotBet_model.js';

const store = async (req, res) => {
    let number1 = Math.floor(Math.random() * 9);
    let number2 = Math.floor(Math.random() * 9);
    let number3 = Math.floor(Math.random() * 9);
    if (number1 === number2 && number1 === number3 && number2 === number3) {
        res.json('Ganhou!');
    } else {
        res.json('Tente novamente.');
    }
};

const index = async (req, res) => {
    try {
        const content = await User.find(req.query).exec();
        res.json(content);
    } catch (error) {
        res.status(400).json(error)
    }
};

const show = async (req, res) => {
    try {
        const content = await User.findById(req.params.id).exec();
        res.json(content);
    } catch (error) {
        res.status(400).json(error);
    }
};

export default {
    store,
    index,
    show
};