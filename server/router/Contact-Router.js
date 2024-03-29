const express = require('express');
const router = express.Router();
const contact = require('../controllers/Contact-Controller');
const validate = require('../models/contact-model');
const contactSchema = require('../validator/contact-validator');

// router.route("/contact").post(validate(contactSchema), contact); // Not working ??
router.post("/contact", async (req, res, next) => {
    await validate(contactSchema)
    await contact(req, res);
});


module.exports = router;