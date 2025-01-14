import { Options } from 'swagger-jsdoc';

const swaggerOptions: Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'GameHub API',
      version: '1.0.0',
      description: 'API documentation for the GameHub application',
    },
    servers: [
      {
        url: 'http://localhost:5000',
        description: 'Development server',
      },
    ],
  },
  apis: ['./src/routes/*.ts'], // Point to where routes are defined
};

export default swaggerOptions;
