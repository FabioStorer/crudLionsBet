import MatchBet from '../../database/models/matchBet_model.js';

const store = async (req, res) => {
    try {
        await MatchBet.create(req.body);
        res.json();
    } catch (error) {
        res.status(400).json(error);
    }
};

const index = async (req, res) => {
    try {
        const content = await MatchBet.find(req.query).exec();
        res.json(content);
    } catch (error) {
        res.status(400).json(error);
    }
};

const show = async (req, res) => {
    try {
        const content = await MatchBet.findById(req.params.id).exec();
        res.json(content);
    } catch (error) {
        res.status(400).json(error);
    }
};

const update = async (req, res) => {
    try {
        const content = await MatchBet.findByIdAndUpdate(req.params.id, req.body).exec();
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