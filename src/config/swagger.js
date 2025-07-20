const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const path = require('path')

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'PokeAPI',
      version: '2.0.0',
      description: 'Documentación de mi API Express usando Swagger',
    },
    servers: [
      {
        url: 'http://localhost:3000', 
        description: 'Local server'
      },
    ],
  },
  apis: [path.join(__dirname, '../v2/routes/*.js')], // Ruta a los archivos con anotaciones Swagger
};

// Genera la especificación en formato OpenAPI
const swaggerSpec = swaggerJSDoc(options);

module.exports = {
  swaggerUi,
  swaggerSpec,
};
