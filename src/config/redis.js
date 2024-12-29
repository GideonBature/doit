const redis = require('ioredis');
const { redis_url } = require('./config');

const redisClient = new Redis(redis_url);

redisClient.on('connect', () => {
    console.log('Connected to Redis');
});

redisClient.on('error', (error) => {
    console.error('Redis connection error: ', error);
});

module.exports = redisClient;