const {check, body, header} = require('express-validator');

const validateEmailData = [
	check("email")
		.trim()
		.not()
		.isEmpty()
		.withMessage("email is required")
		.bail()
		.isLength({min: 3, max: 254})
		.withMessage("email allowed length: {min: 3, max: 254}")
		.bail()
		.isEmail()
		.normalizeEmail()
		.withMessage("email format is not valid. must have allowed format: hello@example.com")
];

const validateNameData = [
	check("name")
		.optional({nullable: true})
		.bail()
		.isLength({min: 3, max: 64})
		.withMessage("name must have the allowed length: {min: 3, max: 64}")
		.bail()
		.matches(/^[a-zA-Zñ]+(\ ([a-zA-Zñ]+))*$/)
		.withMessage("name is not valid, must have allowed characters: a-zA-Z and one space between words")
];

const validatePasswordData = [
	check("password")
		.not()
		.isEmpty()
		.withMessage("password is required")
		.bail()
		.isLength({min: 6, max: 128})
		.withMessage("password must have the allowed length: {min: 6, max: 128}")
];

const validatePhoneNumberData = [
	check("phoneNumber")
		.isLength({min: 8, max: 15})
		.withMessage("phoneNumber must have the allowed length: {min: 8, max: 15}")
		.matches(/^[\d]*$/)
		.withMessage("phoneNumber must have the allowed characters: digits")
];

const validateBirthdateData = [
	check("birthdate")
		.isISO8601('yyyy-mm-dd')
		.withMessage("birthday format is invalid, must have the allowed format: yyyy-mm-dd")
		.bail()
		.custom((value, {req}) => {
			return isValidDate(value);
		})
		.withMessage("birthday does not exist")
];

const validateAuthorizationHeaderData = [
	header("authorization")
		.not()
		.isEmpty()
		.withMessage("authorization header is required")
		.bail()
		.matches(/^Bearer\s{1}([^ ]+)$/)
		.withMessage("Bearer token is not valid, you must provide a valid token format")
];

const validateAccessTokenParameterData = [
	header("accessToken")
		.not()
		.isEmpty()
		.withMessage("accessToken header is required")
		.bail()
		.matches(/^Bearer\s{1}([^ ]+)$/)
		.withMessage("Bearer token is not valid, you must provide a valid token format")
];

const validateRefreshTokenParameterData = [
	header("refreshToken")
		.not()
		.isEmpty()
		.withMessage("refreshToken header is required")
		.bail()
		.matches(/^Bearer\s{1}([^ ]+)$/)
		.withMessage("Bearer token is not valid, you must provide a valid token format")
];

module.exports = {validateEmailData, validateNameData, validatePasswordData, validatePhoneNumberData, validateBirthdateData, validateAuthorizationHeaderData, validateAccessTokenParameterData, validateRefreshTokenParameterData};
