                // Arquivo que irá lidar com requisições e devolve respostas.
//const path = require('path')

const Grupo = require('../models/Grupo');

module.exports = {

    /* // Inserção de dados
    async store(req, res) {
        const { nome, email  } = req.body;

        const grupo = await Grupo.create({nome: nome, email: email});

        return res.json(grupo);
    },
   

    async index(req, res) {
        const grupos = await Grupo.findAll();
            // .then(function(listando){
            // res.render('grupos.ejs', {fgrupo: listando}) 
            // })
        return res.json(grupos);
        
    },
 */

    async index(req, res) {
        await Grupo.findAll().then(function(grupos){
            res.render('grupos.ejs', {fgrupo: grupos}) 
        })
        
    },
};