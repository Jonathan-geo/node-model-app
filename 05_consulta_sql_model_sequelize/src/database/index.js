const Sequelize = require('sequelize');


// Importando as conf. do database
const dbConfig  =  require('../config/database');

// Importando o Model 
const Grupo = require('../models/Grupo');


// Criando conexão com a base
const connection = new Sequelize(dbConfig);

//Iniciando a conexão do Model Grupo
Grupo.init(connection);

module.exports = connection;