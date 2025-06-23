import { Router } from 'express';
import { createLivro, getLivros, getLivroById, getLivroByNome, updateLivro, deleteLivro } from '../controllers/livro.controller.js';
const router = Router();

/**
 * @swagger
 * components:
 * schemas:
 * Livro:
 * type: object
 * required: [nome, descricao, cor, peso, tipo, preco]
 * properties:
 * id:
 * type: string
 * description: O ID gerado automaticamente do livro (UUID ou ObjectId)
 * readOnly: true
 * nome:
 * type: string
 * description: O nome do livro
 * descricao:
 * type: string
 * description: Uma breve descrição do livro
 * cor:
 * type: string
 * description: A cor predominante da capa do livro
 * peso:
 * type: number
 * format: float
 * description: O peso do livro em gramas
 * tipo:
 * type: string
 * description: O tipo ou gênero do livro (ex: Ficção, Aventura, Didático)
 * preco:
 * type: number
 * format: float
 * description: O preço do livro
 * dataCadastro:
 * type: string
 * format: date-time
 * description: A data de cadastro do livro
 * readOnly: true
 */

/**
 * @swagger
 * tags:
 * name: Livros
 * description: Gerenciamento do catálogo de livros
 */

/**
 * @swagger
 * /api/livros:
 * get:
 * summary: Lista todos os livros
 * tags: [Livros]
 * responses:
 * 200:
 * description: Lista de livros retornada com sucesso
 * content:
 * application/json:
 * schema:
 * type: array
 * items:
 * $ref: '#/components/schemas/Livro'
 * 500:
 * description: Erro interno do servidor
 */
router.get('/livros', getLivros);

/**
 * @swagger
 * /api/livros:
 * post:
 * summary: Cadastra um novo livro
 * tags: [Livros]
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/Livro'
 * responses:
 * 201:
 * description: Livro criado com sucesso
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/Livro'
 * 400:
 * description: Dados inválidos
 * 500:
 * description: Erro interno do servidor
 */
router.post('/livros', createLivro);

/**
 * @swagger
 * /api/livros/{id}:
 * get:
 * summary: Busca um livro pelo ID
 * tags: [Livros]
 * parameters:
 * - in: path
 * name: id
 * schema:
 * type: string
 * required: true
 * description: O ID do livro
 * responses:
 * 200:
 * description: Detalhes do livro retornados com sucesso
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/Livro'
 * 404:
 * description: Livro não encontrado
 * 500:
 * description: Erro interno do servidor
 */
router.get('/livros/:id', getLivroById);

/**
 * @swagger
 * /api/livros/nome/{nome}:
 * get:
 * summary: Busca um livro pelo nome
 * tags: [Livros]
 * parameters:
 * - in: path
 * name: nome
 * schema:
 * type: string
 * required: true
 * description: O nome do livro a ser buscado
 * responses:
 * 200:
 * description: Detalhes do livro retornados com sucesso
 * content:
 * application/json:
 * schema:
 * type: array
 * items:
 * $ref: '#/components/schemas/Livro'
 * 404:
 * description: Livro não encontrado
 * 500:
 * description: Erro interno do servidor
 */
router.get('/livros/nome/:nome', getLivroByNome);

/**
 * @swagger
 * /api/livros/{id}:
 * put:
 * summary: Atualiza um livro pelo ID
 * tags: [Livros]
 * parameters:
 * - in: path
 * name: id
 * schema:
 * type: string
 * required: true
 * description: O ID do livro a ser atualizado
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/Livro'
 * responses:
 * 200:
 * description: Livro atualizado com sucesso
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/Livro'
 * 400:
 * description: Dados inválidos
 * 404:
 * description: Livro não encontrado
 * 500:
 * description: Erro interno do servidor
 */
router.put('/livros/:id', updateLivro);

/**
 * @swagger
 * /api/livros/{id}:
 * delete:
 * summary: Deleta um livro pelo ID
 * tags: [Livros]
 * parameters:
 * - in: path
 * name: id
 * schema:
 * type: string
 * required: true
 * description: O ID do livro a ser deletado
 * responses:
 * 200:
 * description: Livro deletado com sucesso
 * 404:
 * description: Livro não encontrado
 * 500:
 * description: Erro interno do servidor
 */
router.delete('/livros/:id', deleteLivro);

export default router;
