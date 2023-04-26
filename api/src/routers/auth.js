const {createTokens} = require('../controllers/auth');
const {loginDataValidation} = require('../controllers/validations/authDataValidation');
const {loginValidateFormat} = require('../validator/format/authFormatValidation');

const router = require('express').Router();

router.post("/authentication/login",
	loginValidateFormat,
	loginDataValidation,
	createTokens
);

module.exports = router;
