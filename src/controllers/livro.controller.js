import Livro from '../models/Livro.js';

// Obter todos os livros
export const getAllLivros = async (req, res) => {
  try {
    const livros = await Livro.find();
    res.status(200).json(livros);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obter livro por ID
export const getLivroById = async (req, res) => {
  try {
    const livro = await Livro.findById(req.params.id);
    if (!livro) return res.status(404).json({ message: "Livro não encontrado." });
    res.status(200).json(livro);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obter livro por nome (busca parcial)
export const getLivroByNome = async (req, res) => {
  try {
    const nome = req.params.nome;
    const livros = await Livro.find({ titulo: { $regex: nome, $options: 'i' } }); // Busca parcial, case-insensitive
    if (livros.length === 0) return res.status(404).json({ message: "Nenhum livro encontrado com o nome fornecido." });
    res.status(200).json(livros);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Criar um novo livro
export const createLivro = async (req, res) => {
  const { titulo, autor, genero, preco, estoque, dataPublicacao } = req.body;
  const novoLivro = new Livro({ titulo, autor, genero, preco, estoque, dataPublicacao });

  try {
    const livroSalvo = await novoLivro.save();
    res.status(201).json(livroSalvo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Atualizar livro
export const updateLivro = async (req, res) => {
  try {
    const { id } = req.params;
    const livroAtualizado = await Livro.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    if (!livroAtualizado) return res.status(404).json({ message: "Livro não encontrado." });
    res.status(200).json(livroAtualizado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Deletar livro
export const deleteLivro = async (req, res) => {
  try {
    const { id } = req.params;
    const livroDeletado = await Livro.findByIdAndDelete(id);
    if (!livroDeletado) return res.status(404).json({ message: "Livro não encontrado." });
    res.status(204).send(); // No Content
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};