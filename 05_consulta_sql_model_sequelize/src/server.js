const express = require('express');
const routes = require('./routes/index');
const path = require('path');
// const ejs = require('ejs')

//Chama/Inicia a conexão com o DB
require('./database/index')

// Cria a instancia do App
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);

//app.set('views', path.join(__dirname, 'views'));


//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(routes);







app.listen(3000);