const { Redis } = require('ioredis');
const { redis_url } = require('./config');

const redisClient = new Redis(redis_url);

redisClient.on('connect', () => {
    console.log('Connected to Redis');
});

redisClient.on('error', (error) => {
    console.error('Redis connection error: ', error);
});

redisClient.ping().then((response) => {
    console.log('Redis is connected and pinged:', response);
}).catch((err) => {
    console.error('Redis ping failed:', err);
});

module.exports = redisClient;