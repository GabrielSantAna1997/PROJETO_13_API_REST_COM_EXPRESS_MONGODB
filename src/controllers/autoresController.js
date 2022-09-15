import autores from "../models/Autor.js";

class AutorController {

    static listarAutores = (req,res) => {
        autores.find((err, autores) => {
            res.status(200).json(autores);
        })
    };

    static listarAutorPorId = (req,res) => {
        const {id} = req.params;
        autores.findById(id, (err,autores) =>{
            if(err){
                res.status(500).send({message: "AUTOR NÃO ENCONTRADO"});
            }else{
                res.status(200).json(autores);
            }
        })
    };

    static cadastrarAutor = (req,res) => {
        let autor = new autores(req.body);

        autor.save((err) => {
            if(err) {
                res.status(500).send({message: err});
            }else{
                res.status(201).send(autor.toJSON());
            }
        });
    };

    static editarAutor = (req,res) => {
        const {id} = req.params;

        autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(err){
                res.status(500).send({message: err});
            }else{
                res.status(201).send({message: 'Autor cadastrado com sucesso'});
            }
        })
    };

    static deletarAutor = (req,res) => {
        const {id} = req.params;
        autores.findByIdAndDelete(id, (err,autores) =>{
            if(err){
                res.status(500).send({message: "AUTOR NÃO ENCONTRADO"});
            }else{
                res.status(201).json({message: `Autor apagado com sucesso`});
            }
        })
    };


}

export default AutorController