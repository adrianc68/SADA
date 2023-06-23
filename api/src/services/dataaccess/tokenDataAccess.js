const {generateRefreshToken, generateAccessToken} = require("../../helpers/token");

const generateTokens = async (id_user) => {
    let accessToken;
    let refreshToken;
    try {
        let payloadAccessToken = {
            id: id_user,
        };
        refreshToken = await generateRefreshToken(payloadAccessToken);
        accessToken = await generateAccessToken(payloadAccessToken, refreshToken.jti);
    } catch (error) {
        throw error;
    }
    let tokensCreated = {
        refreshToken: refreshToken.token,
        accessToken: accessToken.token
    }
    return tokensCreated;
};

module.exports = { generateTokens}
