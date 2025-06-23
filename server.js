import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import livroRoutes from './src/routes/livro.routes.js';
import { swaggerDocs } from './swagger.config.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/api', livroRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Conectado ao MongoDB!"))
    .catch(err => console.error("Erro ao conectar:", err));

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});