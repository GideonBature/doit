const jwt = require('jsonwebtoken');
const { jwt_secret } = require('../config/config');

// Middleware to verify JWT token
const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({
            error: 'Authorization token is required.'
        });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, jwt_secret);
        req.user = decoded;
        next();
    } catch(error) {
        res.status(403).json({
            error: 'Invalid or expired token.'
        });
    }
};

module.exports = { authenticate };