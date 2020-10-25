const express = require('express');
const routes = express.Router();

const GrupoController = require('../controllers/GrupoController');

//Teste
routes.get('/teste', (req, res) => {
    res.send({express :'Hello'});
});

routes.get('/grupos', GrupoController.index);

/*
//Rota para inserção de dados
routes.post('/grupos/post', GrupoController.store);
*/




module.exports = routes;