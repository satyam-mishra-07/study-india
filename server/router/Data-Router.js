const express = require('express');
const getData = require('../controllers/Data-Controller');
const router = express.Router();

router.route("/study").get(getData);

module.exports = router;