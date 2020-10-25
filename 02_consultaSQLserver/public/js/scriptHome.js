
$(document).ready(function(){

    $.ajax({
        type: "GET",
        url: '/listagem',
        contentType: 'application/json',
        success: function(response){
            //"Andar" pelo array
            //console.log(response[0]["Grupo Empresarial"]);
            //console.log(response[0].OS);
            //console.log(response[0]["Grupo Empresarial"]);
            //console.log(response[0]["Grupo Empresarial"]);

            //var grupoDistict = [...new Set(response.map(item => item["Grupo Empresarial"]))];
            var grupoList = $('#grupo');

            // response.recordset.forEach(function(product) {
            //     grupoList.append('<option value='+product+'>'+product+'</option>');
            // });

            for (var i = 0; i<response.length; i++){
                grupoList.append('<option value='+response[i]["Grupo Empresarial"]+'>'+response[i]["Grupo Empresarial"]+'</option>');
            }
        }
    });


    $('#grupo').change(function(){

            //-----------JS-----ID----------------------
        var select = document.querySelector('#grupo');
        var option = select.children[select.selectedIndex];
        var idClient = option.textContent;

        //console.log(idClient);

        $.ajax({
            type: "GET",
            url: '/listagem/' + idClient,
            contentType: 'application/json',
            success: function(response){
                console.log(response);
                var clienteList = $('#cliente');
                clienteList.html('');
                response.forEach(function(product) {
                    clienteList.append('<option value='+product.ds_Cliente+'>'+product.ds_Cliente+'</option>');
                });
            }
        });



        //$('#tcliente').trigger('change')
    });
    
















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