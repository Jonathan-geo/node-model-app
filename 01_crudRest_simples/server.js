var express = require('express');
var bodyParser = require('body-parser');
// Cria a instancia do App
var app = express();


app.use(express.static(__dirname));
app.use(bodyParser.json());



//SQL FAKE
var listProduct = [
    {
        id: 1,
        name: 'laptop'
        
    },
    {
        id: 2,
        name: 'microwave'
    }
];

var correntId = 2;




app.get('/products', function(req, res){
    res.send({products:listProduct});
});

app.post('/products', function(req, res){
    var productName = req.body.name;
    correntId++;
    
    listProduct.push({
        id: correntId,
        name: productName
    });
    res.send('Great! Successfully Create Product.');
});

app.put('/products/:id', function(req, res){
    var id = req.params.id;
    var newName = req.body.newName;

    var found = false;

    listProduct.forEach(function(product, index){
        if (!found && product.id === Number(id)){
            product.name = newName;
        }
    });

    res.send('Great! Successfuly updated product.');
});


app.delete('/products/:id', function(req, res){
    var id = req.params.id;
    var found = false;

    listProduct.forEach(function(products, index){
        if (!found && products.id === Number(id)){
            listProduct.splice(index, 1);
        }
    });

    res.send('Great! Successfuly deleted product.');

});



var PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
    console.log('Server listening on ' + PORT);
});