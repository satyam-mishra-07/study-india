const jwt = require('jsonwebtoken');
const User = require('../models/user-model');

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization');

    if(!token) {
        return res.status(401).json({ message: "Unauthorized HTTP, Token not Provided" });
    };

    const jwtToken = token.replace('Bearer ', '').trim();
    try {
        const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET);
        const userData = User.findOne({email: isVerified.email}).select({password: 0});
        if(!userData) {
            return res.status(401).json({ message: "User Not Found" });
        }
        req.user = userData;
        req.token = jwtToken;
        req.admin = userData.isAdmin;
        next();
    } catch (error) {
        next(error);
        // return res.status(401).json({ message: "Internal Server Error" });
    }
};

module.exports = authMiddleware;