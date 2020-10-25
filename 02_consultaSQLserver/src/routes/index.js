const express = require('express');
const routes = express.Router();


//Rota TESTE
routes.get('/', (req, res) => res.json({ message: 'Funcionando!' }));


routes.get('/listagem', (req, res) =>{
    global.conn.request()
        .query('SELECT DISTINCT [Grupo Empresarial] FROM FormEntrada_CadastroOS')
        .then(result => res.json(result.recordset))
        .catch(err => res.json(err));
})



routes.get('/listagem/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id){
        //var stri = 'DU PONT DO BRASIL';
        //filter = ' WHERE OS=' + parseInt(req.params.id);     OK - PARA INT
        //filter = " WHERE [Grupo Empresarial]='DU PONT DO BRASIL'";      OK
        filter = " WHERE [Grupo Empresarial]='"+ req.params.id +"'";
        execSQLQuery("SELECT DISTINCT ds_Cliente FROM FormEntrada_CadastroOS" + filter, res);
    }
});



const sqlQry = require('../config/databaseConfig');

function execSQLQuery(sqlQry, res){
    global.conn.request()
               .query(sqlQry)
               .then(result => res.json(result.recordset))
               .catch(err => res.json(err));
}


module.exports = routes;