import Livro from '../models/livro.model.js';

export const createLivro = async (req, res) => {
    try {
        const novoLivro = await new Livro(req.body).save();
        res.status(201).json(novoLivro);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getLivros = async (req, res) => {
    try {
        const livros = await Livro.find();
        res.status(200).json(livros);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getLivroById = async (req, res) => {
    try {
        const livro = await Livro.findById(req.params.id);
        if (!livro) return res.status(404).json({ message: "Livro não encontrado" });
        res.status(200).json(livro);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getLivroByNome = async (req, res) => {
    try {
        const livro = await Livro.findOne({ nome: { $regex: new RegExp(req.params.nome, "i") } });
        if (!livro) return res.status(404).json({ message: "Livro não encontrado" });
        res.status(200).json(livro);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateLivro = async (req, res) => {
    try {
        const livro = await Livro.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!livro) return res.status(404).json({ message: "Livro não encontrado" });
        res.status(200).json(livro);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteLivro = async (req, res) => {
    try {
        const livro = await Livro.findByIdAndDelete(req.params.id);
        if (!livro) return res.status(404).json({ message: "Livro não encontrado" });
        res.status(200).json({ message: "Livro deletado com sucesso" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
