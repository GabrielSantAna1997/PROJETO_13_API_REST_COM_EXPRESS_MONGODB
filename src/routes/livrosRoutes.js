import express from 'express';
import LivrosController from "../controllers/livrosController.js"

const router = express.Router();

router  
    .get("/livros", LivrosController.listarLivros)
    .get("/livros/busca", LivrosController.listarLivroPorEditora)
    .get("/livros/:id", LivrosController.listarLivrosPorId)
    .post("/livros", LivrosController.cadastrarLivro)
    .put("/livros/:id", LivrosController.editarLivro)
    .delete("/livros/:id", LivrosController.deletarLivro)

export default router;