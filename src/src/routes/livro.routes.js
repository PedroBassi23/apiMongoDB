import { Router } from 'express';
import { createLivro, getLivros, getLivroById, getLivroByNome, updateLivro, deleteLivro } from '../controllers/livro.controller.js';
const router = Router();

// A documentação do Swagger vem aqui. É grande, então vou simplificar a estrutura para o guia.
// O código completo na resposta anterior tem a documentação detalhada.

/**
 * @swagger
 * components:
 * schemas:
 * Livro:
 * type: object
 * required: [nome, descricao, cor, peso, tipo, preco]
 * properties:
 * id: { type: string }
 * nome: { type: string }
 * descricao: { type: string }
 * cor: { type: string }
 * peso: { type: number }
 * tipo: { type: string }
 * preco: { type: number }
 * dataCadastro: { type: string, format: date-time }
 */

/**
 * @swagger
 * tags:
 * name: Livros
 * description: Gerenciamento do catálogo de livros
 */

/**
 * @swagger
 * /livros:
 * get:
 * summary: Lista todos os livros
 * tags: [Livros]
 * responses:
 * 200: { description: "Lista de livros" }
 */
router.get('/livros', getLivros);

/**
 * @swagger
 * /livros:
 * post:
 * summary: Cadastra um novo livro
 * tags: [Livros]
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema: { $ref: '#/components/schemas/Livro' }
 * responses:
 * 201: { description: "Livro criado" }
 */
router.post('/livros', createLivro);

/**
 * @swagger
 * /livros/{id}:
 * get:
 * summary: Busca um livro pelo ID
 * tags: [Livros]
 * parameters: [{ in: path, name: id, required: true, schema: { type: string } }]
 * responses:
 * 200: { description: "Detalhes do livro" }
 * 404: { description: "Livro não encontrado" }
 */
router.get('/livros/:id', getLivroById);

/**
 * @swagger
 * /livros/nome/{nome}:
 * get:
 * summary: Busca um livro pelo nome
 * tags: [Livros]
 * parameters: [{ in: path, name: nome, required: true, schema: { type: string } }]
 * responses:
 * 200: { description: "Detalhes do livro" }
 * 404: { description: "Livro não encontrado" }
 */
router.get('/livros/nome/:nome', getLivroByNome);

/**
 * @swagger
 * /livros/{id}:
 * put:
 * summary: Atualiza um livro pelo ID
 * tags: [Livros]
 * parameters: [{ in: path, name: id, required: true, schema: { type: string } }]
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema: { $ref: '#/components/schemas/Livro' }
 * responses:
 * 200: { description: "Livro atualizado" }
 */
router.put('/livros/:id', updateLivro);

/**
 * @swagger
 * /livros/{id}:
 * delete:
 * summary: Deleta um livro pelo ID
 * tags: [Livros]
 * parameters: [{ in: path, name: id, required: true, schema: { type: string } }]
 * responses:
 * 200: { description: "Livro deletado" }
 */
router.delete('/livros/:id', deleteLivro);

export default router;
