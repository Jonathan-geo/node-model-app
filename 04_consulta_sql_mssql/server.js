var express = require('express');
var bodyParser = require('body-parser');

/*----------INSTANCIANDO O APP----------*/
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

/*----------FUNCINOU AZURE _ _ MSSQL-----------*/
const connStr = "ver conexão de string no readme.md";
const sql = require("mssql");

//fazendo a conexão global
sql.connect(connStr)
   .then(conn => global.conn = conn)
   .catch(err => console.log(err));


//definindo as rotas
const router = express.Router();
app.use('/', router);



/*----------ROTAS-----------*/
//Teste
router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));

//Select all
router.get('/listagem', (req, res) =>{
    execSQLQuery('SELECT * FROM FormEntrada_CadastroOS', res);
})

//Busca por OS
router.get('/listagem/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id){
        //filter = ' WHERE OS=' + parseInt(req.params.id);
        filter = ' WHERE OS=' + req.params.id;
        execSQLQuery('SELECT * FROM FormEntrada_CadastroOS' + filter, res);
    }
});

//Home page com engine ejs
router.get('/home', function (req, res){
    res.format({
        html: function(){
            res.render('home');
        }
    });
});


/*----------FUNÇÂO DE PARSE PARA JSON-----------*/
function execSQLQuery(sqlQry, res){
    global.conn.request()
               .query(sqlQry)
               .then(result => res.json(result.recordset))
               .catch(err => res.json(err));
}



/*   FUNCINOU tedious _ _ MSSQL    */

// var Connection = require('tedious').Connection;  
// var config = { 
    
//            VER MODELO DE CONECÇÂO NO README.md 

//     },
//     options: {
//         // If you are on Microsoft Azure, you need encryption:
//         encrypt: true,
//         enableArithAbort: true,
//         database: 'proj_consult'  //update me
//     }
// };  
// var connection = new Connection(config);


// connection.on('connect', function(err) {  
//     // If no error, then good to proceed.
//     console.log("Connected");  
// }); 


var PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
    console.log('Server listening on ' + PORT);
});
