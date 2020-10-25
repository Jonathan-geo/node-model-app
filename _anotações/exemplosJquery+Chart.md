
TABELA DE CORES RGB
https://celke.com.br/artigo/tabela-de-cores-html-nome-hexadecimal-rgb

GRAFICOS DE EXEMPLO
https://tobiasahlin.com/blog/chartjs-charts-to-get-you-started/

https://www.chartjs.org/


REST API COM NODE
https://imasters.com.br/back-end/rest-api-com-node-js-back-end-e-front-end


------------------------------------script.js----------------------------------


$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: '/listagem',
        contentType: 'application/json',
        success: function(response){
            //"Andar" pelo array 
            //console.log(response[0].OS);
            //console.log(response[0]["Grupo Empresarial"]);
            //console.log(response[0]["Grupo Empresarial"]);


            var grupoDistict = [...new Set(response.map(item => item["Grupo Empresarial"]))];
            
            //array.map(item => item.age)
            //    .filter((value, index, self) => self.indexOf(value) === index)

            // var distin = [];
            // response.forEach(function(product) {
            //     console.log(product.OS);
            // });

            var grupoList = $('#grupo');
            grupoList.html('');
            grupoDistict.forEach(function(product) {
                grupoList.append('<option value='+product+'>'+product+'</option>');
            });


            $('#grupo').change(function(){
                var selectede = $("#grupo").val();
                
                console.log(selectede);

                var clienteList = $('#cliente');
                clienteList.html('');

                var productClienteDistinct = [];

                response.forEach(function(productCliente) {
                    //console.log(productCliente.ds_Cliente);
                    if(productCliente["Grupo Empresarial"] === selectede){
                        //console.log(productCliente.ds_Cliente);
                        productClienteDistinct = productCliente.ds_Cliente;
                    }
                });

                //console.log(productClienteDistinct);

                var grupoDistict = [...new Set(response.map(item => productClienteDistinct))];

                grupoDistict.forEach(function(product) {
                    clienteList.append('<option value='+product+'>'+product+'</option>');
                });
            
                //$('#tcliente').trigger('change')
            });
  
        }
    });


    

//-----------------------------------------------------------------------------------
$('table').on('click', '.update-button', function(){
    var rowEl = $(this).closest('tr');
    var id = rowEl.find('.id').text();
    var newName = rowEl.find('.name').val();

    $.ajax({
        url: '/products/' + id,
        method: 'PUT',
        contentType: 'application/json',
        data: JSON.stringify({newName:newName}),
        success: function(response){
            console.log(response);
            $('#get-button').click();
        }
    });
});
//-------------------------------------------------------------------------------------














});



/*


          $.each( data, function( key, val ) {
                $.each(val, function(make, value){
                    console.log(make, value)
                    var option = '<option value='+make+'>'+make+'</option>';
                    $(option).appendTo("#marcas_list");
                });
            });






            var tbodyEl = $('tbody');
            tbodyEl.html('');
            response.products.forEach(function(product) {
                tbodyEl.append('\
                    <tr>\
                        <td class="id">' + product.id + '</td>\
                        <td><input type="text" class="name" value="' + product.name + '"></td>\
                        <td>\
                            <button class="update-button">UPDATE/PUT</button>\
                            <button class="delete-button">DELETE</button>\
                        </td>\
                    </tr>\
                ');
            });
        }

    }); //ajax
}); //#get-button


});
*/





-------------------------------------FOR-------------------------------------
for (var i = 0; i < 9; i++) {
   console.log(i);
   // more statements
}

console.log(totn_string.length);

var numbers = [1, 2, 3, 4, 5];

for (var i = 0; i < numbers.length; i++) {
  numbers[i] *= 2;
}
// numbers is now [2, 4, 6, 8, 10]


------------------------------------------------------------------------------------
            //-----------JS---------------------------
        // var select = document.getElementById('grupo');
        // var idClient = select.options[select.selectedIndex].value;
            //----------------------JQ
        //var idClient = $('#grupo').val();
        // console.log(idClient);


            //-----------JS---------------------------
        // var selecionaTexto = document.getElementById('grupo');
        // var idClient = selecionaTexto.options[selecionaTexto.selectedIndex].idClient;
        // console.log(idClient);
            //----------------------JQ
        // var idClient = $('#grupo: selected').text();
        // console.log(idClient);

            //----------------------JQ
        // $('#selectOption').change(function() {
        //     var option = $('#selectOption').find(":selected").text();
        //     console.log(option);
        // });

            //-----------JS-----CLASS----------------------
        // var select = document.querySelector('.myclass');
        // var option = select.children[select.selectedIndex];
        // var texto = option.textContent;

        // console.log(texto);


                    //-----------JS-----ID----------------------
        // var select = document.querySelector('#grupo');
        // var option = select.children[select.selectedIndex];
        // var texto = option.textContent;

        // console.log(texto);




---------------------------------------------------------server-----------------------------------------------------------



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


------------------------------Routes----------------------------------------------------------------
const express = require('express');
const routes = express.Router();

//const QueryController = require('../controllers/QueryController');


//Rota TESTE
routes.get('/', (req, res) => res.json({ message: 'Funcionando!' }));

// TESTE
routes.get('/teste', (req, res) => {
    return res.json({Hello: 'World'});
});


