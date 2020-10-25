const express = require('express');
const routes = require('./src/routes/index');
const bodyParser = require('body-parser');



// Cria a instancia do App
const app = express();

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//Rotas Principais
app.get('/home', (req, res) => {
    return res.sendFile(__dirname + '/src/views/home.html');
});


//Rotas de API
app.use(routes);


var PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
    console.log('Server listening on ' + PORT);
});