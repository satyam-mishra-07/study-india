const Data = require("../models/data-model");

const getData = async (req, res) => {
    try {
        const data = await Data.find();
        res.status(200).json({'message': data});
    } catch (err) {
        res.status(500).json(err.toString());
    }
};

module.exports = getData;