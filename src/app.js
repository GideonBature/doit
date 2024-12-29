const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/routes');
const { redisClient, getAsync, setAsync, delAsync } = require('./config/redis');

const app = express();

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'doit API',
            version: '1.0.0',
            description: 'API documentation for the doit web application',
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
        security: [{
            bearerAuth: []
        }],
    },
    apis: ['./documentation/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use(cors());
app.use(bodyParser.json());

app.use('/api/v1', routes);

app.use((req, res, next) => {
    req.redisClient = redisClient;
    req.getAsync = getAsync;
    req.setAsync = setAsync;
    req.delAsync = delAsync;
    next();
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500).json({ message: err.message });
});

module.exports = app;
