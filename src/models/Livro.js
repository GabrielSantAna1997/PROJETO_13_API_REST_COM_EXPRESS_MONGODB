import mongoose from "mongoose";

//schema é O esquema define as propriedades do documento através de um objeto, onde o nome da chave corresponde ao nome da propriedade na coleção.
const livroSchema = new mongoose.Schema(
    {
        id: {type: String},
        titulo: {type: String, required: true},
        autor: {type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: true},
        editora: {type: String, required: true},
        numeroPaginas: {type: Number}
    }
);

//No nosso modelo de livros o autor é a referencia de autor e é um campo obrigatorio

const livros = mongoose.model('livros', livroSchema);

export default livros;