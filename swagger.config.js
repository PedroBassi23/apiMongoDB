import swaggerJSDoc from 'swagger-jsdoc';

// A URL do servidor onde a API estará rodando.
// Para produção (Render, Vercel, etc.), defina process.env.RENDER_URL.
// Para desenvolvimento local, usará http://localhost:3000.
const serverUrl = process.env.RENDER_URL || `http://localhost:${process.env.PORT || 3000}`;

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0', // Versão do OpenAPI (Swagger)
    info: {
      title: 'API - Catálogo de Livraria',
      version: '1.0.0',
      description: 'API para CRUD de livros de uma livraria em Franca.',
      contact: {
        name: 'Seu Nome', // Opcional: seu nome
        url: 'http://seusite.com', // Opcional: seu site/portfolio
        email: 'seuemail@exemplo.com', // Opcional: seu email
      },
    },
    servers: [
      {
        url: serverUrl,
        description: 'Servidor Local/Produção',
      },
    ],
    components: {
      schemas: {
        Livro: {
          type: 'object',
          required: ['titulo', 'autor', 'genero', 'preco', 'estoque'],
          properties: {
            _id: {
              type: 'string',
              description: 'ID único do livro (gerado automaticamente pelo MongoDB)',
              readOnly: true,
            },
            titulo: {
              type: 'string',
              description: 'Título do livro',
              example: 'O Senhor dos Anéis',
            },
            autor: {
              type: 'string',
              description: 'Autor do livro',
              example: 'J.R.R. Tolkien',
            },
            genero: {
              type: 'string',
              description: 'Gênero do livro',
              example: 'Fantasia',
            },
            preco: {
              type: 'number',
              format: 'float',
              description: 'Preço do livro',
              example: 49.90,
            },
            estoque: {
              type: 'integer',
              description: 'Quantidade de livros em estoque',
              example: 100,
            },
            dataPublicacao: {
              type: 'string',
              format: 'date',
              description: 'Data de publicação do livro (formato YYYY-MM-DD)',
              example: '1954-07-29',
            },
          },
        },
      },
    },
  },
  // Caminhos para os arquivos que contêm as definições de rota e comentários JSDoc
  apis: ['./src/routes/*.js'],
};

export const swaggerDocs = swaggerJSDoc(swaggerOptions);