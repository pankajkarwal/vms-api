const jwt = require("jsonwebtoken");
const { default: constants } = require("../utils/constants");

const config = process.env;

const verifyToken = (req, res, next) => {
    const authorizationHeader = req.headers.authorization;
    let token;
    if (authorizationHeader) {
        token = req.headers.authorization.split(' ')[1]; // Bearer <token>
    }

    if (!token) {
        return res.status(403).send(constants.ERRORS.TOKEN_REQUIRED);
    }

    try {
        const decoded = jwt.verify(token, config.TOKEN_KEY);
        req.user = decoded;
    } catch (err) {
        return res.status(401).send(constants.ERRORS.TOKEN_INVALID);
    }
    return next();
};

module.exports = verifyToken;