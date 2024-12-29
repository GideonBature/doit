const dotenv = require('dotenv');

// loading the environment variables
dotenv.config();

const port = process.env.PORT || 3000;
const db = process.env.DATABASE_URL || process.env.DATABASE_ONLINE_URL;
const jwt_secret = process.env.JWT_SECRET || 'defaultsecret';
const jwt_expiry = process.env.JWT_EXPIRY || '1h';
const redis_url = process.env.REDIS_URL;

module.exports = { port, db, jwt_secret, redis_url, jwt_expiry };
