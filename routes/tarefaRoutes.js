const express = require('express');
const router = express.Router();
const Tarefa = require('../models/tarefa.js');


router.post("/add", async (req, res) => {
    await Tarefa.create(req.body)
    .then(() => {
        res.status(200).send("Tarefa adicionada com sucesso");
    }).catch((err) => {

        res.status(400).send("algo errado com a Tarefa");
        console.error(err);
        console.log(req.body)
    })

});


router.get('/', async (req, res) => {
    await Tarefa.find({}).then( (tarefa) => {
        res.send(tarefa);
    }).catch( (err) => {
        res.status(400).send("algo errado com a tarefa");
        console.log(err)
    })
});

router.get('/findByTitulo/:id', async (req, res) => {

    function verificaParam() {
        if (req.params.id.length == 24){

            Tarefa.find({_id : req.params.id}).then( (tarefas) => {
                res.send(tarefas);
             }).catch( (err) => {
                res.status(400).send("algo errado com a tarefa");
                console.log(err)
             })
        } else {
            res.status(400).send("id errado")
        }
    }


    await verificaParam()

});




router.put("/update/:id", async (req, res) => {
    
    // retorna true caso o obj esteja vazio
    function estaVazio(obj){
        return Object.keys(obj).length === 0
    }

    function insereInformacoes () {
        if (estaVazio( req.body)){
            res.status(400).send("faltam informações no corpo da requisição")

        } else {
            Tarefa.updateOne({_id : req.params.id}, req.body).then( () => {
                res.status(200).send("Tarefa atualizada com sucesso");
            }).catch( (err) => {
                res.status(400).send("algo errado ");
                console.log(err)
        
            })
        }
    }


    await insereInformacoes()


   

});

router.delete("/delete/:id", async (req, res) => {
    await Tarefa.deleteOne({_id : req.params.id}).then( ()=> {
        res.status(200).send("musica deletada com sucesso");
    }).catch( (err) => {
        res.status(400).send("algo errado com a musica");
        console.log(err)

    })

});


// exporta todas as rotas de uma vez
module.exports = router;