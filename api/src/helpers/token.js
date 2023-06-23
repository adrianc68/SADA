const jwt = require('jsonwebtoken')
const { v4: uuidv4 } = require("uuid");

const EXPIRATION_TIME = {
    INSTANT: process.env.EXPIRATION_TIME_INSTANT,
    LONG: process.env.EXPIRATION_TIME_LONG_TIME
};

const TOKEN_STATE = {
    INVALID: "INVALID",
    VALID: "VALID",
    NIL: "NIL"
};

const TOKEN_TYPE = {
    REFRESH: "refreshToken",
    ACCESS: "accessToken"
};

/**
 * This method generate and signs a token of type refreshToken.
 * @param {*} payload data that must contain an identifier (id), must be the same as the accesstokens payload.
 * @returns the token generated with jti uuidv4 identifier.
 */
const generateRefreshToken = async (payload) => {
    const jti = uuidv4();
    const refreshTokenPayload = {
        id: payload.id,
        tokenType: TOKEN_TYPE.REFRESH
    }
    let refreshToken = jwt.sign(
        refreshTokenPayload,
        process.env.TOKEN_SECRET, {
        expiresIn: EXPIRATION_TIME.LONG,
        jwtid: jti
    });
    return { token: refreshToken, jti }
};

/**
 * This method generate and signs a token of type accessToken
 * and it's need a reference to a refreshToken.
 * @param {*} payload data that contain user data
 * @param {*} refreshTokenJti must be the refreshToken id (jti).
 * @returns the token generated with jti uuidv4 identifier.
 */
const generateAccessToken = async (payload, refreshTokenJti) => {
    const jti = uuidv4();
    const accessTokenPayload = {
        ...payload,
        refreshTokenJti,
        tokenType: TOKEN_TYPE.ACCESS,
    };
    const accessToken = jwt.sign(
        accessTokenPayload,
        process.env.TOKEN_SECRET, {
        expiresIn: EXPIRATION_TIME.INSTANT,
        jwtid: jti
    });
    return { token: accessToken, jti }
};

/**
 * Verify the if JWT exists and decode the JTW data.
 * @param {*} token the token provided.
 * @returns the JWT decoded data.
 */
const verifyToken = async (token) => {
    const tokenVerified = jwt.verify(token, process.env.TOKEN_SECRET);
    return tokenVerified;
};


module.exports = {
    generateRefreshToken, generateAccessToken, verifyToken,
    TOKEN_STATE, TOKEN_TYPE
}
