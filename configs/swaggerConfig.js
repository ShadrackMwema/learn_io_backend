const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const envUtils = require('../common/envUtils');

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Learn IO Backend API',
        version: '1.0.0',
        description: 'API documentation for Learn IO backend services',
    },
    servers: [
        {
            url: `http://localhost:${envUtils.get('PORT') || 3000}`,
        },
    ],
};

const options = {
    swaggerDefinition,
    apis: ['./routes/*.js'], // Files with Swagger annotations
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = { swaggerUi, swaggerSpec };