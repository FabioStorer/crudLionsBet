import Match from '../../database/models/match_model.js';;

const store = async (req, res) => {
    try {
        await Match.create(req.body);
        res.json();
    } catch (error) {
        res.status(400).json();
    }
};

const index = async (req, res) => {
    try {
        const content = await Match.find(req.query).exec();
        res.json(content);
    } catch (error) {
        res.status(400).json(error);
    }
};

const show = async (req, res) => {
    try {
        const content = await Match.findById(req.params.id).exec();
        res.json(content);
    } catch (error) {
        res.status(400).json(error);
    }
};

const update = async (req, res) => {
    try {
        const content = await Match.findByIdAndUpdate(req.params.id).exec();
        res.json(content);
    } catch (error) {
        res.status(400).json(error);
    }
};

const destroy = async (req, res) => {
    try {
        const content = await Match.findByIdAndDelete(req.params.id).exec();
        res.json(content);
    } catch (error) {
        res.status(400).json(error);
    }
};

export default {
    store,
    index,
    show,
    update,
    destroy
};