// swagger.config.js
import swaggerJSDoc from 'swagger-jsdoc';

const serverUrl = process.env.RENDER_URL || `http://localhost:${process.env.PORT || 3000}`;

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API - Catálogo de Livraria',
      version: '1.0.0',
      description: 'API para CRUD de livros de uma livraria em Franca.',
    },
    servers: [{ url: serverUrl }],
  },
  apis: ['./src/routes/*.js'],
};

export const swaggerDocs = swaggerJSDoc(swaggerOptions);
