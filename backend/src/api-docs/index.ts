import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import swaggerOptions from './swagger';

const swaggerSpec = swaggerJsdoc(swaggerOptions);

export { swaggerUi, swaggerSpec };
