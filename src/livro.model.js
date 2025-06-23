import mongoose from 'mongoose';

const LivroSchema = new mongoose.Schema({
    nome: { type: String, required: true, unique: true },
    descricao: { type: String, required: true },
    cor: { type: String, required: true, comment: "Cor da capa" },
    peso: { type: Number, required: true, comment: "Peso em gramas" },
    tipo: { type: String, required: true, comment: "Tipo de capa (ex: Comum, Dura)" },
    preco: { type: Number, required: true },
    dataCadastro: { type: Date, default: Date.now }
});

export default mongoose.model('Livro', LivroSchema);