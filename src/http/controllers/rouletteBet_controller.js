import RouletteBet from '../../database/models/rouletteBet_model.js';

const store = async (req, res) => {
    try {
        req.body.value = parseInt(req.body.value);
        req.body.drawnNumber = Math.ceil(Math.random() * 100);

        drawnNumber == parseInt(req.body.value)
            ? (req.body.bet.status = 'Winner')
            : (req.body.bet.status = 'Loser')

        await RouletteBet.create(req.body);
        res.json();
    } catch (error) {
        res.status(400).json(error);
    }
};

const index = async (req, res) => {
    try {
        const content = await RouletteBet.find(req.query).exec();
        res.json(content);
    } catch (error) {
        res.status(400).json(error)
    }
};

const show = async (req, res) => {
    try {
        const content = await RouletteBet.findById(req.params.id).exec();
        res.json(content);
    } catch (error) {
        res.status(400).json(error);
    }
};

const update = async (req, res) => {
    try {
        const content = await RouletteBet.findByIdAndUpdate(req.params.id).exec();
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