import livros from "../models/Livro.js";

class LivroController {

    static listarLivros = (req,res) => {
        livros.find()
            .populate('autor')
            .exec((err, livros) => {
            res.status(200).json(livros);
        })
    };

    static listarLivrosPorId = (req,res) => {
        const {id} = req.params;
        livros.findById(id)
            .populate('autor', 'nome')
            .exec((err,livros) => {
            if(err){
                res.status(500).send({message: "ID NÃO ENCONTRADO"});
            }else{
                res.status(200).json(livros);
            }
        });   
    };

    static listarLivroPorEditora = (req,res) => {
        const editora = req.query.editora;
        livros.find({'editora': editora}, {}, (err,livros) =>{
            if(err){
                res.status(500).send({message: "EDITORAS NÃO ENCONTRADA"});
            }else{
                res.status(200).json(livros);
            }
        })
    };

    static cadastrarLivro = (req,res) => {
        let livro = new livros(req.body);

        livro.save((err) => {
            if(err) {
                res.status(500).send({message: err});
            }else{
                res.status(201).send(livro.toJSON());
            }
        });
    };

    static editarLivro = (req,res) => {
        const {id} = req.params;

        livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(err){
                res.status(500).send({message: err});
            }else{
                res.status(201).send({message: 'Livro atualizado com sucesso'});
            }
        })
    };

    static deletarLivro = (req,res) => {
        const {id} = req.params;
        livros.findByIdAndDelete(id, (err,livros) =>{
            if(err){
                res.status(500).send({message: "ID NÃO ENCONTRADO"});
            }else{
                res.status(201).json({message: `Livro apagado com sucesso`});
            }
        })
    };

}

export default LivroController