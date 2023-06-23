const {StatusCodes} = require("http-status-codes");
const {logger} = require("./logger");
const {validationResult} = require("express-validator");
const {generateRandomCode} = require("./generateCode");
const {httpMessageCodes} = require("./constants/httpMessageCodes");

/**
 * 400 Bad Request (Just for validations)
 * Invalid syntax where errors will be loaded to payload message.
 * @param {*} request 
 * @param {*} response 
 * @param {*} next 
 */
const httpResponseValidation = (request, response, next) => {
	const errors = validationResult(request);
	if (!errors.isEmpty()) {
		let payload = generatePayload("Bad Request", httpMessageCodes.INVALID_REQUEST_PARAMS);
		payload.params = errors.array();
		return response.status(StatusCodes.BAD_REQUEST).json(payload);
	}
	return next();
};

/**
 * 200 OK
 * The request has succeeded.
 * @param {*} response epresents the HTTP response
 * @param {*} message message to send the HTTP response.
 */
const httpResponseOk = (response, data = null) => {
	let payload = generatePayload("Ok", httpMessageCodes.OK);
	if(data) {
		payload.data = data;
	}
	return response.status(StatusCodes.OK).json(payload);
}

/**
 * 404 Not Found
 * Can not find requested resource. Due to: 
 *  URL not recognized.
 *  Resource does not exist.
 * @param {*} response represents the HTTP response
 * @param {*} message message to send the HTTP response.
 */
const httpResponseNotFound = (response, code = null) => {
	let payload = generatePayload("Not found", code);
	return response.status(StatusCodes.NOT_FOUND).json(payload);
};

/**
 * 401 Unauthorized
 * Client must authenticate to get the requested response.
 * @param {*} response represents the HTTP response
 */
const httpResponseUnauthorized = (response, code = null) => {
	let payload = generatePayload("Unauthorized", code);
	return response.status(StatusCodes.UNAUTHORIZED).json(payload);
};

/**
 * 403 Forbidden
 * Client does not have right access to the content.
 * @param {*} response represents the HTTP response.
 * @param {*} code defined in errorCodes (optional)
 */
const httpResponseForbidden = (response, code) => {
	let payload = generatePayload("Forbidden", code);
	return response.status(StatusCodes.FORBIDDEN).json(payload);
};

/**
 * 501 Not implemented
 * Request method is not supported by server.
 * @param {*} response represents the HTTP response.
 * @param {*} code defined in errorCodes (optional)
 */
const httpResponseNotImplement = (response, code = null) => {
	let payload = generatePayload("Not implemented", code);
	return response.status(StatusCodes.NOT_IMPLEMENTED).json(payload);
};

/**
 * 400 Bad Request
 * Server could not understand the request due to invalid syntax
 * @param {*} response represents the HTTP response.
 * @param {*} code defined in errorCodes (optional)
 */
const httpResponseBadRequest = (response, code = null) => {
	let payload = generatePayload("Bad Request", code);
	return response.status(StatusCodes.BAD_REQUEST).json(payload);
};

/**
 * 500 Internal Server Error
 * Unexpected condition that prevented it from fulfilling the request.
 * @param {*} response represents the HTTP response.
 * @param {*} error message to log.
 */
const httpResponseInternalServerError = (response, error) => {
	error.identifier = generateRandomCode(12);
	logger.fatal(error);
	let payload = {
		message: httpMessageCodes.SERVER_ERROR.value,
		identifier: error.identifier
	};
	return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json(payload);
};

/**
 * 302 Moved temporarily 
 * the resource requested has been temporarily moved to 
 * the URL given by the Location headers.
 * @param {*} request the http request.
 * @param {*} response the http response
 * @param {*} route the route to redirect
 */
const httpResponseRedirect = (request, response, route) => {
	response.writeHead(StatusCodes.MOVED_TEMPORARILY, {
		Location: "http" + (request.socket.encrypted ? "s" : "") + "://" +
			request.headers.host + route
	});
	return response.end();
};

/**
 * 301 Moved Permanently
 * URI of requested resource has been changed. 
 * Probably, new URI would be given in the response.
 * @param {*} request the http request
 * @param {*} response the http response
 * @param {*} data the new route
 */
const httpResponseRedirectToWeb = (response, data) => {
	response.writeHead(StatusCodes.MOVED_PERMANENTLY, {
		Location: data
	}).end();
};

/**
 * Generate payload message 
 * @param {*} defaultMessage set a default message if code not provided.
 * @param {*} code (optional) represents any key in errorCode.js if provided then defaultMessage is going to be overwrited.
 */
const generatePayload = (defaultMessage, code) => {
	let payload = {
		message: defaultMessage
	}
	if (code && httpMessageCodes[code.key]) {
		payload.code = code.key,
		payload.message = code.value;
	}
	return payload;
}

module.exports = {
	httpResponseInternalServerError, httpResponseValidation, httpResponseUnauthorized,
	httpResponseNotFound, httpResponseOk, httpResponseBadRequest, httpResponseForbidden, httpResponseNotImplement, httpResponseRedirect, httpResponseRedirectToWeb
}