/*
routes.get('/listagem', (req, res) =>{
    execSQLQuery('SELECT * FROM FormEntrada_CadastroOS', res);
})
*/
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







/*

//Rota para inserção de dados
routes.post('/grupos/post', GrupoController.store);

*/
//routes.get('/query', QueryController.index);





//const Sequelize = require('sequelize');
//const dbConfig  =  require('../config/databaseConfig');
// Criando conexão com a base
//const connection = new Sequelize(dbConfig);






module.exports = routes;



--------------------------------------graficos------------------------------------------
$(document).ready(function(){

    $.ajax({
        type: "GET",
        url: 'https://covid19-brazil-api.now.sh/api/report/v1',
        contentType: 'application/json',
        success: function(response){
            //console.log(response.data[0]);
            //console.log(response.data[0].uf);
            // console.log(response.data[0].state);
            // console.log(response.data[0].cases);
            // console.log(response.data[0].deaths);
            // console.log(response.data[0].suspects);
            // console.log(response.data[0].refuses);
            // console.log(response.data[0].datetime);
            var estadoArray = [];
            var mortesArray = [];
            var casosArray = [];
            var duplaArray = [];
            for (var i = 0; i<response.data.length; i++){
                //estadoArray.push(response.data[i].state);
                //mortesArray.push(response.data[i].deaths);
                duplaArray.push([response.data[i].state, response.data[i].deaths, response.data[i].cases] );
            }

            duplaArray.sort(function(a, b){
                return b[1] - a[1]
            });


            for (var i = 0; i<duplaArray.length; i++){
                estadoArray.push(duplaArray[i][0]);
                mortesArray.push(duplaArray[i][1]);
                casosArray.push(duplaArray[i][2]);
            }
            //console.log(duplaArray);
            // console.log(duplaArray[0]);
            // console.log(duplaArray[0][0]);
            // console.log(duplaArray[1][0]);
            // console.log(duplaArray[1][1]);

            grafico(estadoArray, mortesArray, casosArray);
        }
    });
    

    function grafico(estado, mortes, casos){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'bar',

            data: {
                labels: estado,
                datasets: [{ 
                    data: casos,
                    label: "Casos notificados",
                    borderColor: "#3e95cd",
                    backgroundColor: 'rgb(255, 99, 132)',
                    fill: false
                  }, { 
                    data: mortes,
                    label: "Mortes por covid",
                    borderColor: "#8e5ea2",
                    backgroundColor: 'rgb(0, 139, 139)',
                    fill: false
                }]
            },
        
            // The data for our dataset
            // data: {
            //     labels: estado,
            //     datasets: [{
            //         label: 'Mortes por covid',
            //         backgroundColor: 'rgb(255, 99, 132)',
            //         borderColor: 'rgb(255, 99, 132)',
            //         data: mortes
            //     }]
            // },
        
            // Configuration options go here
            options: {
                title: {
                  display: true,
                  text: 'World population per region (in millions)'
                }
            }
        });
    }



    // new Chart(document.getElementById("line-chart"), {
    //     type: 'bar',
    //     data: {
    //       labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
    //       datasets: [{ 
    //           data: [86,114,106,106,107,111,133,221,783,2478],
    //           label: "Africa",
    //           borderColor: "#3e95cd",
    //           fill: false
    //         }, { 
    //           data: [282,350,411,502,635,809,947,1402,3700,5267],
    //           label: "Asia",
    //           borderColor: "#8e5ea2",
    //           fill: false
    //         }, { 
    //           data: [168,170,178,190,203,276,408,547,675,734],
    //           label: "Europe",
    //           borderColor: "#3cba9f",
    //           fill: false
    //         }, { 
    //           data: [40,20,10,16,24,38,74,167,508,784],
    //           label: "Latin America",
    //           borderColor: "#e8c3b9",
    //           fill: false
    //         }, { 
    //           data: [6,3,2,2,7,26,82,172,312,433],
    //           label: "North America",
    //           borderColor: "#c45850",
    //           fill: false
    //         }
    //       ]
    //     },
    //     options: {
    //       title: {
    //         display: true,
    //         text: 'World population per region (in millions)'
    //       }
    //     }
    //   });
--------------------------------------------------------------------------------------




	function clearTable(_idTab, _linhaPersistente){
		var linhas = document.getElementById(_idTab).rows;
		var i = 0;
		for (i= linhas.length-1; i;=0; i--){
			//alert(linhas[i].innerHTML);
			if (i != (_linhaPersistente-1) ){
				document.getElementById(_idTab).deleteRow(i);
			}
		}
	}


body onload="clearTable('tabela1',4);";

		table id="tabela1";
		tr;td;Linha 1/td;/tr;
		tr;td;Linha 2/td;/tr;
		tr;td;Linha 3/td;/tr;
		tr;td;Linha 4/td;/tr;
		tr;td;Linha 5/td;/tr;						
	/table;
/body;
/html;




--------------------------------------------------------------------------------------------------------------------


$(document).ready(function(){
    $.ajax({
        url: 'https://mobileapps.saude.gov.br/esus-vepi/files/unAFkcaNDeXajurGB7LChj8SgQYS2ptm/2087f8dcda9874e34b9b92ddc566b674_Download_COVID19_20200427.csv',
        dataType: 'text',
        success: function(response){