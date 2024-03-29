const Contact = require("../models/contact-model");

const contact = async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;
        const issueSubmitted = await Contact.create({
            name,
            email,
            phone,
            message
        });

        return res.status(201).json({message: "Issue Submitted Successfully"});
    } catch (error) {
        return res.status(404).json({message: `Internal Server Error ${error}`});
    }
};

module.exports = contact;