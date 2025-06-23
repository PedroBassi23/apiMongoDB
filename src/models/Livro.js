import mongoose from 'mongoose';

const LivroSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  genero: { type: String, required: true },
  preco: { type: Number, required: true },
  estoque: { type: Number, required: true, default: 0 },
  dataPublicacao: { type: Date, required: false }, // Opcional, mas útil
}, {
  timestamps: true // Adiciona campos createdAt e updatedAt automaticamente
});

const Livro = mongoose.model('Livro', LivroSchema);

export default Livro;