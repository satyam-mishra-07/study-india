const express = require('express');
const router = express.Router();
const {login, register, user} = require('../controllers/Auth-Controller');
const authMiddleware = require('../middleware/auth-middleware');
const errorMiddleware = require('../middleware/error-middleware');
const { signupSchema, signinSchema } = require('../validator/auth-validator');
const validate = require('../middleware/validate-middleware');

router.route("/login").post(validate(signinSchema), login);
router.route("/register").post(validate(signupSchema),register);
router.route("/user").get(authMiddleware, errorMiddleware, user);

module.exports = router;