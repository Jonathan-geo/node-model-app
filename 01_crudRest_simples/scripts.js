$(function(){
    //-----------------------READ-------------------
    $('#get-button').on('click', function(){
        $.ajax({
            type: "GET",
            url: '/products',
            contentType: 'application/json',
            success: function(response){
                //"Andar" pelo array 
                //console.log(response.products[1].name);

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

     //-----------------------CREATE-------------------
    $('#create-form').on('submit', function(event){
        event.preventDefault();

        var createInput = $('#create-input');

        if (createInput.val() == ''){
            $('#create-required').text('Insira um nome.');
        }else{
            $.ajax({
                url: '/products',
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({name: createInput.val()}),
                success: function(response){
                    console.log(response);
                    createInput.val('');
                    $('#get-button').click();
                }
            });
        }
    });//#create-form

    //-----------------------UPDATE-------------------
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
    });//table - .update-button


    //-----------------------DELETE-------------------
    $('table').on('click', '.delete-button', function(){
        var rowEl = $(this).closest('tr');
        var id = rowEl.find('.id').text();
        
        $.ajax({
            url: '/products/' + id,
            method: 'DELETE',
            contentType: 'application/json',
            success: function(response){
                console.log(response);
                $('#get-button').click();
            }
        });
    });

});//scripts_func