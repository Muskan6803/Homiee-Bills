const express = require("express");
const router = express.Router();
const authcontrollers = require("../controller/auth-controller")
const signupSchema = require("../validators/auth-validator");
const validate = require("../middleware/validate-middleware");

router.route("/").get(authcontrollers.home);
router.route('/register').post(validate(signupSchema), authcontrollers.register);
router.route('/login').post(authcontrollers.login);

module.exports = router; 