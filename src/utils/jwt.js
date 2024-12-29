const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config/config");

const generateToken = (user) => {
    const { id } = user;
    return jwt.sign({ userId: id }, jwt_secret, { expiresIn: "1d" });
};

const verifyToken = (token) => jwt.verify(token, jwt_secret);

module.exports = { generateToken, verifyToken };