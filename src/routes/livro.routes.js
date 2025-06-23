import { Router } from 'express';
import {
  getAllLivros,
  getLivroById,
  getLivroByNome,
  createLivro,
  updateLivro,
  deleteLivro
} from '../controllers/livro.controller.js';

const router = Router();

/**
 * @swagger
 * tags:
 * name: Livros
 * description: Operações relacionadas a livros na livraria
 */

/**
 * @swagger
 * /api/livros:
 * get:
 * summary: Retorna uma lista de todos os livros.
 * tags: [Livros]
 * responses:
 * 200:
 * description: Lista de livros retornada com sucesso.
 * content:
 * application/json:
 * schema:
 * type: array
 * items:
 * $ref: '#/components/schemas/Livro'
 * 500:
 * description: Erro interno do servidor.
 */
router.get('/livros', getAllLivros);

/**
 * @swagger
 * /api/livros/{id}:
 * get:
 * summary: Retorna um livro pelo ID.
 * tags: [Livros]
 * parameters:
 * - in: path
 * name: id
 * required: true
 * schema:
 * type: string
 * description: ID único do livro.
 * responses:
 * 200:
 * description: Livro retornado com sucesso.
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/Livro'
 * 404:
 * description: Livro não encontrado.
 * 500:
 * description: Erro interno do servidor.
 */
router.get('/livros/:id', getLivroById);

/**
 * @swagger
 * /api/livros/nome/{nome}:
 * get:
 * summary: Retorna livros que correspondem ao nome (parcial ou completo).
 * tags: [Livros]
 * parameters:
 * - in: path
 * name: nome
 * required: true
 * schema:
 * type: string
 * description: Nome ou parte do nome do livro a ser buscado.
 * responses:
 * 200:
 * description: Lista de livros encontrada.
 * content:
 * application/json:
 * schema:
 * type: array
 * items:
 * $ref: '#/components/schemas/Livro'
 * 404:
 * description: Nenhum livro encontrado com o nome fornecido.
 * 500:
 * description: Erro interno do servidor.
 */
router.get('/livros/nome/:nome', getLivroByNome);

/**
 * @swagger
 * /api/livros:
 * post:
 * summary: Cria um novo livro.
 * tags: [Livros]
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/Livro'
 * examples:
 * novoLivro:
 * value:
 * titulo: "O Hobbit"
 * autor: "J.R.R. Tolkien"
 * genero: "Fantasia"
 * preco: 35.50
 * estoque: 75
 * dataPublicacao: "1937-09-21"
 * responses:
 * 201:
 * description: Livro criado com sucesso.
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/Livro'
 * 400:
 * description: Dados inválidos para o livro.
 * 500:
 * description: Erro interno do servidor.
 */
router.post('/livros', createLivro);

/**
 * @swagger
 * /api/livros/{id}:
 * put:
 * summary: Atualiza um livro existente pelo ID.
 * tags: [Livros]
 * parameters:
 * - in: path
 * name: id
 * required: true
 * schema:
 * type: string
 * description: ID único do livro a ser atualizado.
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/Livro'
 * examples:
 * atualizarLivro:
 * value:
 * titulo: "O Hobbit - Edição Ilustrada"
 * autor: "J.R.R. Tolkien"
 * genero: "Fantasia"
 * preco: 60.00
 * estoque: 50
 * dataPublicacao: "1937-09-21"
 * responses:
 * 200:
 * description: Livro atualizado com sucesso.
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/Livro'
 * 400:
 * description: Dados inválidos para a atualização.
 * 404:
 * description: Livro não encontrado.
 * 500:
 * description: Erro interno do servidor.
 */
router.put('/livros/:id', updateLivro);

/**
 * @swagger
 * /api/livros/{id}:
 * delete:
 * summary: Exclui um livro pelo ID.
 * tags: [Livros]
 * parameters:
 * - in: path
 * name: id
 * required: true
 * schema:
 * type: string
 * description: ID único do livro a ser excluído.
 * responses:
 * 204:
 * description: Livro excluído com sucesso (Nenhum Conteúdo).
 * 404:
 * description: Livro não encontrado.
 * 500:
 * description: Erro interno do servidor.
 */
router.delete('/livros/:id', deleteLivro);

export default router;
