const jwt = require("jsonwebtoken");
const login = require("../models/login.model");
const config = process.env;

const verifyToken = (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers["x-access-token"];
    if (!token) {
        return res.status(403).json({
            message: "Token not found"
        });
    }
    try {
        const decode = jwt.verify(token, config.TOKEN_KEY);
        req.user = decode;
    } catch (e) {
        const user = jwt.decode(token);

        if (user.user_id) {
            const data = {
                id_usuario: user.user_id
            };
            login.logout(data, (error, resultado) => {
            });
        }
        return res.status(401).json({
            message: "Invalid Token"
        });
    }
    return next();
};

module.exports = verifyToken;